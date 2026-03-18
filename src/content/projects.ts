import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "high-end-visuals",
    title: "High End Visuals",
    year: "2026",
    client: "Luxury Photography Studio",
    role: ["Designer", "Frontend Developer"],
    services: [
      "Creative Direction",
      "UI Design",
      "Frontend Development",
      "Interaction Design",
    ],
    tagline:
      "A monochrome portfolio experience shaped through editorial rhythm and cinematic restraint.",
    description:
      "High End Visuals is a premium photography portfolio designed to present image-making as atmosphere, authorship, and visual identity. The project blends large editorial typography, minimal composition, smooth transitions, interactive galleries, and refined motion to create a website that feels curated, immersive, and distinctly high-end.",
    preview: "/images/projects/preview.png",
    href: "/projects/high-end-visuals",
    featured: true,
    liveUrl: "https://studio-v1-blond.vercel.app/",
    story: [
      {
        eyebrow: "Challenge",
        title:
          "Designing a photography portfolio that feels premium, not generic.",
        body: "The challenge was to create a photography-led website that felt editorial, modern, and luxurious without falling into the usual portfolio patterns. The experience needed to showcase imagery beautifully while still feeling immersive, minimal, and strong enough to reflect a high-end creative studio.",
        image: "/images/projects/preview.png",
        layout: "image-right",
      },
      {
        eyebrow: "Approach",
        title:
          "Using typography, motion, and image rhythm as the visual system.",
        body: "The design was built around bold monochrome composition, oversized editorial type, cinematic transitions, and structured spacing. Instead of relying on visual clutter, the site uses pacing, contrast, hover interactions, filters, lightbox galleries, and subtle motion details to create a feeling of control and elegance.",
        image: "/images/projects/preview4.png",
        layout: "image-left",
      },
      {
        eyebrow: "Outcome",
        title: "A curated digital presence that elevates the studio’s work.",
        body: "The final result is a polished portfolio system with a strong homepage, interactive archive, detailed project views, refined mobile navigation, and a premium visual tone throughout. The experience feels less like a standard website and more like a branded photographic world designed to leave a lasting impression.",
        image: "/images/projects/lerato1.png",
        layout: "image-right",
      },
    ],
  },
  {
    slug: "cathy-dolle-portfolio",
    title: "Cathy Dolle Portfolio",
    year: "2026",
    client: "Cathy Dolle",
    role: ["Designer", "Frontend Developer"],
    services: [
      "Creative Direction",
      "UI Design",
      "Frontend Development",
      "Interaction Design",
    ],
    tagline:
      "A photobook-inspired portfolio experience shaped through editorial composition, monochrome imagery, and premium interaction.",
    description:
      "Cathy Dolle Portfolio is a high-end visual portfolio website designed to feel like a digital photobook rather than a conventional personal site. The project combines editorial layouts, monochrome image treatment, immersive gallery navigation, cinematic transitions, refined typography, and subtle purple-accented detailing to create a portfolio that feels curated, minimal, and distinctly premium.",
    preview: "/images/projects/lerato 1.png",
    href: "/projects/cathy-dolle-portfolio",
    featured: true,
    liveUrl: "https://lerato-gamma.vercel.app/",
    story: [
      {
        eyebrow: "Challenge",
        title:
          "Creating a portfolio that feels like a premium visual publication.",
        body: "The challenge was to move away from the structure of a standard portfolio and build something that felt more immersive, editorial, and memorable. The website needed to present work with strong visual impact while still feeling minimal, controlled, and sophisticated across desktop and mobile.",
        image: "/images/projects/lerato4.png",
        layout: "image-right",
      },
      {
        eyebrow: "Approach",
        title:
          "Using a photobook system, immersive galleries, and restrained motion.",
        body: "The design was developed as a complete visual system inspired by printed photobooks and luxury portfolios. Large image compositions, structured white space, monochrome treatments, custom page layouts, subtle purple accents, gallery interactions, lightbox viewing, and smooth motion were used to create a sense of atmosphere and polish without adding clutter.",
        image: "/images/projects/lerato2.png",
        layout: "image-left",
      },
      {
        eyebrow: "Outcome",
        title:
          "A distinctive portfolio experience that feels curated and high-end.",
        body: "The final result is a refined portfolio platform with a strong homepage, custom project pages, a free-pan gallery experience, responsive mobile behavior, elegant transitions, and a clear art direction throughout. Instead of feeling like a template-based website, the project reads as a branded digital world with its own identity and presence.",
        image: "/images/projects/lerato3.png",
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
