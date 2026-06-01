"use client";

import { useState } from "react";
import { YTVideo, CATEGORY_ORDER } from "@/lib/youtube";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";

interface Props {
  videos: YTVideo[];
}

const PREVIEW_COUNT = 3;

export default function WorkSection({ videos }: Props) {
  const [playing, setPlaying] = useState<YTVideo | null>(null);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const availableCategories = CATEGORY_ORDER.filter((c) =>
    videos.some((v) => v.category === c)
  );

  const toggleExpand = (cat: string) =>
    setExpanded((prev) => ({ ...prev, [cat]: !prev[cat] }));

  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-2">Selected Work</p>
        <h2 className="text-3xl md:text-4xl font-light text-neutral-900 mb-16">ผลงาน</h2>

        <div className="flex flex-col gap-20">
          {availableCategories.map((category) => {
            const catVideos = videos.filter((v) => v.category === category);
            const isExpanded = expanded[category];
            const shown = isExpanded ? catVideos : catVideos.slice(0, PREVIEW_COUNT);
            const hasMore = catVideos.length > PREVIEW_COUNT;

            return (
              <div key={category}>
                {/* Category header */}
                <div className="flex items-baseline justify-between mb-6 border-b border-neutral-100 pb-4">
                  <h3 className="text-lg font-light text-neutral-900 tracking-wide">
                    {category}
                  </h3>
                  <span className="text-xs text-neutral-400">
                    {catVideos.length} คลิป
                  </span>
                </div>

                {/* Grid — 3 per row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                  {shown.map((video) => (
                    <VideoCard key={video.id} video={video} onPlay={setPlaying} />
                  ))}
                </div>

                {/* Expand / Collapse */}
                {hasMore && (
                  <div className="mt-8 text-center">
                    <button
                      onClick={() => toggleExpand(category)}
                      className="text-xs tracking-widest uppercase border border-neutral-300 text-neutral-500 px-8 py-2.5 hover:border-neutral-900 hover:text-neutral-900 transition-all duration-200"
                    >
                      {isExpanded
                        ? "ย่อ"
                        : `ดูทั้งหมด ${catVideos.length} คลิป`}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
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
