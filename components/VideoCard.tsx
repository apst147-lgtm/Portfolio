"use client";

import Image from "next/image";
import { YTVideo } from "@/lib/youtube";

interface Props {
  video: YTVideo;
  onPlay: (video: YTVideo) => void;
}

export default function VideoCard({ video, onPlay }: Props) {
  return (
    <div className="group cursor-pointer" onClick={() => onPlay(video)}>
      {/* Thumbnail */}
      <div className="relative w-full overflow-hidden bg-neutral-100" style={{ paddingBottom: "56.25%" }}>
        {video.thumbnailUrl && (
          <Image
            src={video.thumbnailUrl}
            alt={video.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
        )}

        {/* Play overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/0 group-hover:bg-white/90 transition-all duration-300 flex items-center justify-center scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100">
            <svg className="w-5 h-5 text-neutral-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Category badge */}
        <span className="absolute top-3 left-3 text-xs tracking-widest uppercase bg-white/90 text-neutral-600 px-2.5 py-1">
          {video.category}
        </span>
      </div>

      {/* Title */}
      <div className="pt-3">
        <h3 className="text-sm font-medium text-neutral-800 group-hover:text-neutral-500 transition-colors line-clamp-2 leading-snug">
          {video.title}
        </h3>
      </div>
    </div>
  );
}
