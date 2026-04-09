"use client";

import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import ParallaxLayer from "./ParallaxLayer";

const PRATAP = "RZB – 141 Pratap Garden, Bindapur, Uttam Nagar, New Delhi";
const CASA =
  "CASA ROYAL BANQUET, Metro Pillar 610, 177A West, Before Block A1, Janakpuri, New Delhi 110058";

const events = [
  {
    title: "Haldi & Mehndi",
    date: "4 May 2026",
    time: "Evening",
    venue: "Paterha Maglpur, Post Dandopur, Kushinagar, Uttar Pradesh",
    icon: "🌿",
    description:
      "Start the celebrations with colour and tradition — haldi blessings and intricate mehndi artistry.",
  },
  {
    title: "Wedding Ceremony",
    date: "5 May 2026",
    time: "8:00 PM onwards",
    venue: "Paterha Maglpur, Post Dandopur, Kushinagar, Uttar Pradesh",
    icon: "💍",
    description:
      "The main event — an evening of vows, rituals, and memories that will last a lifetime.",
    featured: true,
  },
  {
    title: "Vidai",
    date: "7 May 2026",
    time: "Morning",
    venue: "Paterha Maglpur, Post Dandopur, Kushinagar, Uttar Pradesh",
    icon: "🌸",
    description:
      "A bittersweet and beautiful farewell as Mahesh begins her new journey.",
  },
];

export default function EventTimeline() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background parallax accent */}
      <ParallaxLayer
        speed={0.2}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: "120vw",
            height: "120vw",
            maxWidth: 900,
            maxHeight: 900,
            background:
              "radial-gradient(circle, rgba(107,46,82,0.15) 0%, transparent 60%)",
          }}
        />
      </ParallaxLayer>

      {/* Heading */}
      <div className="flex flex-col items-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-body text-xs uppercase tracking-[0.4em] mb-4"
          style={{ color: "var(--gold)" }}
        >
          The Celebrations
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-light italic text-center"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            color: "var(--cream)",
          }}
        >
          Three Days of Joy
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="gold-divider w-32 mt-6"
        />
      </div>

      {/* Cards grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {/* Connecting line on desktop */}
        <div
          className="hidden md:block absolute top-16 left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--gold-dark) 20%, var(--gold) 50%, var(--gold-dark) 80%, transparent)",
            opacity: 0.4,
          }}
        />

        {events.map((event, i) => (
          <GlassCard
            key={event.title}
            delay={i * 0.12}
            glow={event.featured}
            className={`relative flex flex-col p-8 text-center ${
              event.featured ? "md:-translate-y-4 md:scale-[1.03]" : ""
            }`}
          >
            {event.featured && (
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 glass-pill px-4 py-1"
                style={{
                  border: "1px solid rgba(201,168,76,0.4)",
                }}
              >
                <span
                  className="font-body text-[9px] uppercase tracking-[0.3em]"
                  style={{ color: "var(--gold)" }}
                >
                  Main Event
                </span>
              </div>
            )}

            {/* Icon */}
            <div className="text-4xl mb-5">{event.icon}</div>

            {/* Title */}
            <h3
              className="font-display font-medium mb-2"
              style={{
                fontSize: "clamp(1.3rem, 3vw, 1.6rem)",
                color: "var(--cream)",
              }}
            >
              {event.title}
            </h3>

            {/* Divider */}
            <div className="gold-divider w-16 mx-auto mb-4" />

            {/* Date + Time */}
            <p
              className="font-body font-light text-sm mb-1"
              style={{ color: "var(--gold)" }}
            >
              {event.date}
            </p>
            <p
              className="font-body font-light text-xs tracking-wider mb-5"
              style={{ color: "var(--cream-muted)" }}
            >
              {event.time}
            </p>

            {/* Description */}
            <p
              className="font-body font-light text-sm leading-6 mb-6 flex-1"
              style={{ color: "var(--cream-muted)" }}
            >
              {event.description}
            </p>

            {/* Venue */}
            <div
              className="glass-sm px-4 py-3"
              style={{ background: "rgba(201,168,76,0.04)" }}
            >
              <p
                className="font-body text-[10px] uppercase tracking-[0.2em] mb-1"
                style={{ color: "var(--gold)" }}
              >
                Venue
              </p>
              <p
                className="font-body font-light text-xs leading-5"
                style={{ color: "var(--cream-muted)" }}
              >
                {event.venue}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
