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
        className="border-t border-black/10"
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
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
                  opacity: isExpanded ? 1 : 0.78,
                  x: isExpanded ? 6 : 0,
                }}
                className="text-[1.95rem] leading-[0.98] tracking-[-0.05em] md:text-4xl"
              >
                {project.title}
              </motion.h3>

              <motion.p
                animate={{ opacity: isExpanded ? 1 : 0.68 }}
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
                    opacity: isExpanded ? 1 : 0.62,
                    y: isExpanded ? 0 : 2,
                  }}
                  className="rounded-full border border-black/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[color:var(--muted)]"
                >
                  {service}
                </motion.span>
              ))}
            </div>

            <div className="flex items-center justify-between gap-6 md:min-w-[90px] md:justify-end">
              <span className="text-sm text-[color:var(--muted)]">
                {project.year}
              </span>

              <motion.span
                animate={{ rotate: isExpanded ? 45 : 0 }}
                transition={{ duration: 0.35 }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white"
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
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden pb-7 md:pb-8"
            >
              <div className="grid gap-6 border border-black/10 bg-black/[0.025] p-5 md:grid-cols-[1.1fr_1fr] md:p-7">
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
                        className="rounded-full border border-black/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em]"
                      >
                        {role}
                      </span>
                    ))}
                  </div>

                  <TransitionLink
                    href={project.href}
                    label={project.title}
                    className="inline-flex w-full items-center justify-between border border-black/10 bg-white px-4 py-3 text-[11px] uppercase tracking-[0.22em] md:w-auto md:gap-3 md:justify-start md:rounded-full md:px-5"
                  >
                    Open case study
                    <ArrowUpRight size={15} />
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
        className="group border-t border-black/10"
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={{
            backgroundColor: isActive
              ? "rgba(17,17,17,0.04)"
              : "rgba(17,17,17,0)",
          }}
          className="grid gap-6 py-8 md:grid-cols-[1.2fr_1fr_auto]"
        >
          <div>
            <motion.h3
              animate={{
                opacity: isActive ? 1 : 0.72,
                x: isActive ? 10 : 0,
                letterSpacing: isActive ? "-0.055em" : "-0.04em",
              }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-4xl"
            >
              {project.title}
            </motion.h3>

            <motion.p
              animate={{
                opacity: isActive ? 0.96 : 0.58,
                x: isActive ? 8 : 0,
              }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
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
                  opacity: isActive ? 1 : 0.46,
                  y: isActive ? 0 : 2,
                }}
                transition={{ duration: 0.35 }}
                className="rounded-full border border-black/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted)]"
              >
                {service}
              </motion.span>
            ))}
          </div>

          <div className="flex items-start justify-between gap-6 md:min-w-[120px] md:justify-end">
            <motion.span
              animate={{ opacity: isActive ? 1 : 0.56 }}
              className="text-sm text-[color:var(--muted)]"
            >
              {project.year}
            </motion.span>

            <motion.span
              animate={{
                x: isActive ? 4 : 0,
                y: isActive ? -4 : 0,
                opacity: isActive ? 1 : 0.55,
              }}
              transition={{ duration: 0.3 }}
              className="inline-flex"
            >
              <ArrowUpRight size={18} />
            </motion.span>
          </div>
        </motion.div>
      </motion.article>
    </TransitionLink>
  );
}