"use client";

import { useState } from "react";
import { YTVideo, CATEGORY_ORDER } from "@/lib/youtube";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";
import AnimateIn from "./ui/AnimateIn";

interface Props { videos: YTVideo[] }

const PREVIEW = 6;

export default function WorkSection({ videos }: Props) {
  const [playing, setPlaying]   = useState<YTVideo | null>(null);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const cats = CATEGORY_ORDER.filter((c) => videos.some((v) => v.category === c));

  return (
    <section id="work" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <AnimateIn>
          <div className="mb-20">
            <p className="text-[10px] tracking-[0.35em] uppercase text-neutral-400 mb-3">Selected Work</p>
            <h2 className="text-5xl md:text-6xl font-extralight text-neutral-900 tracking-tight">ผลงาน</h2>
          </div>
        </AnimateIn>

        <div className="flex flex-col gap-28">
          {cats.map((category, ci) => {
            const catVids   = videos.filter((v) => v.category === category);
            const isOpen    = expanded[category];
            const shown     = isOpen ? catVids : catVids.slice(0, PREVIEW);
            const hasMore   = catVids.length > PREVIEW;
            const [featured, ...rest] = shown;

            return (
              <div key={category}>
                {/* Header */}
                <AnimateIn delay={ci * 40}>
                  <div className="flex items-end justify-between mb-8 pb-5 border-b border-neutral-100">
                    <div className="flex items-end gap-5">
                      <h3 className="text-3xl font-extralight text-neutral-900">{category}</h3>
                      <span className="text-xs text-neutral-400 tracking-widest uppercase mb-1">
                        {catVids.length} clips
                      </span>
                    </div>
                    <div className="h-px bg-neutral-200 flex-1 mx-8 mb-1.5" />
                  </div>
                </AnimateIn>

                {/* Featured first + rest grid */}
                {featured && (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
                    {/* Featured — spans 2 cols */}
                    <AnimateIn className="lg:col-span-2" delay={80}>
                      <VideoCard video={featured} onPlay={setPlaying} featured />
                    </AnimateIn>

                    {/* Side stack — up to 2 */}
                    <div className="flex flex-col gap-5">
                      {rest.slice(0, 2).map((v, i) => (
                        <AnimateIn key={v.id} delay={120 + i * 60}>
                          <VideoCard video={v} onPlay={setPlaying} />
                        </AnimateIn>
                      ))}
                    </div>
                  </div>
                )}

                {/* Remaining cards */}
                {rest.length > 2 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {rest.slice(2).map((v, i) => (
                      <AnimateIn key={v.id} delay={i * 50}>
                        <VideoCard video={v} onPlay={setPlaying} />
                      </AnimateIn>
                    ))}
                  </div>
                )}

                {/* Expand */}
                {hasMore && (
                  <AnimateIn delay={100}>
                    <div className="mt-10 flex justify-center">
                      <button
                        onClick={() => setExpanded(p => ({ ...p, [category]: !p[category] }))}
                        className="group inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-neutral-400 border border-neutral-200 px-10 py-3.5 hover:border-neutral-900 hover:text-neutral-900 transition-all duration-300"
                      >
                        {isOpen
                          ? "ย่อ"
                          : `ดูทั้งหมด ${catVids.length} clips`}
                        <span className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>↓</span>
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
        <VideoModal videoId={playing.id} title={playing.title} onClose={() => setPlaying(null)} />
      )}
    </section>
  );
}
