export function SparkField() {
  const sparks = Array.from({ length: 22 });
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {sparks.map((_, i) => {
        const size = 1.5 + Math.random() * 2;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const driftY = 10 + Math.random() * 20;
        const floatDur = 9 + Math.random() * 10;
        const twinkleDur = 3 + Math.random() * 3.5;
        const delay = -Math.random() * 8;
        const red = i % 2 === 0;
        const color = red ? "rgba(255, 90, 90, 0.85)" : "rgba(255, 255, 255, 0.9)";
        const glow = red ? "rgba(230, 40, 40, 0.6)" : "rgba(255, 255, 255, 0.5)";
        return (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: size,
              height: size,
              background: color,
              boxShadow: `0 0 ${4 + size}px ${glow}`,
              opacity: 0,
              animation: `sparkle-twinkle ${twinkleDur}s ease-in-out ${delay}s infinite, sparkle-float ${floatDur}s ease-in-out ${delay}s infinite`,
              ["--drift-y" as any]: `-${driftY}px`,
            }}
          />
        );
      })}
    </div>
  );
}
