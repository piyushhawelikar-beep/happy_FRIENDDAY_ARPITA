import { motion } from "framer-motion";
import { useMemo } from "react";

type Heart = {
  left: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
  opacity: number;
};

export function FloatingHearts({ count = 18 }: { count?: number }) {
  const hearts = useMemo<Heart[]>(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: (i * 97) % 100,
        size: 12 + ((i * 7) % 22),
        delay: (i * 0.83) % 10,
        duration: 12 + ((i * 3) % 10),
        drift: ((i % 5) - 2) * 40,
        opacity: 0.25 + ((i % 4) * 0.15),
      })),
    [count],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {hearts.map((h, i) => (
        <motion.span
          key={i}
          className="absolute text-primary-glow"
          style={{ left: `${h.left}%`, fontSize: h.size, bottom: -40 }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: ["0vh", "-115vh"],
            x: [0, h.drift, 0],
            opacity: [0, h.opacity, h.opacity, 0],
            rotate: [0, h.drift > 0 ? 25 : -25, 0],
          }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ❤
        </motion.span>
      ))}
    </div>
  );
}
