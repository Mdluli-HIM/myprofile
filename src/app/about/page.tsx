import { BottomDock } from "@/components/layout/bottom-dock";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutHero } from "@/components/about/about-hero";
import { AboutSections } from "@/components/about/about-sections";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="theme-dark">
          <AboutHero />
        </section>

        <section className="theme-light">
          <AboutSections />
        </section>
      </main>
      <BottomDock />
    </>
  );
}
