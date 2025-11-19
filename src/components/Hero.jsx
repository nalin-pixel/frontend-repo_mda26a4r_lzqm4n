import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_20%_20%,rgba(34,211,238,0.25),transparent_50%),radial-gradient(1000px_600px_at_80%_30%,rgba(168,85,247,0.20),transparent_50%),radial-gradient(1200px_700px_at_50%_90%,rgba(163,230,53,0.12),transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[clamp(2.8rem,6vw,7rem)] leading-[0.9] font-extrabold tracking-tight text-white drop-shadow-[0_0_40px_rgba(59,130,246,0.25)]"
        >
          Designing immersive
          <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-lime-400 bg-clip-text text-transparent">
            high‑tech experiences
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-6 max-w-2xl text-lg text-white/70"
        >
          I craft ultra-modern interfaces with kinetic type, micro‑interactions and 3D motion. From concept to code: pixel‑perfect, performant, unforgettable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <CTA text="View Work" href="#work" />
          <CTA text="Get in Touch" href="#contact" variant="ghost" />
        </motion.div>
      </div>

      {/* Glow floor */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-64 w-[160%] rounded-[50%] bg-[radial-gradient(closest-side,rgba(56,189,248,0.25),transparent)] blur-3xl" />
    </section>
  );
}

function CTA({ text, href, variant }) {
  const base = "relative overflow-hidden rounded-2xl px-6 py-3 text-sm font-semibold tracking-wide transition-all";
  if (variant === "ghost") {
    return (
      <a href={href} className={`${base} border border-white/15 bg-white/5 text-white/90 hover:bg-white/10`}>
        <span className="absolute inset-0 pointer-events-none bg-gradient-to-r from-cyan-400/0 via-purple-400/10 to-lime-400/0" />
        {text}
      </a>
    );
  }
  return (
    <a href={href} className={`${base} bg-gradient-to-r from-cyan-400 via-purple-500 to-lime-400 text-black shadow-[0_10px_40px_rgba(34,211,238,0.25)] hover:scale-[1.02]`}>
      {text}
    </a>
  );
}
