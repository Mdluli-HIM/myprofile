"use client";

import { motion } from "motion/react";
import { ProjectRail } from "@/components/projects/project-rail";

const EASE = [0.16, 1, 0.3, 1] as const;

export function HomeProjectReveal() {
  return (
    <section className="bg-[color:var(--light-background)] pb-32 text-[color:var(--light-foreground)]">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="pt-10 md:pt-14"
        >
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="eyebrow text-[color:var(--light-foreground)]">
                Selected Work
              </p>
            </div>

            <div className="lg:col-span-6">
              <h2 className="section-title max-w-4xl text-[color:var(--light-foreground)]">
                Selected work I built around calm motion, clarity, and control.
              </h2>
            </div>

            <div className="lg:col-span-3">
              <p className="text-sm leading-7 text-[color:var(--light-muted)]">
                A tighter index of my projects. Open any case study to see
                how I structured the system end-to-end.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-12">
        <ProjectRail variant="light" />
      </div>
    </section>
  );
}
