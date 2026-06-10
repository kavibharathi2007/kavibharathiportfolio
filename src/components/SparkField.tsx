export function SparkField() {
  const sparks = Array.from({ length: 40 });
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {sparks.map((_, i) => {
        const size = 1 + Math.random() * 2.5;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const dur = 1.6 + Math.random() * 2.8;
        const delay = -Math.random() * 4;
        return (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: size,
              height: size,
              background: "#ffffff",
              boxShadow: "0 0 6px #ffffff, 0 0 14px var(--color-primary)",
              animation: `spark-twinkle ${dur}s ease-in-out ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}
