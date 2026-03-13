"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

type MenuToggleButtonProps = {
  mode: "menu" | "close";
  onClick: () => void;
  className?: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

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
        "relative flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-none",
        className,
      )}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2, ease: EASE }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {mode === "menu" ? (
          <motion.span
            key="menu"
            initial={{ opacity: 0, rotate: -60, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 60, scale: 0.7 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="inline-flex"
          >
            <Menu size={16} strokeWidth={1.75} />
          </motion.span>
        ) : (
          <motion.span
            key="close"
            initial={{ opacity: 0, rotate: 60, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -60, scale: 0.7 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="inline-flex"
          >
            <X size={16} strokeWidth={1.75} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
