import { useState, useEffect } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-20 transition-all ${
      scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500">
            <Rocket className="h-5 w-5" />
          </span>
          <span className="font-semibold tracking-tight">Flames.Blue</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a
            href="#contact"
            className="ml-2 inline-flex items-center rounded-md bg-white/10 px-4 py-2 text-white hover:bg-white/20 border border-white/10"
          >
            Hire Me
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-6 pb-6 text-white/90 space-y-3">
          <a href="#projects" className="block py-2 border-b border-white/10" onClick={() => setOpen(false)}>Projects</a>
          <a href="#about" className="block py-2 border-b border-white/10" onClick={() => setOpen(false)}>About</a>
          <a href="#contact" className="block py-2" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}
