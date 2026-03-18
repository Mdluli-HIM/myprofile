"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const projectTypes = [
  "Portfolio Website",
  "Landing Page",
  "Studio Website",
  "Frontend Build",
  "Other",
];

export function ContactForm() {
  const [projectType, setProjectType] = useState("Portfolio Website");
  const [isSubmitting] = useState(false);

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: EASE }}
      className="surface-panel p-5 md:p-8"
    >
      <div className="grid gap-5 md:gap-6">
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          <Field label="Name" htmlFor="name">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              autoComplete="name"
              className="surface-field px-4 py-4 text-sm"
            />
          </Field>

          <Field label="Email" htmlFor="email">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              className="surface-field px-4 py-4 text-sm"
            />
          </Field>
        </div>

        <Field label="Company / Brand" htmlFor="company">
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Optional"
            autoComplete="organization"
            className="surface-field px-4 py-4 text-sm"
          />
        </Field>

        <div>
          <p className="eyebrow">Project Type</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {projectTypes.map((item) => {
              const selected = projectType === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setProjectType(item)}
                  aria-pressed={selected}
                  className={cn(
                    "min-h-11 border px-4 py-3 text-[10px] uppercase tracking-[0.2em] transition-all duration-300 md:text-[11px]",
                    selected
                      ? "border-[color:var(--accent-border)] bg-[color:var(--accent)] text-[color:var(--accent-ink)]"
                      : "border-white/10 bg-[color:var(--surface-2)] text-[color:var(--muted)] hover:text-[color:var(--foreground)]",
                  )}
                >
                  {item}
                </button>
              );
            })}
          </div>
          <input type="hidden" name="projectType" value={projectType} />
        </div>

        <Field label="Budget Range" htmlFor="budget">
          <select
            id="budget"
            name="budget"
            defaultValue=""
            className="surface-field px-4 py-4 text-sm"
          >
            <option value="" disabled>
              Select a range
            </option>
            <option>R10k - R25k</option>
            <option>R25k - R50k</option>
            <option>R50k - R100k</option>
            <option>R100k+</option>
          </select>
        </Field>

        <Field label="Project Details" htmlFor="message">
          <textarea
            id="message"
            name="message"
            rows={7}
            placeholder="Tell me about the project, goals, timeline, and the kind of feel you want the site to have."
            className="surface-field min-h-[180px] resize-y px-4 py-4 text-sm leading-7 md:min-h-[220px]"
          />
        </Field>
      </div>

      <div className="mt-8 border-t border-white/10 pt-5 md:pt-6">
        <div className="flex flex-col gap-4 md:gap-5">
          <p className="max-w-2xl text-sm leading-7 text-[color:var(--muted)]">
            This form is currently a polished visual contact layout. The next
            step is wiring it to Formspree, Resend, EmailJS, or your own Next.js
            API route.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)] md:text-[11px]">
              Preferred response within 1–3 business days
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[color:var(--accent-border)] bg-[color:var(--accent)] px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-[color:var(--accent-ink)] transition-colors duration-300 hover:bg-[color:var(--accent-hover)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span>{isSubmitting ? "Sending" : "Send Inquiry"}</span>
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </motion.form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="eyebrow block">
        {label}
      </label>
      <div className="mt-3">{children}</div>
    </div>
  );
}
