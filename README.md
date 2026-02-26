# 🎵 VibeTape Lite

> **Curate your vibe.** Create fully client-side, shareable digital mixtapes — instantly. No auth. No database. Pure vibes.

🔗 **Live Demo:** [https://vibetape-lite.vercel.app/](https://vibetape-lite.vercel.app/)

---

## 📖 What is VibeTape Lite?

VibeTape Lite is a **digital mixtape creator** that lets you curate and share playlists with an analog aesthetic — all without signing up, logging in, or touching a database.

Just paste YouTube links, build your tape, and share it via a single URL. Everything is encoded directly in the link itself.

### ✨ Key Features

- 🎛️ **Analog Feel** — Digital mixtapes with a retro, cassette-tape aesthetic
- ▶️ **YouTube Powered** — Add tracks by simply pasting YouTube links
- 🔗 **Instantly Shareable** — Mixtape data is encoded in the URL — share it anywhere, anytime
- 🔒 **No Auth, No Backend** — 100% client-side. No accounts, no database, no tracking
- ⚡ **Instant Load** — Zero server round-trips for mixtape data

---

## 🏗️ Workflow & Architecture

```
User pastes YouTube URL(s)
        │
        ▼
  Track metadata is parsed
  & added to the mixtape
        │
        ▼
  Mixtape state is serialized
  & encoded into a URL param
        │
        ▼
  Shareable link is generated
  (e.g. /play?tape=<encoded_data>)
        │
        ▼
  Recipient opens link →
  URL is decoded → Mixtape loads
  instantly with no API calls
```

**Tech Stack:**

| Layer | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org) (App Router) |
| Styling | [Tailwind CSS](https://tailwindcss.com) |
| Fonts | [Geist](https://vercel.com/font) via `next/font` |
| Playback | YouTube Embed API |
| State | URL-encoded (no database) |
| Deployment | [Vercel](https://vercel.com) |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have one of the following installed:

- [Node.js](https://nodejs.org/) v18+
- npm / yarn / pnpm / bun

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/vibetape-lite.git
cd vibetape-lite
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## 🎮 How to Use VibeTape Lite

1. **Visit the app** at [https://vibetape-lite.vercel.app/](https://vibetape-lite.vercel.app/) or your local dev server
2. **Click "Start Creating"** to open the mixtape editor
3. **Paste a YouTube URL** into the track input field
4. **Add as many tracks** as you like to build your tape
5. **Copy the generated share link** — your entire mixtape is encoded in the URL
6. **Share the link** with anyone — they'll see and play your tape instantly, no login required

---

## 📁 Project Structure

```
vibetape-lite/
├── app/
│   ├── page.tsx          # Landing page
│   ├── create/           # Mixtape creation page
│   ├── play/             # Mixtape playback page
│   └── layout.tsx        # Root layout
├── components/           # Reusable UI components
├── public/               # Static assets
├── tailwind.config.ts    # Tailwind configuration
└── next.config.ts        # Next.js configuration
```

---

## 🛠️ Useful Commands

| Command | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server locally |
| `npm run lint` | Run ESLint checks |

---

## 🌐 Deployment

This project is deployed on **Vercel**. To deploy your own instance:

1. Push your repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel auto-detects Next.js — click **Deploy**
4. Your live URL is ready in seconds

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_source=github)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open an issue or submit a pull request.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Built with ❤️ using Next.js & Tailwind CSS</p>
