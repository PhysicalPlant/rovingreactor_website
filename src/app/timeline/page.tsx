import React from "react";
import Footer from "../components/Footer";
export default function Timeline() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex flex-col">
      <main className="flex-grow relative pt-[calc(3.5rem+1px)] md:pt-14 mt-6 md:mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl text-white mb-6">Timeline</h1>
            <h2 className="text-3xl text-white mb-6">Project Roadmap</h2>
            <p className="text-white text-xl mb-6">
              This roadmap outlines our journey from inception to future goals,
              ensuring Roving Reactor&apos;s growth as a nationwide initiative
              for nuclear energy awareness.
            </p>
            <ul className="list-disc list-outside ml-6 text-white text-xl">
              <li className="mb-4">
                <span className="font-bold">Year 1 - Foundation</span> Initial
                project development, securing early funding, and establishing
                partnerships with key organizations and experts in nuclear
                energy. Launch website and initial exhibit concepts.
              </li>
              <li className="mb-4">
                <span className="font-bold">
                  Years 2-4 - Fundraising and Fabrication&nbsp;
                </span>
                With partnerships and designs in hand, we&apos;ll intensify the
                fundraising effort, build the traveling exhibit, and establish a
                schedule for touring.
              </li>
              <li className="mb-4">
                <span className="font-bold">Years 5-6 - National Tour </span>
                Roving Reactor will appear at major public events like SXSW,
                Daytona 500, and state fairs, engaging diverse audiences and
                encouraging nuclear energy conversations.
              </li>
              <li className="mb-4">
                <span className="font-bold">
                  Years 7-10 - Community Outreach&nbsp;
                </span>
                Expanding outreach to local communities considering nuclear
                solutions, with an emphasis on smaller events, town halls, and
                interactive discussions to build local support.
              </li>
            </ul>
          </div>
          <div className="max-w-2xl mt-14 mb-12 border-t border-white pt-6">
            <h2 className="text-3xl text-white mt-6 ">Progress Updates</h2>
            <h3 className="text-2xl text-white mb-6">
              (Reverse Chronological Order)
            </h3>
            <p className="text-white text-xl mb-6">
              Recent milestones that showcase the growth and support behind
              Roving Reactor.
            </p>
            <ul className="list-disc list-outside ml-6 text-white text-xl">
              <li className="mb-4">
                <span className="font-bold">January 2025</span> Partnered to submit major DoE workforce proposal for Nuclear
                Reactor Safety Training Program, secured backing from MIT,
                University of Michigan, and two multi-state nuclear consortia to
                address 350,000-job sector shortage. Advanced technical
                capabilities through Idaho National Lab&apos;s CAD microreactor
                model, deepened relationships with DoE leadership including
                OCED, launched rovingreactor.org, and initiated video content
                development with Jared Hoffman.
              </li>
              <li className="mb-4">
                <span className="font-bold">December 2024</span> Finalizing
                plans for a residency at the National Museum of Nuclear Science
                and History to develop the exhibit&apos;s educational
                components.
              </li>
              <li className="mb-4">
                <span className="font-bold">November 2024&nbsp;</span>
                Expanded our advisory board to include top experts in nuclear
                science, policy, and communications, enhancing the
                project&apos;s credibility and network.
              </li>
              <li className="mb-4">
                <span className="font-bold">October 2024</span> Secured $51,000
                in additional funding, including a major contribution from the
                Anthropocene Institute, to support exhibit development and
                public engagement initiatives.
              </li>
              <li className="mb-4">
                <span className="font-bold">August 2024&nbsp;</span>
                Secured a grant from Mothers for Nuclear and raised an
                additional $50K from private donors. Funds are allocated for web
                development, travel, exhibit prototypes, and a modest salary.
                Welcomed new advisors, including Todd Allen (University of
                Michigan), Josh Jones-Dilworth (JDI), and April Litz (SXSW).
                Joined the steering committee for Nuclear Science Week and
                secured a residency at the National Museum of Nuclear Science
                and History.
              </li>
              <li className="mb-4">
                <span className="font-bold">May 2024&nbsp;</span>
                Decided to shift to a land-based traveling exhibit model to
                increase deployment speed and flexibility. Prepared a 15-minute
                presentation, completed the final Climate Conversations,
                participated in SXSW with the Beautiful Nuclear exhibit, began
                SAM.gov registration for government funding, and secured a
                fellowship with Live in America in Arkansas.
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
