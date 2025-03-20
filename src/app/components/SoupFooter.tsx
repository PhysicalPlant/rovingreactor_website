export default function SoupFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-slate-200 mt-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-2xl">
                    <p className="text-slate-600 text-sm">
                        © {currentYear} Roving Reactor. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
} 