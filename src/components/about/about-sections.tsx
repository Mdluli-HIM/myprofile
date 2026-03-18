"use client";

import { motion } from "motion/react";
import { capabilities, philosophy, process, stack } from "@/content/about";
import { TransitionLink } from "@/components/ui/transition-link";

const EASE = [0.16, 1, 0.3, 1] as const;

export function AboutSections() {
  return (
    <section className="site-container pb-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="border-t border-white/10 pt-8"
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <p className="eyebrow">Philosophy</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 lg:col-span-9">
            {philosophy.map((item) => (
              <div key={item.title} className="surface-panel p-6">
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
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="mt-24 border-t border-white/10 pt-8"
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <p className="eyebrow">Capabilities</p>
          </div>

          <div className="lg:col-span-9">
            <div className="flex flex-wrap gap-3">
              {capabilities.map((item) => (
                <span
                  key={item}
                  className="border border-white/10 bg-[color:var(--surface)] px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="mt-24 border-t border-white/10 pt-8"
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <p className="eyebrow">Process</p>
          </div>

          <div className="lg:col-span-9">
            <div className="divide-y divide-white/10 border border-white/10 bg-[color:var(--surface)]">
              {process.map((item) => (
                <div
                  key={item.step}
                  className="grid gap-6 p-6 md:grid-cols-[90px_1fr]"
                >
                  <p className="text-sm tracking-[-0.03em] text-[color:var(--accent)]">
                    {item.step}
                  </p>

                  <div>
                    <h3 className="text-2xl tracking-[-0.04em]">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-[color:var(--muted)] md:text-base">
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
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="mt-24 border-t border-white/10 pt-8"
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <p className="eyebrow">Tools / Stack</p>
          </div>

          <div className="lg:col-span-9">
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              {stack.map((item) => (
                <div
                  key={item}
                  className="surface-panel-soft px-4 py-4 text-sm tracking-[-0.03em]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="mt-24 border-t border-white/10 pt-8"
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <p className="eyebrow">Contact</p>
          </div>

          <div className="lg:col-span-9">
            <div className="surface-panel p-6 md:p-8">
              <h2 className="section-title max-w-4xl">
                Looking for a website that feels carefully designed, not
                assembled?
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[color:var(--muted)] md:text-lg">
                I partner with founders, studios, and individuals who want a
                digital presence with clarity, atmosphere, and real front-end
                polish.
              </p>

              <div className="mt-8">
                <TransitionLink
                  href="/contact"
                  label="Start a project"
                  className="inline-flex items-center rounded-full border border-[color:var(--accent-border)] bg-[color:var(--accent)] px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-[color:var(--accent-ink)] transition-colors duration-300 hover:bg-[color:var(--accent-hover)]"
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
