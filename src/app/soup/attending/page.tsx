"use client";
import { Accordion, AccordionSummary, AccordionDetails, ThemeProvider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { theme } from "../shared/theme";  // Import the theme

export default function Attending() {
    return (

        <ThemeProvider theme={theme}>
            <h1 className="text-5xl text-orange-900 mb-3 font-normal">Learn More About Attending</h1>

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
                        The Guest Experience
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            paddingLeft: '32px'
                        }}
                    >
                        <div className="text-orange-950">
                            <p className="text-xl mb-4">
                                Join us Wednesday, November 12, 2025, for an evening connecting with nuclear energy peers. Enjoy:

                            </p>
                            <ul className="text-xl list-disc list-inside">
                                <li><strong>Full Meal & Drinks:</strong> Soup, bread, vegetables, dessert, wine, beer, and non-alcoholic options</li>
                                <li><strong>Engaging Discussion:</strong> Share diverse perspectives on nuclear's future</li>
                                <li><strong>Convenience:</strong> Rideshare credits for all guests — and easy clean-up for hosts</li>
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
                        Who Can Attend?
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            paddingLeft: '32px'
                        }}
                    >
                        <div className="text-orange-950">
                            <p className="text-xl mb-4">
                                We hope to bring together people from across the nuclear energy ecosystem:

                            </p>
                            <ul className="text-xl list-disc list-inside">
                                <li><strong>Research:</strong> Scientists, engineers, and lab techs</li>
                                <li><strong>Regulation:</strong> Policy experts and regulatory professionals</li>
                                <li><strong>Builders & Operators:</strong> From welders to CEOs</li>
                                <li><strong>Investment:</strong> Funders, developers, and project managers</li>
                                <li><strong>Advocacy:</strong> Communicators, organizers, and champions</li>
                                <li><strong>Education:</strong> Teachers and workforce developers</li>

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
                        Participating Cities
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            paddingLeft: '32px'
                        }}
                    >
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
                                <strong>West</strong>
                            </AccordionSummary>
                            <AccordionDetails
                                sx={{
                                    paddingLeft: '32px'
                                }}
                            >
                                <div className="text-orange-950">
                                    <ul className="list-disc list-inside">
                                        <li>Richland, WA</li>
                                        <li>Idaho Falls, ID</li>
                                        <li>Santa Fe, NM</li>
                                        <li>Los Angeles, CA</li>
                                        <li>San Luis Obispo, CA</li>
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
                                <strong>Midwest</strong>
                            </AccordionSummary>
                            <AccordionDetails
                                sx={{
                                    paddingLeft: '32px'
                                }}
                            >
                                <div className="text-orange-950">
                                    <ul className="list-disc list-inside">
                                        <li>Chicago, IL</li>
                                        <li>St. Paul, MN</li>
                                        <li>Columbus, OH</li>
                                        <li>Knoxville/Oak Ridge, TN</li>
                                        <li>St. Louis, MO</li>
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
                                <strong>South</strong>
                            </AccordionSummary>
                            <AccordionDetails
                                sx={{
                                    paddingLeft: '32px'
                                }}
                            >
                                <div className="text-orange-950">
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
                                <strong>Northeast</strong>
                            </AccordionSummary>
                            <AccordionDetails
                                sx={{
                                    paddingLeft: '32px'
                                }}
                            >
                                <div className="text-orange-950">
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
                        How to Join
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            paddingLeft: '32px'
                        }}
                    >
                        <p className="mt-4 mb-4 text-orange-950"><strong>If you're interested...</strong>
                        </p>
                        <div className="text-orange-950">
                            <ul className="list-disc list-inside text-orange-950">
                                <li><strong>Submit Information:</strong> Complete our form about your nuclear role and location. (Link below)</li>
                                <li><strong>Review:</strong> Our team selects diverse participants (within 2 weeks)</li>
                                <li><strong>Invitation:</strong> We send you an invitation and a preference survey (vegetarian, etc)</li>
                                <li><strong>Details:</strong> One week before dinner, we send the location and some info about your soupmates. </li>
                                <li><strong>Attend:</strong> Join us November 12thfor food and conversation!</li>
                                <li><strong>Not selected?</strong> We'll keep you on next year's list.</li>

                            </ul>

                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>

            <h2 className="text-4xl text-orange-950 my-6 font-normal">Join Us</h2>
            <div className="text-xl text-orange-950 mb-3 font-normal">
                <p className="mb-4">
                    Connect with peers from across the nuclear energy ecosystem for an evening of conversation about the present and future of nuclear.
                </p>

            </div>
            <div className="text-xl  mb-3 font-normal">

                <a
                    href="/soup/contact"
                    className="inline-block border-2 border-orange-900 text-orange-900 px-6 py-2 rounded-lg hover:bg-orange-900 hover:text-white transition-colors duration-200 no-underline hover:no-underline"
                >
                    Count Me In
                </a>

            </div>
        </ThemeProvider>

    );
} 