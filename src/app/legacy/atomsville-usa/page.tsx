import React from "react";
import Footer from "../../components/Footer";
import Image from "next/image";
export default function AtomsvilleUsa() {
    return (
        <div className="min-h-[calc(100vh-3.5rem)] flex flex-col">
            <main className="flex-grow relative pt-[calc(3.5rem+1px)] md:pt-14 mt-6 md:mt-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                    <div className="max-w-2xl mb-8">
                        <h1 className="text-5xl text-white mb-6">Atomsville, U.S.A.</h1>
                        <Image
                            src="/img/legacy/RR-AtomsvilleUSA-kids-entering.png"
                            alt="Atomsville, U.S.A."
                            className="w-full h-auto my-6 rounded-lg"
                            width={1000}
                            height={1000}
                        />
                        <p className="text-white text-lg mb-6">
                            At the 1964-65 New York World's Fair, <strong>Atomsville, U.S.A.</strong> invited children to explore a futuristic nuclear-powered town. Designed exclusively for young visitors, the exhibit used interactive activities to make atomic energy approachable.</p>
                        <Image
                            src="/img/legacy/RR-AtomsvilleUSA-whole-exhibit.png"
                            alt="Atomsville, U.S.A."
                            className="w-full h-auto my-6 rounded-lg"
                            width={1000}
                            height={1000}
                        />
                        <p className="text-white text-lg mb-6">
                            Children could manipulate mechanical arms, search for radioactive ore, and ride a bicycle generator to demonstrate the power of nuclear fuel. The kid-focused, open-ended environment helped frame atomic energy as an exciting part of the future.</p>
                        <Image
                            src="/img/legacy/RR-AtomsvilleUSA-interior-2.png"
                            alt="Atomsville, U.S.A."
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
