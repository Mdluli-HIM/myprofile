"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

type MenuToggleButtonProps = {
  mode: "menu" | "close";
  onClick: () => void;
  className?: string;
};

const EASE = [0.16, 1, 0.3, 1] as const;

export function MenuToggleButton({
  mode,
  onClick,
  className,
}: MenuToggleButtonProps) {
  return (
    <motion.button
      layoutId="menu-toggle"
      type="button"
      onClick={onClick}
      aria-label={mode === "menu" ? "Open menu" : "Close menu"}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[color:var(--surface-2)] text-[color:var(--foreground)] md:h-11 md:w-11",
        className,
      )}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.18, ease: EASE }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {mode === "menu" ? (
          <motion.span
            key="menu"
            initial={{ opacity: 0, rotate: -50, scale: 0.78 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 50, scale: 0.78 }}
            transition={{ duration: 0.22, ease: EASE }}
            className="inline-flex"
          >
            <Menu size={16} strokeWidth={1.75} />
          </motion.span>
        ) : (
          <motion.span
            key="close"
            initial={{ opacity: 0, rotate: 50, scale: 0.78 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -50, scale: 0.78 }}
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
