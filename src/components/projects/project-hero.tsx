"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import type { Project } from "@/types/project";
import { ProjectMediaFrame } from "@/components/projects/project-media-frame";

type ProjectHeroProps = {
  project: Project;
};

const EASE = [0.16, 1, 0.3, 1] as const;

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="site-container pt-28 pb-14 md:pt-32 md:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: EASE }}
      >
        <div className="section-line pt-6">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-3">
              <p className="eyebrow">Case Study</p>
            </div>

            <div className="lg:col-span-9">
              <h1 className="display-title max-w-5xl">{project.title}</h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-[color:var(--muted)] md:mt-6 md:text-lg lg:text-xl">
                {project.tagline}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
                <Link
                  href="/work"
                  className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/10 bg-[color:var(--surface-2)] px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-[color:var(--foreground)] transition-colors duration-300 hover:bg-white/[0.05]"
                >
                  <ArrowLeft size={14} />
                  <span>Back to work</span>
                </Link>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 border border-[color:var(--accent-border)] bg-[color:var(--accent)] px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-[color:var(--accent-ink)] transition-colors duration-300 hover:bg-[color:var(--accent-hover)]"
                  >
                    <span>View live</span>
                    <ArrowUpRight size={14} />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-white/10 pt-8 lg:mt-20 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <p className="eyebrow">Overview</p>
          </div>

          <div className="lg:col-span-5">
            <p className="max-w-2xl text-sm leading-8 text-[color:var(--muted)] md:text-base lg:text-lg">
              {project.description}
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="surface-panel grid gap-6 p-5 sm:grid-cols-2 md:p-6">
              <div>
                <p className="eyebrow">Year</p>
                <p className="mt-3 text-base tracking-[-0.03em] md:text-lg">
                  {project.year}
                </p>
              </div>

              <div>
                <p className="eyebrow">Client</p>
                <p className="mt-3 text-base tracking-[-0.03em] md:text-lg">
                  {project.client ?? "Independent"}
                </p>
              </div>

              <div>
                <p className="eyebrow">Role</p>
                <div className="mt-3 space-y-2">
                  {project.role.map((item) => (
                    <p
                      key={item}
                      className="text-base tracking-[-0.03em] md:text-lg"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <p className="eyebrow">Services</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="border border-white/10 bg-[color:var(--surface-2)] px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[color:var(--muted)] md:text-[11px]"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, delay: 0.08, ease: EASE }}
          className="mt-14 md:mt-20"
        >
          <ProjectMediaFrame
            image={project.preview}
            alt={project.title}
            eyebrow="Lead Visual"
            title={project.title}
            meta={`${project.client ?? "Independent"} • ${project.year}`}
            mobileAspect="16/12"
            aspect="16/10"
            sizes="100vw"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
