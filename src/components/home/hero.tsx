"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { homeHeroNote, homeHeroVisual } from "@/content/home";

const EASE = [0.22, 1, 0.36, 1] as const;

function MobileHeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.72, delay: 0.16, ease: EASE }}
      className="mt-10 grid gap-4 lg:hidden"
    >
      <div className="border border-black/10 bg-white/70 p-3">
        <div className="relative aspect-[16/11] overflow-hidden border border-black/10">
          <Image
            src={homeHeroVisual.image}
            alt={homeHeroVisual.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover"
          />
        </div>

        <div className="mt-3">
          <p className="eyebrow">{homeHeroVisual.eyebrow}</p>
          <p className="mt-2 text-sm tracking-[-0.03em]">{homeHeroVisual.meta}</p>
        </div>
      </div>

      <div className="border border-black/10 bg-white/72 p-5">
        <div className="flex items-start justify-between gap-4">
          <p className="eyebrow">{homeHeroNote.eyebrow}</p>
          <span className="mt-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-black/70" />
        </div>

        <h2 className="mt-5 text-[1.45rem] leading-[1.04] tracking-[-0.05em]">
          {homeHeroNote.title}
        </h2>

        <div className="mt-5 space-y-3 border-t border-black/10 pt-4">
          {homeHeroNote.lines.map((line) => (
            <div key={line} className="flex gap-3">
              <span className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-black/45" />
              <p className="text-sm leading-7 text-[color:var(--muted)]">{line}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="site-container flex min-h-[86svh] items-end pt-28 pb-14 md:min-h-screen md:pt-32 md:pb-20">
      <div className="grid w-full gap-8 md:gap-10 lg:grid-cols-12">
        <div className="lg:col-span-2">
          <motion.p
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="eyebrow"
          >
            Designer / Front-end Developer
          </motion.p>
        </div>

        <div className="lg:col-span-7">
          <motion.h1
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, ease: EASE }}
            className="display-title max-w-6xl"
          >
            Building elegant digital stories with interaction, motion, and
            restraint.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.72, delay: 0.08, ease: EASE }}
            className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2 md:gap-8"
          >
            <p className="body-muted max-w-md">
              I design and build premium websites, portfolios, and digital
              experiences that feel editorial, cinematic, and highly crafted.
            </p>

            <p className="body-muted max-w-md">
              Focused on art direction, interaction design, and modern frontend
              development using Next.js, GSAP, and motion-driven systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0, transformOrigin: "left center" }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.18, ease: EASE }}
            className="mt-10 h-px w-full max-w-[540px] bg-black/10 md:mt-14"
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22, ease: EASE }}
            className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)] md:mt-5 md:gap-x-6 md:text-[11px]"
          >
            <span>Editorial Layouts</span>
            <span>Motion Systems</span>
            <span>Frontend Craft</span>
          </motion.div>

          <MobileHeroVisual />
        </div>

        <div className="hidden lg:col-span-3 lg:flex lg:items-end lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.72, delay: 0.18, ease: EASE }}
            className="w-full max-w-[320px] space-y-4"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="border border-black/10 bg-white/70 p-3 backdrop-blur-sm"
            >
              <div className="relative aspect-[4/5] overflow-hidden border border-black/10">
                <Image
                  src={homeHeroVisual.image}
                  alt={homeHeroVisual.alt}
                  fill
                  priority
                  sizes="320px"
                  className="object-cover"
                />
              </div>

              <div className="mt-3">
                <p className="eyebrow">{homeHeroVisual.eyebrow}</p>
                <p className="mt-2 text-sm tracking-[-0.03em]">
                  {homeHeroVisual.meta}
                </p>
              </div>
            </motion.div>

            <motion.aside
              animate={{
                y: [0, -8, 0],
                rotate: [-1.2, 0.8, -1.2],
              }}
              transition={{
                y: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 7.5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="w-full border border-black/10 bg-white/72 p-5 backdrop-blur-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="eyebrow">{homeHeroNote.eyebrow}</p>
                <span className="mt-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-black/70" />
              </div>

              <h2 className="mt-5 text-[1.75rem] leading-[1.02] tracking-[-0.05em]">
                {homeHeroNote.title}
              </h2>

              <div className="mt-6 space-y-4 border-t border-black/10 pt-5">
                {homeHeroNote.lines.map((line) => (
                  <div key={line} className="flex gap-3">
                    <span className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-black/45" />
                    <p className="text-sm leading-7 text-[color:var(--muted)]">
                      {line}
                    </p>
                  </div>
                ))}
              </div>
            </motion.aside>
          </motion.div>
        </div>
      </div>
    </section>
  );
}