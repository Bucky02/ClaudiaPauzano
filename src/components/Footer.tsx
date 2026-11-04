import { ArrowUp } from 'lucide-react';
import { site } from '@/config/site';
import SocialLinks from '@/components/SocialLinks';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-3xl">{site.name}</p>
          <p className="mt-2 text-sm text-paper/80">{site.role}</p>
          <p className="mt-1 text-sm text-paper/80">{site.location}</p>
        </div>

        <SocialLinks tone="dark" />
      </div>

      <div className="border-t border-paper/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-sm text-paper/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. {site.footer.rights}
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 self-start font-medium text-paper transition-colors hover:text-paper/70 sm:self-auto"
          >
            {site.footer.backToTop}
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
