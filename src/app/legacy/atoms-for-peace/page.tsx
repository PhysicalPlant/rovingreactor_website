import React from "react";
import Footer from "../../components/Footer";
import Image from "next/image";
export default function AtomsForPeace() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex flex-col">
      <main className="flex-grow relative pt-[calc(3.5rem+1px)] md:pt-14 mt-6 md:mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
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
            <h1 className="text-5xl text-white mb-6">Atoms for Peace</h1>
            <Image
              src="/img/legacy/RR-AtomsforPeace-van-interior.png"
              alt="Atoms for Peace Exterior"
              className="w-full h-auto my-6 rounded-lg"
              width={1000}
              height={1000}
            />
            <p className="text-white text-xl mb-6">
              In 1953, President Eisenhower launched <strong>Atoms for Peace</strong>, an initiative to promote peaceful nuclear applications worldwide. Mobile exhibit trailers toured the U.S., featuring reactor models, atomic agriculture, and interactive panels on radiation in medicine and industry. International exhibitions reached millions, shifting global perceptions of atomic energy.
            </p>
            <Image
              src="/img/legacy/RR-AtomsForPeace-at-nuclear-museum.png"
              alt="Atoms for Peace Exterior"
              className="w-full h-auto my-6 rounded-lg"
              width={1000}
              height={1000}
            />
            <p className="text-white text-xl mb-6">
              These efforts positioned nuclear technology as a force for progress, reinforcing global cooperation and public understanding of atomic science.
            </p>
            <Image
              src="/img/legacy/RR-AtomsForPeace-hands.png"
              alt="Atoms for Peace Exterior"
              className="w-full h-auto my-6 rounded-lg"
              width={1000}
              height={1000}
            />
          </div>
          <a href="https://rovingreactor.org/exhibits" className="my-16 border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black hover:no-underline transition-colors decoration-0">RR Exhibit Design</a>
          <br /><br />
        </div>
      </main>
      <Footer />
    </div>
  );
}
