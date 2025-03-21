"use client";
import React, { useState, useEffect } from "react";
import VideoPlayer from "./components/VideoPlayer";
import Footer from "./components/Footer";
import EmailSignup from "./components/EmailSignup";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const fadeInAnimation = `
  @keyframes fadeInParagraph {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const accordionStyles = {
  backgroundColor: "transparent",
  color: "white",
  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  "&:before": {
    display: "none",
  },
  "& .MuiAccordionDetails-root": {
    paddingRight: "16px",
    paddingTop: "8px",
    paddingBottom: "16px",
    paddingLeft: "0",
  },
  "& .MuiAccordionSummary-root": {
    paddingLeft: "0",
    minHeight: "48px",
    "&.Mui-expanded": {
      minHeight: "48px",
      marginBottom: "0",
    },
  },
  "& .MuiAccordionSummary-content": {
    margin: "12px 0",
    "&.Mui-expanded": {
      margin: "12px 0",
    },
  },
  "&.Mui-expanded": {
    marginTop: "0",
    marginBottom: "0",
  },
  margin: "0 !important",
};

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((step) => {
        if (step >= 4) {
          clearInterval(timer);
          return step;
        }
        return step + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
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
                  <div
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] text-white mb-4"
                    style={{
                      lineHeight: "1",
                      opacity: 0,
                      animation: "fadeInParagraph 0.8s ease forwards",
                    }}
                  >
                    The Roving Reactor is an ambitious traveling exhibit to
                    celebrate nuclear energy.
                  </div>

                  <div
                    className="text-[1.1rem] sm:text-[1.35rem] text-white mb-4"
                    style={{
                      opacity: 0,
                      animation:
                        currentStep >= 1
                          ? "fadeInParagraph 1s ease forwards"
                          : "none",
                    }}
                  >
                    It's time for nuclear energy to come out of the shadows.
                    It's time to let people see it up close, to understand the
                    problems it can solve, and to imagine the future it enables.
                  </div>

                  <div
                    className="text-[1.1rem] sm:text-[1.35rem] text-white mb-4"
                    style={{
                      opacity: 0,
                      animation:
                        currentStep >= 2
                          ? "fadeInParagraph 1s ease forwards"
                          : "none",
                    }}
                  >
                    This 15-minute video tells the story of the project and its
                    origins...
                  </div>
                </div>

                <div
                  className="mt-4 md:mt-4"
                  style={{
                    opacity: currentStep >= 3 ? 1 : 0,
                    transition: "opacity 1s ease",
                  }}
                >
                  <VideoPlayer
                    thumbnailSrc="/img/video-thumb.jpg"
                    videoId="2FRqVq971qU"
                  />

                  <div
                    className="mt-8 space-y-4"
                    style={{
                      opacity: currentStep >= 4 ? 1 : 0,
                      transition: "opacity 1s ease",
                    }}
                  >
                    <p className="text-white text-[1.1rem] sm:text-[1.35rem]">
                      Nuclear energy is abundant, reliable, and uses minimal
                      land and water — yet it faces public skepticism rooted in
                      fear and misunderstanding. That's why we're creating the
                      Roving Reactor.{" "}
                    </p>
                    <p className="text-white text-[1.1rem] sm:text-[1.35rem]">
                      Traveling across the country, the Roving Reactor will
                      showcase a scale model of a nuclear reactor surrounded by
                      interactive exhibits for visitors of all ages. It's not
                      just a technical display; it's a bold spectacle built to
                      inspire curiosity, spark dialogue, and address concerns
                      head-on.
                    </p>
                    <p className="text-white text-[1.1rem] sm:text-[1.35rem]">
                      It's about connecting with people emotionally, offering a
                      vision of nuclear energy as a safe, transformative
                      solution for our future. Over the next decade, we'll bring
                      this conversation to communities nationwide, building the
                      public support needed to unlock the enormous potential of
                      nuclear energy.
                    </p>
                    <p className="text-white text-[1.1rem] sm:text-[1.35rem] font-semibold">
                      Sign up to receive our quarterly updates.
                    </p>
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
                  <Box
                    sx={{ paddingRight: 2, paddingTop: 2, paddingBottom: 2 }}
                    className="mt-8 mb-8"
                  >
                    <h2 className="text-3xl text-white mb-6">
                      Some common questions:
                    </h2>
                    <Accordion sx={accordionStyles}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                        sx={{
                          "& .MuiAccordionSummary-content": {
                            fontFamily: "Gabarito",
                            fontSize: "1.25rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          },
                        }}
                      >
                        <AddIcon sx={{ color: "white" }} />
                        Is nuclear energy safe?
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="text-white space-y-4">
                          <p className="text-[1.15rem]">
                            Nuclear energy has one of the{" "}
                            <a
                              href="https://ourworldindata.org/nuclear-energy"
                              className="hover:opacity-90"
                            >
                              strongest safety records
                            </a>{" "}
                            in electricity production. Modern plants have
                            extensive safety systems and careful oversight. The
                            technology maintains clean air and water, with{" "}
                            <a
                              href="https://ourworldindata.org/safest-sources-of-energy"
                              className="hover:opacity-90"
                            >
                              remarkably few health impacts
                            </a>{" "}
                            for the amount of energy generated.
                          </p>
                        </div>
                      </AccordionDetails>
                    </Accordion>

                    <Accordion sx={accordionStyles}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                        sx={{
                          "& .MuiAccordionSummary-content": {
                            fontFamily: "Gabarito",
                            fontSize: "1.25rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          },
                        }}
                      >
                        <AddIcon sx={{ color: "white" }} />
                        How does nuclear energy benefit the environment?
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="text-white space-y-4">
                          <p className="text-[1.15rem]">
                            Nuclear power generates significant electricity
                            while{" "}
                            <a
                              href="https://www.eia.gov/energyexplained/nuclear/nuclear-power-and-the-environment.php"
                              className="hover:opacity-90"
                            >
                              keeping our air pristine
                            </a>{" "}
                            and watersheds healthy. A single plant can power
                            hundreds of thousands of homes while requiring
                            minimal land use. This helps{" "}
                            <a
                              href="https://www.energy.gov/ne/articles/3-reasons-why-nuclear-clean-and-sustainable"
                              className="hover:opacity-90"
                            >
                              preserve natural spaces
                            </a>{" "}
                            while ensuring communities have reliable power.
                          </p>
                        </div>
                      </AccordionDetails>
                    </Accordion>

                    <Accordion sx={accordionStyles}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                        sx={{
                          "& .MuiAccordionSummary-content": {
                            fontFamily: "Gabarito",
                            fontSize: "1.25rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          },
                        }}
                      >
                        <AddIcon sx={{ color: "white" }} />
                        How does nuclear compare to other options?
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="text-white space-y-4">
                          <p className="text-[1.15rem]">
                            Nuclear energy offers{" "}
                            <a
                              href="https://www.energy.gov/ne/articles/advantages-and-challenges-nuclear-energy"
                              className="hover:opacity-90"
                            >
                              distinct advantages
                            </a>
                            . The plants operate reliably 24/7 and generate
                            significant power in a compact footprint - a single
                            facility can power about 850,000 homes. Modern
                            nuclear plants typically operate for 60-80 years,
                            and with advances in factory fabrication they're
                            becoming one of the most{" "}
                            <a
                              href="https://www.iea.org/reports/nuclear-power-in-a-clean-energy-system"
                              className="hover:opacity-90"
                            >
                              cost-effective ways
                            </a>{" "}
                            to generate electricity over their lifetimes.
                          </p>
                        </div>
                      </AccordionDetails>
                    </Accordion>

                    <Accordion sx={accordionStyles}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                        sx={{
                          "& .MuiAccordionSummary-content": {
                            fontFamily: "Gabarito",
                            fontSize: "1.25rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          },
                        }}
                      >
                        <AddIcon sx={{ color: "white" }} />
                        Why is it called the Roving Reactor?
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="text-white space-y-4">
                          <p className="text-[1.15rem]">
                            This initiative brings nuclear energy education
                            directly to communities across the country. Drawing
                            inspiration from portable microreactor designs, the
                            Roving Reactor helps people explore nuclear
                            technology through interactive exhibits, including
                            Augmented Reality (AR) and Virtual Reality (VR) that
                            let visitors experience reactor operations
                            firsthand.
                          </p>
                          <p>
                            {" "}
                            These hands-on demonstrations not only showcase{" "}
                            <a
                              href="https://www.energy.gov/sites/prod/files/2020/01/f70/011620%20Advanced%20Reactor%20Types%20Factsheet.pdf"
                              className="hover:opacity-90"
                            >
                              different reactor types
                            </a>{" "}
                            - from large-scale to compact modular designs - but
                            also introduce visitors to the diverse career
                            opportunities in nuclear technology, from
                            engineering and operations to maintenance and safety
                            oversight.
                          </p>
                          <p>
                            The timing is right: Public support has reached{" "}
                            <a
                              href="https://www.pewresearch.org/short-reads/2024/08/05/majority-of-americans-support-more-nuclear-power-in-the-country/"
                              className="hover:opacity-90"
                            >
                              56% of Americans
                            </a>{" "}
                            and continues to rise, with communities increasingly
                            open to nuclear power to meet their energy needs.
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
