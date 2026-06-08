export function ParticleField() {
  const particles = Array.from({ length: 28 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((_, i) => {
        const size = 2 + Math.random() * 4;
        const left = Math.random() * 100;
        const duration = 14 + Math.random() * 18;
        const delay = Math.random() * 18;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-primary"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              bottom: -10,
              opacity: 0.5,
              boxShadow: "0 0 12px var(--color-primary)",
              animation: `particle-drift ${duration}s linear ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}
