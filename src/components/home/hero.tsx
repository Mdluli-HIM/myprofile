"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { homeHeroNote, homeHeroVisual } from "@/content/home";

const EASE = [0.22, 1, 0.36, 1] as const;

function MobileHeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.14, ease: EASE }}
      className="mt-10 grid gap-4 lg:hidden"
    >
      <div className="bg-[rgba(255,255,255,0.035)] p-3">
        <div className="relative aspect-[16/11] overflow-hidden bg-[#1b1916]">
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

      <div className="bg-[rgba(255,255,255,0.04)] p-5">
        <div className="flex items-start justify-between gap-4">
          <p className="eyebrow text-[color:var(--accent)]">
            {homeHeroNote.eyebrow}
          </p>
          <span className="mt-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]" />
        </div>

        <h2 className="mt-5 max-w-[16ch] text-[1.5rem] leading-[1.02] tracking-[-0.05em] text-[color:var(--foreground)]">
          {homeHeroNote.title}
        </h2>

        <div className="mt-5 space-y-3 pt-1">
          {homeHeroNote.lines.map((line) => (
            <div key={line} className="flex gap-3">
              <span className="mt-[0.48rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]/75" />
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
    <section className="site-container flex min-h-[86svh] items-end pt-28 pb-24 md:min-h-screen md:pt-32 md:pb-32">
      <div className="grid w-full gap-8 md:gap-10 lg:grid-cols-12">
        <div className="lg:col-span-2">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, ease: EASE }}
            className="eyebrow text-[color:var(--accent)]"
          >
         
          </motion.p>
        </div>

        <div className="lg:col-span-7">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="display-title max-w-6xl text-[color:var(--foreground)]"
          >
            Building premium websites that feel clear, sharp, and alive.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.56, delay: 0.06, ease: EASE }}
            className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2 md:gap-8"
          >
            <p className="max-w-md text-base leading-8 text-[color:var(--muted)]">
          
            </p>

            <p className="max-w-md text-base leading-8 text-[color:var(--muted)]">
             
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
            style={{ transformOrigin: "left center" }}
            className="mt-10 h-px w-full max-w-[560px] bg-white/12 md:mt-14"
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.16, ease: EASE }}
            className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)] md:mt-5 md:gap-x-6 md:text-[11px]"
          >
            <span>Premium Web</span>
            <span>Motion Systems</span>
            <span>Frontend Craft</span>
          </motion.div>

          <MobileHeroVisual />
        </div>

        <div className="hidden lg:col-span-3 lg:flex lg:items-end lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.14, ease: EASE }}
            className="w-full max-w-[336px] space-y-4"
          >
            <div className="bg-[rgba(255,255,255,0.035)] p-3">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#1b1916]">
                <Image
                  src={homeHeroVisual.image}
                  alt={homeHeroVisual.alt}
                  fill
                  priority
                  sizes="336px"
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

            <div className="bg-[rgba(255,255,255,0.04)] p-5">
              <div className="flex items-start justify-between gap-4">
                <p className="eyebrow text-[color:var(--accent)]">
                  {homeHeroNote.eyebrow}
                </p>
                <span className="mt-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]" />
              </div>

              <h2 className="mt-5 text-[1.8rem] leading-[1.02] tracking-[-0.05em] text-[color:var(--foreground)]">
                {homeHeroNote.title}
              </h2>

              <div className="mt-6 space-y-4">
                {homeHeroNote.lines.map((line) => (
                  <div key={line} className="flex gap-3">
                    <span className="mt-[0.48rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent)]/75" />
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
