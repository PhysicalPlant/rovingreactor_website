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
                            <p className="text-xl mb-4 font-bold">
                                Who can attend?
                            </p>
                            <p className="text-xl mb-4">We'll begin with curated invitations across six nuclear subcommunities (Research, Regulation, Industry, Investment, Advocacy, Education) but welcome anyone interested through our online form.
                            </p>
                            <p className="text-xl mb-4 font-bold">
                                Which cities?
                            </p>
                            <p className="text-xl mb-2">
                                We're focusing on 20 cities with strong nuclear workforce presence, but welcome interest from other locations.
                            </p>
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
                                    Participating Cities
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        paddingLeft: '32px'
                                    }}
                                >
                                    <div className="text-orange-950">
                                        <p className="mt-4 mb-1"><strong>West</strong></p>
                                        <ul className="list-disc list-inside">
                                            <li>Richland, WA</li>
                                            <li>Idaho Falls, ID</li>
                                            <li>Albuquerque, NM</li>
                                            <li>Los Angeles, CA</li>
                                            <li>Phoenix, AZ</li>
                                        </ul>
                                        <p className="mt-4 mb-1"><strong>Midwest</strong></p>
                                        <ul className="list-disc list-inside">
                                            <li>Chicago, IL</li>
                                            <li>Minneapolis, MN</li>
                                            <li>Columbus, OH</li>
                                            <li>Knoxville/Oak Ridge, TN</li>
                                            <li>St. Louis, MO</li>
                                        </ul>
                                        <p className="mt-4 mb-1"><strong>South</strong></p>
                                        <ul className="list-disc list-inside">
                                            <li>Houston, TX</li>
                                            <li>Austin, TX</li>
                                            <li>Aiken, SC</li>
                                            <li>Huntsville, AL</li>
                                            <li>Charlotte, NC</li>
                                        </ul>
                                        <p className="mt-4 mb-1"><strong>Northeast</strong></p>
                                        <ul className="list-disc list-inside">
                                            <li>Boston, MA</li>
                                            <li>Pittsburgh, PA</li>
                                            <li>Washington, D.C.</li>
                                            <li>Schenectady, NY</li>
                                            <li>Wilmington, NC</li>
                                        </ul>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <p className="text-xl mb-4 mt-4 font-bold">
                                How do you ensure diverse perspectives?

                            </p>
                            <p className="text-xl mb-4">
                                We coordinate guest lists to maximize variety, aiming for representation from different sectors at each dinner.

                            </p>
                            <p className="text-xl mb-4 mt-4 font-bold">
                                Can I suggest others to attend?

                            </p>
                            <p className="text-xl mb-4">
                                Certainly. Send any referrals that help bring a balanced mix of perspectives.

                            </p>
                            <p className="text-xl mb-4 mt-4 font-bold">
                                What if I can't attend on October 22?

                            </p>
                            <p className="text-xl mb-4">
                                We'll be disappointed but keep you on the list for next year.
                            </p>
                            <p className="text-xl mb-4 mt-4 font-bold">
                                When will I know the location?


                            </p>
                            <p className="text-xl mb-4">
                                We'll share addresses with confirmed attendees about one week before the event.
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
                            <p className="text-xl mb-4">We'll provide rideshare credits for all participants.
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
                        Hosting
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            paddingLeft: '32px'
                        }}
                    >
                        <div className="text-orange-950">
                            <p className="text-xl mb-4 font-bold">
                                What do I need to provide as a host?
                            </p>
                            <p className="text-xl mb-4">Just your space and your presence. We'll handle everything else.
                            </p>
                            <p className="text-xl mb-4 font-bold">
                                Will I need to prepare food?
                            </p>
                            <p className="text-xl mb-4">Nope. All food arrives ready to serve.
                            </p>
                            <p className="text-xl mb-4 font-bold">
                                How much cleanup is involved?
                            </p>
                            <p className="text-xl mb-4">Minimal. We'll use eco-friendly disposables and provide cleanup supplies.
                            </p>
                            <p className="text-xl mb-4 font-bold">Will I know who's coming to my home?
                            </p>
                            <p className="text-xl mb-4">
                                Absolutely, about two weeks in advance.
                            </p>
                            <p className="text-xl mb-4 font-bold">What if I can't host after committing?
                            </p>
                            <p className="text-xl mb-4">
                                Just let us know ASAP so we can make alternate arrangements.
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