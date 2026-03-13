import { BottomDock } from "@/components/layout/bottom-dock";
import { SiteHeader } from "@/components/layout/site-header";
import { Hero } from "@/components/home/hero";
import { EditorialMiddle } from "@/components/home/editorial-middle";
import { HomeProjectReveal } from "@/components/home/home-project-reveal";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <EditorialMiddle />
        <HomeProjectReveal />
      </main>
      <BottomDock />
    </>
  );
}