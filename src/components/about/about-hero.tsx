"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { aboutIntro } from "@/content/about";
import { TransitionLink } from "@/components/ui/transition-link";

const EASE = [0.16, 1, 0.3, 1] as const;

export function AboutHero() {
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
              <p className="eyebrow">{aboutIntro.eyebrow}</p>
            </div>

            <div className="lg:col-span-6">
              <h1 className="display-title max-w-5xl">{aboutIntro.title}</h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)] md:text-xl">
                {aboutIntro.lead}
              </p>

              <div className="mt-10">
                <TransitionLink
                  href="/contact"
                  label="Start a project"
                  className="inline-flex items-center gap-3 rounded-full border border-[color:var(--accent-border)] bg-[color:var(--accent)] px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-[color:var(--accent-ink)] transition-colors duration-300 hover:bg-[color:var(--accent-hover)]"
                >
                  Start Project
                  <ArrowUpRight size={15} />
                </TransitionLink>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="surface-panel p-5">
                <div className="flex h-16 w-16 items-center justify-center border border-white/10 bg-[color:var(--surface-2)] text-xl tracking-[-0.05em]">
                  M
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <p className="eyebrow">Location</p>
                    <p className="mt-2 text-sm tracking-[-0.02em] text-[color:var(--muted)]">
                      {aboutIntro.location}
                    </p>
                  </div>

                  <div>
                    <p className="eyebrow">Email</p>
                    <p className="mt-2 text-sm tracking-[-0.02em] text-[color:var(--muted)]">
                      {aboutIntro.email}
                    </p>
                  </div>

                  <div>
                    <p className="eyebrow">Availability</p>
                    <p className="mt-2 text-sm tracking-[-0.02em] text-[color:var(--muted)]">
                      {aboutIntro.availability}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
