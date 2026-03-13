"use client";

import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { usePageTransition } from "@/components/motion/page-transition-provider";

type TransitionLinkProps = {
  href: string;
  label?: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

export function TransitionLink({
  href,
  label,
  className,
  children,
  onClick,
}: TransitionLinkProps) {
  const { navigate, isTransitioning } = usePageTransition();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();
    onClick?.();
    navigate(href, label);
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(className, isTransitioning && "pointer-events-none")}
    >
      {children}
    </a>
  );
}
