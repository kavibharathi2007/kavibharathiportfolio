export function AtomField() {
  const atoms = Array.from({ length: 9 });
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {atoms.map((_, i) => {
        const size = 70 + Math.random() * 120;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const dur = 18 + Math.random() * 22;
        const delay = -Math.random() * 20;
        const tilt = Math.random() * 180;
        return (
          <div
            key={i}
            className="absolute"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: size,
              height: size,
              opacity: 0.35,
              animation: `atom-float ${dur}s ease-in-out ${delay}s infinite`,
              transform: `rotate(${tilt}deg)`,
            }}
          >
            <svg viewBox="0 0 100 100" className="size-full">
              <defs>
                <radialGradient id={`nuc-${i}`}>
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.2" />
                </radialGradient>
              </defs>
              {[0, 60, 120].map((rot, j) => (
                <ellipse
                  key={j}
                  cx="50"
                  cy="50"
                  rx="46"
                  ry="18"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeOpacity="0.55"
                  strokeWidth="0.8"
                  transform={`rotate(${rot} 50 50)`}
                />
              ))}
              <circle cx="50" cy="50" r="4" fill={`url(#nuc-${i})`} />
              {[0, 60, 120].map((rot, j) => (
                <g
                  key={`e-${j}`}
                  style={{
                    transformOrigin: "50px 50px",
                    animation: `atom-orbit ${6 + j * 1.5}s linear infinite`,
                  }}
                >
                  <g transform={`rotate(${rot} 50 50)`}>
                    <circle cx="96" cy="50" r="2" fill="#ffffff" opacity="0.9" />
                  </g>
                </g>
              ))}
            </svg>
          </div>
        );
      })}
    </div>
  );
}
