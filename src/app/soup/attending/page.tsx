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
                                <li><strong>A Full Meal</strong> Soup, bread, vegetables, wine, beer, and non-alcoholic options</li>
                                <li><strong>Conversation:</strong> Share diverse perspectives on nuclear's future</li>
                                <li><strong>Convenience:</strong> No need to bring anything — we'll make attending and hosting easy and fun. Rideshare credits available.</li>
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
                                <li><strong>Students:</strong> Interested learners of any age</li>

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
                                            content="Richland drives nuclear progress with Columbia Generating Station and an Energy Northwest–Amazon small modular reactor project advancing innovation in carbon-free energy."
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending&city=Richland"
                                        >
                                            <span className="text-orange-700">Richland, WA</span>
                                        </InfoPopover></li>
                                        <li><InfoPopover
                                            header="Idaho Falls, ID"
                                            content="Idaho Falls spearheads nuclear innovation with Idaho National Laboratory, building on EBR-I, the first reactor to generate electricity, and advancing new reactor technologies."
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending&city=Idaho Falls"
                                        >
                                            <span className="text-orange-700">Idaho Falls, ID</span>
                                        </InfoPopover></li>
                                        <li><InfoPopover
                                            header="Santa Fe, NM"
                                            content="Santa Fe fosters nuclear policy dialogue and innovation, bridging advocacy, education, and collaboration with nearby Los Alamos and Sandia National Laboratories.
"
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending&city=Santa Fe"
                                        >
                                            <span className="text-orange-700">Santa Fe, NM</span>
                                        </InfoPopover></li>
                                        <li><InfoPopover
                                            header="Los Angeles, CA"
                                            content="Los Angeles shaped early nuclear progress with 1950s reactor experiments at Santa Susana and now explores advanced reactors to meet modern clean energy goals."
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending&city=Los Angeles"
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
                                                                <span className="text-orange-700">This city already has a host.</span>
                                                            </p>
                                                        </div>
                                                    }
                                                    linkText="Want to attend?"
                                                    linkHref="/soup/contact?from=attending&city=San Luis Obispo"
                                                >
                                                    <span className="text-orange-700">San Luis Obispo, CA</span>
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
                                            content="Chicago launched the nuclear age with the first self-sustained chain reaction in 1942 and continues to innovate via Argonne National Lab and industry leadership."
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending&city=Chicago"
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
                                                                <span className="text-orange-700">This city already has a host.</span>
                                                            </p>
                                                        </div>
                                                    }
                                                    linkText="Want to attend?"
                                                    linkHref="/soup/contact?from=attending&city=St. Paul"
                                                >
                                                    <span className="text-orange-700">St. Paul, MN</span>
                                                </InfoPopover>
                                            </div>
                                        </li>
                                        <li><InfoPopover
                                            header="Columbus, OH"
                                            content="Columbus contributes to nuclear advancement through Battelle's national lab management and Ohio State University's reactor program, uniting industry innovation with academic training."
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending&city=Columbus"
                                        >
                                            <span className="text-orange-700">Columbus, OH</span>
                                        </InfoPopover></li>
                                        <li><InfoPopover
                                            header="Knoxville/Oak Ridge, TN"
                                            content="Knoxville-Oak Ridge anchors nuclear research and industry with Oak Ridge National Lab's advanced reactor and isotope programs and TVA's pursuit of small modular reactors.
