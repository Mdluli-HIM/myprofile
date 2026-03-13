"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

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
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="border border-black/10 bg-white/70 p-5 md:p-8"
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
              className={inputClassName}
            />
          </Field>

          <Field label="Email" htmlFor="email">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              className={inputClassName}
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
            className={inputClassName}
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
                      ? "border-black/15 bg-[color:var(--surface)] text-black"
                      : "border-black/10 bg-white text-[color:var(--muted)] hover:text-black"
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
            className={inputClassName}
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
            className="min-h-[180px] w-full resize-y border border-black/10 bg-white px-4 py-4 text-sm leading-7 text-black outline-none transition-colors duration-300 placeholder:text-black/35 focus:border-black/25 focus:bg-white md:min-h-[220px]"
          />
        </Field>
      </div>

      <div className="mt-8 border-t border-black/10 pt-5 md:pt-6">
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
              className={cn(
                "inline-flex min-h-12 items-center justify-center gap-3 border border-black/10 bg-white px-5 py-3 text-[11px] uppercase tracking-[0.22em] transition-colors duration-300 hover:bg-[color:var(--surface)] disabled:cursor-not-allowed disabled:opacity-60 md:rounded-full"
              )}
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

const inputClassName =
  "min-h-12 w-full border border-black/10 bg-white px-4 py-4 text-sm text-black outline-none transition-colors duration-300 placeholder:text-black/35 focus:border-black/25 focus:bg-white";