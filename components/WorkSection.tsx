"use client";

import { useState } from "react";
import { YTVideo, CATEGORY_ORDER } from "@/lib/youtube";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";
import AnimateIn from "./ui/AnimateIn";

interface Props { videos: YTVideo[] }

const PREVIEW = 6;

export default function WorkSection({ videos }: Props) {
  const [playing, setPlaying] = useState<YTVideo | null>(null);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const cats = CATEGORY_ORDER.filter((c) => videos.some((v) => v.category === c));

  return (
    <section id="work" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateIn>
          <p className="text-[10px] tracking-[0.35em] uppercase text-neutral-400 mb-3">Selected Work</p>
          <h2 className="text-5xl md:text-6xl font-extralight text-neutral-900 tracking-tight mb-20">ผลงาน</h2>
        </AnimateIn>

        <div className="flex flex-col gap-28">
          {cats.map((category, ci) => {
            const catVids = videos.filter((v) => v.category === category);
            const isOpen = expanded[category];
            const shown = isOpen ? catVids : catVids.slice(0, PREVIEW);
            const hasMore = catVids.length > PREVIEW;
            const [featured, ...rest] = shown;

            return (
              <div key={category}>
                <AnimateIn delay={ci * 40}>
                  <div className="flex items-center gap-6 mb-8">
                    <h3 className="text-2xl font-extralight text-neutral-900 shrink-0">{category}</h3>
                    <Separator className="flex-1" />
                    <span className="text-xs text-neutral-400 tracking-widest uppercase shrink-0">
                      {catVids.length} clips
                    </span>
                  </div>
                </AnimateIn>

                {/* Featured + side stack */}
                {featured && (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                    <AnimateIn className="lg:col-span-2" delay={80}>
                      <VideoCard video={featured} onPlay={setPlaying} featured />
                    </AnimateIn>
                    <div className="flex flex-col gap-4">
                      {rest.slice(0, 2).map((v, i) => (
                        <AnimateIn key={v.id} delay={120 + i * 60}>
                          <VideoCard video={v} onPlay={setPlaying} />
                        </AnimateIn>
                      ))}
                    </div>
                  </div>
                )}

                {/* Remaining */}
                {rest.length > 2 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {rest.slice(2).map((v, i) => (
                      <AnimateIn key={v.id} delay={i * 50}>
                        <VideoCard video={v} onPlay={setPlaying} />
                      </AnimateIn>
                    ))}
                  </div>
                )}

                {hasMore && (
                  <AnimateIn delay={100}>
                    <div className="mt-10 flex justify-center">
                      <Button
                        variant="outline"
                        className="rounded-none tracking-[0.2em] uppercase text-xs px-10 py-6 border-neutral-200 text-neutral-500 hover:border-neutral-900 hover:text-neutral-900 hover:bg-transparent transition-all duration-300"
                        onClick={() => setExpanded(p => ({ ...p, [category]: !p[category] }))}
                      >
                        {isOpen ? "ย่อ ↑" : `ดูทั้งหมด ${catVids.length} clips ↓`}
                      </Button>
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
