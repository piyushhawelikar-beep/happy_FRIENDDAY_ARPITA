import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

export function QRSection() {
  const [url, setUrl] = useState("https://lovable.dev");

  useEffect(() => {
    setUrl(window.location.origin + window.location.pathname);
  }, []);

  return (
    <section id="qr" className="section-shell">
      <SectionHeading
        eyebrow="Keep it forever"
        title="Scan to open anywhere"
        subtitle="Point your camera here to carry this surprise in your pocket."
      />
      <motion.div
        className="glass-card mx-auto flex max-w-md flex-col items-center gap-6 p-8"
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="rounded-2xl bg-qr-surface p-4 shadow-glow">
          <QRCodeSVG value={url} size={168} level="M" bgColor="transparent" fgColor="#0b1026" />
        </div>
        <p className="text-center text-xs break-all text-muted-foreground">{url}</p>
      </motion.div>
    </section>
  );
}
