"use client";

import { useState } from "react";
import Image from "next/image";
import { YTVideo } from "@/lib/youtube";

interface Props {
  video: YTVideo;
  onPlay: (video: YTVideo) => void;
  featured?: boolean;
}

export default function VideoCard({ video, onPlay, featured = false }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      onClick={() => onPlay(video)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <div
        className="relative w-full overflow-hidden bg-neutral-100"
        style={{ paddingBottom: featured ? "56.25%" : "62%" }}
      >
        {video.thumbnailUrl && (
          <Image
            src={video.thumbnailUrl}
            alt={video.title}
            fill
            className={`object-cover transition-all duration-700 ${
              hovered ? "opacity-0 scale-110" : "opacity-100 scale-100 group-hover:scale-[1.04]"
            }`}
            unoptimized
          />
        )}

        {/* YouTube preview */}
        {hovered && (
          <iframe
            className="absolute inset-0 w-full h-full pointer-events-none"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=${video.id}&modestbranding=1&iv_load_policy=3`}
            allow="autoplay"
            title={video.title}
          />
        )}

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Play */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className={`w-12 h-12 rounded-full border border-white/70 bg-black/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
            hovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}>
            <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Bottom overlay with title */}
        <div className={`absolute bottom-0 left-0 right-0 z-10 px-4 py-4 transition-all duration-300 ${
          hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}>
          <p className="text-white text-sm font-light line-clamp-1">{video.title}</p>
        </div>
      </div>

      {/* Title below */}
      <div className="pt-3 pb-1">
        <p className="text-xs text-neutral-900 line-clamp-1 group-hover:text-neutral-500 transition-colors duration-300 font-light">
          {video.title}
        </p>
      </div>
    </div>
  );
}
