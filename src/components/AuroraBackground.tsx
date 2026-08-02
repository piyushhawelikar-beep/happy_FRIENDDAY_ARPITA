export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="aurora-blob aurora-one" />
      <div className="aurora-blob aurora-two" />
      <div className="aurora-blob aurora-three" />
      <div className="starfield absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,var(--vignette)_100%)]" />
    </div>
  );
}
