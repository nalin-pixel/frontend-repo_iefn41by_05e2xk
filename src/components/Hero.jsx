import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-start justify-center px-6">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
          Next‑Gen AI Portfolio
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
          I build immersive,
          <br />
          futuristic web experiences
        </h1>
        <p className="mt-5 max-w-xl text-white/80">
          I’m Flames.Blue — a creative AI engineer crafting cyberpunk-grade, interactive products that blend
          3D, motion, and systems thinking. Let’s launch something extraordinary.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#projects" className="rounded-lg bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition">View Projects</a>
          <a href="#contact" className="rounded-lg border border-white/20 px-5 py-3 font-medium hover:bg-white/10 transition">Get in Touch</a>
        </div>
      </div>

      {/* Gradient overlay that won't block pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(139,92,246,0.25),rgba(0,0,0,0))]" />
    </section>
  );
}
