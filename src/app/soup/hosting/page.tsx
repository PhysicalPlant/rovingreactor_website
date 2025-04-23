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
                                    <li><strong>Help with Dinner:</strong> Each meal ideally includes soup, bread, veggies, and drinks. We can provide as much of that as you like.</li>
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
                            Our 20 Soup Cities
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
                                                content="Richland drives nuclear progress with Columbia Generating Station and an Energy Northwest–Amazon small modular reactor project advancing innovation in carbon-free energy.
"
                                                linkText="Interested in hosting?"
                                                linkHref="/soup/contact?from=hosting&city=Richland"
                                            >
                                                <span className="text-orange-700">Richland, WA</span>
                                            </InfoPopover></li>
                                            <li><InfoPopover
                                                header="Idaho Falls, ID"
                                                content="Idaho Falls spearheads nuclear innovation with Idaho National Laboratory, building on EBR-I, the first reactor to generate electricity, and advancing new reactor technologies."
                                                linkText="Interested in hosting?"
                                                linkHref="/soup/contact?from=hosting&city=Idaho Falls"
                                            >
                                                <span className="text-orange-700">Idaho Falls, ID</span>
                                            </InfoPopover></li>
                                            <li><InfoPopover
                                                header="Santa Fe, NM"
                                                content="Santa Fe fosters nuclear policy dialogue and innovation, bridging advocacy, education, and collaboration with nearby Los Alamos and Sandia National Laboratories."
                                                linkText="Interested in hosting?"
                                                linkHref="/soup/contact?from=hosting&city=Santa Fe"
                                            >
                                                <span className="text-orange-700">Santa Fe, NM</span>
                                            </InfoPopover></li>
                                            <li><InfoPopover
                                                header="Los Angeles, CA"
                                                content="Los Angeles shaped early nuclear progress with 1950s reactor experiments at Santa Susana and now explores advanced reactors to meet modern clean energy goals."
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
                                                content="Chicago launched the nuclear age with the first self-sustained chain reaction in 1942 and continues to innovate via Argonne National Lab and industry leadership."
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
                                                                <p>St. Paul leverages nuclear power through Xcel Energy's Prairie Island and Monticello plants to support the region's clean energy goals and grid reliability. It's also home to Generation Atomic.
                                                                </p>
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
                                                content="Columbus contributes to nuclear advancement through Battelle's national lab management and Ohio State University's reactor program, uniting industry innovation with academic training."
                                                linkText="Interested in hosting?"
                                                linkHref="/soup/contact?from=hosting&city=Columbus"
                                            >
                                                <span className="text-orange-700">Columbus, OH</span>
                                            </InfoPopover></li>
                                            <li><InfoPopover
                                                header="Knoxville/Oak Ridge, TN"
                                                content="Knoxville–Oak Ridge anchors nuclear research and industry with Oak Ridge National Lab's advanced reactor and isotope programs and TVA's pursuit of small modular reactors."
                                                linkText="Interested in hosting?"
                                                linkHref="/soup/contact?from=hosting&city=Knoxville"
                                            >
                                                <span className="text-orange-700">Knoxville/Oak Ridge, TN</span>
                                            </InfoPopover></li>
                                            <li><InfoPopover
                                                header="St. Louis, MO"
                                                content="St. Louis bolsters nuclear energy through Ameren's Callaway plant and plans for next-generation reactors, expanding Missouri's commitment to clean, reliable power."
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
                                                content="Houston extends its energy leadership to nuclear power, integrating the South Texas Project's steady output and pursuing advanced reactors for deep decarbonization."
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
                                                content="Aiken plays a pivotal role at the Savannah River Site, where a national lab drives materials management, environmental cleanup, and innovation in reactor technology."
                                                linkText="Interested in hosting?"
                                                linkHref="/soup/contact?from=hosting&city=Aiken"
                                            >
                                                <span className="text-orange-700">Aiken, SC</span>
                                            </InfoPopover></li>
                                            <li><InfoPopover
                                                header="Huntsville, AL"
                                                content="Huntsville propels nuclear technology for space exploration at NASA's Marshall Space Flight Center, developing nuclear propulsion and power systems that bridge aerospace and energy."
                                                linkText="Interested in hosting?"
                                                linkHref="/soup/contact?from=hosting&city=Huntsville"
                                            >
                                                <span className="text-orange-700">Huntsville, AL</span>
                                            </InfoPopover></li>
                                            <li><InfoPopover
                                                header="Charlotte, NC"
                                                content="Charlotte serves as a nuclear industry hub, with Duke Energy's nuclear headquarters and a cluster of engineering firms driving modern reactor design and operations."
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
                                                content="Boston cultivates nuclear innovation with MIT's research reactor and engineering programs, alongside startups and policy initiatives advancing reactor technology and clean energy strategies."
                                                linkText="Interested in hosting?"
                                                linkHref="/soup/contact?from=hosting&city=Boston"
                                            >
                                                <span className="text-orange-700">Boston, MA</span>
                                            </InfoPopover></li>
                                            <li><InfoPopover
                                                header="Pittsburgh, PA"
                                                content="Pittsburgh fuels nuclear innovation with Westinghouse's reactor technology headquarters, nearby Penn State, and the legacy of Shippingport, America's first commercial nuclear power plant."
                                                linkText="Interested in hosting?"
                                                linkHref="/soup/contact?from=hosting&city=Pittsburgh"
                                            >
                                                <span className="text-orange-700">Pittsburgh, PA</span>
                                            </InfoPopover></li>
                                            <li><InfoPopover
                                                header="Washington, D.C."
                                                content="Washington shapes nuclear policy and regulation, with federal agencies and industry organizations guiding safety standards, innovation, and deployment nationwide."
                                                linkText="Interested in hosting?"
                                                linkHref="/soup/contact?from=hosting&city=Washington"
                                            >
                                                <span className="text-orange-700">Washington, D.C.</span>
                                            </InfoPopover></li>
                                            <li><InfoPopover
                                                header="Schenectady, NY"
                                                content="Schenectady pioneered civilian nuclear power through General Electric's early reactor projects and continues contributing via Knolls Atomic Power Lab's naval reactor development."
                                                linkText="Interested in hosting?"
                                                linkHref="/soup/contact?from=hosting&city=Schenectady"
                                            >
                                                <span className="text-orange-700">Schenectady, NY</span>
                                            </InfoPopover></li>
                                            <li><InfoPopover
                                                header="Wilmington, NC"
                                                content="Wilmington leads in nuclear technology as GE Hitachi's headquarters, where advanced reactor designs and fuel innovations are developed for global carbon-free power."
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