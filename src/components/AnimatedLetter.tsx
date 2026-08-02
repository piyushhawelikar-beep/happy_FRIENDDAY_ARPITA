import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const LETTER = `Dear Arpita,

There are people who walk into your life and quietly make it better without ever asking for credit. You are that person for me.

Thank you for every late night talk, every silly fight that ended in laughter, and every time you believed in me louder than I believed in myself.

Distance, time, busy days — nothing has ever changed what we have. And nothing ever will.

Happy Friendship Day, my forever favourite person.

— Piyush`;

export function AnimatedLetter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setShown(i);
      if (i >= LETTER.length) window.clearInterval(id);
    }, 22);
    return () => window.clearInterval(id);
  }, [inView]);

  const done = shown >= LETTER.length;

  return (
    <section id="letter" className="section-shell" ref={ref}>
      <SectionHeading eyebrow="A letter for you" title="Words I never say out loud" />
      <motion.div
        className="glass-card mx-auto max-w-3xl p-7 sm:p-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="whitespace-pre-line font-letter text-[1.05rem] leading-relaxed text-foreground/90 sm:text-lg">
          {LETTER.slice(0, shown)}
          {!done && <span className="caret" />}
        </p>
      </motion.div>
    </section>
  );
}
