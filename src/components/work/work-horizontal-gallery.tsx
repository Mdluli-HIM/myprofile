"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

function compactServiceLabel(service: string) {
  const map: Record<string, string> = {
    "Creative Direction": "Creative Direction",
    "UI Design": "UI Design",
    "UI / UX Design": "UI / UX",
    "Frontend Development": "Frontend",
    "Interaction Design": "Interaction",
    "Motion Design": "Motion",
    Development: "Development",
    Frontend: "Frontend",
  };

  return map[service] ?? service;
}

export function WorkHorizontalGallery() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const middleCardRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const isRecenteringRef = useRef(false);

  const [isDragging, setIsDragging] = useState(false);
  const [activeSlug, setActiveSlug] = useState(projects[0]?.slug ?? "");

  const dragState = useRef({
    active: false,
    startX: 0,
    scrollLeft: 0,
  });

  const loopedProjects = useMemo(
    () =>
      [0, 1, 2].flatMap((copyIndex) =>
        projects.map((project, projectIndex) => ({
          ...project,
          copyIndex,
          loopKey: `${project.slug}-${copyIndex}-${projectIndex}`,
        })),
      ),
    [],
  );

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;

    const setInitialPosition = () => {
      const oneSegment = node.scrollWidth / 3;
      node.scrollLeft = oneSegment;
    };

    const frame = requestAnimationFrame(setInitialPosition);
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      event.preventDefault();
      node.scrollLeft += event.deltaY;
    };

    const handleScroll = () => {
      if (isRecenteringRef.current) return;

      const oneSegment = node.scrollWidth / 3;
      const leftEdge = oneSegment * 0.5;
      const rightEdge = oneSegment * 1.5;

      if (node.scrollLeft < leftEdge) {
        isRecenteringRef.current = true;
        node.scrollLeft += oneSegment;
        requestAnimationFrame(() => {
          isRecenteringRef.current = false;
        });
      } else if (node.scrollLeft > rightEdge) {
        isRecenteringRef.current = true;
        node.scrollLeft -= oneSegment;
        requestAnimationFrame(() => {
          isRecenteringRef.current = false;
        });
      }

      const viewportCenter = node.scrollLeft + node.clientWidth / 2;
      let closestSlug = activeSlug;
      let closestDistance = Number.POSITIVE_INFINITY;

      Object.entries(middleCardRefs.current).forEach(([slug, element]) => {
        if (!element) return;

        const left = element.offsetLeft;
        const width = element.offsetWidth;
        const center = left + width / 2;
        const distance = Math.abs(center - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSlug = slug;
        }
      });

      if (closestSlug !== activeSlug) {
        setActiveSlug(closestSlug);
      }
    };

    node.addEventListener("wheel", handleWheel, { passive: false });
    node.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      node.removeEventListener("wheel", handleWheel);
      node.removeEventListener("scroll", handleScroll);
    };
  }, [activeSlug]);

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    const node = scrollerRef.current;
    if (!node) return;

    dragState.current.active = true;
    dragState.current.startX = event.clientX;
    dragState.current.scrollLeft = node.scrollLeft;
    setIsDragging(true);

    event.currentTarget.setPointerCapture?.(event.pointerId);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const node = scrollerRef.current;
    if (!node || !dragState.current.active) return;

    const delta = event.clientX - dragState.current.startX;
    node.scrollLeft = dragState.current.scrollLeft - delta * 1.1;
  }

  function handlePointerUp() {
    dragState.current.active = false;
    setIsDragging(false);
  }

  function scrollToProject(slug: string) {
    setActiveSlug(slug);
    middleCardRefs.current[slug]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <section className="overflow-hidden bg-[color:var(--light-background)] pt-2 pb-8 text-[color:var(--light-foreground)] md:pb-10">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="site-container"
      >
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <p className="eyebrow text-[color:var(--light-foreground)]">
              Archive
            </p>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--light-muted)]">
              Infinite / Drag / Scroll
            </p>
          </div>

          <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap hide-scrollbar">
            {projects.map((project) => (
              <button
                key={project.slug}
                type="button"
                onClick={() => scrollToProject(project.slug)}
                className={cn(
                  "relative h-12 w-16 shrink-0 overflow-hidden bg-black/[0.04] transition-all duration-300 md:h-14 md:w-20",
                  activeSlug === project.slug
                    ? "opacity-100"
                    : "opacity-45 hover:opacity-80",
                )}
                aria-label={`View ${project.title}`}
              >
                <Image
                  src={project.preview}
                  alt={project.title}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      <div
        ref={scrollerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className={cn(
          "hide-scrollbar mt-8 overflow-x-auto select-none px-5 md:px-8 lg:px-10",
          isDragging ? "cursor-grabbing" : "cursor-grab",
        )}
      >
        <div className="flex w-max items-start gap-5 pb-8 md:gap-7 md:pb-10 lg:gap-8">
          {loopedProjects.map((project, index) => {
            const serviceLine = project.services
              .slice(0, 2)
              .map(
                (service) => `[${compactServiceLabel(service).toUpperCase()}]`,
              )
              .join(" — ");

            return (
              <Link
                key={project.loopKey}
                href={project.href}
                ref={(node) => {
                  if (project.copyIndex === 1) {
                    middleCardRefs.current[project.slug] = node;
                  }
                }}
                onMouseEnter={() => setActiveSlug(project.slug)}
                onFocus={() => setActiveSlug(project.slug)}
                className={cn(
                  "group block shrink-0 transition-all duration-300",
                  "w-[88vw] max-w-none md:w-[74vw] lg:w-[66vw] xl:w-[60vw]",
                  activeSlug === project.slug
                    ? "opacity-100 scale-[1.01]"
                    : "opacity-90 scale-[0.985]",
                )}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black/[0.04]">
                  <Image
                    src={project.preview}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 88vw, (max-width: 1024px) 74vw, 66vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                    priority={index < 3}
                  />
                </div>

                <div className="mt-5 flex items-end justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--light-muted)] md:text-[11px]">
                      {serviceLine}
                    </p>

                    <h2 className="mt-3 text-[1.5rem] leading-none tracking-[-0.05em] text-[color:var(--light-foreground)] md:text-[1.95rem] lg:text-[2.2rem]">
                      {project.title}
                    </h2>
                  </div>

                  <span className="inline-flex shrink-0 translate-y-0 text-[color:var(--accent)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
