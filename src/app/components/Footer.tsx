import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-zinc-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
          {/* Left column - left-justified */}
          <div className="text-left">
            <p className="text-gray-400 text-xs">
              The Roving Reactor is a traveling, hands-on science museum about nuclear energy.
            </p>
            <p className="text-gray-400 text-xs">
              Nonpartisan. Evidence-based. Community-grounded.
            </p>
          </div>
          
          {/* Right column - right-justified */}
          <div className="text-left md:text-right">
            <div className="mb-2">
              <Link 
                href="/contact#contact" 
                className="text-[#8be8d9] hover:text-white transition-colors text-xs"
              >
                Contact
              </Link>
            </div>
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} Roving Reactor&trade;.<br />All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
