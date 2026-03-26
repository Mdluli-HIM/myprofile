import { BottomDock } from "@/components/layout/bottom-dock";
import { SiteHeader } from "@/components/layout/site-header";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactSections } from "@/components/contact/contact-sections";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section data-nav-tone="dark" className="theme-dark">
          <ContactHero />
        </section>

        <section data-nav-tone="light" className="theme-light">
          <ContactSections />
        </section>
      </main>
      <BottomDock />
    </>
  );
}
