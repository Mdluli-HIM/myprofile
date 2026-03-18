"use client";

import { motion } from "motion/react";
import { ProjectRail } from "@/components/projects/project-rail";

const EASE = [0.16, 1, 0.3, 1] as const;

export function HomeProjectReveal() {
  return (
    <section className="pb-32">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="border-t border-white/10 pt-8"
        >
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="eyebrow">Selected Work</p>
            </div>

            <div className="lg:col-span-6">
              <h2 className="section-title max-w-4xl">
                A tighter entry into projects shaped through structure, motion,
                and control.
              </h2>
            </div>

            <div className="lg:col-span-3">
              <p className="text-sm leading-7 text-[color:var(--muted)]">
                Each project opens as a case study, not just a card in a grid.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.65, delay: 0.06, ease: EASE }}
        className="mt-14"
      >
        <ProjectRail />
      </motion.div>
    </section>
  );
}
