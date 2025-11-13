import React from "react";
import Footer from "../components/Footer";

export default function PrinciplesPage() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex flex-col">
      <main className="flex-grow relative pt-[calc(3.5rem+1px)] md:pt-14 mt-6 md:mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl text-white mb-6">Principles</h1>

            <p className="text-white text-xl mb-6">
              Everything about the Roving Reactor, from the pavilion design to
              the exhibit stations and the way we host visitors, is guided by a
              few core principles:
            </p>

            <ol className="list-decimal list-outside ml-6 text-white text-xl space-y-4 mb-6">
              <li>
                <span className="font-bold italic">
                  Approachable, Tangible, Intuitive
                </span>{" "}
                — Hands-on first; no jargon walls.
              </li>
              <li>
                <span className="font-bold italic">
                  Informational, Nonpartisan, Trustworthy
                </span>{" "}
                — Neutral tone, cite sources, avoid promotion.
              </li>
              <li>
                <span className="font-bold italic">
                  Big, Beautiful, Free, In-Person
                </span>{" "}
                — A public spectacle that travels to its visitors.
              </li>
              <li>
                <span className="font-bold italic">Maximum Hospitality</span> —
                Welcoming, calm, human pace, great wayfinding.
              </li>
              <li>
                <span className="font-bold italic">Name the Concerns</span> —
                Safety, waste, weapons, cost: address directly.
              </li>
              <li>
                <span className="font-bold italic">
                  Local Voices, Local Relevance
                </span>{" "}
                — Feature neighbors, jobs, and benefits nearby.
              </li>
              <li>
                <span className="font-bold italic">Measure What Matters</span> —
                Curiosity sparked, attitudes shifted, sign-ups made.
              </li>
              <li>
                <span className="font-bold italic">
                  Align with the Nuclear Ecosystem
                </span>{" "}
                — Be useful to all stakeholders (first to the public and their
                communities, and from there be useful to unions, utilities,
                developers, regulators, and local leaders) without endorsing any
                one agenda.
              </li>
            </ol>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
