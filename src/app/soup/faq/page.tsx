"use client";
import { Accordion, AccordionSummary, AccordionDetails, ThemeProvider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { theme } from "../shared/theme";  // Import the theme

export default function FAQ() {
    return (

        <ThemeProvider theme={theme}>
            <h1 className="text-5xl text-orange-900 mb-3 font-normal">Some Common Questions</h1>

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
                        Attending
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            paddingLeft: '32px'
                        }}
                    >
                        <div className="text-orange-950">
                            See <a href="/soup/attending" className="text-orange-700 hover:underline">Attending Page</a>
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
                        Hosting
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            paddingLeft: '32px'
                        }}
                    >
                        <div className="text-orange-950">
                            See <a href="/soup/hosting" className="text-orange-700 hover:underline">Hosting Page</a>
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
                        Logistics
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            paddingLeft: '32px'
                        }}
                    >
                        <div className="text-orange-950">
                            <p className="text-xl mb-4 font-bold">
                                What should I bring?
                            </p>
                            <p className="text-xl mb-4">Just yourself, an appetite, and an open mind.
                            </p>
                            <p className="text-xl mb-4 font-bold">
                                How does transportation work?
                            </p>
                            <p className="text-xl mb-4">If you can't drive to the host's home, let us know and we'll cover your rideshare.
                            </p>
                            <p className="text-xl mb-4 font-bold">
                                What about dietary restrictions?
                            </p>
                            <p className="text-xl mb-4">We'll accommodate all needs based on your response to our preference survey.
                            </p>
                            <p className="text-xl mb-4 font-bold">How long will it last?</p>
                            <p className="text-xl mb-4">
                                Approximately 2-3 hours, flexible based on conversation flow.
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
                        The Conversation
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            paddingLeft: '32px'
                        }}
                    >
                        <div className="text-orange-950">
                            <p className="text-xl mb-4 font-bold">
                                Is there a specific discussion format?
                            </p>
                            <p className="text-xl mb-4">We'll provide conversation starters, but you can feel free to ignore them. There's no rigid structure.

                            </p>
                            <p className="text-xl mb-4 font-bold">
                                Is the conversation recorded?
                            </p>
                            <p className="text-xl mb-4">Only if all participants agree. Whether you share those recordings back to us is up to you.
                            </p>
                            <p className="text-xl mb-4 font-bold">
                                What's the expected outcome?

                            </p>
                            <p className="text-xl mb-4">Also up to you. We're hoping to foster connections and to find common ground for moving nuclear forward.
                            </p>

                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>

            <div className="text-xl  mb-3 mt-8 font-normal">

                <a
                    href="/soup/contact"
                    className="inline-block border-2 border-orange-900 text-orange-900 px-6 py-2 rounded-lg hover:bg-orange-900 hover:text-white transition-colors duration-200 no-underline hover:no-underline"
                >
                    Contact Us
                </a>
                <p className="text-xl my-8 italic text-orange-950">
                    Made possible through generous support from organizations across the nuclear ecosystem.

                </p>
            </div>
        </ThemeProvider>

    );
} 