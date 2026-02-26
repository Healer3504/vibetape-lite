import Link from "next/link";
import Cassette from "@/components/Cassette";
import { ArrowRight, Play, Disc3 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-black font-sans text-white overflow-hidden selection:bg-zinc-800">
      <main className="flex flex-1 w-full max-w-5xl flex-col items-center justify-center p-6 sm:p-12 relative z-10">

        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-900/40 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className="flex flex-col items-center text-center space-y-8 max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            VibeTape Lite
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter bg-gradient-to-br from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent pb-2">
            Curate your vibe.
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 max-w-xl text-balance leading-relaxed">
            Create completely client-side, shareable digital mixtapes instantly. No auth. No database. Pure vibes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/create"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-black transition-transform hover:scale-105 active:scale-95 gap-2"
            >
              Start Creating <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="relative w-full max-w-md mx-auto group perspective-1000">
          <div className="absolute -inset-4 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl rounded-xl" />
          <div className="transform rotateX-12 rotateY-6 -rotate-z-3 group-hover:rotate-0 transition-all duration-700 hover:scale-105 ease-out">
            <Cassette title="MIX_001" color="bg-zinc-800" isSpinning={false} />
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-3xl text-zinc-400">
          <div className="flex flex-col items-center text-center gap-2">
            <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">
              <Disc3 className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-zinc-200 font-medium text-sm">Analog Feel</h3>
            <p className="text-xs">Digital mixtapes with true analog aesthetics.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">
              <Play className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-zinc-200 font-medium text-sm">YouTube Powered</h3>
            <p className="text-xs">Simply paste YouTube links to add your tracks.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-zinc-200 font-medium text-sm">Instantly Shareable</h3>
            <p className="text-xs">Data is encoded in the URL. Share it anywhere.</p>
          </div>
        </div>

      </main>

      <footer className="w-full py-6 text-center text-xs text-zinc-600 border-t border-zinc-900 z-10 bg-black/50 backdrop-blur-md">
        <p>Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
