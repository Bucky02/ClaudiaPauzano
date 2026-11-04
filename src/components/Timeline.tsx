import { site } from '@/config/site';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

export default function Timeline() {
  return (
    <section id="percorso" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <SectionHeading id="percorso-titolo" eyebrow={site.timeline.eyebrow} title={site.timeline.title} />
        </Reveal>

        <ol className="relative lg:col-span-7 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-line">
          {site.timeline.items.map((item, index) => (
            <li key={`${item.title}-${index}`} className="relative pb-12 pl-12 last:pb-0">
              <Reveal delay={index * 80}>
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-paper"
                />
                <p className="text-sm font-medium uppercase tracking-[0.15em] text-accent">{item.period}</p>
                <h3 className="mt-2 text-2xl md:text-3xl">{item.title}</h3>
                <p className="mt-1 text-base font-medium text-ink">{item.place}</p>
                {item.description && <p className="mt-3 max-w-xl text-muted">{item.description}</p>}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
