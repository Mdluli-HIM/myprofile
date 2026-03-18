"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";
import type { Project } from "@/types/project";

type ProjectPreviewProps = {
  project: Project;
  x: number;
  y: number;
};

const CARD_WIDTH = 300;
const CARD_HEIGHT = 630;
const VIEWPORT_PADDING = 25;
const EASE = [0.16, 1, 0.3, 1] as const;

export function ProjectPreview({ project, x, y }: ProjectPreviewProps) {
  const pointerX = useMotionValue(x + 28);
  const pointerY = useMotionValue(y - 120);

  const springX = useSpring(pointerX, {
    stiffness: 240,
    damping: 28,
    mass: 0.8,
  });

  const springY = useSpring(pointerY, {
    stiffness: 240,
    damping: 28,
    mass: 0.8,
  });

  useEffect(() => {
    const nextX = Math.min(
      x + 28,
      window.innerWidth - CARD_WIDTH - VIEWPORT_PADDING,
    );

    const nextY = Math.min(
      Math.max(y - 120, VIEWPORT_PADDING),
      window.innerHeight - CARD_HEIGHT - VIEWPORT_PADDING,
    );

    pointerX.set(nextX);
    pointerY.set(nextY);
  }, [pointerX, pointerY, x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block"
      style={{ x: springX, y: springY }}
      initial={{ opacity: 0, scale: 0.96, rotate: -1.5, filter: "blur(8px)" }}
      animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.98, rotate: 1.5, filter: "blur(6px)" }}
      transition={{ duration: 0.22, ease: EASE }}
    >
      <div className="w-[300px] overflow-hidden border border-white/10 bg-[color:var(--surface)] text-[color:var(--foreground)] shadow-[0_24px_70px_rgba(0,0,0,0.38)]">
        <div className="relative aspect-[4/5] overflow-hidden border-b border-white/10 bg-[#151412]">
          <Image
            src={project.preview}
            alt={project.title}
            fill
            sizes="300px"
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
        </div>

        <div className="p-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow text-[color:var(--accent)]">Preview</p>
              <p className="mt-2 text-[1.02rem] leading-none tracking-[-0.04em]">
                {project.title}
              </p>
            </div>

            <p className="text-[10px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
              {project.year}
            </p>
          </div>

          <p className="mt-4 text-[13px] leading-6 text-[color:var(--muted)]">
            {project.tagline}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.services.slice(0, 2).map((service) => (
              <span
                key={service}
                className="border border-white/10 bg-[color:var(--surface-2)] px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-[color:var(--muted)]"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
