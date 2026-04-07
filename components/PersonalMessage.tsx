"use client";

import { motion } from "framer-motion";
import GlassCard from "./GlassCard";

interface PersonalMessageProps {
  name: string;
  withFamily: boolean;
}

export default function PersonalMessage({ name, withFamily }: PersonalMessageProps) {
  const salutation = name
    ? `Dear ${name}${withFamily ? " & Family" : ""},`
    : "Dear Guest,";

  const familyLine = withFamily
    ? "We joyfully extend this invitation to you and your entire family to join us in celebrating this blessed union."
    : "We joyfully extend this invitation to you to join us in celebrating this blessed union.";

  return (
    <section className="relative py-24 px-6 flex flex-col items-center overflow-hidden">
      {/* Soft background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(168,100,136,0.1) 0%, transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-body text-xs uppercase tracking-[0.4em] mb-10"
        style={{ color: "var(--gold)" }}
      >
        Personal Invitation
      </motion.div>

      <GlassCard className="w-full max-w-2xl px-10 py-12 text-center" hover={false}>
        {/* Decorative quote mark */}
        <div
          className="font-display text-7xl leading-none mb-2 opacity-20 gold-text"
          aria-hidden
        >
          ❝
        </div>

        {/* Salutation */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display italic font-light mb-6"
          style={{
            fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            color: "var(--cream)",
          }}
        >
          {salutation}
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="gold-divider w-24 mx-auto mb-6"
        />

        {/* Body text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-body font-light leading-8 mb-4"
          style={{
            fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
            color: "var(--cream-muted)",
          }}
        >
          {familyLine}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-body font-light leading-8"
          style={{
            fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
            color: "var(--cream-muted)",
          }}
        >
          It would be an honour to have your presence as we begin this new
          chapter together.
        </motion.p>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 font-display italic gold-text"
          style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)" }}
        >
          — Manisha &amp; Arun
        </motion.div>
      </GlassCard>
    </section>
  );
}
