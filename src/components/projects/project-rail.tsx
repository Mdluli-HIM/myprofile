"use client";

import { AnimatePresence } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { projects } from "@/content/projects";
import { ProjectPreview } from "./project-preview";
import { ProjectRow } from "./project-row";

type PointerPosition = {
  x: number;
  y: number;
};

export function ProjectRail() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);
  const [pointer, setPointer] = useState<PointerPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: none), (pointer: coarse)");

    const updatePointerMode = () => {
      setIsCoarsePointer(mediaQuery.matches);
    };

    updatePointerMode();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updatePointerMode);
      return () => mediaQuery.removeEventListener("change", updatePointerMode);
    }

    mediaQuery.addListener(updatePointerMode);
    return () => mediaQuery.removeListener(updatePointerMode);
  }, []);

  const activeProject = useMemo(
    () => projects.find((project) => project.slug === activeSlug) ?? null,
    [activeSlug],
  );

  return (
    <section className="site-container pb-32">
      <div className="section-line pt-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="eyebrow">Selected Work</p>
          </div>

          <div className="lg:col-span-9">
            <h2 className="section-title max-w-5xl">
              Each project opens like a story, not a card in a grid.
            </h2>
          </div>
        </div>
      </div>

      <div className="mt-20">
        {projects.map((project) => (
          <ProjectRow
            key={project.slug}
            project={project}
            isActive={activeSlug === project.slug}
            isExpanded={expandedSlug === project.slug}
            isCoarsePointer={isCoarsePointer}
            onActivate={() => setActiveSlug(project.slug)}
            onDeactivate={() => setActiveSlug(null)}
            onPointerMove={(nextPointer) => setPointer(nextPointer)}
            onToggleExpand={() =>
              setExpandedSlug((current) =>
                current === project.slug ? null : project.slug,
              )
            }
          />
        ))}

        <div className="border-t border-black/10" />
      </div>

      <AnimatePresence>
        {!isCoarsePointer && activeProject ? (
          <ProjectPreview
            key={activeProject.slug}
            project={activeProject}
            x={pointer.x}
            y={pointer.y}
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}
