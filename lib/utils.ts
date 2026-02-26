interface TapeData {
    title: string;
    color: string;
    songs: { title: string; url: string }[];
}

export function parseYouTubeId(url: string): string | null {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
}

export function decodeTapeData(encoded: string): TapeData | null {
    try {
        const decoded = decodeURIComponent(atob(encoded));
        const data = JSON.parse(decoded);

        // Basic validation
        if (!data || typeof data !== "object") return null;
        if (!Array.isArray(data.songs)) return null;

        return data as TapeData;
    } catch (e) {
        console.error("Failed to decode tape data", e);
        return null;
    }
}
