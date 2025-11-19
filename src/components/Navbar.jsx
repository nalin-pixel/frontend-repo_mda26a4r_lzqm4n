import { Menu, Github, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_60px_rgba(88,101,242,0.15)]">
          <div className="flex items-center gap-3 pl-4">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 via-purple-500 to-lime-400 shadow-[0_0_40px_rgba(99,102,241,0.65)]" />
            <motion.span
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white/90 font-semibold tracking-tight text-lg"
            >
              Your Name
            </motion.span>
          </div>
          <div className="flex items-center gap-2 pr-2">
            <NavButton icon={<Github size={18} />} label="GitHub" href="#" />
            <NavButton icon={<Mail size={18} />} label="Contact" href="#contact" />
            <div className="h-10 w-px bg-white/10" />
            <button className="size-10 grid place-items-center text-white/70 hover:text-white transition-colors">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavButton({ icon, label, href }) {
  return (
    <a
      href={href}
      className="group relative inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:text-white transition-all overflow-hidden"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-purple-400/10 to-lime-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <span className="text-white/70 group-hover:text-white transition-colors">
        {icon}
      </span>
      <span className="relative z-10">{label}</span>
    </a>
  );
}
