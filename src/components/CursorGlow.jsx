import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const d = dot.current;
    const r = ring.current;
    let xr = 0, yr = 0;

    const onMove = (e) => {
      const { clientX: x, clientY: y } = e;
      if (d) {
        d.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    const loop = () => {
      const dRect = d.getBoundingClientRect();
      const targetX = dRect.left;
      const targetY = dRect.top;
      xr += (targetX - xr - 10) * 0.15;
      yr += (targetY - yr - 10) * 0.15;
      if (r) {
        r.style.transform = `translate3d(${xr}px, ${yr}px, 0)`;
      }
      requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    const id = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(id);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] mix-blend-screen">
      <div ref={ring} className="absolute -translate-x-1/2 -translate-y-1/2 size-24 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.25),rgba(168,85,247,0.2),rgba(163,230,53,0.15))] blur-xl" />
      <div ref={dot} className="absolute -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.85)]" />
    </div>
  );
}
