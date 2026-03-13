import { notFound } from "next/navigation";
import { BottomDock } from "@/components/layout/bottom-dock";
import { SiteHeader } from "@/components/layout/site-header";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectStory } from "@/components/projects/project-story";
import { ProjectNext } from "@/components/projects/project-next";
import { getNextProject, getProjectBySlug, projects } from "@/content/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(project.slug);

  return (
    <>
      <SiteHeader />
      <main>
        <ProjectHero project={project} />
        <ProjectStory project={project} />
        {nextProject ? <ProjectNext project={nextProject} /> : null}
      </main>
      <BottomDock />
    </>
  );
}
