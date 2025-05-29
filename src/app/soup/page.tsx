"use client";
import { Accordion, AccordionSummary, AccordionDetails, ThemeProvider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { theme } from "./shared/theme";  // Import the theme
import Image from "next/image";
import InfoPopover from "@/app/components/InfoPopover";

export default function Soup() {
    return (
        <ThemeProvider theme={theme}>
            <h1 className="text-5xl text-orange-900 mb-3 font-normal">National Nuclear Soup Night</h1>
            <h3 className="text-3xl text-orange-950 mb-3 font-normal">Bringing nuclear energy's many voices to the table</h3>
            <h3 className="text-3xl text-orange-950 mb-6 font-normal">Wednesday, November 12, 2025</h3>

            <div className="text-xl text-orange-950 mb-3 font-normal">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "rgb(124 45 18)" }} />}
                        sx={{
                            '& .MuiAccordionSummary-content': {
                                margin: '0 !important',
                                fontFamily: 'Bona Nova, serif !important',
                                fontSize: '1.25rem',
                                fontWeight: 'bold',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }
                        }}
                    >
                        <AddIcon sx={{ color: "rgb(124 45 18)" }} />
                        The Concept
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            paddingLeft: '32px'
                        }}
                    >
                        <div className="text-orange-950">
                            <p className="text-xl mb-4">
                                On a Wednesday evening this November, <a href="https://www.generationatomic.org/" rel="noopener noreferrer" className="text-orange-700 hover:text-orange-900 no-underline hover:underline">Generation Atomic</a>, <a href="https://www.mothersfornuclear.org/" rel="noopener noreferrer" className="text-orange-700 hover:text-orange-900 no-underline hover:underline">Mothers for Nuclear</a>, and the <a href="https://www.rovingreactor.org/" rel="noopener noreferrer" className="text-orange-700 hover:text-orange-900 no-underline hover:underline">Roving Reactor Project</a> want to fill 20 dining rooms across America with thoughtful people from the nuclear energy ecosystem for an evening of hot soup and conversation about where nuclear energy is headed and how to tell its story.
                            </p>

                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "rgb(124 45 18)" }} />}
                        sx={{
                            '& .MuiAccordionSummary-content': {
                                margin: '0 !important',
                                fontFamily: 'Bona Nova, serif !important',
                                fontSize: '1.25rem',
                                fontWeight: 'bold',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }
                        }}
                    >
                        <AddIcon sx={{ color: "rgb(124 45 18)" }} />
                        How It Works
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            paddingLeft: '32px'
                        }}
                    >
                        <div className="text-orange-950">
                            <ul className="text-xl list-disc list-inside">
                                <li>Four simultaneous soup nights in 4 cities</li>
                                <li>Six to eight attendees per gathering, from across nuclear energy disciplines</li>
                                <li>Food, drink, and transportation provided</li>
                                <li>Interested in hosting? See below.</li>
                            </ul>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "rgb(124 45 18)" }} />}
                        sx={{
                            '& .MuiAccordionSummary-content': {
                                margin: '0 !important',
                                fontFamily: 'Bona Nova, serif !important',
                                fontSize: '1.25rem',
                                fontWeight: 'bold',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }
                        }}
                    >
                        <AddIcon sx={{ color: "rgb(124 45 18)" }} />
                        The Experience
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            paddingLeft: '32px'
                        }}
                    >
                        <div className="text-orange-950">
                            <p className="text-xl mb-4">When you arrive, you'll find:</p>
                            <ul className="text-xl list-disc list-inside">
                                <li>Food - Hearty soup, bread, and vegetables</li>
                                <li>Drinks - Alcoholic and non-alcoholic</li>
                                <li>An open forum for conversation with a range of nuclear energy perspectives</li>
                                <li>A keepsake to remember the evening</li>
                            </ul>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>

            <h2 className="text-4xl text-orange-950 my-6 font-normal">Join Us</h2>
            <div className="text-xl text-orange-950 mb-3 font-normal">
                <p className="mb-4">
                    Whether you're in <strong>research, regulation, industry, investment, advocacy, education</strong> - or whether you're a <strong>student!</strong> - we want to bring nuclear's many voices to the table.
                </p>
                <p className="mb-4">
                    Year 1 is a small-scale prototype; we'll grow based on what we learn.
                </p>
                <div className="flex  gap-2  max-w-md">
                    <a
                        href="/soup/attending"
                        className="w-full text-center inline-block border-2 border-orange-900 text-orange-900 px-6 py-2 rounded-lg hover:bg-orange-900 hover:text-white transition-colors duration-200 no-underline hover:no-underline"
                    >
                        Attend
                    </a>
                    <a
                        href="/soup/hosting"
                        className="w-full text-center inline-block border-2 border-orange-900 text-orange-900 px-6 py-2 rounded-lg hover:bg-orange-900 hover:text-white transition-colors duration-200 no-underline hover:no-underline"
                    >
                        Host
                    </a>
                    <a
                        href="/soup/sponsors"
                        className="w-full text-center inline-block border-2 border-orange-900 text-orange-900 px-6 py-2 rounded-lg hover:bg-orange-900 hover:text-white transition-colors duration-200 no-underline hover:no-underline"
                    >
                        Sponsor
                    </a>
                    <a
                        href="/soup/faq"
                        className="w-full text-center inline-block border-2 border-orange-900 text-orange-900 px-6 py-2 rounded-lg hover:bg-orange-900 hover:text-white transition-colors duration-200 no-underline hover:no-underline"
                    >
                        FAQ
                    </a>
                    <a
                        href="/soup/contact"
                        className="w-full text-center inline-block border-2 border-orange-900 text-orange-900 px-6 py-2 rounded-lg hover:bg-orange-900 hover:text-white transition-colors duration-200 no-underline hover:no-underline"
                    >
                        Contact
                    </a>
                </div>
            </div>

            {/* Wrap the header and logo row in a bordered container */}
            <div className="border border-orange-800 rounded-lg p-4 md:p-6 mt-12">
                <h3 className="text-xl text-orange-800 mb-4 md:mb-6 font-normal">Brought to you by...</h3>
                <div className="flex flex-row items-center justify-center gap-1 md:gap-4 mx-auto px-2 md:px-0">
                    <InfoPopover
                        content={
                            <div>
                                <p>Generation Atomic inspires and mobilizes advocates to build a cultural movement supporting a clean future powered by nuclear energy.</p>
                            </div>
                        }
                        linkText="Visit Website"
                        linkHref="https://www.generationatomic.org"
                    >
                        <div className="cursor-pointer w-[80px] md:w-[160px] flex items-center justify-center">
                            <Image
                                src="/img/gen-atomic-transparent-logo.png"
                                alt="Generation Atomic Logo"
                                width={160}
                                height={160}
                                className="w-auto h-[40px] md:h-[140px] object-contain"
                            />
                        </div>
                    </InfoPopover>
                    <AddIcon sx={{
                        color: "rgb(124 45 18)",
                        fontSize: "1.5rem",
                        '@media (min-width: 768px)': {
                            fontSize: "3rem"
                        }
                    }} />
                    <InfoPopover
                        content={
                            <div>
                                <p>Mothers for Nuclear champions nuclear energy as a vital solution to climate change, air pollution, and energy poverty, driven by moms protecting their children's future.</p>
                            </div>
                        }
                        linkText="Visit Website"
                        linkHref="https://www.mothersfornuclear.org"
                    >
                        <div className="cursor-pointer w-[80px] md:w-[160px] flex items-center justify-center">
                            <Image
                                src="/img/PGE_Mothers_Nuclear_logo-FULL.png"
                                alt="Mothers for Nuclear Logo"
                                width={160}
                                height={160}
                                className="w-auto h-[40px] md:h-[140px] object-contain"
                            />
                        </div>
                    </InfoPopover>
                    <AddIcon sx={{
                        color: "rgb(124 45 18)",
                        fontSize: "1.5rem",
                        '@media (min-width: 768px)': {
                            fontSize: "3rem"
                        }
                    }} />
                    <InfoPopover
                        content={
                            <div>
                                <p>The Roving Reactor Project is a traveling exhibit designed to educate and encourage action on nuclear energy.</p>
                            </div>
                        }
                        linkText="Visit Website"
                        linkHref="/about"
                    >
                        <div className="cursor-pointer w-[80px] md:w-[160px] flex items-center justify-center">
                            <Image
                                src="/img/RR-logo-vector-black.svg"
                                alt="Roving Reactor Logo"
                                width={160}
                                height={160}
                                className="w-auto h-[40px] md:h-[140px] object-contain"
                            />
                        </div>
                    </InfoPopover>
                </div>
            </div>
        </ThemeProvider>
    );
} 