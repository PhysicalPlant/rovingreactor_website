"use client";
import { Accordion, AccordionSummary, AccordionDetails, ThemeProvider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HdrStrongIcon from '@mui/icons-material/HdrStrong';
import HotelIcon from '@mui/icons-material/Hotel';
import { theme } from "../shared/theme";  // Import the theme
import InfoPopover from '../../components/InfoPopover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleH } from '@fortawesome/free-solid-svg-icons';

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
                        Who's Invited?
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
                                    <ul className="list-none list-inside">
                                        <li><InfoPopover
                                            header="Richland, WA"
                                            content="Home to the Pacific Northwest National Laboratory and a hub for nuclear research and innovation."
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending"
                                        >
                                            Richland, WA
                                        </InfoPopover></li>
                                        <li><InfoPopover
                                            header="Idaho Falls, ID"
                                            content="Location of the Idaho National Laboratory and a center for nuclear energy research and development."
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending"
                                        >
                                            Idaho Falls, ID
                                        </InfoPopover></li>
                                        <li><InfoPopover
                                            header="Santa Fe, NM"
                                            content="A city in New Mexico known for its nuclear research facilities."
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending"
                                        >
                                            Santa Fe, NM
                                        </InfoPopover></li>
                                        <li><InfoPopover
                                            header="Los Angeles, CA"
                                            content="A city in California known for its university and proximity to the Pacific Ocean."
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending"
                                        >
                                            Los Angeles, CA
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
                                                >
                                                    San Luis Obispo, CA
                                                </InfoPopover>
                                            </div>
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
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending"
                                        >
                                            Chicago, IL
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
                                                >
                                                    St. Paul, MN
                                                </InfoPopover>
                                            </div>
                                        </li>
                                        <li><InfoPopover
                                            header="Columbus, OH"
                                            content="A city in Ohio known for its university and proximity to the Ohio River."
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending"
                                        >
                                            Columbus, OH
                                        </InfoPopover></li>
                                        <li><InfoPopover
                                            header="Knoxville/Oak Ridge, TN"
                                            content="A city in Tennessee known for its proximity to the Great Smoky Mountains."
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending"
                                        >
                                            Knoxville/Oak Ridge, TN
                                        </InfoPopover></li>
                                        <li><InfoPopover
                                            header="St. Louis, MO"
                                            content="A city in Missouri known for its university and proximity to the Mississippi River."
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending"
                                        >
                                            St. Louis, MO
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
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending"
                                        >
                                            Houston, TX
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
                                                >
                                                    Austin, TX
                                                </InfoPopover>
                                            </div>
                                        </li>
                                        <li><InfoPopover
                                            header="Aiken, SC"
                                            content="A city in South Carolina known for its university and proximity to the Atlantic Ocean."
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending"
                                        >
                                            Aiken, SC
                                        </InfoPopover></li>
                                        <li><InfoPopover
                                            header="Huntsville, AL"
                                            content="A city in Alabama known for its proximity to the Appalachian Mountains."
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending"
                                        >
                                            Huntsville, AL
                                        </InfoPopover></li>
                                        <li><InfoPopover
                                            header="Charlotte, NC"
                                            content="A city in North Carolina known for its university and proximity to the Atlantic Ocean."
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending"
                                        >
                                            Charlotte, NC
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
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending"
                                        >
                                            Boston, MA
                                        </InfoPopover></li>
                                        <li><InfoPopover
                                            header="Pittsburgh, PA"
                                            content="A city in Pennsylvania known for its university and proximity to the Allegheny Mountains."
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending"
                                        >
                                            Pittsburgh, PA
                                        </InfoPopover></li>
                                        <li><InfoPopover
                                            header="Washington, D.C."
                                            content="A city in the District of Columbia known for its proximity to the Potomac River."
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending"
                                        >
                                            Washington, D.C.
                                        </InfoPopover></li>
                                        <li><InfoPopover
                                            header="Schenectady, NY"
                                            content="A city in New York known for its proximity to the Hudson River."
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending"
                                        >
                                            Schenectady, NY
                                        </InfoPopover></li>
                                        <li><InfoPopover
                                            header="Wilmington, NC"
                                            content="A city in North Carolina known for its university and proximity to the Atlantic Ocean."
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending"
                                        >
                                            Wilmington, NC
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
                                <li><strong>Attend:</strong> Join us November 12th for food and conversation!</li>
                                <li><strong>Not available?</strong> We'll keep you on next year's list.</li>

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
                    href="/soup/contact?from=attending"
                    className="inline-block border-2 border-orange-900 text-orange-900 px-6 py-2 rounded-lg hover:bg-orange-900 hover:text-white transition-colors duration-200 no-underline hover:no-underline"
                >
                    Count Me In
                </a>

            </div>
        </ThemeProvider>

    );
} 