import React from "react";
import Footer from "../../components/Footer";
export default function YourStakeInTheAtom() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex flex-col">
      <main className="flex-grow relative pt-[calc(3.5rem+1px)] md:pt-14 mt-6 md:mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl text-white mb-6">A Look Back at Traveling Nuclear Exhibits</h1>
            <h2 className="text-3xl text-white mb-6">— and Where We're Headed Next</h2>
            <img src="/img/YourStakeInTheAtom2.png" alt="Your Stake in the Atom" className="w-full h-auto mb-6" />
            <p className="text-white text-xl mb-6">
            In the aftermath of World War II, Americans were understandably anxious about atomic technology, having witnessed its devastating use in Hiroshima and Nagasaki. Yet President Dwight D. Eisenhower—who had led the Allied forces on D-Day—believed nuclear power could foster peace rather than war. At a time when newspapers, radio, and television could have delivered the government’s message, his administration instead embraced face-to-face outreach: traveling exhibits that literally met people where they lived.
            </p>
            <h3>Traveling Exhibits in the 1950s–60s</h3>
            <p>In the 1950s, the U.S. Atomic Energy Commission (AEC) launched multiple traveling programs:</p>
            <ol className="list-decimal list-inside text-white text-xl mb-6">
              <li><a href="https://rovingreactor.org/YourStakeInTheAtom.html">Your Stake in the Atom</a><br/>A geodesic-dome exhibit transported by truck to fairs, shopping centers, and other public venues. Inside the dome, visitors could operate robotic “hot-lab” arms to simulate the safe handling of radioactive materials and watch live demos of nuclear science in action. During a single regional tour, tens of thousands of people would often visit within just a few months.[1]</li>
              <li><a href="https://rovingreactor.org/ThisAtomicWorld.html">This Atomic World</a></li>
              <li><a href="https://rovingreactor.org/AtomsForPeace.html">Atoms for Peace</a></li>
            </ol>
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
