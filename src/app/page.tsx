"use client";
import {useState, useEffect, useRef} from "react";

interface Section {
  id: string;
  content: JSX.Element;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  const lastScrollTime = useRef(0);
  const lastScrollDirection = useRef<number>(0);

  const sections: Section[] = [
    {
      id: "intro",
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
      content: (
        <div className="h-full flex flex-col justify-center">
          <h1 className="text-4xl  mb-6">
            The Roving Reactor is an ambitious traveling exhibit about nuclear
            energy designed to welcome thousands of visitors
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
  ];

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      // Keep original 500ms throttle
      const now = Date.now();
      if (now - lastScrollTime.current < 500) {
        console.log("Throttled - skipping scroll event");
        return;
      }
      lastScrollTime.current = now;

      // Log the current state and scroll direction
      console.log("Processing wheel event:", {
        deltaY: e.deltaY,
        currentSection: activeSection,
        totalSections: sections.length,
        direction: e.deltaY > 0 ? "down" : "up",
        timestamp: now,
      });

      // Track scroll direction and accumulate
      if (e.deltaY > 0) {
        lastScrollDirection.current += 1;
      } else {
        lastScrollDirection.current -= 1;
      }

      // Keep original threshold of 3
      if (
        lastScrollDirection.current >= 3 &&
        activeSection < sections.length - 1
      ) {
        console.log(
          `Scrolling DOWN from section ${activeSection} to ${activeSection + 1}`
        );
        setActiveSection(activeSection + 1);
        lastScrollDirection.current = 0;
      } else if (lastScrollDirection.current <= -3 && activeSection > 0) {
        console.log(
          `Scrolling UP from section ${activeSection} to ${activeSection - 1}`
        );
        setActiveSection(activeSection - 1);
        lastScrollDirection.current = 0;
      }
    };

    window.addEventListener("wheel", handleWheel, {passive: false});

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [activeSection, sections.length]);

  return (
    <main className="relative h-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{backgroundImage: "url('/img/rr-hero-image.jpg')"}}
      />
      <div className="relative h-full">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`
              absolute inset-0 transition-opacity duration-500
              ${index === activeSection ? "opacity-100 z-10" : "opacity-0 z-0"}
            `}>
            <div className="mx-auto max-w-5xl px-4 h-full sm:px-6 lg:px-8 text-white">
              {section.content}
            </div>
          </div>
        ))}
      </div>
      <div className="fixed bottom-4 right-4 text-white bg-black p-2">
        Current Section: {activeSection}
      </div>
    </main>
  );
}
