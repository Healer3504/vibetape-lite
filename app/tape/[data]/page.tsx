"use client";

import { useEffect, useState } from "react";
import { parseYouTubeId, decodeTapeData } from "@/lib/utils";
import Cassette from "@/components/Cassette";
import Link from "next/link";
import { MessageSquareWarning, PlayCircle, Share2, CornerUpLeft } from "lucide-react";
import { useParams } from "next/navigation";

export default function TapeViewer() {
    const params = useParams();
    const data = params.data as string;
    const [tape, setTape] = useState<ReturnType<typeof decodeTapeData>>(null);
    const [error, setError] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (data) {
            const decoded = decodeTapeData(data);
            if (decoded) {
                setTape(decoded);
            } else {
                setError(true);
            }
        }
    }, [data]);

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
                <MessageSquareWarning className="w-16 h-16 text-zinc-600" />
                <h1 className="text-2xl font-bold text-zinc-200">Invalid Tape Link</h1>
                <p className="text-zinc-500 max-w-sm">
                    The link you followed appears to be corrupted or invalid. Tapes are solely powered by their URL data.
                </p>
                <Link
                    href="/create"
                    className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors"
                >
                    Create a New Tape
                </Link>
            </div>
        );
    }

    if (!tape) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
                <div className="w-8 h-8 rounded-full border-b-2 border-white animate-spin" />
                <p className="text-zinc-500 animate-pulse text-sm font-medium tracking-widest uppercase">
                    Loading Data...
                </p>
            </div>
        );
    }

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-16 items-start w-full">

            {/* Tape Display fixed column */}
            <div className="w-full lg:w-5/12 flex flex-col items-center lg:sticky top-24 pt-4">
                <Cassette title={tape.title} color={tape.color} isSpinning={true} className="shadow-[0_20px_50px_-15px_rgba(0,0,0,1)]" />

                <div className="mt-8 flex gap-4 w-full max-w-md">
                    <button
                        onClick={handleShare}
                        className="flex-1 flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 text-sm font-medium rounded-xl py-3 hover:bg-zinc-800 transition-colors active:scale-95"
                    >
                        <Share2 className="w-4 h-4" />
                        {copied ? "Copied Link!" : "Share Tape"}
                    </button>
                    <Link
                        href="/create"
                        className="flex-1 flex items-center justify-center gap-2 bg-white text-black text-sm font-medium rounded-xl py-3 hover:bg-zinc-200 transition-colors active:scale-95"
                    >
                        <CornerUpLeft className="w-4 h-4" />
                        Make Your Own
                    </Link>
                </div>
            </div>

            {/* Playlist view */}
            <div className="w-full lg:w-7/12 flex flex-col space-y-6">
                <div className="pb-4 border-b border-zinc-900">
                    <h1 className="text-3xl font-bold tracking-tight mb-2 uppercase break-words pr-4">{tape.title}</h1>
                    <p className="text-zinc-500 font-mono text-sm tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        {tape.songs.length} TRACK{tape.songs.length !== 1 && "S"}
                    </p>
                </div>

                <div className="space-y-4 pt-2">
                    {tape.songs.map((song, i) => {
                        const videoId = parseYouTubeId(song.url);
                        return (
                            <div key={i} className="flex flex-col gap-3 bg-zinc-950/50 p-4 rounded-2xl border border-zinc-900/80">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="flex items-center justify-center w-6 h-6 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-500 shrink-0">
                                            {i + 1}
                                        </span>
                                        <h3 className="font-medium text-lg leading-tight break-words pr-2">
                                            {song.title}
                                        </h3>
                                    </div>
                                </div>

                                {videoId ? (
                                    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-zinc-900 mt-2">
                                        <iframe
                                            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                                            title={`${song.title} audio player`}
                                            className="absolute inset-0 w-full h-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                ) : (
                                    <div className="w-full aspect-video rounded-xl bg-zinc-900/50 border border-zinc-800 flex flex-col items-center justify-center text-zinc-500 gap-2 mt-2">
                                        <PlayCircle className="w-8 h-8 opacity-50" />
                                        <p className="text-sm">Invalid YouTube URL</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="py-8 text-center">
                    <p className="text-zinc-600 text-xs font-mono tracking-widest">END OF TAPE</p>
                </div>
            </div>
        </div>
    );
}
