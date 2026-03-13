"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { aboutIntro } from "@/content/about";
import { TransitionLink } from "@/components/ui/transition-link";

const EASE = [0.22, 1, 0.36, 1] as const;

export function AboutHero() {
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
                  className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-5 py-3 text-[11px] uppercase tracking-[0.22em] transition-colors duration-300 hover:bg-[color:var(--surface)]"
                >
                  Start Project
                  <ArrowUpRight size={15} />
                </TransitionLink>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="border border-black/10 bg-white/70 p-5">
                <div className="flex h-16 w-16 items-center justify-center border border-black/10 text-xl tracking-[-0.05em]">
                  N
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <p className="eyebrow">Location</p>
                    <p className="mt-2 text-sm tracking-[-0.02em]">
                      {aboutIntro.location}
                    </p>
                  </div>

                  <div>
                    <p className="eyebrow">Email</p>
                    <p className="mt-2 text-sm tracking-[-0.02em]">
                      {aboutIntro.email}
                    </p>
                  </div>

                  <div>
                    <p className="eyebrow">Availability</p>
                    <p className="mt-2 text-sm tracking-[-0.02em]">
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
