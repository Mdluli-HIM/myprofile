import { BottomDock } from "@/components/layout/bottom-dock";
import { SiteHeader } from "@/components/layout/site-header";
import { WorkHero } from "@/components/work/work-hero";
import { WorkHorizontalGallery } from "@/components/work/work-horizontal-gallery";

export default function WorkPage() {
  return (
    <>
      <SiteHeader />
      <main data-nav-tone="light" className="theme-light">
        <WorkHero />
        <WorkHorizontalGallery />
      </main>
      <BottomDock />
    </>
  );
}
