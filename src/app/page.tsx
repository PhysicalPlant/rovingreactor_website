"use client";
import React, { useState, useEffect } from "react";
import VideoPlayer from "./components/VideoPlayer";
import Footer from "./components/Footer";
import EmailSignup from "./components/EmailSignup";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from "@mui/material";

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
  const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
  const [visibleParagraphs, setVisibleParagraphs] = useState<string[][]>([]);

  const texts = React.useMemo(
    () => [
      "The Roving Reactor is an ambitious traveling exhibit to celebrate nuclear energy.",
      "It's time for nuclear energy to come out of the shadows. It's time to let people see it up close, to understand the problems it can solve, and to imagine the future it enables.",
      "This 15-minute video tells the story of the project and its origins...",
    ],
    []
  );

  const additionalText = [
    "Nuclear energy is abundant, reliable, and uses minimal land and water — yet it faces public skepticism rooted in fear and misunderstanding. That's why we're creating the Roving Reactor.",
    "At iconic events like SXSW, the Daytona 500, and the Minnesota State Fair, the Roving Reactor will showcase a scale model of a nuclear reactor surrounded by interactive exhibits for visitors of all ages. It's not just a technical display; it's a bold spectacle built to inspire curiosity, spark dialogue, and address concerns head-on.",
    "It's about connecting with people emotionally, offering a vision of nuclear energy as a safe, transformative solution for our future. Over the next decade, we'll bring this conversation to communities nationwide, building the public support needed to unlock the enormous potential of nuclear energy.",
    "Sign up to receive our quarterly updates.",
  ];

  useEffect(() => {
    const animationPlayed = sessionStorage.getItem("animationPlayed");
    if (animationPlayed) {
      setHasAnimationPlayed(true);
      const processedTexts = texts.map(
        (text) =>
          text
            .match(/[\w'-]+|[.,!?;…]|\s+/g)
            ?.filter((word) => word !== null && word.trim().length > 0)
            ?.map((word, i, arr) => {
              if (/^[.,!?;…]$/.test(word) && i > 0) {
                return null;
              }
              if (i < arr.length - 1 && /^[.,!?;…]$/.test(arr[i + 1])) {
                return word + arr[i + 1];
              }
              return word;
            })
            .filter((word): word is string => word !== null) || []
      );
      setVisibleParagraphs(processedTexts);
      setCurrentTextIndex(texts.length - 1);
    }
  }, [texts]);

  useEffect(() => {
    if (hasAnimationPlayed || currentTextIndex >= texts.length) return;

    const words =
      texts[currentTextIndex]
        .match(/[\w'-]+|[.,!?;…]|\s+/g)
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
        }, 600);
      }
    }, 175);

    return () => {
      clearInterval(wordInterval);
      if (currentTextIndex === texts.length - 1) {
        sessionStorage.setItem("animationPlayed", "true");
      }
    };
  }, [currentTextIndex, texts, hasAnimationPlayed]);

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
            backgroundImage: "url('/img/rr-hero-image-fixed.jpg')",
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
                <div className="mb-4 md:mb-6">
                  {visibleParagraphs.map((paragraph, index) => (
                    <div
                      key={index}
                      className={`mb-4 ${
                        index === 0
                          ? "text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] text-white"
                          : "text-[1.1rem] sm:text-[1.35rem] text-white"
                      }`}
                      style={{
                        lineHeight: index === 0 ? "1.1" : undefined,
                        opacity: hasAnimationPlayed ? 1 : 0,
                        animation: hasAnimationPlayed
                          ? "none"
                          : "fadeInWord 0.5s ease forwards",
                      }}
                    >
                      {paragraph.map((word, wordIndex) => (
                        <span
                          key={wordIndex}
                          style={{
                            display: "inline-block",
                            marginRight: "0.25em",
                            opacity: hasAnimationPlayed ? 1 : undefined,
                            animation: hasAnimationPlayed
                              ? "none"
                              : "fadeInWord 0.5s ease forwards",
                          }}
                        >
                          {word}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>

                <div
                  className="mt-4 md:mt-4"
                  style={{
                    opacity: hasAnimationPlayed ? 1 : 0,
                    animation: hasAnimationPlayed
                      ? "none"
                      : "fadeIn 2s ease forwards 12s",
                  }}
                >
                  <VideoPlayer
                    thumbnailSrc="/img/video-thumb.jpg"
                    videoId="2FRqVq971qU"
                    className={hasAnimationPlayed ? "" : "opacity-0"}
                    style={{
                      animation: hasAnimationPlayed
                        ? "none"
                        : "fadeInUp 2s ease forwards 12s",
                    }}
                  />

                  <div
                    className="mt-8 space-y-4"
                    style={{
                      opacity: hasAnimationPlayed ? 1 : 0,
                      animation: hasAnimationPlayed
                        ? "none"
                        : "fadeIn 2s ease forwards 14s",
                    }}
                  >
                    {additionalText.map((paragraph, index) => (
                      <p
                        key={index}
                        className={`text-white text-[1.1rem] sm:text-[1.35rem] ${
                          index === additionalText.length - 1
                            ? "font-semibold"
                            : ""
                        }`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="mt-6 mb-12">
                    <EmailSignup
                      buttonText="Subscribe"
                      placeholderText="Enter your email"
                      onSubmit={async () => {
                        // Mailchimp submission is handled in EmailSignup component
                      }}
                    />
                  </div>

                  {/* FAQ Accordion Section */}
                  <Box sx={{ paddingRight: 2, paddingTop: 2, paddingBottom: 2 }} className="mt-8 mb-8">
                    <h2 className="text-3xl text-white mb-6">Some common questions:</h2>
                    <Accordion 
                      sx={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                        '&:before': {
                          display: 'none',
                        },
                        '& .MuiAccordionDetails-root': {
                          paddingRight: '16px',
                          paddingTop: '16px',
                          paddingBottom: '16px',
                          paddingLeft: '0',
                        },
                        '& .MuiAccordionSummary-root': {
                          paddingLeft: '0',
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                        sx={{
                          '& .MuiAccordionSummary-content': {
                            fontFamily: 'Gabarito',
                            fontSize: '1.25rem',
                          }
                        }}
                      >
                        1. Is nuclear energy safe?
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="text-white space-y-4">
                          <p className="text-[1.15rem]">
                            Nuclear energy has one of the strongest safety records in electricity production. Modern plants have extensive safety systems and careful oversight. The technology maintains clean air and water, with remarkably few health impacts for the amount of energy generated.
                          </p>
                        </div>
                      </AccordionDetails>
                    </Accordion>

                    <Accordion 
                      sx={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                        '&:before': {
                          display: 'none',
                        },
                        '& .MuiAccordionDetails-root': {
                          paddingRight: '16px',
                          paddingTop: '16px',
                          paddingBottom: '16px',
                          paddingLeft: '0',
                        },
                        '& .MuiAccordionSummary-root': {
                          paddingLeft: '0',
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                        sx={{
                          '& .MuiAccordionSummary-content': {
                            fontFamily: 'Gabarito',
                            fontSize: '1.25rem',
                          }
                        }}
                      >
                        2. How does nuclear energy benefit the environment? 
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="text-white space-y-4">
                          <p className="text-[1.15rem]">
                            Nuclear power generates significant electricity while keeping our air pristine and watersheds healthy. A single plant can power hundreds of thousands of homes while requiring minimal land use. This helps preserve natural spaces while ensuring communities have reliable power.
                          </p>
                        </div>
                      </AccordionDetails>
                    </Accordion>

                    <Accordion 
                      sx={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                        '&:before': {
                          display: 'none',
                        },
                        '& .MuiAccordionDetails-root': {
                          paddingRight: '16px',
                          paddingTop: '16px',
                          paddingBottom: '16px',
                          paddingLeft: '0',
                        },
                        '& .MuiAccordionSummary-root': {
                          paddingLeft: '0',
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                        sx={{
                          '& .MuiAccordionSummary-content': {
                            fontFamily: 'Gabarito',
                            fontSize: '1.25rem',
                          }
                        }}
                      >
                        3. How does nuclear compare to other options? 
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="text-white space-y-4">
                          <p className="text-[1.15rem]">
                            Nuclear energy offers distinct advantages. The plants operate reliably 24/7 and generate significant power in a compact footprint - a single facility can power about 850,000 homes. Modern nuclear plants typically operate for 60-80 years, and with advances in factory fabrication they're becoming one of the most cost-effective ways to generate electricity over their lifetimes.
                          </p>
                        </div>
                      </AccordionDetails>
                    </Accordion>

                    <Accordion 
                      sx={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                        '&:before': {
                          display: 'none',
                        },
                        '& .MuiAccordionDetails-root': {
                          paddingRight: '16px',
                          paddingTop: '16px',
                          paddingBottom: '16px',
                          paddingLeft: '0',
                        },
                        '& .MuiAccordionSummary-root': {
                          paddingLeft: '0',
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                        sx={{
                          '& .MuiAccordionSummary-content': {
                            fontFamily: 'Gabarito',
                            fontSize: '1.25rem',
                          }
                        }}
                      >
                        4. Why is it called the Roving Reactor?
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="text-white space-y-4"> 
                          <p className="text-[1.15rem]">
                            This initiative brings nuclear energy education directly to communities across the country. Drawing inspiration from portable microreactor designs, the Roving Reactor helps people explore nuclear technology through interactive exhibits, including Augmented Reality (AR) and Virtual Reality (VR) that let visitors experience reactor operations firsthand. These hands-on demonstrations not only showcase different reactor types - from large-scale to compact modular designs - but also introduce visitors to the diverse career opportunities in nuclear technology, from engineering and operations to maintenance and safety oversight.
                            The timing is right: Public support has reached 57% of Americans and continues to rise, with communities increasingly open to nuclear power to meet their energy needs.
                          </p>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </Box>

                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
