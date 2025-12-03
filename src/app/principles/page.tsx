import React from "react";
import Footer from "../components/Footer";

export default function PrinciplesPage() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex flex-col">
      <main className="flex-grow relative pt-[calc(3.5rem+1px)] md:pt-14 mt-6 md:mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl text-white mb-6">Principles</h1>

            <p className="text-white text-xl mb-6 ">
              Everything about the Roving Reactor, from the pavilion design to
              the exhibit stations and the way we host visitors, is guided by a
              few core principles:
            </p>

            <ol className="list-decimal list-outside ml-6 text-white text-xl space-y-4 mb-6">
              <li>
                <span className="font-bold italic">
                  Hands-On, Approachable, and Intuitive by Design
                </span>{" "}
                — Every part of the Roving Reactor — from the pavilion shape to
                each lever, dial, model, and sign — is built so a first-time
                visitor can simply walk up, touch something, and get it without
                needing a lecture. Big, beautiful, free, in-person, and guided
                by maximum hospitality: clear wayfinding, human pace, and no
                jargon walls.
              </li>
              <li>
                <span className="font-bold italic">
                  Trustworthy, Candid, and Locally Grounded
                </span>{" "}
                — We present nuclear energy in a nonpartisan, evidence-based way
                by citing sources, avoiding promotion, and naming the concerns
                (safety, waste, weapons, cost) directly. We foreground local
                voices, jobs, and benefits so every stop feels rooted in the
                community that’s actually hosting the exhibit, including
                workers, tribal partners, and local storytellers wherever
                possible.
              </li>
              <li>
                <span className="font-bold italic">
                  Ecosystem-Aligned and Measured for Impact
                </span>{" "}
                — We aim to be transparently useful to the whole nuclear
                ecosystem by earning public trust first and staying independent
                of any single agenda. We measure what matters (curiosity
                sparked, attitudes shifted, sign-ups and partnerships made) so
                the Roving Reactor becomes more valuable over time to
                communities, labor, education, industry, advocacy, media, and to
                the public agencies that support this work.
              </li>
            </ol>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
