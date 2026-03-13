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
const VIEWPORT_PADDING = 24;

export function ProjectPreview({ project, x, y }: ProjectPreviewProps) {
  const pointerX = useMotionValue(x + 28);
  const pointerY = useMotionValue(y - 120);

  const springX = useSpring(pointerX, {
    stiffness: 220,
    damping: 28,
    mass: 0.8,
  });

  const springY = useSpring(pointerY, {
    stiffness: 220,
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
      initial={{ opacity: 0, scale: 0.94, rotate: -2, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.94, rotate: 2, filter: "blur(8px)" }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-[300px] overflow-hidden border border-white/20 bg-black text-white shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
        <div className="relative aspect-[4/4.55] overflow-hidden">
          <Image
            src={project.preview}
            alt={project.title}
            fill
            sizes="300px"
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-2.5 p-3.5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[1.02rem] tracking-[-0.04em]">
                {project.title}
              </p>
              <p className="mt-1 text-[13px] text-white/65">{project.year}</p>
            </div>
          </div>

          <p className="text-[13px] leading-5 text-white/72">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.services.slice(0, 3).map((service) => (
              <span
                key={service}
                className="rounded-full border border-white/15 px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-white/70"
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
