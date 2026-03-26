"use client";

import { motion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function WorkHero() {
  return (
    <section className="site-container pt-32 pb-12 text-[color:var(--light-foreground)] md:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <p className="eyebrow text-[color:var(--light-foreground)]">Work</p>
          </div>

          <div className="lg:col-span-7">
            <h1 className="display-title max-w-5xl text-[color:var(--light-foreground)]">
              Selected work.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--light-muted)] md:text-xl">
              Swipe, drag, or scroll through a tighter index of projects I
              built — then open any case study for the full system story.
            </p>
          </div>

          <div className="lg:col-span-2 lg:flex lg:items-end lg:justify-end">
            <p className="eyebrow text-[color:var(--accent)]">
              Horizontal Archive
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
