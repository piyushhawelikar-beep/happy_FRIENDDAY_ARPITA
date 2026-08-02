import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const MOMENTS = [
  {
    when: "The first day",
    title: "Two strangers, one bench",
    text: "We talked about nothing important and somehow it became everything.",
  },
  {
    when: "That one night",
    title: "3 AM confessions",
    text: "Phone battery at 2%, hearts at 100%. Some conversations never really end.",
  },
  {
    when: "The hardest week",
    title: "You stayed",
    text: "You didn't try to fix me. You just refused to leave. That mattered more.",
  },
  {
    when: "Every festival",
    title: "Our little traditions",
    text: "Same jokes, same songs, same laughter that scares everyone else in the room.",
  },
  {
    when: "Today",
    title: "Still my person",
    text: "Years later and you're still the first person I want to tell everything to.",
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="section-shell">
      <SectionHeading eyebrow="Memory timeline" title="How we happened" />

      <div className="relative mx-auto max-w-3xl">
        <span className="absolute top-0 bottom-0 left-4 w-px bg-linear-to-b from-transparent via-primary to-transparent sm:left-1/2" />
        {MOMENTS.map((m, i) => (
          <motion.div
            key={m.title}
            className={`relative mb-10 pl-14 sm:w-1/2 sm:pl-0 ${
              i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:ml-auto sm:pl-12"
            }`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className={`absolute top-6 left-[0.6rem] size-3 rounded-full bg-primary-glow shadow-glow sm:left-auto ${
                i % 2 === 0 ? "sm:-right-1.5" : "sm:-left-1.5"
              }`}
            />
            <div className="glass-card p-6">
              <p className="text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground">
                {m.when}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
