"use client";

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { ThemeProvider } from '@mui/material/styles';
import { soupTheme } from '../theme';
import { Box } from "@mui/material";

export default function Hosting() {
    return (
        <ThemeProvider theme={soupTheme}>
            <h1 className="text-5xl text-slate-800 mb-6 font-normal">Hosting a Soup</h1>
            <h2 className="text-4xl text-slate-700 my-6 font-normal">
                The Host Experience
            </h2>
            <div className="text-xl text-slate-700 mb-3 font-normal">
                <p >

                    Hosting a National Nuclear Soup Night is simple—provide the space, and we'll handle the rest.
                </p >
            </div>

            <div className="text-xl text-slate-700 mb-3 font-normal">
                <Box sx={{ paddingRight: 2 }} className="mb-4">
                    <h2 className="text-4xl text-slate-700 mb-3 font-normal">
                        What You Provide
                    </h2>
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
                            Your Home
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                paddingLeft: '32px'
                            }}
                        >
                            <div className="text-slate-700">
                                <p className="text-xl">
                                    Space for 6-7 people to dine comfortably
                                </p>
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
                            Your Time
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                paddingLeft: '32px'
                            }}
                        >
                            <div className="text-slate-700">
                                <p className="text-xl">
                                    Welcome guests on Wednesday, October 22, 2025
                                </p>
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
                            Your Perspective
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                paddingLeft: '32px'
                            }}
                        >
                            <div className="text-slate-700">
                                <p className="text-xl">
                                    Share your nuclear energy viewpoint
                                </p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </div>

            <div className="text-xl text-slate-700 mb-3 font-normal">
                <Box sx={{ paddingRight: 2 }} className="mb-4">
                    <h2 className="text-4xl text-slate-700 mb-3 font-normal">
                        What We Provide
                    </h2>
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
                            Complete Meal
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                paddingLeft: '32px'
                            }}
                        >
                            <div className="text-slate-700">
                                <p className="text-xl">
                                    Ready-to-serve soup, bread, vegetables, dessert, and drinks delivered to your door
                                </p>
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
                            All Supplies
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                paddingLeft: '32px'
                            }}
                        >
                            <div className="text-slate-700">
                                <p className="text-xl">
                                    Eco-friendly disposable tableware
                                </p>
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
                            Guest Coordination
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                paddingLeft: '32px'
                            }}
                        >
                            <div className="text-slate-700">
                                <p className="text-xl">
                                    We handle invitations, RSVPs, and dietary needs
                                </p>
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
                            Easy Cleanup
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                paddingLeft: '32px'
                            }}
                        >
                            <div className="text-slate-700">
                                <p className="text-xl">
                                    Everything you need for quick post-dinner tidying
                                </p>
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
                            Transportation
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                paddingLeft: '32px'
                            }}
                        >
                            <div className="text-slate-700">
                                <p className="text-xl">
                                    Rideshare credits for all guests
                                </p>
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
                            Host Gift
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                paddingLeft: '32px'
                            }}
                        >
                            <div className="text-slate-700">
                                <p className="text-xl">
                                    A token of appreciation for sharing your home
                                </p>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </div>

            <div className="text-xl text-slate-700 mb-3 font-normal">
                <Box sx={{ paddingRight: 2 }} className="mb-4">
                    <h2 className="text-4xl text-slate-700 mb-3 font-normal">
                        Cities Where We're Hosting
                    </h2>
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
                            West
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                paddingLeft: '32px'
                            }}
                        >
                            <div className="text-slate-700">
                                <ul className="list-disc list-inside">
                                    <li>Richland, WA</li>
                                    <li>Idaho Falls, ID</li>
                                    <li>Albuquerque, NM</li>
                                    <li>Los Angeles, CA</li>
                                    <li>Phoenix, AZ</li>
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
                            Midwest
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                paddingLeft: '32px'
                            }}
                        >
                            <div className="text-slate-700">
                                <div className="text-slate-700">
                                    <ul className="list-disc list-inside">
                                        <li>Chicago, IL</li>
                                        <li>Minneapolis, MN</li>
                                        <li>Columbus, OH</li>
                                        <li>Knoxville/Oak Ridge, TN</li>
                                        <li>St. Louis, MO</li>

                                    </ul>
                                </div>
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
                            South
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                paddingLeft: '32px'
                            }}
                        >
                            <div className="text-slate-700">
                                <ul className="list-disc list-inside">
                                    <li>Houston, TX</li>
                                    <li>Austin, TX</li>
                                    <li>Aiken, SC</li>
                                    <li>Huntsville, AL</li>
                                    <li>Charlotte, NC</li>
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
                            Northeast
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                paddingLeft: '32px'
                            }}
                        >
                            <div className="text-slate-700">
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

                </Box>
            </div>
            <h2 className="text-4xl text-slate-700 my-6 font-normal">
                Community Approach
            </h2>
            <div className="text-xl text-slate-700 mb-3 font-normal">
                <ul className="list-disc list-inside">
                    <li>If we receive more than 20 hosting requests, we'll seek additional sponsorship</li>
                    <li>If fewer than 20, each gathering gets more lavish</li>
                    <li>Exact addresses shared only with confirmed attendees one week before</li>
                </ul>
            </div>

            <h2 className="text-4xl text-slate-700 my-6 font-normal">
                Become a Host
            </h2>
            <div className="text-xl text-slate-700 mb-3 font-normal">
                <p>
                    Open your home for this first-of-its-kind gathering that brings together diverse perspectives on nuclear energy's future.
                </p>
                <p >
                    Host Contact Form • <a href="/contact">Contact Us</a>
                </p >
            </div>
        </ThemeProvider>
    );
} 