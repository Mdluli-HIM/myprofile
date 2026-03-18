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
      className="text-[color:var(--light-foreground)]"
    >
      <div className="grid gap-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          <Field label="Name" htmlFor="name">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              autoComplete="name"
              className={lightInputClassName}
            />
          </Field>

          <Field label="Email" htmlFor="email">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              className={lightInputClassName}
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
            className={lightInputClassName}
          />
        </Field>

        <div className="border-t border-[color:var(--light-line)] pt-5">
          <p className="eyebrow text-[color:var(--light-foreground)]">
            Project Type
          </p>

          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
            {projectTypes.map((item) => {
              const selected = projectType === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setProjectType(item)}
                  aria-pressed={selected}
                  className={cn(
                    "border-b pb-1 text-[11px] uppercase tracking-[0.2em] transition-colors duration-300",
                    selected
                      ? "border-[color:var(--accent)] text-[color:var(--accent)]"
                      : "border-transparent text-[color:var(--light-muted)] hover:text-[color:var(--light-foreground)]",
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
            className={lightInputClassName}
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
            rows={6}
            placeholder="Tell me about the project, goals, timeline, and the kind of feel you want the site to have."
            className="min-h-[180px] w-full resize-y border-0 border-b border-[color:var(--light-line)] bg-transparent px-0 py-4 text-base leading-8 text-[color:var(--light-foreground)] outline-none transition-colors duration-300 placeholder:text-[color:var(--light-muted)] focus:border-[color:var(--accent)]"
          />
        </Field>
      </div>

      <div className="mt-10 border-t border-[color:var(--light-line)] pt-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm leading-7 editorial-copy-light">
              This form is currently a polished visual contact layout. The next
              step is wiring it to Formspree, Resend, EmailJS, or your own
              Next.js API route.
            </p>
            <p className="mt-4 text-[10px] uppercase tracking-[0.2em] editorial-copy-light md:text-[11px]">
              Preferred response within 1–3 business days
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-3 border-b border-[color:var(--accent)] pb-1 text-[11px] uppercase tracking-[0.22em] text-[color:var(--accent)] transition-opacity duration-300 hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span>{isSubmitting ? "Sending" : "Send Inquiry"}</span>
            <ArrowUpRight size={15} />
          </button>
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
    <div className="border-t border-[color:var(--light-line)] pt-5">
      <label
        htmlFor={htmlFor}
        className="eyebrow block text-[color:var(--light-foreground)]"
      >
        {label}
      </label>
      <div className="mt-4">{children}</div>
    </div>
  );
}

const lightInputClassName =
  "w-full border-0 border-b border-[color:var(--light-line)] bg-transparent px-0 py-4 text-base text-[color:var(--light-foreground)] outline-none transition-colors duration-300 placeholder:text-[color:var(--light-muted)] focus:border-[color:var(--accent)]";
