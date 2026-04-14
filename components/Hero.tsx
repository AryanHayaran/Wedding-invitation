"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FloatingPetals from "./FloatingPetals";

const BRIDE = "Rahul";
const GROOM = "Aradhana";

function SplitText({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`inline-flex ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 48, rotateX: -40 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.7,
            delay: delay + i * 0.055,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block"
          style={{ transformOrigin: "bottom center" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: 560 }}
    >
      {/* Parallax background layer */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        {/* Radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(107, 46, 82, 0.45) 0%, transparent 70%)",
          }}
        />
        {/* Top vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(18,8,24,0.75) 0%, transparent 40%, transparent 60%, rgba(18,8,24,0.55) 100%)",
          }}
        />
      </motion.div>

      {/* Floating petals */}
      <div className="absolute inset-0 z-0">
        <FloatingPetals count={32} />
      </div>

      {/* Decorative ring */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut", delay: 0.2 }}
      >
        <div
          className="rounded-full"
          style={{
            width: "min(560px, 80vw)",
            height: "min(560px, 80vw)",
            border: "1px solid rgba(201,168,76,0.12)",
            boxShadow:
              "inset 0 0 80px rgba(201,168,76,0.06), 0 0 80px rgba(201,168,76,0.04)",
          }}
        />
      </motion.div>
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
      >
        <div
          className="rounded-full"
          style={{
            width: "min(680px, 96vw)",
            height: "min(680px, 96vw)",
            border: "1px solid rgba(201,168,76,0.07)",
          }}
        />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6"
        style={{ y: contentY, opacity }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, letterSpacing: "0.3em" }}
          animate={{ opacity: 1, letterSpacing: "0.5em" }}
          transition={{ duration: 1.2, delay: 0.1 }}
          className="font-body text-xs uppercase mb-6"
          style={{ color: "var(--gold)", letterSpacing: "0.5em" }}
        >
          Together with their families
        </motion.div>

        {/* Gold divider top */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="gold-divider w-40 mb-8"
        />

        {/* Bride name */}
        <div
          className="font-display font-light leading-none mb-0"
          style={{
            fontSize: "clamp(3.2rem, 10vw, 8rem)",
            color: "var(--cream)",
          }}
        >
          <SplitText text={BRIDE} delay={0.5} />
        </div>

        {/* Ampersand */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "backOut" }}
          className="font-display italic gold-text my-2"
          style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
        >
          &amp;
        </motion.div>

        {/* Groom name */}
        <div
          className="font-display font-light leading-none mb-8"
          style={{
            fontSize: "clamp(3.2rem, 10vw, 8rem)",
            color: "var(--cream)",
          }}
        >
          <SplitText text={GROOM} delay={0.9} />
        </div>

        {/* Gold divider bottom */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.4 }}
          className="gold-divider w-40 mb-6"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="font-body font-light uppercase tracking-[0.35em] text-sm mb-2"
          style={{ color: "var(--cream-muted)" }}
        >
          Wedding Invitation
        </motion.p>

        {/* Dates */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.7 }}
          className="font-body font-light text-xs tracking-[0.22em] uppercase"
          style={{ color: "var(--gold)" }}
        >
          4 May&nbsp;&nbsp;·&nbsp;&nbsp;5 May&nbsp;&nbsp;·&nbsp;&nbsp;7 May
          2026&nbsp;&nbsp;·&nbsp;&nbsp;Kushinagar, Uttar Pradesh
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ color: "var(--cream-muted)" }}
      >
        <span className="font-body text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div
          className="w-px h-10 origin-top"
          style={{
            background: "linear-gradient(180deg, var(--gold), transparent)",
            animation: "scroll-bounce 2s ease-in-out infinite",
          }}
        />
      </motion.div>
    </section>
  );
}
