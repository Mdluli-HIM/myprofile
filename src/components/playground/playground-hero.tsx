"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { playgroundIntro } from "@/content/playground";
import { TransitionLink } from "@/components/ui/transition-link";

const EASE = [0.16, 1, 0.3, 1] as const;

export function PlaygroundHero() {
  return (
    <section className="site-container pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <div className="section-line pt-6">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="eyebrow">{playgroundIntro.eyebrow}</p>
            </div>

            <div className="lg:col-span-6">
              <h1 className="display-title max-w-5xl">
                {playgroundIntro.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)] md:text-xl">
                {playgroundIntro.lead}
              </p>
            </div>

            <div className="lg:col-span-3">
              <div className="surface-panel p-5">
                <p className="eyebrow">Note</p>
                <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
                  {playgroundIntro.note}
                </p>

                <div className="mt-6">
                  <TransitionLink
                    href="/work"
                    label="Selected Work"
                    className="inline-flex items-center gap-3 rounded-full border border-[color:var(--accent-border)] bg-[color:var(--accent)] px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-[color:var(--accent-ink)] transition-colors duration-300 hover:bg-[color:var(--accent-hover)]"
                  >
                    View Work
                    <ArrowUpRight size={15} />
                  </TransitionLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
