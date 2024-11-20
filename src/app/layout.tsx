import type {Metadata} from "next";
import Navigation from "./components/Navigation";
import {Comfortaa} from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roving Reactor",
  description: "Roving Reactor website",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <style>{`
          @media (max-width: 767px) {
            body {
              position: fixed;
              width: 100%;
              height: 100%;
            }
            
            body.can-scroll {
              position: static;
            }
          }
        `}</style>
      </head>
      <body className="m-0 p-0 bg-black overflow-auto">
        <div className={`${comfortaa.className} h-screen`}>
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
