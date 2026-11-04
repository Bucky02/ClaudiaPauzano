import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { site } from '@/config/site';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled || menuOpen ? 'border-line bg-paper/95 shadow-sm backdrop-blur' : 'border-transparent bg-paper'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#top" aria-label={site.header.homeLabel} className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center bg-ink font-display text-base text-paper">
            {site.monogram}
          </span>
          <span className="hidden font-display text-lg sm:inline">{site.name}</span>
        </a>

        <nav aria-label="Navigazione principale" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative py-2 text-sm font-medium text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contatti"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-accent md:inline-flex"
          >
            {site.header.ctaLabel}
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? site.header.closeMenu : site.header.openMenu}
            className="inline-flex h-11 w-11 items-center justify-center md:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="menu-mobile" aria-label="Menu mobile" className="border-t border-line md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {site.nav.map((item) => (
              <li key={item.href} className="border-b border-line/60 last:border-b-0">
                <a href={item.href} onClick={closeMenu} className="block py-4 font-display text-2xl text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-6 pb-6">
            <a
              href="#contatti"
              onClick={closeMenu}
              className="inline-flex w-full items-center justify-center rounded-full bg-ink px-5 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-accent"
            >
              {site.header.ctaLabel}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
