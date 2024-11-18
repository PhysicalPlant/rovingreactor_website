import type {Metadata} from "next";
import Navigation from "@/components/Navigation";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Roving Reactor",
  description: "Roving Reactor website",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="m-0 p-0 bg-black">
        <Navigation />
        <div className="fixed left-0 right-0 top-[56px] bottom-0">
          {children}
        </div>
      </body>
    </html>
  );
}
