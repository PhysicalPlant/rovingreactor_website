"use client";

import Typewriter from "typewriter-effect";

export default function Home() {
  return (
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

      {/* Mobile gradient (darker, extends further) */}
      <div
        className="fixed inset-0 w-full h-full -z-10 md:hidden"
        style={{
          background: `linear-gradient(90deg, 
            rgba(0,0,0,0.9) 0%, 
            rgba(0,0,0,0.8) 65%, 
            rgba(0,0,0,0.7) 100%
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
                className="text-2xl sm:text-3xl md:text-4xl text-white mb-4 md:mb-6 opacity-0 animate-fade-in-up"
                style={{animationDelay: "0s"}}>
                <h1>
                  <Typewriter
                    options={{
                      delay: 0,
                      cursor: "|",
                      deleteSpeed: 38,
                      cursorClassName: "typing-cursor",
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("The")
                        .pauseFor(150)
                        .typeString(" Roving")
                        .pauseFor(150)
                        .typeString(" Reactor")
                        .pauseFor(150)
                        .typeString(" is")
                        .pauseFor(150)
                        .typeString(" an")
                        .pauseFor(150)
                        .typeString(" ambitious")
                        .pauseFor(150)
                        .typeString(" traveling")
                        .pauseFor(150)
                        .typeString(" exhibit")
                        .pauseFor(150)
                        .typeString(" about")
                        .pauseFor(150)
                        .typeString(" nuclear")
                        .pauseFor(150)
                        .typeString(" energy.")
                        .callFunction(() => {
                          document
                            .querySelector(".typing-cursor")
                            ?.classList.add("hidden");
                          document
                            .querySelector(".second-paragraph")
                            ?.classList.remove("hidden");
                        })
                        .start();
                    }}
                  />
                </h1>
                <h2
                  className="mt-8 text-lg sm:text-xl md:text-2xl second-paragraph hidden opacity-0 animate-fade-in-up"
                  style={{animationDelay: "0s"}}>
                  <Typewriter
                    options={{
                      delay: 0,
                      cursor: "|",
                      deleteSpeed: 38,
                      cursorClassName: "typing-cursor-2",
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .pauseFor(2500)
                        .typeString("It's")
                        .pauseFor(150)
                        .typeString(" designed")
                        .pauseFor(150)
                        .typeString(" to")
                        .pauseFor(150)
                        .typeString(" welcome")
                        .pauseFor(150)
                        .typeString(" thousands")
                        .pauseFor(150)
                        .typeString(" of")
                        .pauseFor(150)
                        .typeString(" visitors")
                        .pauseFor(150)
                        .typeString(" —")
                        .pauseFor(150)
                        .typeString(" and")
                        .pauseFor(150)
                        .typeString(" spark")
                        .pauseFor(150)
                        .typeString(" thousands")
                        .pauseFor(150)
                        .typeString(" of")
                        .pauseFor(150)
                        .typeString(" conversations")
                        .pauseFor(150)
                        .typeString(" —")
                        .pauseFor(150)
                        .typeString(" at")
                        .pauseFor(150)
                        .typeString(" events")
                        .pauseFor(150)
                        .typeString(" like")
                        .pauseFor(150)
                        .typeString(" SXSW,")
                        .pauseFor(150)
                        .typeString(" the")
                        .pauseFor(150)
                        .typeString(" Daytona")
                        .pauseFor(150)
                        .typeString(" 500,")
                        .pauseFor(150)
                        .typeString(" the")
                        .pauseFor(150)
                        .typeString(" Minnesota")
                        .pauseFor(150)
                        .typeString(" State")
                        .pauseFor(150)
                        .typeString(" Fair,")
                        .pauseFor(150)
                        .typeString(" and")
                        .pauseFor(150)
                        .typeString(" more.")
                        .callFunction(() => {
                          document
                            .querySelector(".typing-cursor-2")
                            ?.classList.add("hidden");
                        })
                        .start();
                    }}
                  />
                </h2>
              </div>

              <div
                className="mt-12 md:mt-12 opacity-0"
                style={{
                  animation: "fadeInUp 2s ease forwards 10s",
                }}>
                <h2 className="text-xl sm:text-2xl text-white mb-4 md:mb-6">
                  This 15-minute video tells the story of the project and its
                  origins…
                </h2>
                <div className="relative pt-[56.25%] w-full">
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
  );
}
