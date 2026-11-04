import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Camera,
  Film,
  Megaphone,
  Palette,
  Plane,
} from "lucide-react";
import { site, type ServiceItem } from "@/config/site";
import { images } from "@/config/images";

const ICONS: Record<ServiceItem["icon"], LucideIcon> = {
  palette: Palette,
  camera: Camera,
  film: Film,
  megaphone: Megaphone,
  plane: Plane,
};

export default function Hero() {
  const [firstName, ...rest] = site.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-14 pt-8 md:pt-12 lg:grid-cols-12 lg:gap-14">
        <div className="animate-fade-up lg:col-span-7">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            {site.hero.eyebrow}
          </p>
          <h1 className="text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] tracking-tight">
            <span className="block">{firstName}</span>
            <span className="block italic text-accent">{lastName}</span>
          </h1>
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.15em] text-ink md:text-base">
            {site.role}
          </p>
          <p className="mt-3 font-display text-2xl italic text-muted md:text-3xl">
            {site.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-accent"
            >
              {site.hero.primaryCta}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#contatti"
              className="inline-flex items-center gap-2 rounded-full border border-ink px-7 py-3.5 text-sm font-medium text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
            >
              {site.hero.secondaryCta}
            </a>
          </div>
        </div>

        <figure
          className="animate-fade-up relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none"
          style={{ animationDelay: "150ms" }}
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-mist lg:aspect-auto lg:h-[540px]">
            <img
              src={images.hero.src}
              alt={images.hero.alt}
              width={940}
              height={1175}
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <figcaption className="absolute -bottom-3 left-5 bg-paper px-4 py-2 text-sm text-ink shadow-sm">
            {site.hero.imageCaption}
          </figcaption>
        </figure>
      </div>

      {/* Competenze e lingue subito visibili */}
      <div className="border-t border-line bg-mist">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-8">
            <h2 className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-muted">
              {site.hero.servicesLabel}
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {site.services.items.map((service) => {
                const Icon = ICONS[service.icon];
                return (
                  <li
                    key={service.title}
                    className="flex h-full flex-col gap-3 border border-line bg-paper p-4"
                  >
                    <span className="flex h-9 w-9 items-center justify-center bg-ink text-paper">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium leading-snug text-ink">
                      {service.title}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h2 className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-muted">
              {site.hero.languagesLabel}
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-3">
              {site.languages.items.map((language) => (
                <li
                  key={language.name}
                  className="border border-line bg-paper p-4"
                >
                  <span className="block font-display text-xl text-ink">
                    {language.name}
                  </span>
                  <span className="mt-0.5 block text-sm text-muted">
                    {language.level}
                  </span>
                  <span aria-hidden="true" className="mt-3 flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 w-1.5 rounded-full ${i < language.dots ? "bg-accent" : "bg-line"}`}
                      />
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
