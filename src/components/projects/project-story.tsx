"use client";

import { motion } from "motion/react";
import type { Project } from "@/types/project";
import { ProjectMediaFrame } from "@/components/projects/project-media-frame";

type ProjectStoryProps = {
  project: Project;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function ProjectStory({ project }: ProjectStoryProps) {
  return (
    <section className="site-container pb-24 md:pb-32">
      <div className="space-y-20 md:space-y-24 lg:space-y-32">
        {project.story.map((section, index) => {
          const imageFirst = section.layout === "image-left";

          return (
            <motion.article
              key={`${project.slug}-${section.eyebrow}-${index}`}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="border-t border-black/10 pt-6 md:pt-8"
            >
              <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-2">
                  <p className="eyebrow">{section.eyebrow}</p>
                </div>

                <div className="grid gap-6 lg:col-span-10 lg:grid-cols-10 lg:gap-10">
                  <div
                    className={
                      imageFirst
                        ? "lg:order-1 lg:col-span-5"
                        : "lg:order-2 lg:col-span-5"
                    }
                  >
                    <ProjectMediaFrame
                      image={section.image}
                      alt={section.title}
                      eyebrow={section.eyebrow}
                      meta={`${String(index + 1).padStart(2, "0")}`}
                      mobileAspect="16/11"
                      aspect="4/5"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      variant="minimal"
                    />
                  </div>

                  <div
                    className={`flex items-center ${
                      imageFirst
                        ? "lg:order-2 lg:col-span-5"
                        : "lg:order-1 lg:col-span-5"
                    }`}
                  >
                    <div className="max-w-2xl">
                      <h2 className="text-[clamp(1.9rem,8vw,4.25rem)] leading-[0.98] tracking-[-0.05em]">
                        {section.title}
                      </h2>

                      <p className="mt-5 text-sm leading-8 text-[color:var(--muted)] md:mt-6 md:text-base lg:text-lg">
                        {section.body}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="mt-20 border-t border-black/10 pt-6 md:mt-24 md:pt-8 lg:mt-32"
      >
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-2">
            <p className="eyebrow">Visual Direction</p>
          </div>

          <div className="lg:col-span-10">
            <ProjectMediaFrame
              image={project.preview}
              alt={project.title}
              eyebrow="Visual Direction"
              title={project.title}
              meta={`${project.client ?? "Independent"} • ${project.year}`}
              mobileAspect="16/11"
              aspect="16/10"
              sizes="100vw"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}