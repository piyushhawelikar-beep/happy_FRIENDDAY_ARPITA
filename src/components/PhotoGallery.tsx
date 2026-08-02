import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { photos, prettyName } from "@/lib/media";
import { SectionHeading } from "./SectionHeading";

export function PhotoGallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-shell">
      <SectionHeading
        eyebrow="Gallery"
        title="Frames of us"
        subtitle={
          photos.length
            ? "Every picture here is a day I would happily live again."
            : "Drop your pictures into /public/photos and they appear here automatically."
        }
      />

      {photos.length === 0 ? (
        <EmptyHint text="No photos yet — add files to /public/photos" />
      ) : (
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {photos.map((src, i) => (
            <motion.button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              className="group glass-card relative aspect-4/3 overflow-hidden"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <img
                src={src}
                alt={prettyName(src)}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-linear-to-t from-overlay to-transparent opacity-70" />
              <span className="absolute bottom-3 left-4 text-xs tracking-wide text-foreground/85 capitalize">
                {prettyName(src)}
              </span>
            </motion.button>
          ))}
        </div>
      )}

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-60 flex items-center justify-center bg-overlay/90 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.img
              key={photos[active]}
              src={photos[active]}
              alt={prettyName(photos[active] ?? "")}
              className="max-h-[86vh] w-auto max-w-full rounded-3xl shadow-elegant"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
            <button
              type="button"
              aria-label="Close"
              className="glass-pill absolute top-6 right-6 p-3"
              onClick={() => setActive(null)}
            >
              <X className="size-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export function EmptyHint({ text }: { text: string }) {
  return (
    <div className="glass-card mx-auto max-w-xl px-6 py-10 text-center text-sm text-muted-foreground">
      {text}
    </div>
  );
}
