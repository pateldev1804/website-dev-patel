# Project Demos & Images

Place your demo videos (e.g. `.mp4`, `.webm`) or screenshots (e.g. `.gif`, `.png`, `.jpg`) in this directory.

### Recommended Files:
1. `crypto-arb.mp4` -> For the Low-Latency Crypto Arbitrage Engine
2. `movie-booking.mp4` -> For the Online Ticket Booking System
3. `graph-rag.mp4` -> For the LLM GraphRAG Project

Once you add your files here, update the `media` property for each project in `app/page.tsx`:
```ts
media: {
  type: "video", // or "image"
  src: "/demos/crypto-arb.mp4"
}
```
Videos are configured to autoplay on a loop, muted, with inline playback on both desktop and mobile.
