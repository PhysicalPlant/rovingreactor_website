"use client";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Image from "next/image";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

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

export default function Exhibits() {
  return (
    <>
      <div className="h-screen overflow-auto">
        {/* Background elements remain the same */}

        <main className="relative pt-[calc(3.5rem+1px)] md:pt-14 mt-6 md:mt-8 pb-0">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-0">
            <div className="max-w-2xl">
              <div className="mb-4 md:mb-6">
                <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 ![line-height:2rem] md:![line-height:3rem]">
                  Roving Reactor Exhibits
                </h1>

                <Image
                  className="mb-5 w-full h-auto my-3 "
                  src="/img/2025-img/RR_B_bw_1200.jpg"
                  alt="Roving Reactor Exhibits Illustration A"
                  width={1000}
                  height={1000}
                />

                <p className="text-white">
                  Explore the themed zones of the traveling exhibit—interactive
                  displays and hands-on activities that promote nuclear energy
                  and spark future innovators.
                </p>

                {/*  Accordion Section */}
                <Box
                  sx={{ paddingRight: 2, paddingTop: 0, paddingBottom: 2 }}
                  className="mt-8 mb-8"
                >
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
                      <span className="text-[#8be8d9]">
                        Zone 1: How Nuclear Works
                      </span>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="text-white space-y-4">
                        <p>
                          Journey into the heart of nuclear technology through
                          detailed models and interactive displays. See how
                          modern reactors work and discover the multiple layers
                          of safety systems that protect them.
                        </p>
                        <ul className="list-disc ml-6 mt-4 space-y-2">
                          <li>
                            Explore different reactor types, from microreactors
                            to gigawatt facilities
                          </li>
                          <li>
                            Examine real materials used in nuclear power plants
                          </li>
                          <li>
                            Learn about advanced safety features and waste
                            management solutions
                          </li>
                        </ul>
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
                      <span className="text-[#8be8d9]">
                        Zone 2: Nuclear Myths & Facts
                      </span>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="text-white space-y-4">
                        <p>
                          Get straightforward answers to your most pressing
                          questions about nuclear energy. Our expert-designed
                          displays tackle common concerns with clear, factual
                          information.
                        </p>
                        <ul className="list-disc ml-6 mt-4 space-y-2">
                          <li>
                            Interactive Q&A stations with expert responses
                          </li>
                          <li>
                            Clear explanations of safety systems and waste
                            management
                          </li>
                          <li>
                            Real-world data on nuclear energy's safety record,
                            impact, and economics
                          </li>
                        </ul>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  {/* Zone 3: Nuclear Safety - Hands-on safety demonstrations */}
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
                      <span className="text-[#8be8d9]">
                        Zone 3: Nuclear Safety
                      </span>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="text-white space-y-4">
                        <p>
                          Understand nuclear's safety systems through hands-on
                          demonstrations and real materials.
                        </p>
                        <ul className="list-disc ml-6 mt-4 space-y-2">
                          <li>
                            Explore a full-scale cross-section of a spent fuel
                            cask, showing containment barriers
                          </li>
                          <li>
                            Compare scale models of Three Mile Island,
                            Chernobyl, and Fukushima with their safety lessons
                          </li>
                          <li>
                            Measure everyday radiation with detection equipment
                          </li>
                        </ul>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  {/* Zone 4: Grid Integration - Interactive electrical grid simulation */}
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
                      <span className="text-[#8be8d9]">
                        Zone 4: Grid Integration
                      </span>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="text-white space-y-4">
                        <p>
                          Deploy nuclear plants onto a working model of the
                          electrical grid and balance supply with demand.
                        </p>
                        <ul className="list-disc ml-6 mt-4 space-y-2">
                          <li>
                            Add reactors, renewables, and batteries to power
                            cities in real-time
                          </li>
                          <li>
                            Watch demand spike during heat waves — and try to
                            keep the lights on
                          </li>
                          <li>
                            Track availability and electricity prices as you
                            adjust the energy mix
                          </li>
                        </ul>
                      </div>
                    </AccordionDetails>
                  </Accordion>

                  {/* Zone 5: Powering the World - Nuclear energy's environmental and community impact */}
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
                      <span className="text-[#8be8d9]">
                        Zone 5: Powering the World
                      </span>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="text-white space-y-4">
                        <p>
                          See how nuclear energy can transform communities and
                          conserve natural spaces and ecosystems. Experience a
                          vision of a robust, secure energy future through
                          immersive displays.
                        </p>
                        <ul className="list-disc ml-6 mt-4 space-y-2">
                          <li>Explore a full-scale nuclear battery model</li>
                          <li>
                            View our LED-enhanced mural of a nuclear-powered
                            future
                          </li>
                          <li>
                            Understand current challenges and solutions in
                            nuclear deployment
                          </li>
                        </ul>
                      </div>
                    </AccordionDetails>
                  </Accordion>

                  {/* Zone 6: Careers in Nuclear - Career exploration and industry connections */}
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
                      <span className="text-[#8be8d9]">
                        Zone 6: Careers in Nuclear
                      </span>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="text-white space-y-4">
                        <p>
                          Discover high-impact career opportunities in the
                          nuclear energy sector. From hands-on technical roles
                          to cutting-edge research positions, there's a path for
                          everyone.
                        </p>
                        <ul className="list-disc ml-6 mt-4 space-y-2">
                          <li>
                            Explore diverse career paths: operations,
                            engineering, construction, and more
                          </li>
                          <li>Learn about education and training programs</li>
                          <li>
                            Connect directly with industry professionals and
                            educational resources
                          </li>
                        </ul>
                      </div>
                    </AccordionDetails>
                  </Accordion>

                  {/* Zone 7: Our Supporters & Story - Documentary about the Roving Reactor project */}
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
                      <span className="text-[#8be8d9]">
                        Zone 7: Our Supporters & Story
                      </span>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="text-white space-y-4">
                        <p>
                          Complete your journey with our documentary about the
                          Roving Reactor project. Learn how this groundbreaking
                          exhibit came to life and meet the supporters who made
                          it possible.
                        </p>
                        <div className="mt-4">
                          <p className="text-sm text-gray-600">
                            Duration: 5 minutes, shows run continuously
                          </p>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>

                  <Image
                    className="mb-5 w-full h-auto my-3 rounded-lg"
                    src="/img/2025-img/RR_A_bw_1200.jpg"
                    alt="Roving Reactor Exhibits Illustration C"
                    width={1000}
                    height={1000}
                  />
                  <Image
                    className="mb-5 w-full h-auto my-3 rounded-lg"
                    src="/img/2025-img/RR_C_bw_1200.jpg"
                    alt="Roving Reactor Exhibits Illustration D"
                    width={1000}
                    height={1000}
                  />
                </Box>

                <Footer />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
