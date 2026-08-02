import { motion } from "framer-motion";
import { Sparkles } from "./Sparkles";

export function WelcomeGate({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(18px)", scale: 1.06 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <Sparkles count={50} />

      <motion.p
        className="glass-pill mb-8 text-xs tracking-[0.35em] uppercase text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        A surprise from Piyush
      </motion.p>

      <motion.h1
        className="max-w-4xl font-display text-4xl leading-[1.1] font-semibold tracking-tight text-glow sm:text-6xl lg:text-7xl"
        initial={{ opacity: 0, y: 40, filter: "blur(14px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.35, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="gradient-text">Happy Friendship Day</span>
        <br />
        <span className="inline-flex items-baseline gap-3">
          Arpita
          <motion.span
            className="text-rose"
            animate={{ scale: [1, 1.18, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            ❤️
          </motion.span>
        </span>
      </motion.h1>

      <motion.p
        className="mt-7 max-w-xl text-base text-muted-foreground sm:text-lg"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.9 }}
      >
        Some friendships are not found, they are gifted. This little world is made
        entirely for you.
      </motion.p>

      <motion.button
        type="button"
        onClick={onOpen}
        className="btn-hero mt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.95, duration: 0.8 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        <span className="relative z-10">Open My Surprise</span>
      </motion.button>

      <motion.div
        className="absolute bottom-8 text-[0.7rem] tracking-[0.3em] uppercase text-muted-foreground/70"
        animate={{ opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 2.6, repeat: Infinity }}
      >
        tap to begin
      </motion.div>
    </motion.section>
  );
}
