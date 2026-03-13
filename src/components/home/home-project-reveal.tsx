"use client";

import { motion } from "motion/react";
import { ProjectRail } from "@/components/projects/project-rail";

const EASE = [0.22, 1, 0.36, 1] as const;

export function HomeProjectReveal() {
  return (
    <section className="pb-32">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="border-t border-black/10 pt-8"
        >
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="eyebrow">Selected Work</p>
            </div>

            <div className="lg:col-span-6">
              <h2 className="section-title max-w-4xl">
                A curated entry into projects shaped through pacing, structure,
                and interaction.
              </h2>
            </div>

            <div className="lg:col-span-3">
              <p className="text-sm leading-7 text-[color:var(--muted)]">
                Scroll into the work index below. Each project opens as its own
                case study, not just a thumbnail in a grid.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 44, scale: 0.985, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.9, delay: 0.08, ease: EASE }}
        className="mt-14"
      >
        <ProjectRail />
      </motion.div>
    </section>
  );
}