import { site } from '@/config/site';
import { images } from '@/config/images';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

export default function About() {
  return (
    <section id="chi-sono" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <figure className="relative">
            <div aria-hidden="true" className="absolute inset-0 -translate-x-4 translate-y-4 bg-mist" />
            <div className="relative aspect-[4/5] overflow-hidden bg-mist">
              <img
                src={images.profile.src}
                alt={images.profile.alt}
                width={1000}
                height={1250}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </figure>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <SectionHeading id="chi-sono-titolo" eyebrow={site.about.eyebrow} title={site.about.title} />
          </Reveal>

          <Reveal delay={100} className="mt-8 space-y-5 text-lg text-muted">
            {site.about.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal delay={150} className="mt-12">
            <dl className="grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
              {site.about.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-2 bg-paper p-5 md:p-6">
                  <dt className="order-2 text-sm text-muted">{stat.label}</dt>
                  <dd className="font-display text-2xl text-ink md:text-3xl">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={200} className="mt-12">
            <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted">{site.about.toolsTitle}</h3>
            <ul className="flex flex-wrap gap-2">
              {site.about.tools.map((tool) => (
                <li key={tool} className="rounded-full border border-line bg-paper px-4 py-1.5 text-sm text-ink">
                  {tool}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
