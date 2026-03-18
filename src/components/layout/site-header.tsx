import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="site-container pt-6">
        <div className="relative border-b border-white/10 pb-5">
          <Link href="/" className="text-sm font-medium tracking-[-0.03em]">
            Mpho Marcus Mdluli
          </Link>

          <p className="absolute right-0 top-0 hidden text-[11px] uppercase tracking-[0.24em] text-[color:var(--accent)] md:block">
            Designer / Front-end Developer
          </p>
        </div>
      </div>
    </header>
  );
}
