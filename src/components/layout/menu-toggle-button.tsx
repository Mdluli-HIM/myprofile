"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

type MenuToggleButtonProps = {
  mode: "menu" | "close";
  onClick: () => void;
  className?: string;
  variant?: "dark" | "light";
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function MenuToggleButton({
  mode,
  onClick,
  className,
  variant = "dark",
}: MenuToggleButtonProps) {
  const isLight = variant === "light";

  return (
    <motion.button
      layoutId="menu-toggle"
      type="button"
      onClick={onClick}
      aria-label={mode === "menu" ? "Open menu" : "Close menu"}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center rounded-full md:h-11 md:w-11",
        isLight
          ? "bg-black/[0.04] text-[color:var(--light-foreground)]"
          : "bg-[color:var(--surface-2)]/92 text-[color:var(--foreground)]",
        className,
      )}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.22, ease: EASE }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {mode === "menu" ? (
          <motion.span
            key="menu"
            initial={{ opacity: 0, rotate: -40, scale: 0.85 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 40, scale: 0.85 }}
            transition={{ duration: 0.22, ease: EASE }}
            className="inline-flex"
          >
            <Menu size={16} strokeWidth={1.75} />
          </motion.span>
        ) : (
          <motion.span
            key="close"
            initial={{ opacity: 0, rotate: 40, scale: 0.85 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -40, scale: 0.85 }}
            transition={{ duration: 0.22, ease: EASE }}
            className="inline-flex"
          >
            <X size={16} strokeWidth={1.75} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
