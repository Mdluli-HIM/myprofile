"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { homeHeroNote, homeHeroVisual } from "@/content/home";

const EASE = [0.16, 1, 0.3, 1] as const;

function MobileHeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.52, delay: 0.14, ease: EASE }}
      className="mt-10 grid gap-4 lg:hidden"
    >
      <div className="border border-white/10 bg-[color:var(--surface)] p-3">
        <div className="relative aspect-[16/11] overflow-hidden border border-white/10 bg-[#151412]">
          <Image
            src={homeHeroVisual.image}
            alt={homeHeroVisual.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-contain"
          />
        </div>

        <div className="mt-3">
          <p className="eyebrow text-[color:var(--accent)]">
            {homeHeroVisual.eyebrow}
          </p>
          <p className="mt-2 text-sm tracking-[-0.03em] text-[color:var(--muted)]">
            {homeHeroVisual.meta}
          </p>
        </div>
      </div>

      <div className="border border-white/10 bg-[color:var(--surface)] p-5">
        <div className="flex items-start justify-between gap-4">
          <p className="eyebrow text-[color:var(--accent)]">
            {homeHeroNote.eyebrow}
          </p>
          <span className="mt-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]" />
        </div>

        <h2 className="mt-5 text-[1.45rem] leading-[1.04] tracking-[-0.05em]">
          {homeHeroNote.title}
        </h2>

        <div className="mt-5 space-y-3 border-t border-white/10 pt-4">
          {homeHeroNote.lines.map((line) => (
            <div key={line} className="flex gap-3">
              <span className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]/75" />
              <p className="text-sm leading-7 text-[color:var(--muted)]">
                {line}
              </p>
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
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="eyebrow text-[color:var(--accent)]"
          >
            Designer / Front-end Developer
          </motion.p>
        </div>

        <div className="lg:col-span-7">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.56, ease: EASE }}
            className="display-title max-w-6xl"
          >
            Building websites that feel sharp, fast, and alive.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.52, delay: 0.05, ease: EASE }}
            className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2 md:gap-8"
          >
            <p className="body-muted max-w-md">
              I design and build premium websites, portfolios, and digital
              experiences with strong rhythm, clear structure, and tighter
              motion.
            </p>

            <p className="body-muted max-w-md">
              Focused on creative direction, interaction, and front-end craft
              using Next.js, Motion, and GSAP.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0, transformOrigin: "left center" }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="mt-10 h-px w-full max-w-[540px] bg-white/10 md:mt-14"
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.14, ease: EASE }}
            className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)] md:mt-5 md:gap-x-6 md:text-[11px]"
          >
            <span>Dark UI</span>
            <span>Motion Systems</span>
            <span>Frontend Craft</span>
          </motion.div>

          <MobileHeroVisual />
        </div>

        <div className="hidden lg:col-span-3 lg:flex lg:items-end lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.56, delay: 0.14, ease: EASE }}
            className="w-full max-w-[320px] space-y-4"
          >
            <div className="border border-white/10 bg-[color:var(--surface)] p-3">
              <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-[#151412]">
                <Image
                  src={homeHeroVisual.image}
                  alt={homeHeroVisual.alt}
                  fill
                  priority
                  sizes="320px"
                  className="object-contain md:object-cover"
                />
              </div>

              <div className="mt-3">
                <p className="eyebrow text-[color:var(--accent)]">
                  {homeHeroVisual.eyebrow}
                </p>
                <p className="mt-2 text-sm tracking-[-0.03em] text-[color:var(--muted)]">
                  {homeHeroVisual.meta}
                </p>
              </div>
            </div>

            <div className="w-full border border-white/10 bg-[color:var(--surface)] p-5">
              <div className="flex items-start justify-between gap-4">
                <p className="eyebrow text-[color:var(--accent)]">
                  {homeHeroNote.eyebrow}
                </p>
                <span className="mt-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]" />
              </div>

              <h2 className="mt-5 text-[1.75rem] leading-[1.02] tracking-[-0.05em]">
                {homeHeroNote.title}
              </h2>

              <div className="mt-6 space-y-4 border-t border-white/10 pt-5">
                {homeHeroNote.lines.map((line) => (
                  <div key={line} className="flex gap-3">
                    <span className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]/75" />
                    <p className="text-sm leading-7 text-[color:var(--muted)]">
                      {line}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
