"use client";

import { LayoutGroup, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { TransitionLink } from "@/components/ui/transition-link";
import { cn } from "@/lib/utils";
import { MenuOverlay } from "@/components/layout/menu-overlay";
import { MenuToggleButton } from "@/components/layout/menu-toggle-button";
import { useNavTone } from "@/hooks/use-nav-tone";

const links = [
  { href: "/", label: "Home", transitionLabel: "Home" },
  { href: "/work", label: "Work", transitionLabel: "Selected Work" },
  { href: "/about", label: "About", transitionLabel: "About" },
];

const EASE = [0.22, 1, 0.36, 1] as const;
const SCROLL_IDLE_DELAY = 3000;

export function BottomDock() {
  const pathname = usePathname();
  // Sample the theme near the dock (bottom of viewport).
  const tone = useNavTone("dark", -96);
  const isLightTone = tone === "light";

  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isDockHovered, setIsDockHovered] = useState(false);

  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function handleScroll() {
      setIsScrolling(true);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, SCROLL_IDLE_DELAY);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const isCollapsed = !menuOpen && isScrolling && !isDockHovered;

  return (
    <LayoutGroup>
      <motion.div
        data-nav-ui="true"
        className="mobile-safe-bottom fixed inset-x-0 bottom-0 z-50 flex justify-center px-4"
        animate={{
          opacity: menuOpen ? 0.18 : 1,
          y: menuOpen ? 6 : 0,
          scale: menuOpen ? 0.985 : 1,
        }}
        transition={{ duration: 0.45, ease: EASE }}
        style={{
          pointerEvents: menuOpen ? "none" : "auto",
          transformOrigin: "center bottom",
        }}
      >
        <motion.div
          layout
          onMouseEnter={() => setIsDockHovered(true)}
          onMouseLeave={() => setIsDockHovered(false)}
          onFocusCapture={() => setIsDockHovered(true)}
          onBlurCapture={() => setIsDockHovered(false)}
          className={cn(
            "flex items-center rounded-full px-2 py-2 backdrop-blur-md transition-colors duration-700",
            isLightTone
              ? "bg-[color:var(--accent)] shadow-[0_14px_40px_rgba(0,0,0,0.28)]"
              : "bg-[rgba(255,255,255,0.06)] shadow-[0_14px_40px_rgba(0,0,0,0.22)]",
          )}
          transition={{
            layout: { duration: 0.62, ease: EASE },
          }}
        >
          <motion.div
            className="flex items-center overflow-hidden"
            animate={{
              maxWidth: isCollapsed ? 0 : 640,
              opacity: isCollapsed ? 0 : 1,
              marginRight: isCollapsed ? 0 : 8,
            }}
            transition={{
              maxWidth: { duration: 0.68, ease: EASE },
              opacity: { duration: 0.42, ease: EASE },
              marginRight: { duration: 0.55, ease: EASE },
            }}
          >
            <TransitionLink
              href="/"
              label="Home"
              className={cn(
                "mr-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm tracking-[-0.04em] md:h-11 md:w-11 transition-colors duration-700",
                isLightTone
                  ? "bg-black text-white"
                  : "bg-[rgba(255,255,255,0.08)] text-[color:var(--foreground)]",
              )}
            >
              M
            </TransitionLink>

            <motion.div
              className="flex items-center gap-1 whitespace-nowrap"
              animate={{
                opacity: isCollapsed ? 0 : isScrolling ? 0.92 : 1,
                x: isCollapsed ? -8 : 0,
              }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              {links.map((link, index) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <TransitionLink
                    key={link.href}
                    href={link.href}
                    label={link.transitionLabel}
                    className={cn(
                      "rounded-full px-3 py-2 text-[10px] uppercase tracking-[0.22em] transition-colors duration-300 sm:px-4 md:px-5 md:py-3 md:text-[11px]",
                      index === 2 && "hidden sm:inline-flex",
                      isActive
                        ? isLightTone
                          ? "bg-black text-white"
                          : "bg-[color:var(--accent)] text-[color:var(--accent-ink)]"
                        : isLightTone
                          ? "text-white/90 "
                          : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]",
                    )}
                  >
                    {link.label}
                  </TransitionLink>
                );
              })}
            </motion.div>

            <motion.div
              className={cn(
                "mx-2 h-6 w-px shrink-0 md:h-7 transition-colors duration-700",
                isLightTone ? "bg-black/35" : "bg-white/8",
              )}
              animate={{
                opacity: isCollapsed ? 0 : isScrolling ? 0.5 : 0.85,
                scaleY: isCollapsed ? 0.7 : isScrolling ? 0.84 : 1,
              }}
              transition={{ duration: 0.45, ease: EASE }}
            />
          </motion.div>

          <motion.div
            animate={{
              scale: isCollapsed ? 0.98 : 1,
            }}
            transition={{ duration: 0.5, ease: EASE }}
            className="shrink-0"
          >
            <MenuToggleButton
              mode="menu"
              onClick={() => setMenuOpen(true)}
              variant={isLightTone ? "dark" : "dark"}
              className={isLightTone ? "bg-black text-white" : undefined}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </LayoutGroup>
  );
}
