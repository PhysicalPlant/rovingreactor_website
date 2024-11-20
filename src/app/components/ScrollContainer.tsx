"use client";
import {useEffect, useRef} from "react";

export default function ScrollContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const checkScroll = () => {
        const needsScroll = container.scrollHeight > window.innerHeight;
        document.body.style.overflowY = needsScroll ? "auto" : "hidden";
      };

      checkScroll();
      // Recheck when window is resized
      window.addEventListener("resize", checkScroll);

      return () => {
        window.removeEventListener("resize", checkScroll);
        document.body.style.overflowY = "hidden";
      };
    }
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen">
      {children}
    </div>
  );
}
