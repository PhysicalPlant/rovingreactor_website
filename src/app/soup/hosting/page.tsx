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
            <h2 className="text-4xl text-orange-950 mb-6 font-normal">
                The Host Experience
            </h2>
            <div className="text-xl text-orange-950 mb-3 font-normal">
                <p>
                    Hosting a National Nuclear Soup Night is simple—provide the space, and we'll handle the rest.
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
                            What We Provide
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                paddingLeft: '32px'
                            }}
                        >
                            <div className="text-orange-950">
                                <ul className="list-disc list-inside">
                                    <li><strong>Full Dinner Package:</strong> Soup, bread, vegetables, dessert, and drinks delivered to your door</li>
                                    <li><strong>Eco-Friendly Supplies:</strong> All tableware included</li>
                                    <li><strong>Guest Management:</strong> We handle invitations, RSVPs, and dietary needs</li>
                                    <li><strong>Simple Cleanup:</strong> Post-dinner tidying supplies provided</li>
                                    <li><strong>Transportation:</strong> Rideshare credits for guests</li>
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
                            What We Ask That You Provide
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                paddingLeft: '32px'
                            }}
                        >
                            <div className="text-orange-950">
                                <ul className="list-disc list-inside">
                                    <li><strong>Your Home:</strong> Space for 6-7 people to dine comfortably</li>
                                    <li><strong>Your Time:</strong> Welcome guests on Wednesday, November 12th, 2025</li>
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
                            Cities Where We're Hosting
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
                                        <ul className="list-none list-inside">
                                            <li><InfoPopover
                                                header="Richland, WA"
                                                content="Home to the Pacific Northwest National Laboratory and a hub for nuclear research and innovation."
                                                linkText="Interested in hosting?"
                                                linkHref="/soup/contact?from=hosting&city=Richland"
                                            >
                                                <span className="text-orange-700">Richland, WA</span>
                                            </InfoPopover></li>
                                            <li><InfoPopover
                                                header="Idaho Falls, ID"
                                                content="Location of the Idaho National Laboratory and a center for nuclear energy research and development."
                                                linkText="Interested in hosting?"
                                                linkHref="/soup/contact?from=hosting&city=Idaho Falls"
                                            >
                                                <span className="text-orange-700">Idaho Falls, ID</span>
                                            </InfoPopover></li>
                                            <li><InfoPopover
                                                header="Santa Fe, NM"
                                                content="A city in New Mexico known for its nuclear research facilities."
                                                linkText="Interested in hosting?"
                                                linkHref="/soup/contact?from=hosting&city=Santa Fe"
                                            >
                                                <span className="text-orange-700">Santa Fe, NM</span>
                                            </InfoPopover></li>
                                            <li><InfoPopover
                                                header="Los Angeles, CA"
                                                content="A city in California known for its university and proximity to the Pacific Ocean."
                                                linkText="Interested in hosting?"
                                                linkHref="/soup/contact?from=hosting&city=Los Angeles"
                                            >
                                                <span className="text-orange-700">Los Angeles, CA</span>
                                            </InfoPopover></li>
                                            <li className="flex items-center gap-2">
                                                <div className="cursor-pointer">
                                                    <InfoPopover
                                                        header="San Luis Obispo, CA"
                                                        content={
                                                            <div>
                                                                <p>Our first confirmed Nuclear Soup location! Join us in this beautiful Central California city, home to Diablo Canyon Power Plant.</p>
                                                                <p className="flex items-center gap-2 mt-4">
                                                                    <FontAwesomeIcon
                                                                        icon={faCircleH}
                                                                        className="text-orange-900"
                                                                        style={{ fontSize: '1rem' }}
                                                                    />
                                                                    This city already has a host
                                                                </p>
                                                            </div>
                                                        }
                                                        linkText="Want to attend?"
                                                        linkHref="/soup/contact?from=attending&city=San Luis Obispo"
                                                    >
                                                        <span className="text-orange-700">San Luis Obispo, CA</span>
                                                    </InfoPopover>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faCircleH}
                                                    className="text-orange-900"
                                                    style={{ fontSize: '1rem' }}
                                                />
                                            </li>
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
                                        <ul className="list-none list-inside">
                                            <li><InfoPopover
                                                header="Chicago, IL"
                                                content="A city in Illinois known for its university and proximity to the Mississippi River."
                                                linkText="Interested in hosting?"
                                                linkHref="/soup/contact?from=hosting&city=Chicago"
                                            >
                                                <span className="text-orange-700">Chicago, IL</span>
                                            </InfoPopover></li>
                                            <li className="flex items-center gap-2">
                                                <div className="cursor-pointer">
                                                    <InfoPopover
                                                        header="St. Paul, MN"
                                                        content={
                                                            <div>
                                                                <p>Join us in Minnesota's capital city for an evening of engaging nuclear energy discussion and delicious soup.</p>
                                                                <p className="flex items-center gap-2 mt-4">
                                                                    <FontAwesomeIcon
                                                                        icon={faCircleH}
                                                                        className="text-orange-900"
                                                                        style={{ fontSize: '1rem' }}
                                                                    />
                                                                    This city already has a host
                                                                </p>
                                                            </div>
                                                        }
                                                        linkText="Want to attend?"
                                                        linkHref="/soup/contact?from=attending&city=St. Paul"
                                                    >
                                                        <span className="text-orange-700">St. Paul, MN</span>
                                                    </InfoPopover>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faCircleH}
                                                    className="text-orange-900"
                                                    style={{ fontSize: '1rem' }}
                                                />
                                            </li>
                                            <li><InfoPopover
                                                header="Columbus, OH"
                                                content="A city in Ohio known for its university and proximity to the Ohio River."
                                                linkText="Interested in hosting?"
                                                linkHref="/soup/contact?from=hosting&city=Columbus"
                                            >
                                                <span className="text-orange-700">Columbus, OH</span>
                                            </InfoPopover></li>
                                            <li><InfoPopover
                                                header="Knoxville/Oak Ridge, TN"
                                                content="A city in Tennessee known for its proximity to the Great Smoky Mountains."
                                                linkText="Interested in hosting?"
                                                linkHref="/soup/contact?from=hosting&city=Knoxville"
                                            >
                                                <span className="text-orange-700">Knoxville/Oak Ridge, TN</span>
                                            </InfoPopover></li>
                                            <li><InfoPopover
                                                header="St. Louis, MO"
                                                content="A city in Missouri known for its university and proximity to the Mississippi River."
                                                linkText="Interested in hosting?"
                                                linkHref="/soup/contact?from=hosting&city=St. Louis"
                                            >
                                                <span className="text-orange-700">St. Louis, MO</span>
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
                                    <strong>South</strong>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        paddingLeft: '32px'
                                    }}
                                >
                                    <div className="text-orange-950">
                                        <ul className="list-none list-inside">
                                            <li><InfoPopover
                                                header="Houston, TX"
                                                content="A city in Texas known for its energy industry and proximity to the Gulf of Mexico."
                                                linkText="Interested in hosting?"
                                                linkHref="/soup/contact?from=hosting&city=Houston"
                                            >
                                                <span className="text-orange-700">Houston, TX</span>
                                            </InfoPopover></li>
                                            <li className="flex items-center gap-2">
                                                <div className="cursor-pointer">
                                                    <InfoPopover
                                                        header="Austin, TX"
                                                        content={
                                                            <div>
                                                                <p>Experience Nuclear Soup in the heart of Texas! Join us in this vibrant city known for innovation and technology.</p>
                                                                <p className="flex items-center gap-2 mt-4">
                                                                    <FontAwesomeIcon
                                                                        icon={faCircleH}
                                                                        className="text-orange-900"
                                                                        style={{ fontSize: '1rem' }}
                                                                    />
                                                                    This city already has a host
                                                                </p>
                                                            </div>
                                                        }
                                                        linkText="Want to attend?"
                                                        linkHref="/soup/contact?from=attending&city=Austin"
                                                    >
                                                        <span className="text-orange-700">Austin, TX</span>
                                                    </InfoPopover>
                                                </div>
                                                <FontAwesomeIcon
                                                    icon={faCircleH}
                                                    className="text-orange-900"
                                                    style={{ fontSize: '1rem' }}
                                                />
                                            </li>
                                            <li><InfoPopover
                                                header="Aiken, SC"
                                                content="A city in South Carolina known for its university and proximity to the Atlantic Ocean."
                                                linkText="Interested in hosting?"
                                                linkHref="/soup/contact?from=hosting&city=Aiken"
                                            >
                                                <span className="text-orange-700">Aiken, SC</span>
                                            </InfoPopover></li>
                                            <li><InfoPopover
                                                header="Huntsville, AL"
                                                content="A city in Alabama known for its proximity to the Appalachian Mountains."
                                                linkText="Interested in hosting?"
                                                linkHref="/soup/contact?from=hosting&city=Huntsville"
                                            >
                                                <span className="text-orange-700">Huntsville, AL</span>
                                            </InfoPopover></li>
                                            <li><InfoPopover
                                                header="Charlotte, NC"
                                                content="A city in North Carolina known for its university and proximity to the Atlantic Ocean."
                                                linkText="Interested in hosting?"
                                                linkHref="/soup/contact?from=hosting&city=Charlotte"
                                            >
                                                <span className="text-orange-700">Charlotte, NC</span>
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
                                    <strong>Northeast</strong>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        paddingLeft: '32px'
                                    }}
                                >
                                    <div className="text-orange-950">
                                        <ul className="list-none list-inside">
                                            <li><InfoPopover
                                                header="Boston, MA"
                                                content="A city in Massachusetts known for its university and proximity to the Atlantic Ocean."
                                                linkText="Interested in hosting?"
                                                linkHref="/soup/contact?from=hosting&city=Boston"
                                            >
                                                <span className="text-orange-700">Boston, MA</span>
                                            </InfoPopover></li>
                                            <li><InfoPopover
                                                header="Pittsburgh, PA"
                                                content="A city in Pennsylvania known for its university and proximity to the Allegheny Mountains."
                                                linkText="Interested in hosting?"
                                                linkHref="/soup/contact?from=hosting&city=Pittsburgh"
                                            >
                                                <span className="text-orange-700">Pittsburgh, PA</span>
                                            </InfoPopover></li>
                                            <li><InfoPopover
                                                header="Washington, D.C."
                                                content="A city in the District of Columbia known for its proximity to the Potomac River."
                                                linkText="Interested in hosting?"
                                                linkHref="/soup/contact?from=hosting&city=Washington"
                                            >
                                                <span className="text-orange-700">Washington, D.C.</span>
                                            </InfoPopover></li>
                                            <li><InfoPopover
                                                header="Schenectady, NY"
                                                content="A city in New York known for its proximity to the Hudson River."
                                                linkText="Interested in hosting?"
                                                linkHref="/soup/contact?from=hosting&city=Schenectady"
                                            >
                                                <span className="text-orange-700">Schenectady, NY</span>
                                            </InfoPopover></li>
                                            <li><InfoPopover
                                                header="Wilmington, NC"
                                                content="A city in North Carolina known for its university and proximity to the Atlantic Ocean."
                                                linkText="Interested in hosting?"
                                                linkHref="/soup/contact?from=hosting&city=Wilmington"
                                            >
                                                <span className="text-orange-700">Wilmington, NC</span>
                                            </InfoPopover></li>
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
                            Logistics
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                paddingLeft: '32px'
                            }}
                        >
                            <div className="text-orange-950">
                                <ul className="list-disc list-inside">
                                    <li>If we receive more than 20 hosting requests, we'll seek additional sponsorship</li>
                                    <li>If fewer than 20, each gathering gets more lavish</li>
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
                    Open your home for this first-of-its-kind gathering that brings together diverse perspectives on nuclear energy's future.
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