import React from "react";
import Image from "next/image";
export default function Coalition() {
  return (
    <div className="min-h-screen">
      <main className="relative pt-[calc(3.5rem+1px)] md:pt-14 mt-6 md:mt-8 pb-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-0">
          <div className="max-w-2xl" style={{fontSize: "1.2rem"}}>
            <h1 className="text-4xl text-white mb-6">Coalition</h1>
            <p className="text-white mb-6">
              The Roving Reactor Project is building a coalition that includes
              advocacy groups, government agencies (especially the national
              labs), academia, and industry. The list below is aspirational.
              We&apos;ll continue to reach out to these phenomenal institutions
              in the coming months.
            </p>
            <p className="text-white mb-6">
              We&apos;re grateful for generous grants from&nbsp;
              <a href="https://www.generationatomic.org/">Generation Atomic</a>
              ,&nbsp;
              <a href="https://www.mothersfornuclear.org/">
                Mothers for Nuclear
              </a>
              , and&nbsp;
              <a href="https://anthropoceneinstitute.com/">
                the Anthropocene Institute
              </a>
              , as well as an artist residency from the&nbsp;
              <a href="https://www.nuclearmuseum.org/">
                National Museum of Nuclear Science and History
              </a>
              .
            </p>
            <Image
              src="/img/wishlist-coalition.png"
              className="my-8"
              alt="Coalition"
              width={1000}
              height={1000}
            />
            <p className="text-white mb-6">
              Our advisory board includes a diverse and respected group of
              leaders from various sectors who provide invaluable guidance to
              the project.
            </p>
            <p className="text-white mb-6 font-bold">
              <b>Nuclear Science and Technology</b>
            </p>
            <ul className="list-disc text-white mb-6 pl-5">
              <li>
                Dr. Abdalla Abou Jaoude &mdash; R&D Staff Scientist, Idaho
                National Lab
                <br />
                Dr. Todd Allen &mdash; Professor of Nuclear Engineering,
                University of Michigan
              </li>
              <li>
                Dr. Jacopo Buongiorno &mdash; Professor of Nuclear Engineering,
                MIT
              </li>
            </ul>
            <p className="text-white mb-6 font-bold">
              <b>Nuclear Advocacy</b>
            </p>
            <ul className="list-disc text-white mb-6 pl-5">
              <li>
                Jennifer Hayden &mdash; President & CEO, National Museum of
                Nuclear Science & History (Smithsonian)
              </li>
              <li>Heather Hoff &mdash; Co-Founder, Mothers for Nuclear</li>
              <li>
                Jordan Houghton &mdash; Senior Media Relations Manager, Nuclear
                Energy Institute
              </li>
              <li>
                Eric Meyer &mdash; Founder & Executive Director, Generation
                Atomic
              </li>
              <li>
                Jon-Michael Murray &mdash; REPOWER Program Director, Terra
                Praxis
              </li>
              <li>
                Jon Wentzel &mdash; Vice President, Communications, Nuclear
                Energy Institute
              </li>
            </ul>
            <p className="text-white mb-6 font-bold">
              <b>Arts, Architecture, and Design</b>
            </p>
            <ul className="list-disc text-white mb-6 pl-5">
              <li>
                Yvonne Boudreaux &mdash; Production Designer, Yellowstone (tv
                series)
              </li>
              <li>
                Ursula Emery McClure &mdash; Founding Partner, emc architecture
              </li>
              <li>
                Anna Gallagher-Ross &mdash; Co-Artistic Director, The Bentway,
                Toronto
              </li>
              <li>
                Josh Jones-Dilworth &mdash; Founder and CEO, Jones-Dilworth,
                Inc.
              </li>
              <li>April Litz &mdash; Director of Art Production, SXSW</li>
              <li>
                Dr. Carra Martinez &mdash; Co-Artistic Director, Fusebox
                Festival / Live in America
              </li>
              <li>
                Auro Trini Castelli &mdash; Chief Strategy & Sustainability
                Officer, Otherworldly
              </li>
            </ul>
            <p className="text-white mb-6 font-bold">
              <b>Roving Reactor Creative Lead</b>
            </p>
            <p className="text-white mb-6">
              <a href="https://www.linkedin.com/in/steve-moore-0915291/">
                Steve Moore
              </a>{" "}
              is an artist from Austin, Texas where he runs{" "}
              <a href="https://physicalplant.org/about/">Physical Plant Arts</a>
              . Now in its 30th year, the company&apos;s work has been featured
              in the New York Times, American Theatre Magazine, Variety, and
              elsewhere. Along the way, Steve spent 10 years at IBM, first as a
              Senior Technical Writer and eventually as the company&apos;s Story
              Strategist. In 2020, he joined the creative team at{" "}
              <a href="https://www.thesphere.com/">the Sphere in Las Vegas</a>.
            </p>
            <p className="text-white mb-6">
              Since 2022, Steve has conducted 100 interviews with experts in
              energy and conservation. As the capabilities of nuclear energy
              came into focus in those conversations, the idea for the Roving
              Reactor project was born: a traveling exhibit designed to educate
              and encourage action on nuclear as a vital component in the
              struggle to balance our need for energy with the need to preserve
              and protect the natural world.
            </p>
            <Image
              src="/img/100-faces.png"
              className="my-8"
              alt="Faces"
              width={1000}
              height={1000}
            />
            <p className="text-sm text-gray-400 ">
              © 2024 Roving Reactor. All rights reserved.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
