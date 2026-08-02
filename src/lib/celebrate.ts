import confetti from "canvas-confetti";

const COLORS = ["#a78bfa", "#7c5cff", "#38bdf8", "#f472b6", "#ffffff"];

export function burstConfetti() {
  confetti({
    particleCount: 140,
    spread: 90,
    origin: { y: 0.7 },
    colors: COLORS,
    scalar: 1.1,
  });
}

export function fireworksShow(durationMs = 6000) {
  const end = Date.now() + durationMs;
  const frame = () => {
    confetti({
      particleCount: 6,
      startVelocity: 42,
      spread: 360,
      ticks: 90,
      gravity: 0.9,
      origin: { x: Math.random(), y: Math.random() * 0.6 },
      colors: COLORS,
      shapes: ["circle"],
      scalar: 0.9,
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  };
  frame();
}

export function heartRain() {
  confetti({
    particleCount: 60,
    spread: 120,
    origin: { y: 0.2 },
    colors: ["#f472b6", "#a78bfa"],
    gravity: 0.6,
    scalar: 1.4,
  });
}
