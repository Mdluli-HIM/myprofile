"use client";

import { motion } from "motion/react";
import { contactMethods, contactNotes, contactTypes } from "@/content/contact";
import { ContactForm } from "@/components/contact/contact-form";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ContactSections() {
  return (
    <section className="site-container pb-24 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="border-t border-white/10 pt-6 md:pt-8"
      >
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <p className="eyebrow">Inquiry</p>
          </div>

          <div className="lg:col-span-9">
            <ContactForm />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="mt-20 border-t border-white/10 pt-6 md:mt-24 md:pt-8"
      >
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <p className="eyebrow">Project Types</p>
          </div>

          <div className="lg:col-span-9">
            <div className="flex flex-wrap gap-2.5 md:gap-3">
              {contactTypes.map((item) => (
                <span
                  key={item}
                  className="border border-white/10 bg-[color:var(--surface)] px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)] md:text-[11px]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="mt-20 border-t border-white/10 pt-6 md:mt-24 md:pt-8"
      >
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <p className="eyebrow">Notes</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3 lg:col-span-9 md:gap-6">
            {contactNotes.map((item) => (
              <div key={item.title} className="surface-panel p-5 md:p-6">
                <h2 className="text-[1.55rem] tracking-[-0.04em] md:text-2xl">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[color:var(--muted)] md:text-base">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="mt-20 border-t border-white/10 pt-6 md:mt-24 md:pt-8"
      >
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <p className="eyebrow">Elsewhere</p>
          </div>

          <div className="lg:col-span-9">
            <div className="divide-y divide-white/10 border border-white/10 bg-[color:var(--surface)]">
              {contactMethods.map((item) => {
                const content = (
                  <div className="grid gap-3 p-5 md:grid-cols-[180px_1fr] md:gap-4 md:p-6">
                    <p className="eyebrow">{item.label}</p>
                    <p className="text-sm tracking-[-0.02em] text-[color:var(--muted)] md:text-base">
                      {item.value}
                    </p>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-colors duration-300 surface-hover-soft"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
