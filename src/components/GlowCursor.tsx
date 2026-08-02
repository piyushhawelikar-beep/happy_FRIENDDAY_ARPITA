import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function GlowCursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const onMove = (e: PointerEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-50 h-[420px] w-[420px] rounded-full opacity-60 blur-3xl"
      style={{ background: "var(--gradient-cursor)", top: 0, left: 0 }}
      animate={{ x: pos.x - 210, y: pos.y - 210 }}
      transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.6 }}
    />
  );
}
