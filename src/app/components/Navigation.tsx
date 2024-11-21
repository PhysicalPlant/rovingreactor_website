"use client";
import Link from "next/link";
import {useState} from "react";
import Image from "next/image";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-800 shadow-md w-full fixed top-0 left-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14">
        <div className="flex items-center justify-between h-full">
          {/* Logo and company name */}
          <Link
            href="/"
            className="flex items-center space-x-2 group opacity-90 hover:opacity-100 transition-all duration-300">
            <Image
              src="/img/RR-logo-vector.svg"
              alt="Roving Reactor Logo"
              width={40}
              height={40}
              className="transition-all duration-300 group-hover:filter group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
            />
            <span className="text-white text-2xl transition-all duration-300 group-hover:filter group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
              Roving Reactor
            </span>
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden md:flex gap-6 ml-12">
            <li>
              <Link href="/" className="hover:text-slate-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/timeline" className="hover:text-slate-300">
                Timeline
              </Link>
            </li>
            <li>
              <Link href="/coalition" className="hover:text-slate-300">
                Coalition
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-slate-300">
                Contact
              </Link>
            </li>
          </ul>

          {/* Hamburger button */}
          <div className="md:flex-1"></div>
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor">
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
          <div className="md:hidden bg-slate-800 py-4 shadow-md">
            <ul className="flex flex-col space-y-4 px-4">
              <li>
                <Link
                  href="/"
                  className="block text-white hover:text-slate-300"
                  onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/timeline"
                  className="block text-white hover:text-slate-300"
                  onClick={() => setIsMenuOpen(false)}>
                  Timeline
                </Link>
              </li>
              <li>
                <Link
                  href="/coalition"
                  className="block text-white hover:text-slate-300"
                  onClick={() => setIsMenuOpen(false)}>
                  Coalition
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block text-white hover:text-slate-300"
                  onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
