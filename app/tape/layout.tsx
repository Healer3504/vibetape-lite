import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <header className="fixed top-0 w-full z-50 border-b border-zinc-900 bg-black/80 backdrop-blur-md">
                <div className="flex items-center h-14 px-4 sm:px-6 w-full max-w-5xl mx-auto">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Home
                    </Link>
                </div>
            </header>
            <main className="flex-1 w-full max-w-5xl mx-auto pt-24 pb-12 px-4 sm:px-6">
                {children}
            </main>
        </div>
    );
}
