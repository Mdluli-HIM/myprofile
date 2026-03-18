"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";
import { workNotes } from "@/content/work";
import { ProjectMediaFrame } from "@/components/projects/project-media-frame";
import { ProjectRail } from "@/components/projects/project-rail";
import { TransitionLink } from "@/components/ui/transition-link";

const EASE = [0.16, 1, 0.3, 1] as const;

export function WorkSections() {
  const featuredProjects = projects.filter((project) => project.featured);
  const archiveProjects = projects.filter((project) => !project.featured);

  return (
    <section className="pb-32">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="border-t border-white/10 pt-8"
        >
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-3">
              <p className="eyebrow">Featured</p>
            </div>

            <div className="lg:col-span-9">
              <div className="grid gap-8">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.05,
                      ease: EASE,
                    }}
                    className="surface-panel grid gap-6 p-4 md:p-6 lg:grid-cols-12 lg:gap-8"
                  >
                    <div className="lg:col-span-7">
                      <TransitionLink
                        href={project.href}
                        label={project.title}
                        className="group block"
                      >
                        <ProjectMediaFrame
                          image={project.preview}
                          alt={project.title}
                          eyebrow="Case Study"
                          title={project.title}
                          meta={`${project.client ?? "Independent"} • ${project.year}`}
                          aspect="16/10"
                          sizes="(max-width: 1024px) 100vw, 58vw"
                          interactive
                        />
                      </TransitionLink>
                    </div>

                    <div className="flex items-center lg:col-span-5">
                      <div className="max-w-xl">
                        <p className="eyebrow text-[color:var(--accent)]">
                          {String(index + 1).padStart(2, "0")}
                        </p>

                        <h2 className="mt-4 text-[clamp(2rem,4vw,4.5rem)] leading-[0.96] tracking-[-0.06em]">
                          {project.title}
                        </h2>

                        <p className="mt-5 text-base leading-8 text-[color:var(--muted)] md:text-lg">
                          {project.description}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.services.map((service) => (
                            <span
                              key={service}
                              className="border border-white/10 bg-[color:var(--surface-2)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted)]"
                            >
                              {service}
                            </span>
                          ))}
                        </div>

                        <div className="mt-8">
                          <TransitionLink
                            href={project.href}
                            label={project.title}
                            className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[color:var(--accent)]"
                          >
                            Open case study
                            <ArrowUpRight size={15} />
                          </TransitionLink>
                        </div>
                      </div>
                    </div>
                  </motion.div>
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
          className="mt-24 border-t border-white/10 pt-8"
        >
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-3">
              <p className="eyebrow">Notes</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 lg:col-span-9">
              {workNotes.map((item) => (
                <div key={item.title} className="surface-panel p-6">
                  <h3 className="text-2xl tracking-[-0.04em]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--muted)] md:text-base">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-24">
        <ProjectRail />
      </div>

      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="mt-24 border-t border-white/10 pt-8"
        >
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-3">
              <p className="eyebrow">Archive / Direction</p>
            </div>

            <div className="lg:col-span-9">
              <div className="surface-panel p-6 md:p-8">
                <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
                  <div className="lg:col-span-8">
                    <h2 className="section-title max-w-4xl">
                      Designed as a portfolio, structured like an index.
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-[color:var(--muted)] md:text-lg">
                      The homepage introduces the work through interaction. This
                      page gives it more structure, more context, and a clearer
                      way to move through the archive.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <TransitionLink
                        href="/playground"
                        label="Playground"
                        className="inline-flex items-center rounded-full border border-white/10 bg-[color:var(--surface-2)] px-5 py-3 text-[11px] uppercase tracking-[0.22em] transition-colors duration-300 surface-hover-strong"
                      >
                        View Playground
                      </TransitionLink>

                      <TransitionLink
                        href="/contact"
                        label="Start a project"
                        className="inline-flex items-center rounded-full border border-[color:var(--accent-border)] bg-[color:var(--accent)] px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-[color:var(--accent-ink)] transition-colors duration-300 hover:bg-[color:var(--accent-hover)]"
                      >
                        Start Project
                      </TransitionLink>
                    </div>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                      <div>
                        <p className="eyebrow">Featured</p>
                        <p className="mt-2 text-3xl tracking-[-0.05em]">
                          {String(featuredProjects.length).padStart(2, "0")}
                        </p>
                      </div>

                      <div>
                        <p className="eyebrow">Archive</p>
                        <p className="mt-2 text-3xl tracking-[-0.05em]">
                          {String(archiveProjects.length).padStart(2, "0")}
                        </p>
                      </div>

                      <div>
                        <p className="eyebrow">Primary Focus</p>
                        <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">
                          Premium websites, portfolio systems, and motion-led
                          front-end work.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
