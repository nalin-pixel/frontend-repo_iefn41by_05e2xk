export default function Footer() {
  return (
    <footer className="w-full bg-black text-white/70 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Flames.Blue — All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
