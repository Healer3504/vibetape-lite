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
        // Decode URI component in case next.js router percent-encoded anything
        const cleanEncoded = decodeURIComponent(encoded);

        // Convert base64url format to standard base64 if needed
        let base64 = cleanEncoded.replace(/-/g, '+').replace(/_/g, '/');

        // Add required base64 padding
        while (base64.length % 4 !== 0) {
            base64 += '=';
        }

        const decoded = decodeURIComponent(atob(base64));
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