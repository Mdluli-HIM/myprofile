"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { playgroundIntro } from "@/content/playground";
import { TransitionLink } from "@/components/ui/transition-link";

const EASE = [0.22, 1, 0.36, 1] as const;

export function PlaygroundHero() {
  return (
    <section className="site-container pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: EASE }}
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
              <div className="border border-black/10 bg-white/70 p-5">
                <p className="eyebrow">Note</p>
                <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
                  {playgroundIntro.note}
                </p>

                <div className="mt-6">
                  <TransitionLink
                    href="/work"
                    label="Selected Work"
                    className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-5 py-3 text-[11px] uppercase tracking-[0.22em] transition-colors duration-300 hover:bg-[color:var(--surface)]"
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
