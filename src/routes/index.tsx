import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AuroraBackground } from "@/components/AuroraBackground";
import { FloatingHearts } from "@/components/FloatingHearts";
import { GlowCursor } from "@/components/GlowCursor";
import { WelcomeGate } from "@/components/WelcomeGate";
import { AnimatedLetter } from "@/components/AnimatedLetter";
import { PhotoGallery } from "@/components/PhotoGallery";
import { VideoGallery } from "@/components/VideoGallery";
import { Timeline } from "@/components/Timeline";
import { Quotes } from "@/components/Quotes";
import { QRSection } from "@/components/QRSection";
import { Ending } from "@/components/Ending";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Sparkles } from "@/components/Sparkles";
import { burstConfetti } from "@/lib/celebrate";

const TITLE = "Happy Friendship Day, Arpita ❤️ — A Surprise from Piyush";
const DESCRIPTION =
  "An ultra-premium Friendship Day surprise for Arpita: a handwritten letter, photo and video galleries, a memory timeline, music and fireworks.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [opened, setOpened] = useState(false);

  const open = () => {
    setOpened(true);
    burstConfetti();
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AuroraBackground />
      <GlowCursor />
      {opened && <FloatingHearts />}

      <AnimatePresence mode="wait">
        {!opened ? (
          <WelcomeGate key="gate" onOpen={open} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, filter: "blur(20px)", scale: 0.98 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <Hero />
            <AnimatedLetter />
            <PhotoGallery />
            <VideoGallery />
            <Timeline />
            <Quotes />
            <QRSection />
            <Ending />
          </motion.div>
        )}
      </AnimatePresence>

      {opened && <MusicPlayer autoStart />}
    </main>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <Sparkles count={45} />
      <motion.p
        className="glass-pill mb-7 text-[0.65rem] tracking-[0.35em] uppercase text-muted-foreground"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        02 · 08 · Friendship Day
      </motion.p>

      <motion.h1
        className="max-w-4xl font-display text-4xl leading-[1.08] font-semibold tracking-tight sm:text-6xl lg:text-[4.5rem]"
        initial={{ opacity: 0, y: 40, filter: "blur(14px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.45, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="gradient-text">For Arpita</span>
        <br />
        my favourite kind of forever
      </motion.h1>

      <motion.p
        className="mt-7 max-w-xl text-base text-muted-foreground sm:text-lg"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.9 }}
      >
        Scroll slowly. Every section below is a piece of us — words, photos, videos,
        memories, and a little bit of magic.
      </motion.p>

      <motion.a
        href="#letter"
        className="btn-hero mt-11"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.95, duration: 0.8 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        <span className="relative z-10">Read my letter</span>
      </motion.a>

      <motion.div
        className="absolute bottom-24 h-12 w-px bg-linear-to-b from-transparent via-primary-glow to-transparent"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      />
    </section>
  );
}
