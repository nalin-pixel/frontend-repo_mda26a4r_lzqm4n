import { Code2, Rocket, Sparkles, Cpu, Globe, PenTool } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  { id: 1, title: "Product Design", icon: PenTool, desc: "From research to flows to pixel-perfect UI kits.", col: "col-span-2", row: "row-span-1" },
  { id: 2, title: "Creative Frontend", icon: Code2, desc: "Next-level, animated React experiences.", col: "col-span-1", row: "row-span-2" },
  { id: 3, title: "WebGL & 3D", icon: Cpu, desc: "Spline, Three.js and shader-driven visuals.", col: "col-span-1", row: "row-span-1" },
  { id: 4, title: "Brand Systems", icon: Sparkles, desc: "Logos, typography and motion guidelines.", col: "col-span-1", row: "row-span-1" },
  { id: 5, title: "Performance", icon: Rocket, desc: "Ship fast, accessible, SEO-friendly sites.", col: "col-span-2", row: "row-span-1" },
  { id: 6, title: "Strategy", icon: Globe, desc: "Narratives that convert attention into action.", col: "col-span-1", row: "row-span-1" }
];

export default function Bento() {
  return (
    <section id="work" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <h2 className="mb-10 text-4xl md:text-5xl font-extrabold tracking-tight text-white">
        Selected Capabilities
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[160px] gap-4">
        {cards.map((c, i) => (
          <BentoCard key={c.id} index={i} {...c} />
        ))}
      </div>
    </section>
  );
}

function BentoCard({ title, icon: Icon, desc, col, row, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className={`${col} ${row} group relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-5`}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[radial-gradient(800px_400px_at_0%_0%,rgba(34,211,238,0.12),transparent_60%),radial-gradient(800px_400px_at_100%_0%,rgba(168,85,247,0.12),transparent_60%),radial-gradient(900px_500px_at_50%_100%,rgba(163,230,53,0.10),transparent_60%)]" />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-2xl border border-white/15 bg-white/10 text-white/90">
            <Icon size={18} />
          </div>
          <h3 className="text-white font-semibold">{title}</h3>
        </div>
        <p className="text-white/70 text-sm leading-relaxed max-w-sm">{desc}</p>
      </div>
      <div className="absolute -inset-px rounded-3xl border border-transparent group-hover:border-white/20 transition-colors" />
    </motion.div>
  );
}
