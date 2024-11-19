"use client";
import React, {useState, useEffect} from "react";

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

  const texts = [
    "The Roving Reactor is an ambitious traveling exhibit about nuclear energy.",
    "It's designed to welcome thousands of visitors — and spark thousands of conversations — at events like SXSW, the Daytona 500, the Minnesota State Fair, and more.",
  ];

  useEffect(() => {
    if (texts[currentTextIndex] === undefined) return;

    console.log("Processing text:", texts[currentTextIndex]);

    const words = texts[currentTextIndex]
      .match(/[\w']+|[.,!?;]|\s+/g)
      .filter((word) => word.trim().length > 0)
      .map((word, i, arr) => {
        // If this word is punctuation, attach it to the previous word
        if (/^[.,!?;]$/.test(word) && i > 0) {
          return null; // We'll filter these out
        }
        // If the next word is punctuation, combine them
        if (i < arr.length - 1 && /^[.,!?;]$/.test(arr[i + 1])) {
          return word + arr[i + 1];
        }
        return word;
      })
      .filter(Boolean); // Remove null values

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
        }, 2000);
      }
    }, 175);

    return () => clearInterval(wordInterval);
  }, [currentTextIndex, texts]);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      const words = videoText
        .match(/[\w']+|[.,!?;…]|\s+/g)
        .filter((word) => word.trim().length > 0)
        .map((word, i, arr) => {
          if (/^[.,!?;…]$/.test(word) && i > 0) {
            return null;
          }
          if (i < arr.length - 1 && /^[.,!?;…]$/.test(arr[i + 1])) {
            return word + arr[i + 1];
          }
          return word;
        })
        .filter(Boolean);

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
    }, 10000);

    return () => clearTimeout(startDelay);
  }, []);

  return (
    <>
      <style jsx global>
        {fadeInAnimation}
      </style>
      <div className="min-h-screen">
        {/* Background elements remain the same */}
        <div
          className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-0"
          style={{
            backgroundImage: "url('/img/rr-hero-image.jpg')",
            animation: "fadeIn 13s ease-in forwards",
            zIndex: -20,
          }}
        />

        {/* Mobile gradient (even more transparent) */}
        <div
          className="fixed inset-0 w-full h-full -z-10 md:hidden"
          style={{
            background: `linear-gradient(90deg, 
              rgba(0,0,0,0.65) 0%, 
              rgba(0,0,0,0.55) 65%, 
              rgba(0,0,0,0.45) 100%
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

        <main className="relative pt-[calc(3.5rem+1px)] md:pt-14 mt-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="col-span-1 lg:col-span-6">
                <div
                  className="mb-4 md:mb-6 opacity-0 animate-fade-in-up"
                  style={{
                    animationDelay: "0s",
                    minHeight: "200px",
                  }}>
                  {visibleParagraphs.map((paragraph, index) => (
                    <div
                      key={index}
                      className={`mb-4 ${
                        index === 0
                          ? "text-2xl sm:text-3xl md:text-4xl text-white"
                          : "text-xl sm:text-2xl text-white"
                      }`}>
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
                    animation: "fadeInUp 2s ease forwards 10s",
                  }}>
                  <h2 className="text-xl sm:text-2xl text-white mb-4 md:mb-6">
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
                  <div
                    className="relative pt-[56.25%] w-full opacity-0"
                    style={{
                      animation: "fadeIn 2s ease forwards 13s", // Delay video until after text animation
                    }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/2FRqVq971qU?enablejsapi=1"
                      title="Roving Reactor Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
