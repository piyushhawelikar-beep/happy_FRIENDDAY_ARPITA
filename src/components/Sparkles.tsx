import { motion } from "framer-motion";
import { useMemo } from "react";

export function Sparkles({ count = 40 }: { count?: number }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        top: (i * 37) % 100,
        left: (i * 61) % 100,
        size: 2 + ((i * 5) % 4),
        delay: (i * 0.37) % 6,
        duration: 2.2 + ((i * 3) % 5) * 0.4,
      })),
    [count],
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-sparkle shadow-sparkle"
          style={{ top: `${d.top}%`, left: `${d.left}%`, width: d.size, height: d.size }}
          animate={{ opacity: [0, 1, 0], scale: [0.4, 1.3, 0.4] }}
          transition={{ duration: d.duration, delay: d.delay, repeat: Infinity }}
        />
      ))}
    </div>
  );
}
