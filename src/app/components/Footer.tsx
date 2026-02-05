import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 mt-auto border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-gray-400 text-sm mb-4">
            The Roving Reactor is a traveling, hands-on science museum about nuclear energy.
            Despite the name, it contains no actual reactor. 🙂
          </p>
          <p className="text-gray-400 text-sm mb-4">
            Nonpartisan. Evidence-based. Community-grounded.
          </p>
          <div className="mb-4">
            <Link 
              href="/contact#contact" 
              className="text-[#8be8d9] hover:text-white transition-colors text-sm"
            >
              Contact
            </Link>
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Roving Reactor&trade;. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
