"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
  type: "petal" | "bokeh";
  hue: number;
}

export default function FloatingPetals({ count = 28 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: i % 3 === 0 ? 4 + Math.random() * 8 : 8 + Math.random() * 18,
      delay: Math.random() * 18,
      duration: 14 + Math.random() * 14,
      opacity: 0.25 + Math.random() * 0.45,
      type: i % 4 === 0 ? "bokeh" : "petal",
      hue: Math.random() * 30 - 10, // gold hue variation
    }));
    setParticles(generated);
  }, [count]);

  return (
    <div
      aria-hidden
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bottom-[-10%]"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.type === "bokeh" ? p.size : p.size * 1.6,
            borderRadius: p.type === "bokeh" ? "50%" : "50% 50% 50% 0",
            background:
              p.type === "bokeh"
                ? `radial-gradient(circle at 35% 35%, rgba(232, 201, 106, ${p.opacity}), rgba(201, 168, 76, ${p.opacity * 0.3}))`
                : `rgba(${201 + p.hue}, ${168 + p.hue * 0.5}, 76, ${p.opacity})`,
            boxShadow:
              p.type === "bokeh"
                ? `0 0 ${p.size * 1.5}px rgba(201, 168, 76, ${p.opacity * 0.5})`
                : "none",
            animationName: p.type === "bokeh" ? "float-bokeh" : "float-petal",
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          }}
        />
      ))}
    </div>
  );
}
