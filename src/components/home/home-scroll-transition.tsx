"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

type HomeScrollTransitionProps = {
  children: ReactNode;
};

export function HomeScrollTransition({ children }: HomeScrollTransitionProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [120, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.985, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [28, 0]);

  return (
    <div ref={ref} className="relative z-10 -mt-16 md:-mt-24 lg:-mt-28">
      <motion.section
        style={{
          y,
          scale,
          opacity,
          borderTopLeftRadius: radius,
          borderTopRightRadius: radius,
          transformOrigin: "center top",
          willChange: "transform, opacity, border-radius",
        }}
        className="theme-light relative overflow-hidden bg-[color:var(--light-background)] shadow-[0_-30px_80px_rgba(0,0,0,0.18)]"
      >
        {children}
      </motion.section>
    </div>
  );
}
