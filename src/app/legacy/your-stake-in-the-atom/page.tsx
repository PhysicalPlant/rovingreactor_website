import React from "react";
import Footer from "../../components/Footer";
import Image from "next/image";
export default function YourStakeInTheAtom() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex flex-col">
      <main className="flex-grow relative pt-[calc(3.5rem+1px)] md:pt-14 mt-6 md:mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Subnav for Legacy Pages */}
          <nav className="mb-6 border-b border-white/20 pb-4">
            <ul className="flex flex-col md:flex-row gap-3 md:gap-6 text-white text-sm md:text-base">
              <li>
                <a
                  href="/legacy"
                  className="text-[#8be8d9] hover:text-white transition-colors"
                >
                  Legacy home
                </a>
              </li>
            </ul>
          </nav>

          <div className="max-w-2xl mb-8">
            <h1 className="text-5xl text-white mb-6">Your Stake in the Atom</h1>
            <Image
              src="/img/YourStakeInTheAtom-interior-cropped.jpg"
              alt="Your Stake in the Atom Dome Interior"
              className="w-full h-auto my-6 rounded-lg"
              width={1000}
              height={1000}
            />
            <p className="text-white text-xl mb-6">
              The 1960s traveling exhibit{" "}
              <strong>Your Stake in the Atom</strong> introduced the public to
              nuclear energy immersively. Housed in a futuristic geodesic dome,
              this mobile showcase brought nuclear science to fairs, malls, and
              public spaces.
            </p>
            <p className="text-white text-xl mb-6">
              Visitors could operate remote-controlled robotic arms, simulating
              how scientists handle radioactive materials safely. Live
              demonstrations showcased radiation detection and the power of
              nuclear reactions, making atomic science more accessible.
            </p>
            <p className="text-white text-xl mb-6">
              The exhibit attracted thousands, helping dispel fears and
              increasing public awareness of nuclear energy's benefits in power
              generation, medicine, and industry.
            </p>
            <Image
              src="/img/legacy/RR-YourStakeInTheAtom-dome-2.png"
              alt="Your Stake in the Atom Dome exterior"
              className="w-full h-auto my-6 rounded-lg"
              width={1000}
              height={1000}
            />
          </div>
          <a
            href="https://rovingreactor.org/exhibits"
            className="my-16 border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black hover:no-underline transition-colors decoration-0"
          >
            RR Exhibit Design
          </a>
          <br />
          <br />
        </div>
      </main>
      <Footer />
    </div>
  );
}
