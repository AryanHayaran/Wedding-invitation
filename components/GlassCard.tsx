"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  delay?: number;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  glow = false,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      whileHover={
        hover
          ? {
              scale: 1.025,
              transition: { duration: 0.25, ease: "easeOut" },
            }
          : undefined
      }
      className={`glass ${glow ? "animate-pulse-glow" : ""} ${className}`}
      style={glow ? { animation: "pulse-glow 3s ease-in-out infinite" } : undefined}
    >
      {children}
    </motion.div>
  );
}
