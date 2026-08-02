import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Music, Pause, Play, SkipForward, Volume2 } from "lucide-react";
import { prettyName, tracks } from "@/lib/media";

export function MusicPlayer({ autoStart }: { autoStart: boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!autoStart || tracks.length === 0) return;
    const el = audioRef.current;
    if (!el) return;
    el.volume = 0.45;
    void el
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }, [autoStart]);

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      void el.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  const next = () => setIndex((i) => (i + 1) % Math.max(tracks.length, 1));

  const current = tracks[index];

  return (
    <motion.div
      className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      <div className="glass-pill flex items-center gap-3 px-4 py-2.5">
        <span className="relative flex size-8 items-center justify-center rounded-full bg-primary/25">
          <Music className="size-3.5 text-primary-glow" />
          {playing && <span className="absolute inset-0 animate-ping rounded-full bg-primary/20" />}
        </span>

        <div className="max-w-[9rem] sm:max-w-[13rem]">
          <p className="truncate text-xs font-medium capitalize">
            {current ? prettyName(current) : "Add songs to /public/music"}
          </p>
          <p className="text-[0.6rem] tracking-[0.2em] uppercase text-muted-foreground">
            {current ? (playing ? "now playing" : "paused") : "no track"}
          </p>
        </div>

        <button
          type="button"
          aria-label={playing ? "Pause music" : "Play music"}
          onClick={toggle}
          disabled={!current}
          className="rounded-full p-2 transition-colors hover:bg-primary/25 disabled:opacity-40"
        >
          {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
        </button>
        <button
          type="button"
          aria-label="Next track"
          onClick={next}
          disabled={tracks.length < 2}
          className="rounded-full p-2 transition-colors hover:bg-primary/25 disabled:opacity-40"
        >
          <SkipForward className="size-4" />
        </button>
        <Volume2 className="hidden size-4 text-muted-foreground sm:block" />
      </div>

      {current && (
        <audio
          ref={audioRef}
          src={current}
          loop={tracks.length === 1}
          onEnded={next}
          autoPlay={autoStart}
        />
      )}
    </motion.div>
  );
}
