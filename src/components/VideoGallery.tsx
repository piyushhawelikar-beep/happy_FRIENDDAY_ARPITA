import { motion } from "framer-motion";
import { prettyName, videos } from "@/lib/media";
import { SectionHeading } from "./SectionHeading";
import { EmptyHint } from "./PhotoGallery";

export function VideoGallery() {
  return (
    <section id="videos" className="section-shell">
      <SectionHeading
        eyebrow="Video gallery"
        title="Moving memories"
        subtitle="Tap fullscreen and turn the volume up."
      />

      {videos.length === 0 ? (
        <EmptyHint text="No videos yet — add files to /public/videos and they load automatically" />
      ) : (
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
          {videos.map((src, i) => (
            <motion.figure
              key={src}
              className="glass-card overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: (i % 2) * 0.1 }}
            >
              <video
                src={src}
                controls
                playsInline
                preload="metadata"
                className="aspect-video w-full bg-overlay object-cover"
              />
              <figcaption className="px-5 py-4 text-xs tracking-wide text-muted-foreground capitalize">
                {prettyName(src)}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      )}
    </section>
  );
}
