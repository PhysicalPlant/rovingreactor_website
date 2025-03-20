"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const SHOW_SOUP_SECTION = process.env.NEXT_PUBLIC_SHOW_SOUP_SECTION === 'true';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLegacyDropdownOpen, setIsLegacyDropdownOpen] = useState(false);
    const [isSoupDropdownOpen, setIsSoupDropdownOpen] = useState(false);
    const legacyDropdownRef = useRef<HTMLLIElement>(null);
    const soupDropdownRef = useRef<HTMLLIElement>(null);

    // ... existing useEffect ...

    return (
        <nav className="bg-slate-800 shadow-md w-full fixed top-0 left-0 z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14">
                <div className="flex items-center justify-between h-full">
                    {/* ... Logo and company name ... */}

                    {/* Desktop navigation */}
                    <div className="hidden md:flex items-center flex-1 justify-end ml-12 space-x-8">
                        <ul className="flex gap-6 font-gabarito uppercase text-sm text-white">
                            <li><Link href="/" className="text-white hover:text-gray-300">Home</Link></li>
                            <li><Link href="/exhibits" className="text-white hover:text-gray-300">Exhibits</Link></li>
                            {/* Legacy dropdown ... */}
                            {SHOW_SOUP_SECTION && (
                                <li className="relative" ref={soupDropdownRef}>
                                    <button
                                        className="text-white hover:text-gray-300 flex items-center gap-1"
                                        onClick={() => setIsSoupDropdownOpen(!isSoupDropdownOpen)}
                                    >
                                        SOUP
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {isSoupDropdownOpen && (
                                        <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 shadow-lg rounded-md py-2">
                                            <Link href="/soup" className="block px-4 py-2 text-white hover:bg-slate-700">Overview</Link>
                                            <Link href="/soup/attending" className="block px-4 py-2 text-white hover:bg-slate-700">Attending</Link>
                                            <Link href="/soup/hosting" className="block px-4 py-2 text-white hover:bg-slate-700">Hosting</Link>
                                            <Link href="/soup/faq" className="block px-4 py-2 text-white hover:bg-slate-700">FAQ</Link>
                                        </div>
                                    )}
                                </li>
                            )}
                            <li><Link href="/timeline" className="text-white hover:text-gray-300">Timeline</Link></li>
                            <li><Link href="/coalition" className="text-white hover:text-gray-300">Coalition</Link></li>
                            <li><Link href="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
                        </ul>
                    </div>

                    {/* ... Hamburger button ... */}
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-slate-800 py-4 shadow-md">
                        <ul className="flex flex-col space-y-4 px-4">
                            <li><Link href="/" className="block text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                            <li><Link href="/exhibits" className="block text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Exhibits</Link></li>
                            {/* ... Legacy items ... */}
                            {SHOW_SOUP_SECTION && (
                                <>
                                    <li><Link href="/soup" className="block text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Soup</Link></li>
                                    <li className="pl-4"><Link href="/soup" className="block text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Overview</Link></li>
                                    <li className="pl-4"><Link href="/soup/attending" className="block text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Attending</Link></li>
                                    <li className="pl-4"><Link href="/soup/hosting" className="block text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Hosting</Link></li>
                                    <li className="pl-4"><Link href="/soup/faq" className="block text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>FAQ</Link></li>
                                </>
                            )}
                            <li><Link href="/timeline" className="block text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Timeline</Link></li>
                            <li><Link href="/coalition" className="block text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Coalition</Link></li>
                            <li><Link href="/contact" className="block text-white hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
} 