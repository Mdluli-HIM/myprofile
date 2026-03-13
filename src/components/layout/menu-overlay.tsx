"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { TransitionLink } from "@/components/ui/transition-link";
import { MenuToggleButton } from "@/components/layout/menu-toggle-button";

type MenuOverlayProps = {
  open: boolean;
  onClose: () => void;
};

const navItems = [
  { href: "/", label: "Home", transitionLabel: "Home" },
  { href: "/about", label: "About", transitionLabel: "About" },
  { href: "/work", label: "Work", transitionLabel: "Selected Work" },
  { href: "/playground", label: "Playground", transitionLabel: "Playground" },
  { href: "/contact", label: "Contact", transitionLabel: "Contact" },
];

const EASE = [0.22, 1, 0.36, 1] as const;
const EASE_EXIT = [0.4, 0, 1, 1] as const;

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.16,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.01,
    },
  },
};

const lineRevealVariants = {
  hidden: {
    y: "110%",
    rotate: 2,
    opacity: 0,
  },
  show: {
    y: "0%",
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 0.72,
      ease: EASE,
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: EASE,
    },
  },
};

export function MenuOverlay({ open, onClose }: MenuOverlayProps) {
  useEffect(() => {
    if (!open) return;

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
  }, [open, onClose]);

  return (
    <AnimatePresence mode="wait">
      {open ? (
        <motion.aside
          className="fixed inset-0 z-[120]"
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <motion.div
            className="absolute inset-0 bg-black/18"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  duration: 0.32,
                  ease: EASE,
                },
              },
              exit: {
                opacity: 0,
                transition: {
                  duration: 0.24,
                  ease: EASE_EXIT,
                },
              },
            }}
          />

          <motion.div
            className="absolute inset-0 overflow-y-auto bg-[color:var(--background)] text-[color:var(--foreground)]"
            variants={{
              hidden: {
                opacity: 0,
                y: 28,
                scale: 0.992,
                filter: "blur(10px)",
              },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                transition: {
                  duration: 0.56,
                  ease: EASE,
                },
              },
              exit: {
                opacity: 0,
                y: 18,
                scale: 0.996,
                filter: "blur(8px)",
                transition: {
                  duration: 0.28,
                  ease: EASE_EXIT,
                },
              },
            }}
            style={{ transformOrigin: "center bottom" }}
          >
            <div className="site-container flex min-h-dvh flex-col pb-[calc(env(safe-area-inset-bottom,0px)+24px)]">
              <motion.div
                className="sticky top-0 z-10 flex items-center justify-between border-b border-black/10 bg-[color:var(--background)]/95 py-5 backdrop-blur-md md:py-6"
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.45,
                  delay: 0.06,
                  ease: EASE,
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-sm tracking-[-0.04em] md:h-11 md:w-11">
                    N
                  </div>

                  <div>
                    <p className="text-sm tracking-[-0.03em]">Your Name</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)] md:text-[11px]">
                      Designer / Front-end Developer
                    </p>
                  </div>
                </div>

                <MenuToggleButton mode="close" onClick={onClose} />
              </motion.div>

              <div className="grid flex-1 gap-10 py-8 md:py-10 lg:grid-cols-12 lg:gap-12 lg:py-14">
                <motion.div
                  className="lg:col-span-2"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.1,
                    ease: EASE,
                  }}
                >
                  <p className="eyebrow">Menu</p>
                </motion.div>

                <div className="lg:col-span-6">
                  <motion.nav
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="flex flex-col"
                  >
                    {navItems.map((item) => (
                      <motion.div
                        key={item.href}
                        variants={rowVariants}
                        className="border-b border-black/10"
                      >
                        <TransitionLink
                          href={item.href}
                          label={item.transitionLabel}
                          onClick={onClose}
                          className="group block py-4 md:py-5 lg:py-6"
                        >
                          <div className="flex items-center justify-between gap-4 overflow-hidden md:gap-6">
                            <div className="overflow-hidden">
                              <motion.span
                                variants={lineRevealVariants}
                                className="block text-[clamp(2rem,11vw,5.8rem)] leading-[0.95] tracking-[-0.06em] transition-transform duration-300 group-hover:translate-x-2"
                              >
                                {item.label}
                              </motion.span>
                            </div>

                            <div className="overflow-hidden pt-1.5 md:pt-2">
                              <motion.span
                                variants={lineRevealVariants}
                                className="block text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)] md:text-[11px]"
                              >
                                Open
                              </motion.span>
                            </div>
                          </div>
                        </TransitionLink>
                      </motion.div>
                    ))}
                  </motion.nav>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="flex flex-col justify-between lg:col-span-4"
                >
                  <div className="space-y-8 border-t border-black/10 pt-6 lg:border-t-0 lg:pt-0 lg:space-y-10">
                    <motion.div variants={fadeUpVariants}>
                      <p className="eyebrow">Start a project</p>
                      <p className="mt-4 max-w-md text-sm leading-7 text-[color:var(--muted)] md:text-base md:leading-8 lg:text-lg">
                        Available for portfolio websites, brand experiences, and
                        premium front-end builds.
                      </p>

                      <TransitionLink
                        href="/contact"
                        label="Start a project"
                        onClick={onClose}
                        className="mt-6 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-5 py-3 text-[11px] uppercase tracking-[0.22em] transition-colors duration-300 hover:bg-[color:var(--surface)]"
                      >
                        Start Project
                        <ArrowUpRight size={15} />
                      </TransitionLink>
                    </motion.div>

                    <motion.div
                      variants={fadeUpVariants}
                      className="grid gap-6 sm:grid-cols-2"
                    >
                      <div>
                        <p className="eyebrow">Email</p>
                        <p className="mt-3 text-sm tracking-[-0.02em]">
                          hello@yourname.com
                        </p>
                      </div>

                      <div>
                        <p className="eyebrow">Based in</p>
                        <p className="mt-3 text-sm tracking-[-0.02em]">
                          Cape Town, South Africa
                        </p>
                      </div>

                      <div>
                        <p className="eyebrow">Focus</p>
                        <p className="mt-3 text-sm tracking-[-0.02em]">
                          Design Systems / Motion / Frontend
                        </p>
                      </div>

                      <div>
                        <p className="eyebrow">Status</p>
                        <p className="mt-3 text-sm tracking-[-0.02em]">
                          Selectively available
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    variants={fadeUpVariants}
                    className="mt-10 border-t border-black/10 pt-6"
                  >
                    <div className="flex flex-col gap-3 text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between md:text-[11px]">
                      <span>Curated digital portfolio</span>
                      <span>2026</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}