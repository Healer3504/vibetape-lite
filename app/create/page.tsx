"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cassette from "@/components/Cassette";
import { Plus, Trash2, ArrowRight } from "lucide-react";

const COLORS = [
    { name: "Obsidian", class: "bg-zinc-800" },
    { name: "Crimson", class: "bg-red-900" },
    { name: "Ocean", class: "bg-blue-900" },
    { name: "Forest", class: "bg-emerald-900" },
    { name: "Amethyst", class: "bg-purple-900" },
];

export default function CreateTape() {
    const router = useRouter();
    const [title, setTitle] = useState("MY MIXTAPE");
    const [color, setColor] = useState(COLORS[0].class);
    const [songs, setSongs] = useState([{ title: "", url: "" }]);
    const [isGenerating, setIsGenerating] = useState(false);

    const addSong = () => {
        if (songs.length < 5) {
            setSongs([...songs, { title: "", url: "" }]);
        }
    };

    const removeSong = (index: number) => {
        setSongs(songs.filter((_, i) => i !== index));
    };

    const updateSong = (index: number, field: "title" | "url", value: string) => {
        const newSongs = [...songs];
        newSongs[index][field] = value;
        setSongs(newSongs);
    };

    const handleGenerate = () => {
        setIsGenerating(true);

        // Filter out empty songs and validate simple YouTube URL format
        const validSongs = songs.filter(s => s.title.trim() && s.url.trim());

        if (validSongs.length === 0) {
            alert("Please add at least one valid song with a title and URL.");
            setIsGenerating(false);
            return;
        }

        const payload = {
            title: title || "UNTITLED",
            color,
            songs: validSongs
        };

        try {
            // Base64 encode the JSON data safely for URL
            const dataStr = JSON.stringify(payload);
            const b64 = btoa(encodeURIComponent(dataStr));
            const encoded = b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
            router.push(`/tape/${encoded}`);
        } catch (e) {
            console.error("Error encoding tape data", e);
            setIsGenerating(false);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row gap-12 sm:gap-16 items-start w-full">
            {/* Visual Preview */}
            <div className="w-full lg:w-1/2 flex flex-col items-center sticky top-24 pt-4">
                <h2 className="text-zinc-500 font-medium text-xs tracking-widest uppercase mb-6 flex items-center gap-2">
                    <span className="w-2 h-px bg-zinc-700"></span>
                    Cassette Preview
                    <span className="flex-1 h-px bg-zinc-700/30"></span>
                </h2>
                <div className="w-full flex justify-center perspective-1000">
                    <div className="transform rotateX-6 animate-[bounce_8s_ease-in-out_infinite] w-full max-w-md">
                        <Cassette title={title} color={color} isSpinning={false} />
                    </div>
                </div>
            </div>

            {/* Editor Form */}
            <div className="w-full lg:w-1/2 flex flex-col space-y-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Build Your Tape</h1>
                    <p className="text-zinc-400 text-sm">Customize appearance and add tracks.</p>
                </div>

                <div className="space-y-6">
                    {/* Title Input */}
                    <div className="space-y-2">
                        <label htmlFor="title" className="text-sm font-medium text-zinc-300">
                            Tape Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            maxLength={24}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="SUMMER VIBES"
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all font-mono uppercase"
                        />
                        <p className="text-xs text-zinc-500 text-right">{title.length}/24</p>
                    </div>

                    {/* Color Picker */}
                    <div className="space-y-3">
                        <label className="text-sm font-medium text-zinc-300">
                            Cassette Color
                        </label>
                        <div className="flex flex-wrap gap-3">
                            {COLORS.map((c) => (
                                <button
                                    key={c.name}
                                    onClick={() => setColor(c.class)}
                                    className={`w-12 h-12 rounded-full border-2 transition-all ${c.class} ${color === c.class
                                        ? "border-white scale-110 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                                        : "border-transparent hover:scale-105 opacity-70 hover:opacity-100"
                                        }`}
                                    aria-label={`Select ${c.name} color`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="h-px w-full bg-zinc-900 my-8" />

                    {/* Songs List */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-zinc-300">
                                Tracklist ({songs.length}/5)
                            </label>
                        </div>

                        <div className="space-y-4">
                            {songs.map((song, index) => (
                                <div key={index} className="flex gap-3 bg-zinc-900/50 p-3 rounded-xl border border-zinc-800 focus-within:border-zinc-700 focus-within:bg-zinc-900 transition-colors">
                                    <div className="flex flex-col justify-center items-center w-6 text-zinc-600 font-mono text-xs">
                                        {index + 1}
                                    </div>
                                    <div className="flex-1 space-y-3">
                                        <input
                                            type="text"
                                            placeholder="Song Title (e.g. Lofi Study Beat)"
                                            value={song.title}
                                            onChange={(e) => updateSong(index, "title", e.target.value)}
                                            className="w-full bg-transparent border-b border-zinc-800 px-1 py-1.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                                        />
                                        <input
                                            type="url"
                                            placeholder="YouTube URL (https://youtube.com/watch?v=...)"
                                            value={song.url}
                                            onChange={(e) => updateSong(index, "url", e.target.value)}
                                            className="w-full bg-transparent border-b border-zinc-800 px-1 py-1.5 text-xs text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                                        />
                                    </div>
                                    <div className="flex items-center">
                                        <button
                                            onClick={() => removeSong(index)}
                                            disabled={songs.length === 1}
                                            className="p-2 text-zinc-600 hover:text-red-400 hover:bg-black/50 rounded-lg transition-colors disabled:opacity-30 disabled:hover:text-zinc-600 disabled:hover:bg-transparent"
                                            title="Remove track"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {songs.length < 5 && (
                            <button
                                onClick={addSong}
                                className="w-full py-4 border border-dashed border-zinc-800 rounded-xl text-zinc-500 flex items-center justify-center gap-2 hover:bg-zinc-900/50 hover:text-zinc-300 hover:border-zinc-700 transition-all text-sm font-medium mt-4"
                            >
                                <Plus className="w-4 h-4" /> Add Track
                            </button>
                        )}
                    </div>

                    <div className="pt-8">
                        <button
                            onClick={handleGenerate}
                            disabled={isGenerating || songs.length === 0}
                            className="w-full flex items-center justify-center gap-3 h-14 bg-white text-black font-semibold rounded-xl hover:bg-zinc-200 active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none group"
                        >
                            {isGenerating ? (
                                <span className="animate-pulse">Encoding Data...</span>
                            ) : (
                                <>
                                    Generate Tape <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                        <p className="text-center text-xs text-zinc-600 mt-4 px-8">
                            All data is encoded directly into the URL. We store absolutely nothing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
