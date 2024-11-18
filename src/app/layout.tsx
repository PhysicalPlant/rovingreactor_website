import type {Metadata} from "next";
import Navigation from "@/components/Navigation";
import {Roboto} from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
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
        <div className={roboto.className}>
          <Navigation />
          <div className="fixed left-0 right-0 top-[56px] bottom-0">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
