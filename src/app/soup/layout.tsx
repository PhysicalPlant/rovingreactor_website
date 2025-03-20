import { Bona_Nova } from 'next/font/google';
import SoupFooter from '../components/SoupFooter';

const bonaNova = Bona_Nova({
    weight: ['400', '700'],  // Regular and Bold weights
    subsets: ['latin'],
    display: 'swap',
});

export default function SoupLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className={`min-h-screen bg-white flex flex-col ${bonaNova.className}`}>
            <main className="soup-section relative pt-[calc(3.5rem+1px)] md:pt-14 mt-6 md:mt-8 flex-grow">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        {children}
                    </div>
                </div>
            </main>
            <SoupFooter />
        </div>
    );
} 