"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WEDDING_DATE = new Date("2026-05-05T20:00:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const diff = WEDDING_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountUnit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center gap-2 px-2">
      <div
        className="glass-pill w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center relative overflow-hidden"
        style={{ animation: "pulse-glow 4s ease-in-out infinite" }}
      >
        {/* Inner shimmer */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, transparent 60%)",
          }}
        />
        <span
          className="font-display font-light relative z-10"
          style={{
            fontSize: "clamp(1.8rem, 5vw, 2.4rem)",
            color: "var(--cream)",
            lineHeight: 1,
          }}
        >
          {display}
        </span>
      </div>
      <span
        className="font-body text-[10px] uppercase tracking-[0.3em]"
        style={{ color: "var(--gold)" }}
      >
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const isPast = WEDDING_DATE.getTime() <= Date.now();

  return (
    <section className="relative py-24 px-6 flex flex-col items-center overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(107,46,82,0.22) 0%, transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-body text-xs uppercase tracking-[0.4em] mb-4"
        style={{ color: "var(--gold)" }}
      >
        {isPast ? "It Happened" : "Counting Down"}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display font-light italic text-center mb-3"
        style={{
          fontSize: "clamp(2rem, 5vw, 3.2rem)",
          color: "var(--cream)",
        }}
      >
        {isPast ? "The Wedding Happened" : "The Big Day Approaches"}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-body text-sm mb-12 text-center"
        style={{ color: "var(--cream-muted)" }}
      >
        5 May 2026 · 8:00 PM · Chichli, Gadarwara Madhya Pradesh
      </motion.p>

      {timeLeft !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-1 sm:gap-3 flex-wrap justify-center"
        >
          <CountUnit value={timeLeft.days} label="Days" />
          <span
            className="font-display text-3xl font-light mb-6"
            style={{ color: "var(--gold-dark)" }}
          >
            :
          </span>
          <CountUnit value={timeLeft.hours} label="Hours" />
          <span
            className="font-display text-3xl font-light mb-6"
            style={{ color: "var(--gold-dark)" }}
          >
            :
          </span>
          <CountUnit value={timeLeft.minutes} label="Minutes" />
          <span
            className="font-display text-3xl font-light mb-6"
            style={{ color: "var(--gold-dark)" }}
          >
            :
          </span>
          <CountUnit value={timeLeft.seconds} label="Seconds" />
        </motion.div>
      )}
    </section>
  );
}
