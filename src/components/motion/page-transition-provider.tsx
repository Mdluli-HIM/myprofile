"use client";

import { AnimatePresence, motion, MotionConfig } from "motion/react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";

type TransitionPhase = "idle" | "covering" | "revealing";

type PageTransitionContextValue = {
  navigate: (href: string, label?: string) => void;
  isTransitioning: boolean;
};

const PageTransitionContext = createContext<PageTransitionContextValue | null>(
  null,
);

export function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [phase, setPhase] = useState<TransitionPhase>("idle");
  const [label, setLabel] = useState("");
  const pendingHrefRef = useRef<string | null>(null);
  const enteredPathRef = useRef<string | null>(null);

  const navigate = useCallback(
    (href: string, nextLabel?: string) => {
      if (phase !== "idle") return;
      if (!href || href === pathname) return;

      pendingHrefRef.current = href;
      enteredPathRef.current = null;
      setLabel(nextLabel ?? "");
      setPhase("covering");

      window.setTimeout(() => {
        router.push(href);
      }, 480);
    },
    [pathname, phase, router],
  );

  useEffect(() => {
    if (phase === "covering" && pathname === pendingHrefRef.current) {
      if (enteredPathRef.current === pathname) return;
      enteredPathRef.current = pathname;

      const timer = window.setTimeout(() => {
        setPhase("revealing");
      }, 80);

      return () => window.clearTimeout(timer);
    }
  }, [pathname, phase]);

  useEffect(() => {
    if (phase !== "revealing") return;

    const timer = window.setTimeout(() => {
      setPhase("idle");
      pendingHrefRef.current = null;
      enteredPathRef.current = null;
      setLabel("");
    }, 720);

    return () => window.clearTimeout(timer);
  }, [phase]);

  const value = useMemo<PageTransitionContextValue>(
    () => ({
      navigate,
      isTransitioning: phase !== "idle",
    }),
    [navigate, phase],
  );

  return (
    <PageTransitionContext.Provider value={value}>
      <MotionConfig
        transition={{
          duration: 0.7,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {children}

        <AnimatePresence>
          {phase !== "idle" && (
            <motion.div
              className="pointer-events-none fixed inset-0 z-[999] bg-[#111111] text-white"
              initial={{
                clipPath: "inset(100% 0% 0% 0%)",
              }}
              animate={
                phase === "covering"
                  ? {
                      clipPath: "inset(0% 0% 0% 0%)",
                    }
                  : {
                      clipPath: "inset(0% 0% 100% 0%)",
                    }
              }
              exit={{
                clipPath: "inset(0% 0% 100% 0%)",
              }}
            >
              <div className="flex h-full flex-col justify-between p-6 md:p-10">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-white/55">
                  <span>Opening project</span>
                  <span>Portfolio</span>
                </div>

                <div className="flex flex-1 items-center justify-center">
                  <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-4xl text-center text-4xl tracking-[-0.06em] text-white md:text-7xl"
                  >
                    {label || "Loading"}
                  </motion.p>
                </div>

                <div className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                  Curated interaction transition
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </MotionConfig>
    </PageTransitionContext.Provider>
  );
}

export function usePageTransition() {
  const context = useContext(PageTransitionContext);

  if (!context) {
    throw new Error(
      "usePageTransition must be used within PageTransitionProvider",
    );
  }

  return context;
}
