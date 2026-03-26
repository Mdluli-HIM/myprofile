"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useNavTone } from "@/hooks/use-nav-tone";

const EASE = [0.22, 1, 0.36, 1] as const;
const SCROLL_IDLE_DELAY = 3000;

export function SiteHeader() {
  const tone = useNavTone("dark", 92);
  const isLightTone = tone === "light";

  const [isScrolling, setIsScrolling] = useState(false);
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

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-40"
      animate={{
        opacity: isScrolling ? 0.9 : 1,
        y: isScrolling ? -2 : 0,
      }}
      transition={{ duration: 0.75, ease: EASE }}
    >
      <div className="site-container pt-6">
        <motion.div
          className="relative pb-5"
          animate={{ opacity: isScrolling ? 0.94 : 1 }}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <Link
            href="/"
            className={cn(
              "text-sm font-medium tracking-[-0.03em] transition-colors duration-700",
              isLightTone ? "text-black" : "text-[color:var(--background)]",
            )}
          >
           
          </Link>

          <p className="absolute right-0 top-0 hidden text-[11px] uppercase tracking-[0.24em] text-[color:var(--accent)] md:block"></p>
        </motion.div>
      </div>
    </motion.header>
  );
}
