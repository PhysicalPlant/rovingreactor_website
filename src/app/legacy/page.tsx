"use client";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

const accordionStyles = {
  backgroundColor: 'transparent',
  color: 'white',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  '&:before': {
    display: 'none',
  },
  '& .MuiAccordionDetails-root': {
    paddingRight: '16px',
    paddingTop: '8px',
    paddingBottom: '16px',
    paddingLeft: '0',
  },
  '& .MuiAccordionSummary-root': {
    paddingLeft: '0',
    minHeight: '48px',
    '&.Mui-expanded': {
      minHeight: '48px',
      marginBottom: '0'
    }
  },
  '& .MuiAccordionSummary-content': {
    margin: '12px 0',
    '&.Mui-expanded': {
      margin: '12px 0'
    }
  },
  '&.Mui-expanded': {
    marginTop: '0',
    marginBottom: '0'
  },
  margin: '0 !important'
};

export default function Legacy() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  // Handle hash changes (when user clicks citation links)
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        setIsAccordionOpen(true);
        // Scroll to the citation after a brief delay to allow accordion to open
        setTimeout(() => {
          const element = document.querySelector(window.location.hash);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    };

    // Check hash on initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex flex-col">
      <main className="flex-grow relative pt-[calc(3.5rem+1px)] md:pt-14 mt-6 md:mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl text-white mb-6">A Look Back at Traveling Nuclear Exhibits</h1>
            <h2 className="text-3xl text-white mb-6">— and Where We're Headed Next</h2>
            <img src="/img/YourStakeInTheAtom2.png" alt="Your Stake in the Atom" className="w-full h-auto mb-6" />
            <p className="text-white text-xl mb-6">
              In the aftermath of World War II, Americans were understandably anxious about atomic technology, having witnessed its devastating use in Hiroshima and Nagasaki. Yet President Dwight D. Eisenhower—who had led the Allied forces on D-Day—believed nuclear power could foster peace rather than war. At a time when newspapers, radio, and television could have delivered the government's message, his administration instead embraced face-to-face outreach: traveling exhibits that literally met people where they lived.
            </p>
            <h2 className="text-3xl  mb-6">Traveling Exhibits in the 1950s-60s</h2>
            <p text-white text-xl mb-6>In the 1950s, the U.S. Atomic Energy Commission (AEC) launched multiple traveling programs:</p>
            <img src="/img/YourStakeInTheAtom-interior-cropped.jpg" alt="Your Stake in the Atom" className="w-full h-auto my-6" />
            <ol className="list-decimal list-inside text-white text-xl mb-6">
              <li><strong>Your Stake in the Atom</strong><br />A geodesic-dome exhibit transported by truck to fairs, shopping centers, and other public venues. Inside the dome, visitors could operate robotic "hot-lab" arms to simulate the safe handling of radioactive materials and watch live demos of nuclear science in action. During a single regional tour, <strong>tens of thousands</strong> of people would often visit within just a few months. <a href="#your-stake-in-the-atom">[1]</a><br />
                <img src="/img/ThisAtomicWorld-cropped.png" alt="This Atomic World" className="w-full h-auto my-6" />
              </li>
              <li className="my-6"><strong>This Atomic World</strong><br />A high-school lecture and demonstration tour that eventually deployed up to <strong>23 specially equipped vans</strong> across the country. Each mobile unit carried live demonstration gear (reactor models, Geiger counters, cloud chambers) to engage students with hands-on science. At the program's peak in the early-to-mid 1960s, it visited thousands of schools, reaching <strong>over a million students per year</strong> <a href="#this-atomic-world">[2]</a><br />
              </li>
              <li><strong>Atoms for Peace</strong><br />An umbrella initiative that included traveling trailer exhibits in the U.S. and large-scale international showcases abroad. One such American trailer traveled to libraries and local fairs, featuring scaled models of reactors, interactive panels, and displays of atomic agriculture. Collectively, the AEC's Atoms for Peace projects reached <strong>hundreds of thousands — ultimately millions</strong> — of curious visitors who learned about nuclear energy's peaceful potential. <a href="#atoms-for-peace">[3]</a><br /><br />The mobile exhibits complemented larger-scale stationary showcases, such as <em>Atomsville, U.S.A.</em> at the 1964–65 New York World's Fair—a futuristic vision of a nuclear-powered American town.

                <img src="/img/atoms-for-peace-van.jpg" alt="Atoms for Peace" className="w-full h-auto my-6" />
              </li>
            </ol>

            <div className="border-t border-white pt-6">
              <h2 className="text-3xl text-white mb-6"><span>What's Next: The Roving Reactor Project</span></h2>
              <p className="text-white text-xl mb-6">
                That tradition of direct engagement lives on in the Roving Reactor. We believe honest dialogue happens best when people can see and question new technologies up close. Our traveling exhibit highlights modern innovations—from small-scale reactors to ultra-safe fuel—showcasing how they can strengthen energy security and protect the planet.
              </p>
              <p className="text-white text-xl mb-6">
                By bringing these technologies directly to communities nationwide, we won't just foster dialogue—we'll strive to update perceptions, spark curiosity, and inspire the next generation of scientists, engineers, and a skilled workforce ready to drive the future of nuclear energy.
              </p>
            </div>
            <img src="/img/atomsville.png" alt="Atomsville, U.S.A." className="w-full h-auto my-6" />

            {/* Replace the citations section with this accordion */}
            <Accordion
              sx={accordionStyles}
              expanded={isAccordionOpen}
              onChange={(_, expanded) => setIsAccordionOpen(expanded)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                sx={{
                  '& .MuiAccordionSummary-content': {
                    fontFamily: 'Gabarito',
                    fontSize: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }
                }}
              >
                <AddIcon sx={{ color: 'white' }} />
                Citations
              </AccordionSummary>
              <AccordionDetails>
                <div className="text-white">
                  <ol className="list-decimal list-inside text-sm">
                    <li id="your-stake-in-the-atom">"Your Stake in the Atom" Dome Exhibit
                      <ul className="list-disc list-inside ml-4">
                        <li>Taylor, Alan (2012). <em>The Secret City, The Atlantic.</em> Photo essay by Ed Westcott showing the geodesic dome in Oak Ridge, 1966.</li>
                        <li>McHenry Plaindealer, 26 July 1968, p.4. Mentions "Your Stake in the Atom" touring fairs, attracting tens of thousands of visitors.</li>
                      </ul>
                    </li>
                    <li id="this-atomic-world" className="mt-4">"This Atomic World" Reach:
                      <ul className="list-disc list-inside ml-4">
                        <li>ED046215, ERIC (1970). <em>Opportunities for Extending Science Education Through Demonstrations.</em> Describes 23 traveling vans, reaching over a million students per year.</li>
                        <li>ORAU History (1969). <em>Atomic Industrial Forum Award for 'This Atomic World'</em> - recognized for "entertainingly informing millions of high school students.</li>
                      </ul>
                    </li>
                    <li id="atoms-for-peace" className="mt-4">Atoms for Peace Travel Exhibits:
                      <ul className="list-disc list-inside ml-4">
                        <li>Brooklyn Public Library Blog (2022). <em>POTW: Atoms for Peace and Goodbye, Central Library.</em> Features a 1950s photo of the traveling trailer parked outside the library.</li>
                        <li>Zwigenberg, Ran (2012). <em>"The Coming of a Second Sun": The 1956 Atoms for Peace Exhibit in Hiroshima. Asia-Pacific Journal: Japan Focus.</em> Documents extensive attendance and public reception.</li>
                      </ul>
                    </li>
                    <li id="atomsville" className="mt-4">Atomsville, U.S.A. at the 1964-65 World's Fair:
                      <ul className="list-disc list-inside ml-4">
                        <li><em>EXHIBITOR</em> Magazine. <em>Blast From the Past.</em> Coverage of the 1964-65 Fair's pavilions and attendance figures.</li>
                        <li><em>World's Fair Corporation Records.</em> <em>Attendance Overviews.</em> New York Public Library. Confirms 51 million total visitors during the Fair's run.</li>
                      </ul>
                    </li>
                  </ol>
                </div>
              </AccordionDetails>
            </Accordion>
          </div >
        </div >
      </main >
      <Footer />
    </div >
  );
}
