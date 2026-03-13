import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "atelier-noir",
    title: "Atelier Noir",
    year: "2026",
    client: "Independent Fashion Label",
    role: ["Designer", "Frontend Developer"],
    services: ["Creative Direction", "UI Design", "Development"],
    tagline: "A cinematic brand world shaped through motion and restraint.",
    description:
      "Atelier Noir is a fashion-led digital experience designed to feel atmospheric, elegant, and deeply intentional. The project focuses on strong typography, cinematic pacing, refined layouts, and interaction details that support the identity instead of overpowering it.",
    preview:
      "https://i.pinimg.com/736x/a1/ce/9f/a1ce9f576d188c75e83801226c203d8f.jpg",
    href: "/projects/atelier-noir",
    featured: true,
    liveUrl: "https://example.com",
    story: [
      {
        eyebrow: "Challenge",
        title: "Creating presence without visual noise.",
        body: "The challenge was to build a fashion experience that felt emotionally rich without relying on clutter or spectacle. Every page needed to feel composed, slow, and deliberate while still communicating brand confidence.",
        image:
          "https://i.pinimg.com/736x/a1/ce/9f/a1ce9f576d188c75e83801226c203d8f.jpg",
        layout: "image-right",
      },
      {
        eyebrow: "Approach",
        title: "Typography, space, and motion as the main material.",
        body: "The system was shaped around large editorial type, quiet framing, and soft sequencing. Motion was treated as pacing rather than decoration, allowing transitions and reveals to carry the feeling of luxury.",
        image:
          "https://i.pinimg.com/1200x/7e/41/f5/7e41f533beb9edc24ff57bb4d7d9a7e6.jpg",
        layout: "image-left",
      },
      {
        eyebrow: "Outcome",
        title: "A brand world that feels immersive and expensive.",
        body: "The final result is a digital identity that feels composed and atmospheric, with each interaction reinforcing tone, confidence, and clarity. The experience feels curated rather than assembled.",
        image:
          "https://i.pinimg.com/736x/92/6c/f3/926cf3b070314da101b660cace362d06.jpg",
        layout: "image-right",
      },
    ],
  },
  {
    slug: "signal-studio",
    title: "Signal Studio",
    year: "2025",
    client: "Creative Studio",
    role: ["Creative Developer", "UI Designer"],
    services: ["Brand Experience", "Web Design", "Frontend"],
    tagline: "A portfolio system designed as a living digital identity.",
    description:
      "Signal Studio explores how a portfolio can feel like an evolving world rather than a static archive. The design system blends typography, restrained structure, curated imagery, and motion choreography to create an interface that feels both premium and personal.",
    preview:
      "https://i.pinimg.com/1200x/7e/41/f5/7e41f533beb9edc24ff57bb4d7d9a7e6.jpg",
    href: "/projects/signal-studio",
    featured: true,
    liveUrl: "https://example.com",
    story: [
      {
        eyebrow: "Challenge",
        title: "Making a portfolio feel authored, not templated.",
        body: "The site needed to communicate skill and taste immediately, while avoiding the usual portfolio patterns. It had to feel like a designed world with its own rhythm and point of view.",
        image:
          "https://i.pinimg.com/1200x/7e/41/f5/7e41f533beb9edc24ff57bb4d7d9a7e6.jpg",
        layout: "image-right",
      },
      {
        eyebrow: "Approach",
        title: "A restrained system built around interaction and pace.",
        body: "Instead of dense sections and obvious calls to action, the experience uses a project rail, editorial spacing, and cinematic transitions. The structure stays minimal so interaction can carry the identity.",
        image:
          "https://i.pinimg.com/736x/92/6c/f3/926cf3b070314da101b660cace362d06.jpg",
        layout: "image-left",
      },
      {
        eyebrow: "Outcome",
        title: "A portfolio that behaves like a curated exhibition.",
        body: "Each project feels distinct, yet the system stays coherent. The result is a portfolio that feels personal, premium, and memorable, with a browsing experience shaped more like storytelling than navigation.",
        image:
          "https://i.pinimg.com/736x/a1/ce/9f/a1ce9f576d188c75e83801226c203d8f.jpg",
        layout: "image-right",
      },
    ],
  },
  {
    slug: "northstar-lab",
    title: "Northstar Lab",
    year: "2025",
    client: "Product Design Practice",
    role: ["Designer", "Developer"],
    services: ["Interaction Design", "Motion Design", "Frontend"],
    tagline: "A clean but expressive web experience for a modern product team.",
    description:
      "Northstar Lab is built around clarity, rhythm, and visual calm. The project uses a minimal palette, spacious composition, and selective motion to create a premium product-facing presence that feels considered, modern, and editorial.",
    preview:
      "https://i.pinimg.com/736x/92/6c/f3/926cf3b070314da101b660cace362d06.jpg",
    href: "/projects/",
    featured: true,
    liveUrl: "https://example.com",
    story: [
      {
        eyebrow: "Challenge",
        title: "Balancing product clarity with visual personality.",
        body: "The project needed to present a disciplined product practice while still feeling expressive. It had to communicate precision and maturity without becoming sterile.",
        image:
          "https://i.pinimg.com/736x/92/6c/f3/926cf3b070314da101b660cace362d06.jpg",
        layout: "image-right",
      },
      {
        eyebrow: "Approach",
        title: "Editorial calm, modular structure, and selective motion.",
        body: "The layout uses generous spacing, deliberate alignment, and minimal chrome. Motion appears only where it strengthens hierarchy, continuity, and sense of polish.",
        image:
          "https://i.pinimg.com/736x/a1/ce/9f/a1ce9f576d188c75e83801226c203d8f.jpg",
        layout: "image-left",
      },
      {
        eyebrow: "Outcome",
        title: "A system that feels modern, measured, and premium.",
        body: "The end result is a studio presence that feels quietly confident. It supports product credibility while still carrying a refined design point of view.",
        image:
          "https://i.pinimg.com/1200x/7e/41/f5/7e41f533beb9edc24ff57bb4d7d9a7e6.jpg",
        layout: "image-right",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const currentIndex = projects.findIndex((project) => project.slug === slug);

  if (currentIndex === -1) return null;

  const nextIndex = (currentIndex + 1) % projects.length;
  return projects[nextIndex];
}
