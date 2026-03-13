"use client";

import { motion } from "motion/react";
import {
  homeEditorial,
  homeEditorialNotes,
  homeEditorialStats,
} from "@/content/home";

const EASE = [0.22, 1, 0.36, 1] as const;

export function EditorialMiddle() {
  return (
    <section className="site-container pb-28">
      <motion.div
        initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="border-t border-black/10 pt-8"
      >
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="eyebrow">{homeEditorial.eyebrow}</p>
          </div>

          <div className="lg:col-span-6">
            <h2 className="section-title max-w-4xl">{homeEditorial.title}</h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[color:var(--muted)] md:text-lg">
              {homeEditorial.lead}
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="border border-black/10 bg-white/60 p-5">
              <div className="space-y-6">
                {homeEditorialStats.map((item) => (
                  <div key={item.label}>
                    <p className="eyebrow">{item.label}</p>
                    <p className="mt-2 text-sm tracking-[-0.02em]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.06, ease: EASE }}
        className="mt-16 grid gap-6 md:grid-cols-3"
      >
        {homeEditorialNotes.map((item) => (
          <div
            key={item.title}
            className="border border-black/10 bg-white/55 p-6"
          >
            <h3 className="text-2xl tracking-[-0.04em]">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-[color:var(--muted)] md:text-base">
              {item.body}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}