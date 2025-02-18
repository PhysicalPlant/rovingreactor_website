import React from "react";
import Footer from "../../components/Footer";
export default function Legacy() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex flex-col">
      <main className="flex-grow relative pt-[calc(3.5rem+1px)] md:pt-14 mt-6 md:mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl text-white mb-6">A Look Back at Traveling Nuclear Exhibits</h1>
            <h2 className="text-3xl text-white mb-6">— and Where We're Headed Next</h2>
            <img src="/img/YourStakeInTheAtom2.png" alt="Your Stake in the Atom" className="w-full h-auto mb-6" />
            <p className="text-white text-xl mb-6">
              In the 1950s and '60s, the <a href="https://en.wikipedia.org/wiki/United_States_Atomic_Energy_Commission" >U.S. Atomic Energy Commission (AEC)</a> pioneered an innovative approach to nuclear education by taking its message directly to the American public. Through programs like <em><a href="https://rovingreactor.org/YourStakeInTheAtom.html">Your Stake in the Atom</a></em>, <em><a href="https://rovingreator.org/ThisAtomicWorld.html">This Atomic World</a></em>, and <em><a href="https://rovingreactor.org/AtomsForPeace.html">Atoms for Peace</a></em>, the AEC used traveling exhibits, interactive demonstrations, and live presentations to demystify nuclear science and highlight its peaceful potential.
            </p>
            <p className="text-white text-xl mb-6">
              <em>Your Stake in the Atom</em> invited the public to engage directly with nuclear technology through hands-on exhibits, including scaled models of nuclear reactors, visual displays explaining how nuclear power plants generate electricity, and robotic manipulators to simulate the handling of radioactive materials.
            </p>
            <img src="/img/ThisAtomicWorld-cropped.png" alt="This Atomic World" className="w-full h-auto mb-6" />

            <p className="text-white text-xl mb-6">
              <em>This Atomic World</em>, developed by <a href="https://www.orau.org/">Oak Ridge Associated Universities (ORAU)</a> in partnership with the AEC, transformed high school auditoriums into dynamic laboratories, where students experienced nuclear science firsthand through cloud chambers, Geiger counters, and other live demonstrations.
            </p>
            <p className="text-white text-xl mb-6">
              Meanwhile, <em>Atoms for Peace</em> brought mobile exhibits to communities, showcasing nuclear power's role in medicine, energy, and industry.
            </p>
            <img src="/img/atoms-for-peace-van.jpg" alt="Atoms for Peace" className="w-full h-auto mb-6" />
            <p className="text-white text-xl mb-6">Today, the <em>Roving Reactor Project</em> builds on this legacy of hands-on education while addressing contemporary challenges. Our traveling exhibit will showcase pioneering nuclear innovations, from Small Modular Reactors (SMRs) to microreactors, strengthening energy security while preserving natural resources.</p>
            <p className="text-white text-xl mb-6">By bringing these technologies directly to communities nationwide, we won't just foster dialogue—we'll strive to update perceptions, spark curiosity, and inspire the next generation of scientists, engineers, and a skilled workforce ready to drive the future of nuclear energy.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
