import { BottomDock } from "@/components/layout/bottom-dock";
import { SiteHeader } from "@/components/layout/site-header";
import { WorkHero } from "@/components/work/work-hero";
import { WorkSections } from "@/components/work/work-sections";

export default function WorkPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <WorkHero />
        <WorkSections />
      </main>
      <BottomDock />
    </>
  );
}
