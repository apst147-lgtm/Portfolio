"use client";

import { useState } from "react";
import { YTVideo, CATEGORY_ORDER } from "@/lib/youtube";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";
import AnimateIn from "./ui/AnimateIn";

interface Props {
  videos: YTVideo[];
}

const PREVIEW_COUNT = 6;

export default function WorkSection({ videos }: Props) {
  const [playing, setPlaying] = useState<YTVideo | null>(null);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const availableCategories = CATEGORY_ORDER.filter((c) =>
    videos.some((v) => v.category === c)
  );

  const toggleExpand = (cat: string) =>
    setExpanded((prev) => ({ ...prev, [cat]: !prev[cat] }));

  return (
    <section id="work" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <AnimateIn>
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-2">Selected Work</p>
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-20">ผลงาน</h2>
        </AnimateIn>

        <div className="flex flex-col gap-24">
          {availableCategories.map((category, catIdx) => {
            const catVideos = videos.filter((v) => v.category === category);
            const isExpanded = expanded[category];
            const shown = isExpanded ? catVideos : catVideos.slice(0, PREVIEW_COUNT);
            const hasMore = catVideos.length > PREVIEW_COUNT;

            return (
              <div key={category}>
                {/* Category header */}
                <AnimateIn delay={catIdx * 50}>
                  <div className="flex items-baseline justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-light text-neutral-900">{category}</h3>
                      <div className="mt-2 h-px bg-neutral-900 line-reveal w-12" />
                    </div>
                    <span className="text-xs text-neutral-400 tracking-widest uppercase">
                      {catVideos.length} clips
                    </span>
                  </div>
                </AnimateIn>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                  {shown.map((video, i) => (
                    <AnimateIn key={video.id} delay={i * 60}>
                      <VideoCard video={video} onPlay={setPlaying} />
                    </AnimateIn>
                  ))}
                </div>

                {/* Expand */}
                {hasMore && (
                  <AnimateIn delay={200}>
                    <div className="mt-10 text-center">
                      <button
                        onClick={() => toggleExpand(category)}
                        className="group inline-flex items-center gap-3 text-xs tracking-widest uppercase border border-neutral-200 text-neutral-500 px-10 py-3 hover:border-neutral-900 hover:text-neutral-900 transition-all duration-300"
                      >
                        {isExpanded ? (
                          <>ย่อ<span className="group-hover:-translate-y-0.5 transition-transform inline-block">↑</span></>
                        ) : (
                          <>ดูทั้งหมด {catVideos.length} clips<span className="group-hover:translate-y-0.5 transition-transform inline-block">↓</span></>
                        )}
                      </button>
                    </div>
                  </AnimateIn>
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
