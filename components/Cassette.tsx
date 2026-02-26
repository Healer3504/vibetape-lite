import React from "react";

interface CassetteProps {
    title?: string;
    color?: string; // e.g. "bg-zinc-800"
    className?: string;
    isSpinning?: boolean;
}

export default function Cassette({
    title = "VIBE TAPE",
    color = "bg-zinc-800",
    className = "",
    isSpinning = true,
}: CassetteProps) {
    return (
        <div
            className={`relative w-full max-w-md aspect-[1.58/1] rounded-2xl border-4 border-zinc-900 bg-zinc-950 p-4 shadow-2xl flex flex-col justify-between overflow-hidden ${className}`}
            style={{
                boxShadow: "0 0 40px -10px rgba(0,0,0,0.8), inset 0 2px 10px rgba(255,255,255,0.05)",
            }}
        >
            {/* Screw details */}
            <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-zinc-800 border-zinc-900" />
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-zinc-800 border-zinc-900" />
            <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-zinc-800 border-zinc-900" />
            <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-zinc-800 border-zinc-900" />

            {/* Main Label */}
            <div className={`relative flex-1 rounded-xl p-3 flex flex-col items-center justify-between border-2 border-zinc-800/50 mt-1 mb-2 ${color}`}>
                {/* Title area */}
                <div className="w-full bg-black/40 rounded px-3 py-1 text-center border-b border-black/20">
                    <h2 className="text-white font-mono font-bold tracking-widest uppercase text-sm sm:text-base truncate">
                        {title}
                    </h2>
                </div>

                {/* Cassette Window */}
                <div className="relative w-3/4 bg-black/80 rounded-lg aspect-[3/1] flex items-center justify-between px-6 border-y-2 border-zinc-950/50 overflow-hidden shadow-inner">
                    <div className="absolute inset-x-0 top-1/2 -mt-px h-[2px] bg-zinc-900/50" />

                    {/* Reel Left */}
                    <div
                        className={`w-12 h-12 rounded-full bg-zinc-900 border-[3px] border-zinc-800 flex items-center justify-center z-10 ${isSpinning ? "animate-[spin_4s_linear_infinite]" : ""
                            }`}
                    >
                        <div className="w-3 h-3 rounded-full bg-black" />
                        <div className="absolute w-[2px] h-full bg-zinc-950" />
                        <div className="absolute w-full h-[2px] bg-zinc-950" />
                        <div className="absolute w-[2px] h-full bg-zinc-950 rotate-45" />
                        <div className="absolute w-full h-[2px] bg-zinc-950 rotate-45" />
                    </div>

                    {/* Tape between reels */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-40">
                        <div className="w-full h-8 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
                    </div>

                    {/* Reel Right */}
                    <div
                        className={`w-12 h-12 rounded-full bg-zinc-900 border-[3px] border-zinc-800 flex items-center justify-center z-10 ${isSpinning ? "animate-[spin_4s_linear_infinite]" : ""
                            }`}
                    >
                        <div className="w-3 h-3 rounded-full bg-black" />
                        <div className="absolute w-[2px] h-full bg-zinc-950" />
                        <div className="absolute w-full h-[2px] bg-zinc-950" />
                        <div className="absolute w-[2px] h-full bg-zinc-950 rotate-45" />
                        <div className="absolute w-full h-[2px] bg-zinc-950 rotate-45" />
                    </div>
                </div>

                {/* Bottom Label lines */}
                <div className="w-full">
                    <div className="w-full h-[1px] bg-black/20 mb-1" />
                    <div className="w-full h-[1px] bg-black/20 mb-1" />
                    <div className="w-3/4 h-[1px] bg-black/20" />
                </div>
            </div>

            {/* Bottom Trapezoid base shape area (simplified as rectangle) */}
            <div className="h-10 w-3/4 mx-auto bg-zinc-900 rounded-t-xl border-t border-x border-zinc-800/50 flex space-x-4 items-center justify-center mt-auto">
                <div className="w-2 h-2 rounded-full bg-black" />
                <div className="w-2 h-2 rounded-full bg-black" />
                <div className="w-6 h-3 rounded-sm bg-black/50" />
                <div className="w-2 h-2 rounded-full bg-black" />
                <div className="w-2 h-2 rounded-full bg-black" />
            </div>
        </div>
    );
}
