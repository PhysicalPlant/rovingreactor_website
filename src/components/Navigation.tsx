import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-slate-800 h-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/img/RR-logo-crop.png"
              alt="Roving Reactor Logo"
              className="h-10 w-auto"
            />
          </Link>
        </div>
        <ul className="flex gap-6 justify-end">
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
      </div>
    </nav>
  );
}
