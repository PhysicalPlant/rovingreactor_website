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
                                Join us on Wednesday, October 22, 2025, for an evening of connection with peers from across the nuclear energy ecosystem. You'll enjoy:
                            </p>
                            <ul className="text-xl list-disc list-inside">
                                <li><strong>Complete Meal:</strong> Homemade soup, artisanal bread, seasonal vegetables, and dessert</li>
                                <li><strong>Beverages:</strong> Wine, beer, and non-alcoholic options</li>
                                <li><strong>Thoughtful Conversation:</strong> Discuss nuclear's future with diverse perspectives</li>
                                <li><strong>No Cleanup:</strong> All food on compostable/recyclable serving ware</li>
                                <li><strong>Take-Home Options:</strong> Extra food to enjoy later</li>
                                <li><strong>Free Transportation:</strong> Rideshare credits provided</li>
                                <li><strong>Keepsakes:</strong> Custom wooden coasters and data visualization napkins</li>
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
                                We bring together people from across the nuclear energy ecosystem:

                            </p>
                            <ul className="text-xl list-disc list-inside">
                                <li><strong>Research:</strong> Scientists, engineers, and lab technicians</li>
                                <li><strong>Regulation:</strong> Policy experts and regulatory professionals</li>
                                <li><strong>Builders & Operators:</strong> From welders to CEOs and everyone in between</li>
                                <li><strong>Investment:</strong> Funders, developers, and project managers</li>
                                <li><strong>Advocacy:</strong> Communicators, organizers, and champions</li>
                                <li><strong>Education:</strong> Teachers, trainers, and workforce developers</li>

                            </ul>
                            <p className="text-xl mb-4 mt-8">
                                We hope each gathering includes at least four of these categories:
                            </p>
                            <h2 className="text-2xl mb-4 text-orange-950 font-bold">Selection Process</h2>
                            <ul className="text-xl list-disc list-inside">
                                <li><strong>Balanced Groups:</strong> We coordinate guest lists for diverse perspectives</li>
                                <li><strong>Open to New Voices:</strong> Both invited guests and interested newcomers welcome</li>
                                <li><strong>Suggestions Welcome:</strong> Recommend friends or colleagues</li>
                                <li><strong>Diverse Representation:</strong> Multiple generations, career stages, and perspectives</li>

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
                        <p className="mt-4 mb-4 text-orange-950"><strong>Here's what happens after you express interest:</strong>
                        </p>
                        <div className="text-orange-950">
                            <ol className="list-decimal list-inside text-orange-950">
                                <li><strong>Submit Your Information:</strong> Complete our brief interest form telling us about your role in the nuclear ecosystem and your location</li>
                                <li><strong>Selection Process:</strong> Our team reviews submissions to create balanced gatherings with diverse perspectives (typically within 2 weeks)</li>
                                <li><strong>Invitation:</strong> If selected, you'll receive an official invitation with a survey for your preferences (dietary needs, transportation, etc.)</li>
                                <li><strong>Final Details:</strong> About one week before the event, you'll receive the exact location and details about your fellow attendees</li>
                                <li><strong>Attend:</strong> Show up on October 22nd ready for good food and meaningful conversation!</li>

                            </ol>
                            <p className="mt-4 mb-4 text-orange-950">If you aren't selected for this year's event, we'll keep you on our list for next year.
                            </p>
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
                    Contact Us
                </a>

            </div>
        </ThemeProvider>

    );
} 