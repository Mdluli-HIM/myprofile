export type ProjectStorySection = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  layout?: "image-left" | "image-right";
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  client?: string;
  role: string[];
  services: string[];
  tagline: string;
  description: string;
  preview: string;
  href: string;
  featured?: boolean;
  liveUrl?: string;
  story: ProjectStorySection[];
};
