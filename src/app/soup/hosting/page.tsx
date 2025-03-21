"use client";

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "../shared/theme";
import { Box } from "@mui/material";

export default function Hosting() {
    return (
        <ThemeProvider theme={theme}>
            <h1 className="text-5xl text-orange-900 mb-6 font-normal">Hosting a Soup</h1>
            <h2 className="text-4xl text-orange-950 my-6 font-normal">
                The Host Experience
            </h2>
            <div className="text-xl text-slate-700 mb-3 font-normal">
                <p >
                    Hosting a National Nuclear Soup Night is simple—provide the space, and we'll handle the rest.
                </p >
            </div>

            <div className="text-xl text-orange-950 mb-3 font-normal">
                <Box sx={{ paddingRight: 2 }} className="mb-4">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "rgb(30 41 59)" }} />}
                            sx={{
                                '& .MuiAccordionSummary-content': {
                                    fontSize: '1.25rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontFamily: 'Bona Nova, serif !important',
                                    fontWeight: 'bold'
                                }
                            }}
                        >
                            <AddIcon sx={{ color: "rgb(30 41 59)" }} />
                            What We Provide
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                paddingLeft: '32px'
                            }}
                        >
                            <div className="text-slate-700">
                                <ul className="list-disc list-inside">
                                    <li><strong>Complete Meal:</strong> Ready-to-serve soup, bread, vegetables, dessert, and drinks delivered to your door</li>
                                    <li><strong>All Supplies:</strong> Eco-friendly disposable tableware</li>
                                    <li><strong>Guest Coordination:</strong> We handle invitations, RSVPs, and dietary needs</li>
                                    <li><strong>Easy Cleanup:</strong> Everything you need for quick post-dinner tidying</li>
                                    <li><strong>Transportation:</strong> Rideshare credits for all guests</li>
                                    <li><strong>Host Gift:</strong> A token of appreciation for sharing your home</li>
                                </ul>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "rgb(30 41 59)" }} />}
                            sx={{
                                '& .MuiAccordionSummary-content': {
                                    fontSize: '1.25rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontFamily: 'Bona Nova, serif !important',
                                    fontWeight: 'bold'
                                }
                            }}
                        >
                            <AddIcon sx={{ color: "rgb(30 41 59)" }} />
                            What We Ask That You Provide
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                paddingLeft: '32px'
                            }}
                        >
                            <div className="text-slate-700">
                                <ul className="list-disc list-inside">
                                    <li><strong>Your Home:</strong> Space for 6-7 people to dine comfortably</li>
                                    <li><strong>Your Time:</strong> Welcome guests on Wednesday, October 22, 2025</li>
                                    <li><strong>Your Perspective:</strong> Share your nuclear energy viewpoint</li>
                                </ul>
                            </div>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "rgb(30 41 59)" }} />}
                            sx={{
                                '& .MuiAccordionSummary-content': {
                                    fontSize: '1.25rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontFamily: 'Bona Nova, serif !important',
                                    fontWeight: 'bold'
                                }
                            }}
                        >
                            <AddIcon sx={{ color: "rgb(30 41 59)" }} />
                            Cities Where We're Hosting
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                paddingLeft: '32px'
                            }}
                        >
                            <div className="text-slate-700">
                                <p>We're focusing on 20 cities with strong nuclear workforce presence, but welcome interest from other locations.
                                </p>
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
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "rgb(30 41 59)" }} />}
                            sx={{
                                '& .MuiAccordionSummary-content': {
                                    fontSize: '1.25rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontFamily: 'Bona Nova, serif !important',
                                    fontWeight: 'bold'
                                }
                            }}
                        >
                            <AddIcon sx={{ color: "rgb(30 41 59)" }} />
                            Community Approach
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                paddingLeft: '32px'
                            }}
                        >
                            <div className="text-slate-700">
                                <ul className="list-disc list-inside">
                                    <li>If we receive more than 20 hosting requests, we'll seek additional sponsorship</li>
                                    <li>If fewer than 20, each gathering gets more lavish</li>
                                    <li>Exact addresses shared only with confirmed attendees one week before</li>
                                </ul>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "rgb(30 41 59)" }} />}
                            sx={{
                                '& .MuiAccordionSummary-content': {
                                    fontSize: '1.25rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontFamily: 'Bona Nova, serif !important',
                                    fontWeight: 'bold'
                                }
                            }}
                        >
                            <AddIcon sx={{ color: "rgb(30 41 59)" }} />
                            Become a Host
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                paddingLeft: '32px'
                            }}
                        >
                            <div className="text-slate-700">
                                <p>
                                    Open your home for this first-of-its-kind gathering that brings together diverse perspectives on nuclear energy's future.
                                </p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </div>
            <div className="text-xl  mb-3 font-normal">

                <a
                    href="/contact"
                    className="inline-block border-2 border-orange-900 text-orange-900 px-6 py-2 rounded-lg hover:bg-orange-900 hover:text-white transition-colors duration-200 no-underline hover:no-underline"
                >
                    Contact Us
                </a>

            </div>
        </ThemeProvider>
    );
} 