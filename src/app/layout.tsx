import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import { Comfortaa, Gabarito, Poppins } from "next/font/google";
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

const poppins = Poppins({
  weight: ['300', '400', '500', '700'],  // Added 700 for bold weight
  subsets: ['latin'],
  display: 'swap',
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "The Roving Reactor",
  description: "An ambitious traveling exhibit to celebrate nuclear energy and inspire the next generation.",
  metadataBase: new URL('https://rovingreactor.org'),
  icons: {
    icon: [
      { url: '/rr-favicons/rr-fav-16x16.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/rr-favicons/rr-fav-32x32.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/rr-favicons/rr-fav512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/rr-favicons/rr-fav-32x32.ico',
    apple: '/rr-favicons/rr-fav512x512.png',
  },
  openGraph: {
    title: 'The Roving Reactor',
    description: 'An ambitious traveling exhibit to celebrate nuclear energy and inspire the next generation.',
    url: 'https://rovingreactor.org',
    siteName: 'The Roving Reactor',
    images: [
      {
        url: 'https://rovingreactor.org/img/social-share-image.jpg',  // Using absolute URL
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
    images: ['https://rovingreactor.org/img/social-share-image.jpg'],  // Using absolute URL
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${gabarito.variable} ${poppins.className}`}>
      <body className="m-0 p-0 bg-black">
        <div className={comfortaa.className}>
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
