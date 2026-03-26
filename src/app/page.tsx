import { BottomDock } from "@/components/layout/bottom-dock";
import { SiteHeader } from "@/components/layout/site-header";
import { Hero } from "@/components/home/hero";
import { EditorialMiddle } from "@/components/home/editorial-middle";
import { HomeProjectReveal } from "@/components/home/home-project-reveal";
import { HomeScrollTransition } from "@/components/home/home-scroll-transition";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section data-nav-tone="dark" className="theme-dark relative z-0">
          <Hero />
        </section>

        <div data-nav-tone="light">
          <HomeScrollTransition>
            <EditorialMiddle />
          </HomeScrollTransition>
        </div>

        <section data-nav-tone="light" className="theme-light relative z-0">
          <HomeProjectReveal />
        </section>
      </main>
      <BottomDock />
    </>
  );
}
