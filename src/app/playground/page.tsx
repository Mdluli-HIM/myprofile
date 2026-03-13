import { BottomDock } from "@/components/layout/bottom-dock";
import { SiteHeader } from "@/components/layout/site-header";
import { PlaygroundHero } from "@/components/playground/playground-hero";
import { PlaygroundSections } from "@/components/playground/playground-sections";

export default function PlaygroundPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PlaygroundHero />
        <PlaygroundSections />
      </main>
      <BottomDock />
    </>
  );
}
