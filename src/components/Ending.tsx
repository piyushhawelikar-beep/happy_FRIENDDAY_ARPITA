import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fireworksShow, heartRain } from "@/lib/celebrate";
import { Sparkles } from "./Sparkles";

const LINES = [
  "Thank you for every smile,",
  "every memory,",
  "every laugh,",
  "and every moment.",
  "Always stay happy.",
];

export function Ending() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-150px" });

  useEffect(() => {
    if (!inView) return;
    fireworksShow(6500);
    const t = window.setTimeout(heartRain, 900);
    return () => window.clearTimeout(t);
  }, [inView]);

  return (
    <section
      ref={ref}
      id="ending"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center"
    >
      <Sparkles count={60} />

      <motion.h2
        className="font-display text-4xl leading-tight font-semibold tracking-tight sm:text-6xl"
        initial={{ opacity: 0, y: 40, filter: "blur(16px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="gradient-text">Happy Friendship Day</span>
        <br />
        <span className="inline-flex items-baseline gap-3">
          Arpita
          <motion.span
            className="text-rose"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ❤️
          </motion.span>
        </span>
      </motion.h2>

      <div className="mt-10 space-y-2">
        {LINES.map((line, i) => (
          <motion.p
            key={line}
            className="font-letter text-lg text-foreground/85 sm:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 + i * 0.25 }}
          >
            {line}
          </motion.p>
        ))}
      </div>

      <motion.button
        type="button"
        onClick={() => fireworksShow(4000)}
        className="btn-hero mt-14"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <span className="relative z-10">Celebrate again 🎉</span>
      </motion.button>

      <motion.p
        className="mt-16 text-xs tracking-[0.35em] uppercase text-muted-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.9, duration: 0.9 }}
      >
        Made with <span className="text-rose">❤️</span> by Piyush
      </motion.p>
    </section>
  );
}
