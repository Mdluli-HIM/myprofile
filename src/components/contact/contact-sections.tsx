"use client";

import { motion } from "motion/react";
import { contactMethods, contactNotes, contactTypes } from "@/content/contact";
import { ContactForm } from "@/components/contact/contact-form";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ContactSections() {
  return (
    <section className="site-container pb-24 text-[color:var(--light-foreground)] md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="border-t border-[color:var(--light-line)] pt-6 md:pt-8"
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
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="mt-20 border-t border-[color:var(--light-line)] pt-6 md:mt-24 md:pt-8"
      >
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <p className="eyebrow">Project Types</p>
          </div>

          <div className="lg:col-span-9">
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {contactTypes.map((item) => (
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
        className="mt-20 border-t border-[color:var(--light-line)] pt-6 md:mt-24 md:pt-8"
      >
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <p className="eyebrow">Notes</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 lg:col-span-9">
            {contactNotes.map((item) => (
              <div key={item.title}>
                <h2 className="text-[1.8rem] leading-[0.98] tracking-[-0.04em] editorial-title-light md:text-2xl">
                  {item.title}
                </h2>
                <p className="mt-4 text-base leading-8 editorial-copy-light">
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
        className="mt-20 border-t border-[color:var(--light-line)] pt-6 md:mt-24 md:pt-8"
      >
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <p className="eyebrow">Elsewhere</p>
          </div>

          <div className="lg:col-span-9">
            <div className="divide-y divide-[color:var(--light-line)] border-t border-[color:var(--light-line)]">
              {contactMethods.map((item) => {
                const content = (
                  <div className="grid gap-3 py-5 md:grid-cols-[180px_1fr] md:gap-4 md:py-6">
                    <p className="eyebrow">{item.label}</p>
                    <p className="text-base tracking-[-0.02em] editorial-copy-light">
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
                    className="block transition-colors duration-300 hover:text-[color:var(--accent)]"
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
