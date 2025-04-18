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
            <h3 className="text-3xl text-orange-950 mb-6 font-normal">Wednesday, November 12, 2025</h3>
            <div className="flex flex-row items-center justify-center gap-2 md:gap-4 mb-6 mx-auto">
                <InfoPopover
                    content={
                        <div>
                            <p>Generation Atomic is a non-profit organization dedicated to educating and inspiring the public about nuclear energy.</p>
                        </div>
                    }
                    linkText="Visit Website"
                    linkHref="https://www.generationatomic.org"
                >
                    <div className="cursor-pointer w-[100px] md:w-[160px] flex items-center justify-center">
                        <Image
                            src="/img/gen-atomic-transparent-logo.png"
                            alt="Generation Atomic Logo"
                            width={160}
                            height={160}
                            className="w-auto h-[50px] md:h-[140px] object-contain"
                        />
                    </div>
                </InfoPopover>
                <AddIcon sx={{
                    color: "rgb(124 45 18)",
                    fontSize: "2rem",
                    '@media (min-width: 768px)': {
                        fontSize: "3rem"
                    }
                }} />
                <InfoPopover
                    content={
                        <div>
                            <p>Mothers for Nuclear is a community of mothers advocating for nuclear power as a crucial tool for protecting our children's future.</p>
                        </div>
                    }
                    linkText="Visit Website"
                    linkHref="https://www.mothersfornuclear.org"
                >
                    <div className="cursor-pointer w-[100px] md:w-[160px] flex items-center justify-center">
                        <Image
                            src="/img/PGE_Mothers_Nuclear_logo-FULL.png"
                            alt="Mothers for Nuclear Logo"
                            width={160}
                            height={160}
                            className="w-auto h-[50px] md:h-[140px] object-contain"
                        />
                    </div>
                </InfoPopover>
                <AddIcon sx={{
                    color: "rgb(124 45 18)",
                    fontSize: "2rem",
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
                    <div className="cursor-pointer w-[100px] md:w-[160px] flex items-center justify-center">
                        <Image
                            src="/img/RR-logo-vector-black.svg"
                            alt="Roving Reactor Logo"
                            width={160}
                            height={160}
                            className="w-auto h-[50px] md:h-[140px] object-contain"
                        />
                    </div>
                </InfoPopover>
            </div>
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
                                On a Wednesday evening this November, <a href="https://www.generationatomic.org/" rel="noopener noreferrer" className="text-orange-700 hover:text-orange-900 no-underline hover:underline">Generation Atomic</a>, <a href="https://www.mothersfornuclear.org/" rel="noopener noreferrer" className="text-orange-700 hover:text-orange-900 no-underline hover:underline">Mothers for Nuclear</a>, and the <a href="https://www.rovingreactor.org/" rel="noopener noreferrer" className="text-orange-700 hover:text-orange-900 no-underline hover:underline">Roving Reactor Project</a> want to fill 20 dining rooms across America with thoughtful people from the nuclear energy ecosystem for an evening of hot soup and meaningful conversation about where nuclear energy is headed and how to tell its story.
                            </p>
                            <p className="text-xl">
                                Also it's a chance for people from different habitats of nuclear to meet each other: A night to connect with fellow travelers from research, regulation, builders & operators (from welders to CEOs), investment, advocacy, and education, and a chance to explore common ground while respectfully acknowledging different perspectives on nuclear's future.
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
                                <li>20 simultaneous soup nights in 20 cities hosted in private homes nationwide</li>
                                <li>6 attendees per gathering, spanning different nuclear energy expertise</li>
                                <li>All food, drinks, and transportation provided</li>
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
                                <li>Food - Homemade soup, homemade bread, and roasted vegetables</li>
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
                    Whether you're in <strong>research, regulation, industry, investment, advocacy,</strong> or <strong>education</strong>—we want to bring nuclear's many voices to the table.
                </p>
                <div className="flex flex-col gap-4 max-w-md">
                    <a
                        href="/soup/attending"
                        className="w-full text-center inline-block border-2 border-orange-900 text-orange-900 px-6 py-2 rounded-lg hover:bg-orange-900 hover:text-white transition-colors duration-200 no-underline hover:no-underline"
                    >
                        Learn more about attending
                    </a>
                    <a
                        href="/soup/hosting"
                        className="w-full text-center inline-block border-2 border-orange-900 text-orange-900 px-6 py-2 rounded-lg hover:bg-orange-900 hover:text-white transition-colors duration-200 no-underline hover:no-underline"
                    >
                        Interested in Hosting?
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
                        Contact Us
                    </a>
                </div>
            </div>
        </ThemeProvider>

    );
} 