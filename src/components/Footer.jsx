export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-10">
        <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
          Let’s build something extraordinary
        </h3>
        <p className="text-white/70 mb-8 max-w-2xl">
          Open for select collaborations, brand work, and creative technology projects. Tell me about your vision.
        </p>
        <a href="mailto:you@example.com" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-black bg-gradient-to-r from-cyan-400 via-purple-500 to-lime-400 font-semibold shadow-[0_10px_40px_rgba(168,85,247,0.25)]">
          Email me
        </a>
      </div>
      <p className="mt-10 text-center text-xs text-white/50">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
}
