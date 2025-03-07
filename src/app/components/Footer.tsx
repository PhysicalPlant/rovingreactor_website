export default function Footer() {
  return (
    <footer className=" py-3 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-400 ">
          © {new Date().getFullYear()} Roving Reactor&trade;. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
