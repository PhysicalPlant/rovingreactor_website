"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
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
            backgroundImage: "url('/img/rovingreactor.jpg')",
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
                    The Roving Reactor is an ambitious traveling science museum
                    about nuclear energy.
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
                    <p>
                      Despite the name, it contains no actual reactor, only
                      hands-on exhibits that make nuclear energy
                      <strong> approachable, intuitive,</strong> and{" "}
                      <strong>tangible</strong>.
                    </p>
                    <p>
                      Visitors adjust reactor control rods while watching power
                      levels respond, examine real fuel cask materials, deploy
                      energy onto a model grid, and discover career paths in
                      nuclear — all through interactive stations inspired by the
                      world's best science museums.
                    </p>
                    <Image
                      src="/img/2025-img/RR_B_color_1200.jpg"
                      alt="Roving Reactor All Facets of Our Work"
                      width={1000}
                      height={1000}
                    />
                    <p className="mt-8">
                      <strong>Why now?</strong> The U.S. plans to triple nuclear
                      capacity by 2050, adding reactors in over 100 cities. But
                      while millions see wind turbines and solar panels daily,
                      nuclear remains invisible and misunderstood. We're
                      bridging that gap by bringing nuclear science directly to
                      state fairs, college campuses, and music festivals —
                      meeting people where they already gather.
                    </p>
                  </div>

                  <div
                    className="mt-8 space-y-4"
                    style={{
                      opacity: currentStep >= 4 ? 1 : 0,
                      transition: "opacity 1s ease",
                    }}
                  >
                    <p className="text-white text-[1.1rem] sm:text-[1.35rem]">
                      <strong>The experience:</strong> Seven exhibit stations
                      with working models and real materials explore reactor
                      mechanics, safety systems, spent fuel storage, and grid
                      integration. Video interviews showcase diverse nuclear
                      careers. A companion app connects visitors to training
                      programs and job opportunities.
                    </p>
                    <p className="text-white text-[1.1rem] sm:text-[1.35rem]">
                      <strong>The mission:</strong> Transform abstract nuclear
                      concepts into physical experiences. Build intuitions.
                      Spark careers. Create the public understanding needed for
                      America's clean energy future.
                    </p>
                    <p className="text-white text-[1.1rem] sm:text-[1.35rem]">
                      Prototype launch: 2027. Currently seeking partners and
                      advisors.
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
                            We don't actually travel with a real reactor, but we
                            do bring nuclear energy education directly to
                            communities across the country.
                          </p>
                          <p>
                            Drawing inspiration from similar{" "}
                            <a href="/exhibits" className="hover:opacity-90">
                              in-person programs
                            </a>{" "}
                            in the '50s, '60s, and '70s, the Roving Reactor lets
                            visitors develop their own intuitions through
                            hands-on stations that each explore a different
                            aspect of nuclear energy.
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
                            Yet, lack of understanding still breeds mistrust.
                            The nuclear energy community will need to make its
                            case thoughtfully &mdash; and in person.
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
