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

type ProjectRailProps = {
  variant?: "dark" | "light";
};

export function ProjectRail({ variant = "dark" }: ProjectRailProps) {
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
      <div className="mt-4">
        {projects.map((project) => (
          <ProjectRow
            key={project.slug}
            project={project}
            variant={variant}
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

        <div
          className={
            variant === "light"
              ? "border-t border-black/10"
              : "border-t border-white/10"
          }
        />
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
