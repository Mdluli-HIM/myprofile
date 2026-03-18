"use client";

import type { PointerEvent as ReactPointerEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Plus } from "lucide-react";
import type { Project } from "@/types/project";
import { TransitionLink } from "@/components/ui/transition-link";

type PointerPosition = {
  x: number;
  y: number;
};

type ProjectRowProps = {
  project: Project;
  isActive: boolean;
  isExpanded: boolean;
  isCoarsePointer: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
  onPointerMove: (pointer: PointerPosition) => void;
  onToggleExpand: () => void;
};

const EASE = [0.16, 1, 0.3, 1] as const;

export function ProjectRow({
  project,
  isActive,
  isExpanded,
  isCoarsePointer,
  onActivate,
  onDeactivate,
  onPointerMove,
  onToggleExpand,
}: ProjectRowProps) {
  function handlePointerMove(event: ReactPointerEvent<HTMLElement>) {
    onPointerMove({
      x: event.clientX,
      y: event.clientY,
    });
  }

  if (isCoarsePointer) {
    return (
      <motion.article
        layout
        className="border-t border-white/10"
        transition={{ duration: 0.5, ease: EASE }}
      >
        <button
          type="button"
          onClick={onToggleExpand}
          className="w-full text-left"
          aria-expanded={isExpanded}
        >
          <motion.div
            layout
            className="grid gap-5 py-6 md:grid-cols-[1.2fr_1fr_auto] md:gap-6 md:py-7"
          >
            <div>
              <motion.h3
                animate={{
                  opacity: isExpanded ? 1 : 0.94,
                  x: isExpanded ? 4 : 0,
                }}
                className="text-[1.95rem] leading-[0.98] tracking-[-0.05em] md:text-4xl"
              >
                {project.title}
              </motion.h3>

              <motion.p
                animate={{ opacity: isExpanded ? 0.92 : 0.78 }}
                className="mt-3 max-w-xl text-sm leading-6 text-[color:var(--muted)] md:text-base"
              >
                {project.tagline}
              </motion.p>
            </div>

            <div className="flex flex-wrap items-start gap-2">
              {project.services.map((service) => (
                <motion.span
                  key={service}
                  animate={{
                    opacity: isExpanded ? 1 : 0.82,
                    y: isExpanded ? 0 : 1,
                  }}
                  className="rounded-full border border-white/12 bg-[color:var(--surface-2)] px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[color:var(--foreground)]/78"
                >
                  {service}
                </motion.span>
              ))}
            </div>

            <div className="flex items-center justify-between gap-6 md:min-w-[90px] md:justify-end">
              <span className="text-sm text-[color:var(--foreground)]/72">
                {project.year}
              </span>

              <motion.span
                animate={{ rotate: isExpanded ? 45 : 0 }}
                transition={{ duration: 0.28 }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-[color:var(--surface-2)] text-[color:var(--accent)]"
              >
                <Plus size={16} />
              </motion.span>
            </div>
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isExpanded ? (
            <motion.div
              layout
              initial={{ opacity: 0, height: 0, y: -8 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              transition={{ duration: 0.38, ease: EASE }}
              className="overflow-hidden pb-7 md:pb-8"
            >
              <div className="surface-panel grid gap-6 p-5 md:grid-cols-[1.1fr_1fr] md:p-7">
                <div>
                  <p className="text-sm leading-7 text-[color:var(--muted)]">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="flex flex-wrap gap-2">
                    {project.role.map((role) => (
                      <span
                        key={role}
                        className="rounded-full border border-white/12 bg-[color:var(--surface-2)] px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[color:var(--foreground)]/78"
                      >
                        {role}
                      </span>
                    ))}
                  </div>

                  <TransitionLink
                    href={project.href}
                    label={project.title}
                    className="inline-flex w-full items-center justify-between border border-white/12 bg-[color:var(--surface-2)] px-4 py-3 text-[11px] uppercase tracking-[0.22em] transition-colors duration-300 hover:bg-white/[0.04] md:w-auto md:gap-3 md:justify-start md:rounded-full md:px-5"
                  >
                    Open case study
                    <ArrowUpRight
                      size={15}
                      className="text-[color:var(--accent)]"
                    />
                  </TransitionLink>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.article>
    );
  }

  return (
    <TransitionLink href={project.href} label={project.title} className="block">
      <motion.article
        layout
        onHoverStart={onActivate}
        onHoverEnd={onDeactivate}
        onFocus={onActivate}
        onBlur={onDeactivate}
        onPointerMove={handlePointerMove}
        className="group border-t border-white/10"
        transition={{ duration: 0.42, ease: EASE }}
      >
        <motion.div
          animate={{
            backgroundColor: isActive
              ? "rgba(255,255,255,0.045)"
              : "rgba(255,255,255,0.015)",
          }}
          className="grid gap-6 py-8 md:grid-cols-[1.2fr_1fr_auto]"
        >
          <div>
            <motion.h3
              animate={{
                opacity: isActive ? 1 : 0.92,
                x: isActive ? 6 : 0,
                letterSpacing: isActive ? "-0.055em" : "-0.048em",
              }}
              transition={{ duration: 0.28, ease: EASE }}
              className="text-3xl md:text-4xl"
            >
              {project.title}
            </motion.h3>

            <motion.p
              animate={{
                opacity: isActive ? 0.96 : 0.78,
                x: isActive ? 4 : 0,
              }}
              transition={{ duration: 0.28, ease: EASE }}
              className="mt-3 max-w-xl text-sm leading-6 text-[color:var(--muted)] md:text-base"
            >
              {project.tagline}
            </motion.p>
          </div>

          <div className="flex flex-wrap items-start gap-2">
            {project.services.map((service) => (
              <motion.span
                key={service}
                animate={{
                  opacity: isActive ? 1 : 0.78,
                  y: isActive ? 0 : 1,
                  borderColor: isActive
                    ? "rgba(243,238,230,0.14)"
                    : "rgba(243,238,230,0.1)",
                }}
                transition={{ duration: 0.24 }}
                className="rounded-full border bg-[color:var(--surface-2)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[color:var(--foreground)]/76"
              >
                {service}
              </motion.span>
            ))}
          </div>

          <div className="flex items-start justify-between gap-6 md:min-w-[120px] md:justify-end">
            <motion.span
              animate={{ opacity: isActive ? 0.9 : 0.72 }}
              className="text-sm text-[color:var(--foreground)]/78"
            >
              {project.year}
            </motion.span>

            <motion.span
              animate={{
                x: isActive ? 3 : 0,
                y: isActive ? -2 : 0,
                opacity: isActive ? 1 : 0.82,
              }}
              transition={{ duration: 0.22 }}
              className="inline-flex text-[color:var(--accent)]"
            >
              <ArrowUpRight size={18} />
            </motion.span>
          </div>
        </motion.div>
      </motion.article>
    </TransitionLink>
  );
}
