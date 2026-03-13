"use client";

import { motion } from "motion/react";
import {
  playgroundExperiments,
  playgroundNotes,
  playgroundThemes,
} from "@/content/playground";
import { TransitionLink } from "@/components/ui/transition-link";

const EASE = [0.22, 1, 0.36, 1] as const;

export function PlaygroundSections() {
  return (
    <section className="site-container pb-32">
      <motion.div
        initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="border-t border-black/10 pt-8"
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <p className="eyebrow">Experiments</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:col-span-9">
            {playgroundExperiments.map((item) => (
              <div
                key={item.title}
                className="border border-black/10 bg-white/60 p-6 transition-colors duration-300 hover:bg-white/80"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="eyebrow">{item.category}</p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
                    {item.year}
                  </p>
                </div>

                <h2 className="mt-5 text-3xl tracking-[-0.05em]">
                  {item.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-[color:var(--muted)] md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="mt-24 border-t border-black/10 pt-8"
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <p className="eyebrow">Themes</p>
          </div>

          <div className="lg:col-span-9">
            <div className="flex flex-wrap gap-3">
              {playgroundThemes.map((item) => (
                <span
                  key={item}
                  className="border border-black/10 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="mt-24 border-t border-black/10 pt-8"
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <p className="eyebrow">Notes</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:col-span-9">
            {playgroundNotes.map((item) => (
              <div
                key={item.title}
                className="border border-black/10 bg-white/60 p-6"
              >
                <h2 className="text-2xl tracking-[-0.04em]">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[color:var(--muted)] md:text-base">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="mt-24 border-t border-black/10 pt-8"
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <p className="eyebrow">Next</p>
          </div>

          <div className="lg:col-span-9">
            <div className="border border-black/10 bg-white/65 p-6 md:p-8">
              <h2 className="section-title max-w-4xl">
                Experimental thinking, production-level execution.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[color:var(--muted)] md:text-lg">
                The playground is where ideas are tested. The work page is where
                those ideas become shaped, structured, and ready for real-world
                use.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <TransitionLink
                  href="/work"
                  label="Selected Work"
                  className="inline-flex items-center rounded-full border border-black/10 bg-white px-5 py-3 text-[11px] uppercase tracking-[0.22em] transition-colors duration-300 hover:bg-[color:var(--surface)]"
                >
                  View Work
                </TransitionLink>

                <TransitionLink
                  href="/contact"
                  label="Start a project"
                  className="inline-flex items-center rounded-full border border-black/10 bg-white px-5 py-3 text-[11px] uppercase tracking-[0.22em] transition-colors duration-300 hover:bg-[color:var(--surface)]"
                >
                  Start Project
                </TransitionLink>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
