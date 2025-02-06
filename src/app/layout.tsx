import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import { Comfortaa, Gabarito } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  display: "swap",
});

const gabarito = Gabarito({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gabarito",
});

export const metadata: Metadata = {
  title: "The Roving Reactor",
  description: "An ambitious traveling exhibit to celebrate nuclear energy and inspire the next generation.",
  metadataBase: new URL('https://rovingreactor.org'),
  openGraph: {
    title: 'The Roving Reactor',
    description: 'An ambitious traveling exhibit to celebrate nuclear energy and inspire the next generation.',
    url: 'https://rovingreactor.org',
    siteName: 'The Roving Reactor',
    images: [
      {
        url: '/img/social-share-image.jpg',  // You'll need to add this image
        width: 1200,
        height: 630,
        alt: 'The Roving Reactor - Nuclear Energy Education',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Roving Reactor',
    description: 'An ambitious traveling exhibit to celebrate nuclear energy and inspire the next generation.',
    images: ['/img/social-share-image.jpg'],  // Same image as OG
   
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${gabarito.variable}`}>
      <body className="m-0 p-0 bg-black">
        <div className={comfortaa.className}>
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
