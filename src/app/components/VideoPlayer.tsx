"use client";
import {useState} from "react";
import Image from "next/image";

interface VideoPlayerProps {
  thumbnailSrc: string;
  videoId: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function VideoPlayer({
  thumbnailSrc,
  videoId,
  className = "",
  style,
}: VideoPlayerProps) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className={`relative pt-[56.25%] w-full ${className}`} style={style}>
      {!showVideo && (
        <div
          className="absolute top-0 left-0 w-full h-full cursor-pointer"
          onClick={() => setShowVideo(true)}>
          <Image
            src={thumbnailSrc}
            alt="Video Thumbnail"
            fill
            className="object-cover"
          />
        </div>
      )}

      {showVideo && (
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1`}
          title="Roving Reactor Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}
