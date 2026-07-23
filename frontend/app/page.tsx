const voices = [
  { name: "Paris Narrator", tags: ["French", "Narrator"], engine: "Coqui XTTS v2" },
  { name: "Studio Podcast", tags: ["English", "Podcast"], engine: "OpenVoice" },
  { name: "Character Demo", tags: ["Character", "Audiobook"], engine: "StyleTTS2" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Open Source Voice Hub</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight">Clone, organize, and ship voices through one modular platform.</h1>
          <p className="mt-5 text-lg text-slate-300">A production-ready FastAPI and Next.js architecture for uploads, AI embeddings, searchable voice libraries, TTS generation, streaming, admin operations, and pluggable engines.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {voices.map((voice) => (
            <article key={voice.name} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
              <div className="h-20 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 opacity-80" />
              <h2 className="mt-5 text-xl font-semibold">{voice.name}</h2>
              <p className="text-sm text-slate-400">{voice.engine}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {voice.tags.map((tag) => <span key={tag} className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
        <div className="grid gap-4 rounded-3xl border border-white/10 bg-slate-900 p-6 md:grid-cols-4">
          {["Upload 500 MB samples", "Extract embeddings", "Generate and stream TTS", "Admin jobs and GPU telemetry"].map((item) => <div key={item} className="text-slate-200">✓ {item}</div>)}
        </div>
      </section>
    </main>
  );
}
