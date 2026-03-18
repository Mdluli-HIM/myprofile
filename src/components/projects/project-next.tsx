"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";
import { TransitionLink } from "@/components/ui/transition-link";
import { ProjectMediaFrame } from "@/components/projects/project-media-frame";

type ProjectNextProps = {
  project: Project;
};

const EASE = [0.16, 1, 0.3, 1] as const;

export function ProjectNext({ project }: ProjectNextProps) {
  return (
    <section className="site-container pb-24 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="border-t border-white/10 pt-6 md:pt-8"
      >
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-2">
            <p className="eyebrow">Next Project</p>
          </div>

          <div className="lg:col-span-10">
            <TransitionLink
              href={project.href}
              label={project.title}
              className="group block"
            >
              <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-7">
                  <ProjectMediaFrame
                    image={project.preview}
                    alt={project.title}
                    eyebrow="Up Next"
                    title={project.title}
                    meta={`${project.client ?? "Independent"} • ${project.year}`}
                    mobileAspect="16/11"
                    aspect="16/10"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    interactive
                  />
                </div>

                <div className="flex items-center lg:col-span-5">
                  <div className="max-w-xl">
                    <p className="eyebrow text-[color:var(--accent)]">
                      {project.year}
                    </p>

                    <h2 className="mt-4 text-[clamp(2rem,8vw,5.5rem)] leading-[0.95] tracking-[-0.06em]">
                      {project.title}
                    </h2>

                    <p className="mt-5 text-sm leading-8 text-[color:var(--muted)] md:text-base lg:text-lg">
                      {project.tagline}
                    </p>

                    <div className="mt-8 inline-flex items-center gap-3 border border-white/10 bg-[color:var(--surface-2)] px-4 py-3 text-[11px] uppercase tracking-[0.22em] md:rounded-full md:px-5">
                      <span>Open case study</span>
                      <motion.span
                        initial={false}
                        whileHover={{ x: 4, y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="inline-flex text-[color:var(--accent)]"
                      >
                        <ArrowUpRight size={16} />
                      </motion.span>
                    </div>
                  </div>
                </div>
              </div>
            </TransitionLink>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
