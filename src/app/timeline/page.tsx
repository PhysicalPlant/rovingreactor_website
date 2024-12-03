import React from "react";
import Footer from "../components/Footer";
export default function Timeline() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex flex-col">
      <main className="flex-grow relative pt-[calc(3.5rem+1px)] md:pt-14 mt-6 md:mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl text-white mb-6">Timeline</h1>
          <p className="text-white text-2xl">Coming soon.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
