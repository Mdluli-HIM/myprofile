"use client";

import { motion } from "motion/react";
import { capabilities, philosophy, process, stack } from "@/content/about";
import { TransitionLink } from "@/components/ui/transition-link";

const EASE = [0.16, 1, 0.3, 1] as const;

export function AboutSections() {
  return (
    <section className="site-container pb-32 text-[color:var(--light-foreground)]">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="border-t border-[color:var(--light-line)] pt-8"
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <p className="eyebrow">Philosophy</p>
          </div>

          <div className="grid gap-10 md:grid-cols-3 lg:col-span-9">
            {philosophy.map((item) => (
              <div key={item.title} className="editorial-block">
                <h2 className="text-[2rem] leading-[0.98] tracking-[-0.05em] editorial-title-light">
                  {item.title}
                </h2>
                <p className="mt-5 text-base leading-8 editorial-copy-light">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="mt-24 border-t border-[color:var(--light-line)] pt-8"
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <p className="eyebrow">Capabilities</p>
          </div>

          <div className="lg:col-span-9">
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {capabilities.map((item) => (
                <span
                  key={item}
                  className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--light-muted)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="mt-24 border-t border-[color:var(--light-line)] pt-8"
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <p className="eyebrow">Process</p>
          </div>

          <div className="lg:col-span-9">
            <div className="divide-y divide-[color:var(--light-line)] border-t border-[color:var(--light-line)]">
              {process.map((item) => (
                <div
                  key={item.step}
                  className="grid gap-6 py-8 md:grid-cols-[90px_1fr]"
                >
                  <p className="text-sm tracking-[-0.03em] editorial-kicker">
                    {item.step}
                  </p>

                  <div>
                    <h3 className="text-[2.1rem] leading-[0.98] tracking-[-0.05em] editorial-title-light">
                      {item.title}
                    </h3>
                    <p className="mt-5 max-w-3xl text-base leading-8 editorial-copy-light">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="mt-24 border-t border-[color:var(--light-line)] pt-8"
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <p className="eyebrow">Tools / Stack</p>
          </div>

          <div className="lg:col-span-9">
            <div className="grid gap-y-4 sm:grid-cols-2 md:grid-cols-4">
              {stack.map((item) => (
                <div
                  key={item}
                  className="text-sm tracking-[-0.03em] editorial-title-light"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="mt-24 border-t border-[color:var(--light-line)] pt-8"
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <p className="eyebrow">Contact</p>
          </div>

          <div className="lg:col-span-9">
            <div className="max-w-4xl">
              <h2 className="section-title editorial-title-light">
                Looking for a website that feels carefully designed, not
                assembled?
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 editorial-copy-light md:text-lg">
                  I run a monthly frontend subscription for premium teams, plus
                  select fixed-scope builds when you have a defined outcome.
                  You get clear communication, calm motion with intent, and
                  real front-end polish from the first layout to production code.
              </p>

              <div className="mt-8">
                <TransitionLink
                  href="/contact"
                  label="Start a project"
                  className="inline-flex items-center gap-3 border-b border-[color:var(--accent)] pb-1 text-[11px] uppercase tracking-[0.22em] text-[color:var(--accent)] transition-opacity duration-300 hover:opacity-75"
                >
                  Start a project
                </TransitionLink>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
