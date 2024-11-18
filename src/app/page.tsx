"use client";
import {useState, useEffect, useRef} from "react";

interface Section {
  id: string;
  content: JSX.Element;
  type?: "fade" | "scroll";
}

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  const lastScrollTime = useRef(0);
  const lastScrollDirection = useRef<number>(0);

  const touchStartY = useRef<number>(0);
  const touchEndY = useRef<number>(0);

  const sections: Section[] = [
    {
      id: "intro",
      type: "fade",
      content: (
        <div className="h-full flex flex-col justify-center">
          <h1 className="text-4xl  mb-6">
            The Roving Reactor is an ambitious traveling exhibit about nuclear
            energy{" "}
            <span className="text-gray-700">
              designed to welcome thousands of visitors — and spark thousands of
              conversations — at events like SXSW, the Daytona 500, the
              Minnesota State Fair, and more.
            </span>
          </h1>
        </div>
      ),
    },
    {
      id: "subhead",
      type: "fade",
      content: (
        <div className="h-full flex flex-col justify-center">
          <h1 className="text-4xl  mb-6">
            The Roving Reactor is an ambitious traveling exhibit about nuclear
            energy designed to welcome thousands of visitors{" "}
            <span className="text-gray-700">
              — and spark thousands of conversations — at events like SXSW, the
              Daytona 500, the Minnesota State Fair, and more.
            </span>
          </h1>
        </div>
      ),
    },
    {
      id: "subhead2",
      type: "fade",
      content: (
        <div className="h-full flex flex-col justify-center">
          <h1 className="text-4xl mb-6">
            The Roving Reactor is an ambitious traveling exhibit about nuclear
            energy designed to welcome thousands of visitors — and spark
            thousands of conversations —{" "}
            <span className="text-gray-700">
              at events like SXSW, the Daytona 500, the Minnesota State Fair,
              and more.
            </span>
          </h1>
        </div>
      ),
    },
    {
      id: "subhead3",
      type: "fade",
      content: (
        <div className="h-full flex flex-col justify-center">
          <h1 className="text-4xl mb-6">
            The Roving Reactor is an ambitious traveling exhibit about nuclear
            energy designed to welcome thousands of visitors — and spark
            thousands of conversations — at events like SXSW, the Daytona 500,
            the Minnesota State Fair, and more.
          </h1>
        </div>
      ),
    },
    {
      id: "video",
      type: "fade",
      content: (
        <div className="h-full flex flex-col justify-center">
          <h1 className="text-4xl  mb-6">
            This 15-minute video tells the story of the project and its origins…
          </h1>
          <div className="relative pt-[56.25%] w-full">
            <iframe
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              src="https://www.youtube.com/embed/2FRqVq971qU?enablejsapi=1"
              title="Roving Reactor Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div
              className="absolute inset-0 bg-transparent z-10"
              onClick={(e) => {
                const iframe = e.currentTarget
                  .previousElementSibling as HTMLIFrameElement;
                iframe.classList.remove("pointer-events-none");
                iframe.focus();

                // Add event listener to detect when user is done with video
                window.addEventListener(
                  "click",
                  function reEnableOverlay(event) {
                    if (!iframe.contains(event.target as Node)) {
                      iframe.classList.add("pointer-events-none");
                      window.removeEventListener("click", reEnableOverlay);
                    }
                  }
                );
              }}
            />
          </div>
        </div>
      ),
    },
    {
      id: "scrolling-content-1",
      type: "scroll",
      content: (
        <div className="min-h-screen flex flex-col justify-center">
          <h1 className="text-4xl mb-6">Scrolling panels will go here.</h1>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const scrollSectionIndex = sections.findIndex((s) => s.type === "scroll");

      // If we're in scroll sections...
      if (activeSection >= scrollSectionIndex) {
        // Only intercept wheel events when we're at the top and trying to scroll up
        if (window.scrollY === 0 && e.deltaY < 0) {
          e.preventDefault();

          const now = Date.now();
          if (now - lastScrollTime.current < 500) return;
          lastScrollTime.current = now;

          // Transition back to fade sections
          document.body.style.overflow = "hidden";
          setActiveSection(scrollSectionIndex - 1);

          // Re-enable scrolling after transition
          setTimeout(() => {
            document.body.style.overflow = "auto";
          }, 700);
        }
        return;
      }

      // Normal fade section handling
      e.preventDefault();

      const wheelThreshold = 50;
      if (Math.abs(e.deltaY) < wheelThreshold) return;

      const now = Date.now();
      if (now - lastScrollTime.current < 500) return;
      lastScrollTime.current = now;

      if (e.deltaY > 0 && activeSection < sections.length - 1) {
        setActiveSection((prev) => prev + 1);
      } else if (e.deltaY < 0 && activeSection > 0) {
        setActiveSection((prev) => prev - 1);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const scrollSectionIndex = sections.findIndex((s) => s.type === "scroll");
      touchEndY.current = e.changedTouches[0].clientY;
      const deltaY = touchStartY.current - touchEndY.current;

      // If we're in scroll sections...
      if (activeSection >= scrollSectionIndex) {
        // Only intercept touch when we're at the top and trying to scroll up
        if (window.scrollY === 0 && deltaY < 0) {
          const now = Date.now();
          if (now - lastScrollTime.current < 500) return;
          lastScrollTime.current = now;

          setActiveSection(scrollSectionIndex - 1);
          document.body.style.overflow = "hidden";
          setTimeout(() => {
            document.body.style.overflow = "auto";
          }, 700);
        }
        return;
      }

      // Normal fade section handling
      const touchThreshold = 50;
      if (Math.abs(deltaY) < touchThreshold) return;

      const now = Date.now();
      if (now - lastScrollTime.current < 500) return;
      lastScrollTime.current = now;

      if (deltaY > 0 && activeSection < sections.length - 1) {
        setActiveSection((prev) => prev + 1);
      } else if (deltaY < 0 && activeSection > 0) {
        setActiveSection((prev) => prev - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, {passive: false});
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      document.body.style.overflow = "auto";
    };
  }, [activeSection, sections.length]);

  return (
    <main className="relative">
      {/* Fixed background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-15 z-0"
        style={{backgroundImage: "url('/img/rr-hero-image.jpg')"}}
      />

      {/* Fade sections */}
      <div className="fixed inset-0 z-10">
        {sections
          .filter((section) => section.type !== "scroll")
          .map((section, index) => (
            <div
              key={section.id}
              className={`
                absolute inset-0 transition-opacity duration-500
                ${index === activeSection ? "opacity-100" : "opacity-0"}
              `}>
              <div className="mx-auto max-w-5xl px-4 h-full sm:px-6 lg:px-8 text-white">
                {section.content}
              </div>
            </div>
          ))}
      </div>

      {/* Scroll sections */}
      <div
        className="fixed w-full transition-transform duration-700"
        style={{
          transform: `translateY(${
            activeSection >= sections.findIndex((s) => s.type === "scroll")
              ? "0"
              : "100%"
          })`,
          top: "0",
          left: "0",
          right: "0",
          zIndex: 20,
        }}>
        {sections
          .filter((section) => section.type === "scroll")
          .map((section) => (
            <div key={section.id} className="min-h-screen">
              <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8 text-white">
                {section.content}
              </div>
            </div>
          ))}
      </div>

      <div className="fixed bottom-4 right-4 text-white bg-black p-2 z-30">
        Current Section: {activeSection}
      </div>
    </main>
  );
}
