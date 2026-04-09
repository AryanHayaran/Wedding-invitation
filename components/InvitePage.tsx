"use client";

import { motion } from "framer-motion";
import Hero from "./Hero";
import PersonalMessage from "./PersonalMessage";
import CoupleAnimation from "./CoupleAnimation";
import Countdown from "./Countdown";
import EventTimeline from "./EventTimeline";
import FloatingPetals from "./FloatingPetals";
import ParallaxLayer from "./ParallaxLayer";

interface InvitePageProps {
  name: string;
  withFamily: boolean;
}

function SectionDivider() {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="max-w-xs mx-auto px-6"
    >
      <div className="gold-divider" />
    </motion.div>
  );
}

export default function InvitePage({ name, withFamily }: InvitePageProps) {
  return (
    <main className="relative min-h-screen">
      {/* Global ambient petals */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <FloatingPetals count={14} />
      </div>

      {/* Parallax background blobs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <ParallaxLayer speed={0.15} className="absolute inset-0">
          <div
            className="absolute"
            style={{
              top: "10%",
              left: "5%",
              width: 400,
              height: 400,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(107,46,82,0.22) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer speed={0.25} className="absolute inset-0">
          <div
            className="absolute"
            style={{
              top: "50%",
              right: "5%",
              width: 320,
              height: 320,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
        </ParallaxLayer>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* 1 — Hero */}
        <Hero />

        {/* 2 — Personal Message */}
        <SectionDivider />
        <PersonalMessage name={name} withFamily={withFamily} />

        {/* 3 — Couple Animation */}
        <SectionDivider />
        <CoupleAnimation />

        {/* 4 — Countdown */}
        <SectionDivider />
        <Countdown />

        {/* 5 — Events */}
        <SectionDivider />
        <EventTimeline />

        {/* 5 — Footer */}
        <SectionDivider />
        <footer className="py-20 px-6 flex flex-col items-center text-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl mb-2"
          >
            🌸
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display italic font-light"
            style={{
              fontSize: "clamp(1.4rem, 4vw, 2rem)",
              color: "var(--cream)",
            }}
          >
            With love &amp; gratitude,
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display italic gold-text"
            style={{ fontSize: "clamp(1.6rem, 5vw, 2.6rem)" }}
          >
            Mahesh &amp; Shilpa
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body text-xs tracking-[0.25em] uppercase mt-2"
            style={{ color: "var(--cream-muted)" }}
          >
            Kushinagar, Uttar Pradesh · May 2026
          </motion.p>
        </footer>
      </div>
    </main>
  );
}
