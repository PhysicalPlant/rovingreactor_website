"use client";
import { Accordion, AccordionSummary, AccordionDetails, ThemeProvider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { theme } from "./shared/theme";  // Import the theme

export default function Soup() {
    return (

        <ThemeProvider theme={theme}>
            <h1 className="text-5xl text-orange-900 mb-3 font-normal">National Nuclear Soup Night</h1>
            <h3 className="text-3xl text-orange-950 mb-6 font-normal">Wednesday, October 22, 2025</h3>

            <div className="text-xl text-slate-700 mb-3 font-normal">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "rgb(30 41 59)" }} />}
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
                        <AddIcon sx={{ color: "rgb(30 41 59)" }} />
                        The Concept
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            paddingLeft: '32px'
                        }}
                    >
                        <div className="text-slate-700">
                            <p className="text-xl mb-4">
                                On the Wednesday of this year's Nuclear Science Week, we want to fill 20 dining rooms across America with thoughtful people from the nuclear energy ecosystem for an evening of hot soup and meaningful conversation about where nuclear energy is headed and how to tell its story.
                            </p>
                            <p className="text-xl">
                                Also it's a chance for people from different habitats of nuclear to meet each other: A night to connect with fellow travelers from research, regulation, builders & operators (from welders to CEOs), investment, advocacy, and education, and a chance to explore common ground while respectfully acknowledging different perspectives on nuclear's future.
                            </p>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "rgb(30 41 59)" }} />}
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
                        <AddIcon sx={{ color: "rgb(30 41 59)" }} />
                        How It Works
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            paddingLeft: '32px'
                        }}
                    >
                        <div className="text-slate-700">
                            <ul className="text-xl list-disc list-inside">
                                <li>20 simultaneous soup nights in 20 cities hosted in private homes nationwide</li>
                                <li>6 attendees per gathering, spanning different nuclear energy expertise</li>
                                <li>All food, drinks, and transportation provided</li>
                                <li>No hassle for hosts—we handle everything</li>
                            </ul>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "rgb(30 41 59)" }} />}
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
                        <AddIcon sx={{ color: "rgb(30 41 59)" }} />
                        The Experience
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            paddingLeft: '32px'
                        }}
                    >
                        <div className="text-slate-700">
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
            <div className="text-xl text-slate-700 mb-3 font-normal">
                <p className="mb-4">
                    Whether you're in research, regulation, industry, investment, advocacy, or education—we want to bring nuclear's many voices to the table.
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
                </div>
            </div>
        </ThemeProvider>

    );
} 