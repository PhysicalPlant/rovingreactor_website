"use client";
import React, { useState, useEffect } from "react";
import VideoPlayer from "../components/VideoPlayer";
import Footer from "../components/Footer";
import EmailSignup from "../components/EmailSignup";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


export default function Exhibits() {



  return (
    <>

      <div className="h-screen overflow-auto">
        {/* Background elements remain the same */}



        <main className="relative pt-[calc(3.5rem+1px)] md:pt-14 mt-6 md:mt-8 pb-0">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="col-span-1 lg:col-span-6">
                <div className="mb-4 md:mb-6">

                  <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-[2.75rem] text-white mb-4 ![line-height:2rem] md:![line-height:3rem]">Welcome to the Roving Reactor</h1>
                  <p>Explore the themed zones of the traveling exhibit—interactive displays and hands-on activities that promote nuclear energy and spark future innovators.</p>

                  {/*  Accordion Section */}
                  <Box sx={{ paddingRight: 2, paddingTop: 0, paddingBottom: 2 }} className="mt-8 mb-8">



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
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                          }
                        }}
                      >
                        <AddIcon sx={{ color: 'white' }} />
                        Zone 1: How Nuclear Works
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="text-white space-y-4">
                          <p>Journey into the heart of nuclear technology through detailed models and interactive displays. See how modern reactors work and discover the multiple layers of safety systems that protect them.</p>
                          <ul className="list-disc ml-6 mt-4 space-y-2">
                            <li>Explore different reactor types, from microreactors to gigawatt facilities</li>
                            <li>Examine real materials used in nuclear power plants</li>
                            <li>Learn about advanced safety features and waste management solutions</li>
                          </ul>
                        </div>
                      </AccordionDetails>
                    </Accordion>

                    <Accordion
                      sx={{
                        backgroundColor: 'transparent',
                        color: 'white',
                        borderTop: '1px solid rgba(149, 97, 97, 0.1)',
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
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                          }
                        }}
                      >
                        <AddIcon sx={{ color: 'white' }} />
                        Zone 2: Nuclear Myths & Facts
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="text-white space-y-4">
                          <p>Get straightforward answers to your most pressing questions about nuclear energy. Our expert-designed displays tackle common concerns with clear, factual information.</p>
                          <ul className="list-disc ml-6 mt-4 space-y-2">
                            <li>Interactive Q&A stations with expert responses</li>
                            <li>Clear explanations of safety systems and waste management</li>
                            <li>Real-world data on nuclear energy's safety record</li>
                          </ul>
                        </div>
                      </AccordionDetails>
                      </Accordion>
                         {/* virtual reality experience */}
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
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                          }
                        }}
                      >
                        <AddIcon sx={{ color: 'white' }} />
                        Zone 3: Step Into Nuclear: A VR Experience
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="text-white space-y-4">
                          <p>Step inside a nuclear facility through our state-of-the-art VR experience. Take control of reactor operations and see nuclear fission up close.</p>
                          <ul className="list-disc ml-6 mt-4 space-y-2">
                            <li>Operate a virtual control room</li>
                            <li>Walk through a microreactor system</li>
                            <li>Watch nuclear fission in action</li>
                          </ul>
                        </div>
                      </AccordionDetails>
                    </Accordion>
    {/* local and global potential */}
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
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                          }
                        }}
                      >
                        <AddIcon sx={{ color: 'white' }} />
                        Zone 4: Powering the World
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="text-white space-y-4">
                          <p>See how nuclear energy can transform communities and conserve natural spaces and ecosystems. Experience a vision of a robust, secure energy future through immersive displays.</p>
                          <ul className="list-disc ml-6 mt-4 space-y-2">
                            <li>Explore a full-scale nuclear battery model</li>
                            <li>View our LED-enhanced mural of a nuclear-powered future</li>
                            <li>Understand current challenges and solutions in nuclear deployment</li>
                          </ul>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  
                    {/* career pathways */}
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
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                          }
                        }}
                      >
                        <AddIcon sx={{ color: 'white' }} />
                        Zone 5: Careers in Nuclear
                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="text-white space-y-4">
                          <p>Discover high-impact career opportunities in the nuclear energy sector. From hands-on technical roles to cutting-edge research positions, there's a path for everyone.</p>
                          <ul className="list-disc ml-6 mt-4 space-y-2">
                            <li>Explore diverse career paths: operations, engineering, construction, and more</li>
                            <li>Learn about education and training programs</li>
                            <li>Connect directly with industry professionals and educational resources</li>
                          </ul>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                
                 
                    {/* behind the science */}
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
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                          }
                        }}
                      >
                        <AddIcon sx={{ color: 'white' }} />
                        Zone 6: Our Supporters & Story

                      </AccordionSummary>
                      <AccordionDetails>
                        <div className="text-white space-y-4">
                          <p>Complete your journey with our documentary about the Roving Reactor project. Learn how this groundbreaking exhibit came to life and meet the supporters who made it possible.</p>
                          <div className="mt-4">
                            <p className="text-sm text-gray-600">Duration: 15 minutes, shows run continuously</p>
                          </div>
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