"
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending&city=Knoxville"
                                        >
                                            <span className="text-orange-700">Knoxville/Oak Ridge, TN</span>
                                        </InfoPopover></li>
                                        <li><InfoPopover
                                            header="St. Louis, MO"
                                            content="St. Louis bolsters nuclear energy through Ameren's Callaway plant and plans for next-generation reactors, expanding Missouri's commitment to clean, reliable power."
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending&city=St. Louis"
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
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending&city=Houston"
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
                                                                <span className="text-orange-700">This city already has a host.</span>
                                                            </p>
                                                        </div>
                                                    }
                                                    linkText="Want to attend?"
                                                    linkHref="/soup/contact?from=attending&city=Austin"
                                                >
                                                    <span className="text-orange-700">Austin, TX</span>
                                                </InfoPopover>
                                            </div>
                                        </li>
                                        <li><InfoPopover
                                            header="Aiken, SC"
                                            content="Aiken plays a pivotal role at the Savannah River Site, where a national lab drives materials management, environmental cleanup, and innovation in reactor technology."
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending&city=Aiken"
                                        >
                                            <span className="text-orange-700">Aiken, SC</span>
                                        </InfoPopover></li>
                                        <li><InfoPopover
                                            header="Huntsville, AL"
                                            content="Huntsville propels nuclear technology for space exploration at NASA's Marshall Space Flight Center, developing nuclear propulsion and power systems that bridge aerospace and energy."
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending&city=Huntsville"
                                        >
                                            <span className="text-orange-700">Huntsville, AL</span>
                                        </InfoPopover></li>
                                        <li><InfoPopover
                                            header="Charlotte, NC"
                                            content="Charlotte serves as a nuclear industry hub, with Duke Energy's nuclear headquarters and a cluster of engineering firms driving modern reactor design and operations."
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending&city=Charlotte"
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
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending&city=Boston"
                                        >
                                            <span className="text-orange-700">Boston, MA</span>
                                        </InfoPopover></li>
                                        <li><InfoPopover
                                            header="Pittsburgh, PA"
                                            content="Pittsburgh fuels nuclear innovation with Westinghouse's reactor technology headquarters, nearby Penn State, and the legacy of Shippingport, America's first commercial nuclear power plant."
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending&city=Pittsburgh"
                                        >
                                            <span className="text-orange-700">Pittsburgh, PA</span>
                                        </InfoPopover></li>
                                        <li><InfoPopover
                                            header="Washington, D.C."
                                            content="Washington shapes nuclear policy and regulation, with federal agencies and industry organizations guiding safety standards, innovation, and deployment nationwide."
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending&city=Washington"
                                        >
                                            <span className="text-orange-700">Washington, D.C.</span>
                                        </InfoPopover></li>
                                        <li><InfoPopover
                                            header="Schenectady, NY"
                                            content=" Schenectady pioneered civilian nuclear power through General Electric's early reactor projects and continues contributing via Knolls Atomic Power Lab's naval reactor development."
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending&city=Schenectady"
                                        >
                                            <span className="text-orange-700">Schenectady, NY</span>
                                        </InfoPopover></li>
                                        <li><InfoPopover
                                            header="Wilmington, NC"
                                            content="Wilmington leads in nuclear technology as GE Hitachi's headquarters, where advanced reactor designs and fuel innovations are developed for global carbon-free power."
                                            linkText="Want to attend?"
                                            linkHref="/soup/contact?from=attending&city=Wilmington"
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
                        How to Join
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            paddingLeft: '32px'
                        }}
                    >
                        <div className="text-orange-950">
                            <ul className="list-disc list-inside text-orange-950">
                                <li><strong>Let us know:</strong> In the response form, let us know a bit about yourself and which soup city works for you. (Button below)</li>
                                <li><strong>Review:</strong> Our team selects diverse participants (within 2 weeks)</li>
                                <li><strong>Invitation:</strong> We send you an invitation and a preference survey (vegetarian, etc)</li>
                                <li><strong>Details:</strong> One week before dinner, we send the location and some info about your soupmates. </li>
                                <li><strong>Attend:</strong> Join us November 12th for food and conversation!</li>
                                <li><strong>Not available?</strong> Reach out anyway and we'll send an invite for next year.</li>

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
            <div className="text-xl mb-3 font-normal">
                <a
                    href="/soup/contact?from=attending"
                    className="inline-block border-2 border-orange-900 text-orange-900 px-6 py-2 rounded-lg hover:bg-orange-900 hover:text-white transition-colors duration-200 no-underline hover:no-underline mr-4 my-2"
                >
                    Count Me In
                </a>
                <a
                    href="/soup/hosting"
                    className="inline-block border-2 border-orange-900 text-orange-900 px-6 py-2 rounded-lg hover:bg-orange-900 hover:text-white transition-colors duration-200 no-underline hover:no-underline my-2"
                >
                    Interested in Hosting?
                </a>

            </div>

        </ThemeProvider>

    );
} 