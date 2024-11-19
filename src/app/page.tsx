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

  const getSections = (): Section[] => [
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
        <div
          className="h-full flex flex-col justify-center relative"
          style={{isolation: "isolate"}}>
          <h1 className="text-4xl mb-6">
            This 15-minute video tells the story of the project and its origins…
          </h1>
          <div className="relative pt-[56.25%] w-full">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              style={{
                pointerEvents: activeSection === 4 ? "auto" : "none",
                zIndex: 100,
              }}
              src="https://www.youtube.com/embed/2FRqVq971qU?enablejsapi=1"
              title="Roving Reactor Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
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

  const sections = getSections(activeSection);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Always allow natural scrolling in scroll sections
      const scrollSectionIndex = sections.findIndex((s) => s.type === "scroll");
      if (activeSection >= scrollSectionIndex) {
        // Only handle when at top and scrolling up
        if (window.scrollY === 0 && e.deltaY < 0) {
          const now = Date.now();
          if (now - lastScrollTime.current < 500) return;
          lastScrollTime.current = now;

          setActiveSection(scrollSectionIndex - 1);
        }
        return;
      }

      // For fade sections, only prevent the default scroll
      // but don't stop propagation or prevent other events
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

    window.addEventListener("wheel", handleWheel, {passive: false});

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [activeSection, sections.length]);

  return (
    <main
      className="relative h-screen"
      style={{
        overflowY:
          activeSection >= sections.findIndex((s) => s.type === "scroll")
            ? "auto"
            : "hidden",
        touchAction:
          activeSection >= sections.findIndex((s) => s.type === "scroll")
            ? "auto"
            : "none",
        isolation: "isolate",
      }}>
      {/* Fixed background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-25 z-0"
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
                absolute inset-0 transition-opacity duration-500 flex items-center
                ${index === activeSection ? "opacity-100" : "opacity-0"}
              `}>
              <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-white w-full">
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
          height: "100vh",
          overflowY:
            activeSection >= sections.findIndex((s) => s.type === "scroll")
              ? "auto"
              : "hidden",
        }}>
        {sections
          .filter((section) => section.type === "scroll")
          .map((section) => (
            <div key={section.id} className="min-h-screen flex items-center">
              <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8 text-white w-full">
                {section.content}
              </div>
            </div>
          ))}
      </div>

      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-[9999]">
        <nav className="relative" style={{isolation: "isolate"}}>
          {/* Your nav content */}
        </nav>
      </div>
    </main>
  );
}
