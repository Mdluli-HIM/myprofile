"use client";

import { LayoutGroup, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { TransitionLink } from "@/components/ui/transition-link";
import { cn } from "@/lib/utils";
import { MenuOverlay } from "@/components/layout/menu-overlay";
import { MenuToggleButton } from "@/components/layout/menu-toggle-button";

const links = [
  { href: "/", label: "Home", transitionLabel: "Home" },
  { href: "/work", label: "Work", transitionLabel: "Selected Work" },
  { href: "/about", label: "About", transitionLabel: "About" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export function BottomDock() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <LayoutGroup>
      <motion.div
        className="mobile-safe-bottom fixed inset-x-0 bottom-0 z-50 flex justify-center px-4"
        animate={{
          opacity: menuOpen ? 0.22 : 1,
          scale: menuOpen ? 0.94 : 1,
          y: menuOpen ? 10 : 0,
          filter: menuOpen ? "blur(4px)" : "blur(0px)",
        }}
        transition={{
          duration: 0.42,
          ease: EASE,
        }}
        style={{
          pointerEvents: menuOpen ? "none" : "auto",
          transformOrigin: "center bottom",
        }}
      >
        <motion.div
          layout
          className="flex items-center rounded-full border border-black/10 bg-white/88 px-2 py-2 shadow-[0_12px_35px_rgba(0,0,0,0.08)] backdrop-blur-md"
          animate={{
            paddingLeft: menuOpen ? 6 : 8,
            paddingRight: menuOpen ? 6 : 8,
          }}
          transition={{
            duration: 0.38,
            ease: EASE,
          }}
        >
          <TransitionLink
            href="/"
            label="Home"
            className="mr-2 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-sm tracking-[-0.04em] md:h-11 md:w-11"
          >
            N
          </TransitionLink>

          <motion.div
            className="flex items-center gap-1"
            animate={{ opacity: menuOpen ? 0.7 : 1 }}
            transition={{ duration: 0.28, ease: EASE }}
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
                      ? "bg-[color:var(--surface)] text-black"
                      : "text-[color:var(--muted)] hover:text-black"
                  )}
                >
                  {link.label}
                </TransitionLink>
              );
            })}
          </motion.div>

          <motion.div
            className="mx-2 h-6 w-px bg-black/10 md:h-7"
            animate={{
              opacity: menuOpen ? 0.45 : 1,
              scaleY: menuOpen ? 0.8 : 1,
            }}
            transition={{
              duration: 0.32,
              ease: EASE,
            }}
          />

          {menuOpen ? (
            <div className="h-10 w-10 md:h-11 md:w-11" />
          ) : (
            <MenuToggleButton mode="menu" onClick={() => setMenuOpen(true)} />
          )}
        </motion.div>
      </motion.div>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </LayoutGroup>
  );
}