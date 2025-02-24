import React from "react";
import Footer from "../../components/Footer";
import Image from "next/image";
export default function ThisAtomicWorld() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex flex-col">
      <main className="flex-grow relative pt-[calc(3.5rem+1px)] md:pt-14 mt-6 md:mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div className="max-w-2xl mb-8">
            <h1 className="text-5xl text-white mb-6">This Atomic World</h1>
            <Image
              src="/img/legacy/RR-ThisAtomicWorld-on-stage-1.png"
              alt="This Atomic World Exterior"
              className="w-full h-auto my-6"
              width={1000}
              height={1000}
            />
            <p className="text-white text-xl mb-6">
              <strong>This Atomic World</strong> was a traveling educational program that brought nuclear science into American high schools. A fleet of vans equipped with scientific instruments toured the country. Students experimented with Geiger counters, cloud chambers, and Van de Graaff generators, making abstract atomic principles tangible.</p>
            <Image
              src="/img/legacy/RR-ThisAtomicWorld-on-stage2.png"
              alt="This Atomic World On Stage 2"
              className="w-full h-auto my-6"
              width={1000}
              height={1000}
            />
          </div>
          <a href="https://rovingreactor.org/exhibits" className="my-16 border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black hover:no-underline transition-colors decoration-0">Our Exhibits</a>

        </div>
      </main>
      <Footer />
    </div>
  );
}
