import type { LucideIcon } from 'lucide-react';
import { Facebook, Globe, Instagram, Linkedin, Plane } from 'lucide-react';
import { site, type SocialIconId } from '@/config/site';

const ICONS: Record<SocialIconId, LucideIcon> = {
  instagram: Instagram,
  behance: Globe,
  linkedin: Linkedin,
  facebook: Facebook,
  weroad: Plane,
};

type SocialLinksProps = {
  tone?: 'light' | 'dark';
};

export default function SocialLinks({ tone = 'light' }: SocialLinksProps) {
  const toneClass =
    tone === 'light'
      ? 'border-line text-ink hover:border-ink hover:bg-ink hover:text-paper'
      : 'border-paper/30 text-paper hover:border-paper hover:bg-paper hover:text-ink';

  return (
    <ul className="flex flex-wrap gap-3">
      {site.socials.map((social) => {
        const Icon = ICONS[social.icon];
        return (
          <li key={social.label}>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              title={social.label}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 ${toneClass}`}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
