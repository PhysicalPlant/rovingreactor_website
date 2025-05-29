"use client";

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "../shared/theme";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleH } from '@fortawesome/free-solid-svg-icons';
import InfoPopover from '../../components/InfoPopover';

export default function Hosting() {
    return (
        <ThemeProvider theme={theme}>
            <h1 className="text-5xl text-orange-900 mb-6 font-normal">Hosting a Soup</h1>

            <div className="text-xl text-orange-950 mb-3 font-normal">
                <p>
                    We want to make hosting as easy as possible. If you want to cook, that's terrific. If not, we'll deliver whatever you need.
                </p>
            </div>

            <div className="text-xl text-orange-950 mb-3 font-normal">
                <Box sx={{ paddingRight: 2 }} className="mb-4">
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
                            We Provide
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                paddingLeft: '32px'
                            }}
                        >
                            <div className="text-orange-950">
                                <ul className="list-disc list-inside">
                                    <li><strong>Help with Dinner:</strong> Each meal ideally includes soup, bread, veggies, and drinks. Choose from three “support packages”:
                                        <ol className="list-decimal list-inside">
                                            <li>We ship you everything.</li>
                                            <li>We help you find a local caterer.</li>
                                            <li>You do it yourself (with a stipend from us).</li>
                                        </ol>
                                        We estimate the total commitment is ≈ 6 hrs total.</li>
                                    <li><strong>Guest Management:</strong> We handle invitations, RSVPs, and dietary needs</li>
                                    <li><strong>Transportation:</strong> Rideshare credits for guests, on request</li>
                                    <li><strong>Host Gift:</strong> A thank-you for sharing your home</li>
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
                            We Ask You to Provide
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                paddingLeft: '32px'
                            }}
                        >
                            <div className="text-orange-950">
                                <ul className="list-disc list-inside">
                                    <li><strong>Your Home:</strong> Space for 6-8 people to dine comfortably</li>
                                    <li><strong>Your Time:</strong> Welcome guests at 7pm local time on Wednesday, November 12th, 2025</li>
                                    <li><strong>Your Perspective:</strong> Share your nuclear energy viewpoint</li>
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
                            Our Soup Cities
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                paddingLeft: '32px'
                            }}
                        >
                            <div className="text-orange-950">
                                <ul className="list-none list-inside">
                                    <li className="flex items-center gap-2">
                                        <div className="cursor-pointer">
                                            <InfoPopover
                                                header="San Luis Obispo, CA"
                                                content={
                                                    <div>
                                                        <p>San Luis Obispo is home to Mothers for Nuclear, as well as Diablo Canyon, California's last operating nuclear plant, central to nuclear energy research, innovation, and policy discussions.</p>
                                                        <p className="flex items-center gap-2 mt-4">
                                                            <FontAwesomeIcon
                                                                icon={faCircleH}
                                                                className="text-orange-900"
                                                                style={{ fontSize: '1rem' }}
                                                            />
                                                            This city already has a host.
                                                        </p>
                                                    </div>
                                                }
                                                linkText="Want to attend?"
                                                linkHref="/soup/contact?from=attending&city=San Luis Obispo"
                                            >
                                                <span className="text-orange-700">San Luis Obispo, CA (West)</span>
                                            </InfoPopover>
                                        </div>
                                        <FontAwesomeIcon
                                            icon={faCircleH}
                                            className="text-orange-900"
                                            style={{ fontSize: '1rem' }}
                                        />
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="cursor-pointer">
                                            <InfoPopover
                                                header="St. Paul, MN"
                                                content={
                                                    <div>
                                                        <p>St. Paul leverages nuclear power through Xcel Energy's Prairie Island and Monticello plants to support the region's clean energy goals and grid reliability. It's also home to Generation Atomic.</p>
                                                        <p className="flex items-center gap-2 mt-4">
                                                            <FontAwesomeIcon
                                                                icon={faCircleH}
                                                                className="text-orange-900"
                                                                style={{ fontSize: '1rem' }}
                                                            />
                                                            This city already has a host.
                                                        </p>
                                                    </div>
                                                }
                                                linkText="Want to attend?"
                                                linkHref="/soup/contact?from=attending&city=St. Paul"
                                            >
                                                <span className="text-orange-700">St. Paul, MN (Midwest)</span>
                                            </InfoPopover>
                                        </div>
                                        <FontAwesomeIcon
                                            icon={faCircleH}
                                            className="text-orange-900"
                                            style={{ fontSize: '1rem' }}
                                        />
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="cursor-pointer">
                                            <InfoPopover
                                                header="Austin, TX"
                                                content={
                                                    <div>
                                                        <p>Austin blends nuclear research and energy leadership, operating a TRIGA research reactor at UT Austin - and currently home to the Texas Nuclear Alliance, Aalo Atomics, and the Roving Reactor project.</p>
                                                        <p className="flex items-center gap-2 mt-4">
                                                            <FontAwesomeIcon
                                                                icon={faCircleH}
                                                                className="text-orange-900"
                                                                style={{ fontSize: '1rem' }}
                                                            />
                                                            This city already has a host.
                                                        </p>
                                                    </div>
                                                }
                                                linkText="Want to attend?"
                                                linkHref="/soup/contact?from=attending&city=Austin"
                                            >
                                                <span className="text-orange-700">Austin, TX (South)</span>
                                            </InfoPopover>
                                        </div>
                                        <FontAwesomeIcon
                                            icon={faCircleH}
                                            className="text-orange-900"
                                            style={{ fontSize: '1rem' }}
                                        />
                                    </li>
                                    <li><InfoPopover
                                        header="Washington, D.C."
                                        content="Washington shapes nuclear policy and regulation, with federal agencies and industry organizations guiding safety standards, innovation, and deployment nationwide."
                                        linkText="Interested in hosting?"
                                        linkHref="/soup/contact?from=hosting&city=Washington"
                                    >
                                        <span className="text-orange-700">Washington, D.C. (Northeast)</span>
                                    </InfoPopover></li>
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
                            Logistics
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                paddingLeft: '32px'
                            }}
                        >
                            <div className="text-orange-950">
                                <ul className="list-disc list-inside">

                                    <li>Exact addresses shared only with confirmed attendees one week before</li>
                                </ul>
                            </div>
                        </AccordionDetails>
                    </Accordion>

                </Box>
            </div>
            <div className="text-xl  mb-3 font-normal">
                <p className="text-orange-950 mb-6 text-4xl">Become a Host</p>
                <p className="text-orange-950">
                    Open your home for this first-of-its-kind gathering that brings together diverse perspectives on the future of nuclear energy.
                </p>
                <a
                    href="/soup/contact?from=hosting"
                    className="inline-block border-2 border-orange-900 text-orange-900 px-6 py-2 rounded-lg hover:bg-orange-900 hover:text-white transition-colors duration-200 no-underline hover:no-underline"
                >
                    Sign Up to Host
                </a>

            </div>
        </ThemeProvider>
    );
} 