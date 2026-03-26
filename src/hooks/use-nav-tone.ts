"use client";

import { useEffect, useState } from "react";

type NavTone = "dark" | "light";

export function useNavTone(defaultTone: NavTone = "dark", sampleY = 88) {
  const [tone, setTone] = useState<NavTone>(defaultTone);

  useEffect(() => {
    let frame = 0;

    function clampY(value: number): number {
      return Math.max(24, Math.min(value, window.innerHeight - 24));
    }

    function intersectsBand(
      el: HTMLElement,
      yBandTop: number,
      yBandBottom: number,
    ): { intersects: boolean; height: number } {
      const r = el.getBoundingClientRect();

      const withinBand = r.bottom >= yBandTop && r.top <= yBandBottom;
      if (!withinBand) return { intersects: false, height: 0 };

      const intersectionTop = Math.max(r.top, yBandTop);
      const intersectionBottom = Math.min(r.bottom, yBandBottom);
      const intersectionHeight = Math.max(
        0,
        intersectionBottom - intersectionTop,
      );

      return { intersects: true, height: intersectionHeight };
    }

    function getToneAtY(yValue: number): NavTone | null {
      const yBandTop = yValue - 6;
      const yBandBottom = yValue + 6;

      const containers =
        document.querySelectorAll<HTMLElement>("[data-nav-tone]");

      let best: { tone: NavTone; score: number } | null = null;

      for (const container of containers) {
        const toneAttr = container.dataset.navTone;
        if (toneAttr !== "light" && toneAttr !== "dark") continue;

        const { intersects, height } = intersectsBand(
          container,
          yBandTop,
          yBandBottom,
        );
        if (!intersects) continue;

        if (!best || height > best.score) {
          best = { tone: toneAttr, score: height };
        }
      }

      if (best) return best.tone;

      // Fallback: infer from `.theme-light` / `.theme-dark`.
      for (const el of document.querySelectorAll<HTMLElement>(".theme-light")) {
        const r = el.getBoundingClientRect();
        if (r.bottom >= yBandTop && r.top <= yBandBottom) return "light";
      }

      for (const el of document.querySelectorAll<HTMLElement>(".theme-dark")) {
        const r = el.getBoundingClientRect();
        if (r.bottom >= yBandTop && r.top <= yBandBottom) return "dark";
      }

      return null;
    }

    function updateTone() {
      if (frame) cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const yFromTop = sampleY >= 0 ? sampleY : window.innerHeight + sampleY;
        const yCenter = clampY(yFromTop);

        const tA = getToneAtY(yCenter);
        const tB = getToneAtY(clampY(yCenter - 72));
        const tC = getToneAtY(clampY(yCenter + 72));

        const tones = [tA, tB, tC].filter(
          (t): t is NavTone => t === "light" || t === "dark",
        );

        const lightCount = tones.filter((t) => t === "light").length;
        const darkCount = tones.length - lightCount;

        const nextTone: NavTone =
          tones.length === 0
            ? defaultTone
            : lightCount > darkCount
              ? "light"
              : "dark";

        setTone((current) => (current === nextTone ? current : nextTone));
      });
    }

    updateTone();

    window.addEventListener("scroll", updateTone, { passive: true });
    window.addEventListener("resize", updateTone);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateTone);
      window.removeEventListener("resize", updateTone);
    };
  }, [defaultTone, sampleY]);

  return tone;
}
