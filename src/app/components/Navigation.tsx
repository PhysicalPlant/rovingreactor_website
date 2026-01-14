"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import EmailSignup from "./EmailSignup";
import { usePathname, useRouter } from "next/navigation";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExhibitsDropdownOpen, setIsExhibitsDropdownOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const exhibitsDropdownRef = useRef<HTMLLIElement>(null);
  const homeDropdownRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const isSoupPage = pathname?.startsWith("/soup");

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        exhibitsDropdownRef.current &&
        !exhibitsDropdownRef.current.contains(event.target as Node)
      ) {
        setIsExhibitsDropdownOpen(false);
      }
      if (
        homeDropdownRef.current &&
        !homeDropdownRef.current.contains(event.target as Node)
      ) {
        setIsHomeDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`${
        isSoupPage ? "bg-orange-800" : "bg-slate-800"
      } shadow-md w-full fixed top-0 left-0 z-50`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14">
        <div className="flex items-center justify-between h-full">
          {/* Logo and company name */}
          <Link
            href="/"
            className="flex items-center space-x-2 group opacity-90 hover:opacity-100 transition-all duration-300"
          >
            <Image
              src="/img/RR-logo-vector.svg"
              alt="Roving Reactor Logo"
              width={250}
              height={40}
              className="transition-all duration-300 group-hover:filter group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] drop-shadow-[-2px_-2px_0px_rgba(0,0,0,0.5)]"
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center flex-1 justify-end ml-12 space-x-8">
            <ul className="flex gap-6 font-gabarito uppercase text-sm text-white">
              <li>
                <Link href="/" className="text-white hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li className="relative" ref={exhibitsDropdownRef}>
                <button
                  className="text-white hover:text-gray-300 flex items-center gap-1"
                  onClick={() =>
                    setIsExhibitsDropdownOpen(!isExhibitsDropdownOpen)
                  }
                >
                  EXHIBITS
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isExhibitsDropdownOpen && (
                  <div
                    className={`absolute top-full left-0 mt-2 w-60 ${
                      isSoupPage ? "bg-orange-800" : "bg-slate-800"
                    } shadow-lg rounded-md py-2`}
                  >
                    <Link
                      href="/exhibits"
                      className="block px-4 py-2 text-white hover:bg-slate-700"
                    >
                      Overview
                    </Link>
                    <Link
                      href="/legacy"
                      className="block px-4 py-2 text-white hover:bg-slate-700"
                    >
                      Legacy
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <Link
                  href="/principles"
                  className="text-white hover:text-gray-300"
                >
                  Principles
                </Link>
              </li>
              <li>
                <Link
                  href="/timeline"
                  className="text-white hover:text-gray-300"
                >
                  Timeline
                </Link>
              </li>
              <li>
                <Link
                  href="/coalition"
                  className="text-white hover:text-gray-300"
                >
                  Coalition
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white hover:text-gray-300"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="flex items-center min-w-[300px]">
              <EmailSignup
                buttonText="Subscribe"
                placeholderText="Email address"
                onSubmit={async () => {
                  // Mailchimp submission is handled in EmailSignup component
                }}
              />
            </div>
          </div>

          {/* Hamburger button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden ${
              isSoupPage ? "bg-orange-800" : "bg-slate-800"
            } py-4 shadow-md`}
          >
            <ul className="flex flex-col space-y-4 px-4">
              <li>
                <Link
                  href="/"
                  className="block text-white hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/exhibits"
                  className="block text-white hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Exhibits - Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/legacy"
                  className="block text-white hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Exhibits - Legacy
                </Link>
              </li>
              <li>
                <Link
                  href="/principles"
                  className="block text-white hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Principles
                </Link>
              </li>
              <li>
                <Link
                  href="/timeline"
                  className="block text-white hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Timeline
                </Link>
              </li>
              <li>
                <Link
                  href="/coalition"
                  className="block text-white hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Coalition
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block text-white hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li className="pt-2">
                <EmailSignup
                  buttonText="Subscribe"
                  placeholderText="Email address"
                  onSubmit={async () => {
                    // Mailchimp submission is handled in EmailSignup component
                  }}
                />
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
