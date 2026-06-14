import { useEffect, useRef, useState } from "react";

type Ripple = { id: number; x: number; y: number };

export function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    let rx = window.innerWidth / 2;
    let ry = window.innerHeight / 2;
    let tx = rx;
    let ty = ry;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${tx - 4}px, ${ty - 4}px, 0)`;
      }
    };
    const onDown = (e: MouseEvent) => {
      const id = ++idRef.current;
      setRipples((r) => [...r, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setRipples((r) => r.filter((p) => p.id !== id)), 700);
    };
    const loop = () => {
      rx += (tx - rx) * 0.12;
      ry += (ty - ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx - 22}px, ${ry - 22}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    loop();
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]" aria-hidden>
      <div
        ref={ringRef}
        className="absolute top-0 left-0 rounded-full"
        style={{
          width: 14,
          height: 14,
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "color-mix(in oklab, var(--color-primary) 70%, transparent)",
          boxShadow: "0 0 6px color-mix(in oklab, var(--color-primary) 40%, transparent)",
        }}
      />
      <div
        ref={dotRef}
        className="absolute top-0 left-0 rounded-full"
        style={{
          width: 4,
          height: 4,
          background: "var(--color-primary)",
          boxShadow: "0 0 6px color-mix(in oklab, var(--color-primary) 70%, transparent)",
        }}
      />
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute rounded-full"
          style={{
            width: 12,
            height: 12,
            left: r.x - 6,
            top: r.y - 6,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "color-mix(in oklab, var(--color-primary) 80%, transparent)",
            animation: "cursor-ripple 0.7s ease-out forwards",
          }}
        />
      ))}
    </div>
   );
}
