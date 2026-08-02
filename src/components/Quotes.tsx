import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const QUOTES = [
  { text: "A real friend is one who walks in when the rest of the world walks out.", by: "Walter Winchell" },
  { text: "Friendship is the only cement that will ever hold the world together.", by: "Woodrow Wilson" },
  { text: "In the cookie of life, friends are the chocolate chips.", by: "Salman Rushdie" },
  { text: "Some souls just understand each other upon meeting.", by: "N.R. Hart" },
  { text: "Good friends are like stars — you don't always see them, but they're always there.", by: "Unknown" },
  { text: "We are best friends. Always remember, if you fall, I will pick you up — after I finish laughing.", by: "Unknown" },
];

export function Quotes() {
  return (
    <section id="quotes" className="section-shell">
      <SectionHeading eyebrow="Friendship quotes" title="Things that sound like us" />
      <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {QUOTES.map((q, i) => (
          <motion.blockquote
            key={q.text}
            className="glass-card flex h-full flex-col justify-between p-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
            whileHover={{ y: -6, rotate: i % 2 ? 0.6 : -0.6 }}
          >
            <p className="font-letter text-lg leading-relaxed text-foreground/90">“{q.text}”</p>
            <footer className="mt-5 text-[0.7rem] tracking-[0.25em] uppercase text-muted-foreground">
              {q.by}
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
