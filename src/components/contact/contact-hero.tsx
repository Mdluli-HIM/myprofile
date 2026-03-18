"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { contactIntro } from "@/content/contact";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ContactHero() {
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
              <p className="eyebrow">{contactIntro.eyebrow}</p>
            </div>

            <div className="lg:col-span-6">
              <h1 className="display-title max-w-5xl">{contactIntro.title}</h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--muted)] md:text-xl">
                {contactIntro.lead}
              </p>
            </div>

            <div className="lg:col-span-3">
              <div className="surface-panel p-5">
                <div className="space-y-6">
                  <div>
                    <p className="eyebrow">Email</p>
                    <a
                      href={`mailto:${contactIntro.email}`}
                      className="mt-2 inline-flex items-center gap-2 text-sm tracking-[-0.02em] text-[color:var(--foreground)]"
                    >
                      {contactIntro.email}
                      <ArrowUpRight
                        size={14}
                        className="text-[color:var(--accent)]"
                      />
                    </a>
                  </div>

                  <div>
                    <p className="eyebrow">Location</p>
                    <p className="mt-2 text-sm tracking-[-0.02em] text-[color:var(--muted)]">
                      {contactIntro.location}
                    </p>
                  </div>

                  <div>
                    <p className="eyebrow">Availability</p>
                    <p className="mt-2 text-sm tracking-[-0.02em] text-[color:var(--muted)]">
                      {contactIntro.availability}
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
