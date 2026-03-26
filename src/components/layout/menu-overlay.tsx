"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { TransitionLink } from "@/components/ui/transition-link";
import { projects } from "@/content/projects";
import { cn } from "@/lib/utils";

type MenuOverlayProps = {
  open: boolean;
  onClose: () => void;
};

const navItems = [
  { href: "/", label: "Home", transitionLabel: "Home" },
  { href: "/work", label: "Work", transitionLabel: "Selected Work" },
  { href: "/about", label: "About", transitionLabel: "About" },
  { href: "/playground", label: "Playground", transitionLabel: "Playground" },
  { href: "/contact", label: "Contact", transitionLabel: "Contact" },
];

const EASE = [0.22, 1, 0.36, 1] as const;
const EASE_EXIT = [0.4, 0, 1, 1] as const;

export function MenuOverlay({ open, onClose }: MenuOverlayProps) {
  return (
    <AnimatePresence mode="wait">
      {open ? (
        <MenuOverlayPanel key="menu-overlay-panel" onClose={onClose} />
      ) : null}
    </AnimatePresence>
  );
}

function MenuOverlayPanel({ onClose }: { onClose: () => void }) {
  const pathname = usePathname();
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  const featuredProject = projects[0];
  const secondaryProject = projects[1] ?? projects[0];

  const activeHref = useMemo(() => {
    return (
      navItems.find((item) =>
        item.href === "/" ? pathname === "/" : pathname.startsWith(item.href),
      )?.href ?? "/"
    );
  }, [pathname]);

  const targetHref = hoveredHref ?? activeHref;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.aside
      className="fixed inset-0 z-[120]"
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div
        className="absolute inset-0 bg-black/16"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { duration: 0.28, ease: EASE },
          },
          exit: {
            opacity: 0,
            transition: { duration: 0.2, ease: EASE_EXIT },
          },
        }}
      />

      <motion.div
        className="absolute inset-0 overflow-y-auto bg-white text-black"
        variants={{
          hidden: {
            opacity: 0,
            y: 16,
            scale: 0.992,
          },
          show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.46, ease: EASE },
          },
          exit: {
            opacity: 0,
            y: 12,
            scale: 0.996,
            transition: { duration: 0.22, ease: EASE_EXIT },
          },
        }}
      >
        <div className="site-container py-6 md:py-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.36, ease: EASE }}
            className="grid gap-3 border-b border-black/10 pb-4 md:grid-cols-[1fr_auto_1fr] md:items-center md:pb-5"
          >
            <div className="flex items-center justify-between md:justify-start">
              <Link
                href="/"
                onClick={onClose}
                className="text-sm font-medium tracking-[-0.03em]"
              >
              
              </Link>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-3 justify-self-start text-[11px] uppercase tracking-[0.22em] text-black transition-opacity duration-300 hover:opacity-65 md:justify-self-center"
              aria-label="Close menu"
            >
              <span>Close</span>
              <X size={15} strokeWidth={1.8} />
            </button>

            <div className="flex justify-start md:justify-end">
              <TransitionLink
                href="/contact"
                label="Start a project"
                onClick={onClose}
                className="inline-flex items-center gap-3 bg-[color:var(--accent)] px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-[color:var(--accent-ink)] transition-all duration-300 hover:bg-[color:var(--accent-hover)] hover:-translate-y-[1px]"
              >
                Start a project
                <ArrowUpRight size={15} />
              </TransitionLink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.42, delay: 0.04, ease: EASE }}
            className="mt-4 border border-black/10 bg-white px-6 py-8 md:px-10 md:py-10"
          >
            <div className="grid gap-10 xl:grid-cols-[1.2fr_0.82fr_1.05fr] xl:gap-12">
              <LayoutGroup>
                <nav
                  className="flex flex-col gap-2 md:gap-3"
                  onMouseLeave={() => setHoveredHref(null)}
                >
                  {navItems.map((item) => {
                    const isCurrentRoute = activeHref === item.href;
                    const isTarget = targetHref === item.href;

                    const content = (
                      <>
                        <span className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center overflow-visible">
                          {isTarget ? (
                            <motion.span
                              layoutId="menu-nav-indicator"
                              transition={{
                                type: "spring",
                                stiffness: 380,
                                damping: 30,
                                mass: 0.72,
                              }}
                              animate={{
                                rotate: hoveredHref && !isCurrentRoute ? 10 : 0,
                                scale:
                                  hoveredHref && !isCurrentRoute ? 1.03 : 1,
                              }}
                              className="absolute h-8 w-8 bg-[color:var(--accent)]"
                            />
                          ) : null}
                        </span>

                        <div className="flex items-end gap-4">
                          <motion.span
                            className={cn(
                              "text-[clamp(3rem,8vw,5.8rem)] leading-[0.9] tracking-[-0.07em] transition-all duration-300",
                              isCurrentRoute
                                ? "text-[color:var(--accent)]"
                                : "text-black group-hover:text-[color:var(--accent)]",
                            )}
                            animate={{
                              x:
                                hoveredHref === item.href && !isCurrentRoute
                                  ? 6
                                  : 0,
                            }}
                            transition={{ duration: 0.28, ease: EASE }}
                          >
                            {item.label}
                          </motion.span>

                          {isCurrentRoute ? (
                            <span className="mb-3 text-[10px] uppercase tracking-[0.2em] text-black/45">
                              Current
                            </span>
                          ) : null}
                        </div>
                      </>
                    );

                    if (isCurrentRoute) {
                      return (
                        <motion.div
                          key={item.href}
                          className="inline-flex w-fit items-center gap-4 cursor-default select-none"
                          aria-current="page"
                        >
                          {content}
                        </motion.div>
                      );
                    }

                    return (
                      <motion.div
                        key={item.href}
                        onMouseEnter={() => setHoveredHref(item.href)}
                        onFocusCapture={() => setHoveredHref(item.href)}
                        className="w-fit"
                      >
                        <TransitionLink
                          href={item.href}
                          label={item.transitionLabel}
                          onClick={onClose}
                          className="group inline-flex w-fit items-center gap-4"
                        >
                          {content}
                        </TransitionLink>
                      </motion.div>
                    );
                  })}
                </nav>
              </LayoutGroup>

              <div className="space-y-8">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-black/45">
                    Contact
                  </p>
                  <div className="mt-3 space-y-3 text-[1.1rem] leading-8 tracking-[-0.03em] text-black/88">
                    <p>hello@yourname.com</p>
                    <p>Cape Town, South Africa</p>
                  </div>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-black/45">
                    Elsewhere
                  </p>
                  <div className="mt-3 space-y-2 text-lg tracking-[-0.03em] text-black/72">
                    <p>Instagram / @yourhandle</p>
                    <p>Behance / yourname</p>
                    <p>Available for select freelance projects</p>
                  </div>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-black/45">
                    Status
                  </p>
                  <div className="mt-4 space-y-3 text-[11px] uppercase tracking-[0.2em] text-black/78">
                    <div className="flex items-start gap-3">
                      <span className="mt-1.5 h-2.5 w-2.5 bg-[color:var(--accent)]" />
                      <span>Accepting projects</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1.5 h-2.5 w-2.5 bg-[color:var(--accent)]" />
                      <span>Motion-led portfolio systems</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-2">
                <TransitionLink
                  href="/about"
                  label="About"
                  onClick={onClose}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-black/5">
                    <Image
                      src={secondaryProject.preview}
                      alt={secondaryProject.title}
                      fill
                      sizes="(max-width: 1280px) 50vw, 280px"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                    />
                  </div>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-black/72 transition-colors duration-300 group-hover:text-[color:var(--accent)]">
                    About
                  </p>
                </TransitionLink>

                <TransitionLink
                  href={featuredProject.href}
                  label={featuredProject.title}
                  onClick={onClose}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-black/5">
                    <Image
                      src={featuredProject.preview}
                      alt={featuredProject.title}
                      fill
                      sizes="(max-width: 1280px) 50vw, 280px"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                    />
                  </div>
                  <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-black/72 transition-colors duration-300 group-hover:text-[color:var(--accent)]">
                    Featured project
                  </p>
                </TransitionLink>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.aside>
  );
}
