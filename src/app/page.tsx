"use client";
import React, {useState, useEffect} from "react";
import VideoPlayer from "./components/VideoPlayer";

const fadeInAnimation = `
  @keyframes fadeInWord {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default function Home() {
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
  const [visibleParagraphs, setVisibleParagraphs] = useState<string[][]>([]);
  const [videoTextVisible, setVideoTextVisible] = useState<string[]>([]);
  const videoText =
    "This 15-minute video tells the story of the project and its origins…";

  const texts = React.useMemo(
    () => [
      "The Roving Reactor is an ambitious traveling exhibit to celebrate nuclear energy.",
      "It's time for nuclear energy to come out of the shadows.",
      "It's time to let people see it up close, to understand the problems it can solve, and to imagine the future it enables.",
    ],
    []
  );

  useEffect(() => {
    if (currentTextIndex >= texts.length) return;

    console.log("Processing text:", texts[currentTextIndex]);

    const words =
      texts[currentTextIndex]
        .match(/[\w']+|[.,!?;]|\s+/g)
        ?.filter((word): word is string => {
          return word !== null && word.trim().length > 0;
        })
        ?.map((word, i, arr) => {
          if (/^[.,!?;]$/.test(word) && i > 0) {
            return null;
          }
          if (i < arr.length - 1 && /^[.,!?;]$/.test(arr[i + 1])) {
            return word + arr[i + 1];
          }
          return word;
        })
        .filter((word): word is string => word !== null) || [];

    console.log("Split into words:", words);

    let currentWordIndex = 0;

    const wordInterval = setInterval(() => {
      if (currentWordIndex < words.length) {
        setVisibleParagraphs((prev) => {
          const newParagraphs = [...prev];
          if (!newParagraphs[currentTextIndex]) {
            newParagraphs[currentTextIndex] = [];
          }
          newParagraphs[currentTextIndex] = words.slice(
            0,
            currentWordIndex + 1
          );
          return newParagraphs;
        });
        currentWordIndex++;
      } else {
        clearInterval(wordInterval);
        setTimeout(() => {
          if (currentTextIndex < texts.length - 1) {
            setCurrentTextIndex((prev) => prev + 1);
          }
        }, 1000);
      }
    }, 175);

    return () => clearInterval(wordInterval);
  }, [currentTextIndex, texts]);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      const words =
        videoText
          .match(/[\w']+|[.,!?;…]|\s+/g)
          ?.filter((word): word is string => {
            return word !== null && word.trim().length > 0;
          })
          ?.map((word, i, arr) => {
            if (/^[.,!?;…]$/.test(word) && i > 0) {
              return null;
            }
            if (i < arr.length - 1 && /^[.,!?;…]$/.test(arr[i + 1])) {
              return word + arr[i + 1];
            }
            return word;
          })
          .filter((word): word is string => word !== null) || [];

      let currentWordIndex = 0;
      const wordInterval = setInterval(() => {
        if (currentWordIndex < words.length) {
          setVideoTextVisible(words.slice(0, currentWordIndex + 1));
          currentWordIndex++;
        } else {
          clearInterval(wordInterval);
        }
      }, 175);

      return () => clearInterval(wordInterval);
    }, 13000);

    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    const checkContent = () => {
      if (window.innerWidth <= 767) {
        // Mobile only
        const contentHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight;

        if (contentHeight > viewportHeight) {
          document.body.classList.add("can-scroll");
        } else {
          document.body.classList.remove("can-scroll");
        }
      }
    };

    checkContent();
    window.addEventListener("resize", checkContent);

    return () => {
      window.removeEventListener("resize", checkContent);
      document.body.classList.remove("can-scroll");
    };
  }, []);

  return (
    <>
      <style jsx global>
        {fadeInAnimation}
      </style>
      <div className="h-screen overflow-auto">
        {/* Background elements remain the same */}
        <div
          className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-0"
          style={{
            backgroundImage: "url('/img/rr-hero-image.jpg')",
            animation: "fadeIn 13s ease-in forwards",
            zIndex: -20,
            backgroundAttachment: "fixed",
            transform: "translate3d(0,0,0)",
            WebkitBackfaceVisibility: "hidden",
            WebkitPerspective: 1000,
            WebkitTransform: "translate3d(0,0,0)",
          }}
        />

        {/* Mobile gradient (darker) */}
        <div
          className="fixed inset-0 w-full h-full -z-10 md:hidden"
          style={{
            background: `linear-gradient(90deg, 
              rgba(0,0,0,0.85) 0%, 
              rgba(0,0,0,0.75) 65%, 
              rgba(0,0,0,0.65) 100%
            )`,
          }}
        />

        {/* Desktop gradient (original) */}
        <div
          className="fixed inset-0 w-full h-full -z-10 hidden md:block"
          style={{
            background: `linear-gradient(90deg, 
              rgba(0,0,0,0.9) 0%, 
              rgba(0,0,0,0.7) 50%, 
              transparent 100%
            )`,
          }}
        />

        <main className="relative pt-[calc(3.5rem+1px)] md:pt-14 mt-6 md:mt-8 pb-0">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="col-span-1 lg:col-span-6">
                <div
                  className="mb-4 md:mb-6 opacity-0 animate-fade-in-up"
                  style={{
                    animationDelay: "0s",
                  }}>
                  {visibleParagraphs.map((paragraph, index) => (
                    <div
                      key={index}
                      className={`mb-4 ${
                        index === 0
                          ? "text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] text-white"
                          : "text-[1.1rem] sm:text-[1.35rem] text-white"
                      }`}
                      style={index === 0 ? {lineHeight: "1.1"} : undefined}>
                      {paragraph.map((word, wordIndex) => (
                        <span
                          key={wordIndex}
                          style={{
                            display: "inline-block",
                            animation: "fadeInWord 0.5s ease forwards",
                            marginRight: "0.25em",
                          }}>
                          {word}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>

                <div
                  className="mt-4 md:mt-4 opacity-0"
                  style={{
                    animation: "fadeIn 2s ease forwards 13s",
                  }}>
                  <h2 className="text-[1.1rem] sm:text-[1.35rem] text-white mb-4 md:mb-6">
                    {videoTextVisible.map((word, wordIndex) => (
                      <span
                        key={wordIndex}
                        style={{
                          display: "inline-block",
                          animation: "fadeInWord 0.5s ease forwards",
                          marginRight: "0.25em",
                        }}>
                        {word}
                      </span>
                    ))}
                  </h2>
                  <VideoPlayer
                    thumbnailSrc="/img/video-thumb.jpg"
                    videoId="2FRqVq971qU"
                    className="opacity-0"
                    style={{
                      animation: "fadeInUp 2s ease forwards 15.5s",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Test if this div is present */}
        <div className="relative">{/* Your lorem ipsum text */}</div>
      </div>
    </>
  );
}
