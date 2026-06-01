"use client";

import { useState } from "react";
import { YTVideo, CATEGORY_ORDER } from "@/lib/youtube";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";

interface Props {
  videos: YTVideo[];
}

export default function WorkSection({ videos }: Props) {
  const [activeCategory, setActiveCategory] = useState("ทั้งหมด");
  const [playing, setPlaying] = useState<YTVideo | null>(null);

  const availableCategories = CATEGORY_ORDER.filter((c) => videos.some((v) => v.category === c));
  const categories = ["ทั้งหมด", ...availableCategories];

  const filtered =
    activeCategory === "ทั้งหมด"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  return (
    <section id="work" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-2">Selected Work</p>
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900">ผลงาน</h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs tracking-wide px-4 py-2 border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-neutral-900 text-white border-neutral-900"
                    : "bg-transparent text-neutral-500 border-neutral-200 hover:border-neutral-400 hover:text-neutral-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {filtered.map((video) => (
            <VideoCard key={video.id} video={video} onPlay={setPlaying} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-neutral-400 py-20">ไม่มีวิดีโอในหมวดนี้</p>
        )}
      </div>

      {playing && (
        <VideoModal
          videoId={playing.id}
          title={playing.title}
          onClose={() => setPlaying(null)}
        />
      )}
    </section>
  );
}
