import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Sent! I will get back to you shortly.');
  };

  return (
    <section id="contact" className="relative w-full bg-black text-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Let’s build the future</h2>
        <p className="mt-2 text-white/70">Have a project or idea? Drop a line—let’s craft something remarkable together.</p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Your name" className="w-full rounded-md bg-white/5 px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-white/30" />
            <input required type="email" placeholder="Email" className="w-full rounded-md bg-white/5 px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-white/30" />
          </div>
          <input placeholder="Subject" className="w-full rounded-md bg-white/5 px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-white/30" />
          <textarea required rows={5} placeholder="Tell me about your vision..." className="w-full rounded-md bg-white/5 px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-white/30" />
          <div className="flex items-center gap-4">
            <button className="inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition">
              <Send className="h-4 w-4" /> Send message
            </button>
            <span className="text-sm text-white/70">{status}</span>
          </div>
        </form>
      </div>
    </section>
  );
}
