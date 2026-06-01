"use client";

import { useState } from "react";
import Image from "next/image";
import { YTVideo } from "@/lib/youtube";

interface Props {
  video: YTVideo;
  onPlay: (video: YTVideo) => void;
  animDelay?: number;
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
      {/* Thumbnail container */}
      <div
        className="relative w-full overflow-hidden bg-neutral-100 shadow-sm group-hover:shadow-xl transition-shadow duration-500"
        style={{ paddingBottom: "56.25%" }}
      >
        {/* Thumbnail image */}
        {video.thumbnailUrl && (
          <Image
            src={video.thumbnailUrl}
            alt={video.title}
            fill
            className={`object-cover transition-all duration-700 ${
              hovered ? "opacity-0 scale-110" : "opacity-100 scale-100 group-hover:scale-105"
            }`}
            unoptimized
          />
        )}

        {/* YouTube hover preview */}
        {hovered && (
          <iframe
            className="absolute inset-0 w-full h-full pointer-events-none"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=${video.id}&modestbranding=1&iv_load_policy=3`}
            allow="autoplay"
            title={video.title}
          />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 z-10">
          <div className="w-14 h-14 rounded-full border-2 border-white/90 bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Category badge */}
        <span className="absolute top-3 left-3 z-20 text-xs bg-white/90 backdrop-blur-sm text-neutral-700 px-2.5 py-1 tracking-wide">
          {video.category}
        </span>

        {/* Bottom title overlay on hover */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <p className="text-white text-xs font-medium line-clamp-1 drop-shadow">
            {video.title}
          </p>
        </div>
      </div>

      {/* Title below */}
      <div className="pt-3 group-hover:opacity-60 transition-opacity duration-300">
        <h3 className="text-sm text-neutral-800 line-clamp-1 leading-snug">
          {video.title}
        </h3>
      </div>
    </div>
  );
}
