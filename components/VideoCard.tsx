"use client";

import { useState } from "react";
import Image from "next/image";
import { YTVideo } from "@/lib/youtube";

interface Props {
  video: YTVideo;
  onPlay: (video: YTVideo) => void;
}

export default function VideoCard({ video, onPlay }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      onClick={() => onPlay(video)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative w-full overflow-hidden bg-neutral-100"
        style={{ paddingBottom: "56.25%" }}
      >
        {/* Static thumbnail */}
        <Image
          src={video.thumbnailUrl}
          alt={video.title}
          fill
          className={`object-cover transition-opacity duration-300 ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
          unoptimized
        />

        {/* Hover: YouTube autoplay preview (muted, no controls) */}
        {hovered && (
          <iframe
            className="absolute inset-0 w-full h-full pointer-events-none"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=${video.id}&modestbranding=1&iv_load_policy=3`}
            allow="autoplay"
            title={video.title}
          />
        )}

        {/* Play button — show when not hovered */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
            hovered ? "opacity-0" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
            <svg className="w-5 h-5 text-neutral-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Category badge */}
        <span className="absolute top-3 left-3 text-xs tracking-wide bg-white/90 text-neutral-600 px-2.5 py-1 z-10">
          {video.category}
        </span>

        {/* Click to open full video hint on hover */}
        {hovered && (
          <div className="absolute bottom-3 right-3 z-10 bg-black/60 text-white text-xs px-2 py-1 rounded">
            คลิกเพื่อดูเต็ม
          </div>
        )}
      </div>

      <div className="pt-3">
        <h3 className="text-sm font-medium text-neutral-800 group-hover:text-neutral-500 transition-colors line-clamp-1 leading-snug">
          {video.title}
        </h3>
      </div>
    </div>
  );
}
