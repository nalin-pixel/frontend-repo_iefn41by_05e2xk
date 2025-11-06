import { useEffect, useState } from 'react';
import { Rocket, Sparkles } from 'lucide-react';

const projectsData = [
  {
    title: 'Neon Navigator',
    subtitle: '3D product explorer',
    description:
      'A WebGL experience blending physics and real-time shaders for an immersive product journey.',
    tags: ['Three.js', 'GLTF', 'GPU Particles'],
  },
  {
    title: 'HoloBoard',
    subtitle: 'Realtime collaboration',
    description:
      'A multiplayer whiteboard with CRDT sync, voice rooms, and cinematic interactions.',
    tags: ['WebRTC', 'CRDT', 'Framer Motion'],
  },
  {
    title: 'PulseOS',
    subtitle: 'AI operating surface',
    description:
      'A desktop-class UI for orchestrating AI agents with drag-and-drop tools and workflows.',
    tags: ['FastAPI', 'React', 'Agents'],
  },
];

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="projects" className="relative w-full bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Selected Work</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              A glimpse into experiments at the edge of web, graphics, and human–computer interaction.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2 hover:bg-white/10 transition">
            <Sparkles className="h-4 w-4" /> New collaborations
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((p, idx) => (
            <article key={idx} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="aspect-[16/10] w-full rounded-xl bg-gradient-to-br from-fuchsia-600/30 to-indigo-600/30 ring-1 ring-inset ring-white/10" />
              <h3 className="mt-5 text-xl font-medium">{p.title}</h3>
              <p className="text-sm text-white/60">{p.subtitle}</p>
              <p className="mt-3 text-white/80">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 px-2 py-1">{t}</span>
                ))}
              </div>
              <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-br from-fuchsia-500/0 to-indigo-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-20 ${mounted ? '' : 'opacity-0'}`} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
