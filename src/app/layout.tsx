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
      <body className="m-0 p-0 bg-black">
        <div className={comfortaa.className}>
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
