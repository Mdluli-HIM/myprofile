"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type Aspect = "16/10" | "16/9" | "16/12" | "16/11" | "4/5";
type Fit = "cover" | "contain";

type ProjectMediaFrameProps = {
  image: string;
  alt: string;
  eyebrow?: string;
  title?: string;
  meta?: string;
  aspect?: Aspect;
  mobileAspect?: Aspect;
  sizes: string;
  priority?: boolean;
  interactive?: boolean;
  className?: string;
  variant?: "default" | "minimal";
  fit?: Fit;
  mobileFit?: Fit;
};

const responsiveAspectClassMap: Record<string, string> = {
  "16/10|16/10": "aspect-[16/10]",
  "16/9|16/9": "aspect-[16/9]",
  "16/12|16/12": "aspect-[16/12]",
  "16/11|16/11": "aspect-[16/11]",
  "4/5|4/5": "aspect-[4/5]",
  "16/9|16/10": "aspect-[16/9] md:aspect-[16/10]",
  "16/12|16/10": "aspect-[16/12] md:aspect-[16/10]",
  "16/11|16/10": "aspect-[16/11] md:aspect-[16/10]",
  "4/5|16/10": "aspect-[4/5] md:aspect-[16/10]",
  "16/11|4/5": "aspect-[16/11] md:aspect-[4/5]",
  "16/12|4/5": "aspect-[16/12] md:aspect-[4/5]",
  "16/10|4/5": "aspect-[16/10] md:aspect-[4/5]",
  "16/9|4/5": "aspect-[16/9] md:aspect-[4/5]",
};

function getFitClasses(mobileFit: Fit, fit: Fit) {
  const mobileClass =
    mobileFit === "contain" ? "object-contain" : "object-cover";
  const desktopClass =
    fit === "contain" ? "md:object-contain" : "md:object-cover";
  return `${mobileClass} ${desktopClass}`;
}

export function ProjectMediaFrame({
  image,
  alt,
  eyebrow,
  title,
  meta,
  aspect = "16/10",
  mobileAspect,
  sizes,
  priority = false,
  interactive = false,
  className,
  variant = "default",
  fit = "cover",
  mobileFit = "contain",
}: ProjectMediaFrameProps) {
  const isMinimal = variant === "minimal";
  const aspectKey = `${mobileAspect ?? aspect}|${aspect}`;
  const aspectClasses = responsiveAspectClassMap[aspectKey] ?? "aspect-[16/10]";

  return (
    <div
      className={cn(
        "overflow-hidden border border-white/10 bg-[color:var(--surface)]",
        className,
      )}
    >
      <div
        className={cn("relative overflow-hidden bg-[#151412]", aspectClasses)}
      >
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn(
            "transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
            getFitClasses(mobileFit, fit),
            interactive && fit === "cover" && "md:group-hover:scale-[1.03]",
          )}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-transparent" />
      </div>

      {isMinimal ? (
        <div className="flex items-center justify-between gap-4 border-t border-white/10 px-4 py-3 md:px-5">
          <div className="min-w-0">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          </div>

          {meta ? (
            <p className="shrink-0 text-[10px] uppercase tracking-[0.18em] text-[color:var(--muted)] md:text-xs">
              {meta}
            </p>
          ) : null}
        </div>
      ) : (
        <div className="grid gap-3 border-t border-white/10 px-4 py-4 sm:grid-cols-[1fr_auto] sm:items-end md:px-5 md:py-5">
          <div>
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            {title ? (
              <p className="mt-2 text-base tracking-[-0.04em] md:text-lg">
                {title}
              </p>
            ) : null}
          </div>

          {meta ? (
            <p className="text-sm text-[color:var(--muted)] sm:text-right">
              {meta}
            </p>
          ) : null}
        </div>
      )}
    </div>
  );
}
