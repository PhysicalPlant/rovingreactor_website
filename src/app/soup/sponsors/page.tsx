"use client";
import { Accordion, AccordionSummary, AccordionDetails, ThemeProvider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { theme } from "../shared/theme";  // Import the theme

export default function Sponsors() {
    return (

        <div>
            <h1 className="text-5xl text-orange-900 mb-3 font-normal">Our Sponsors</h1>
            <p className="text-xl text-orange-950 mb-3 font-normal">
                Generation Atomic, Mothers for Nuclear, and the Roving Reactor are proud to collaborate with organizations that share our commitment to fostering dialogue, understanding, and excitement around nuclear energy. The sponsors below are generously supporting one or more of our 20 dinners.
            </p>
            <p className="text-xl text-orange-950 mb-3 font-normal">
                We thank them for their support!
            </p>
            <p className="text-xl text-orange-950 mb-3 font-normal">
                Interested in becoming a sponsor? We'd love to hear from you.

            </p>
            <a
                href="/soup/contact?from=sponsors"
                className=" text-center inline-block border-2 border-orange-900 text-orange-900 px-6 py-2 rounded-lg hover:bg-orange-900 hover:text-white transition-colors duration-200 no-underline hover:no-underline my-5"
            >
                Become a Sponsor
            </a>
            <div className="my-4 border-t border-orange-900"></div>
            <p className="text-xl text-orange-950 mb-3 font-normal">
                We're grateful to these wonderful organizations:            </p>
            <ul className="list-disc list-inside text-orange-900">
                <li>
                    <a href="https://anthropoceneinstitute.com/" className="text-orange-900 text-xl">Anthropocene Institute</a>
                </li>

            </ul>
        </div>

    );
} 