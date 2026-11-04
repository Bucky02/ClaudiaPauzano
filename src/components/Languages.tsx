import { site } from '@/config/site';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const MAX_DOTS = 5;

export default function Languages() {
  return (
    <section id="lingue" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionHeading id="lingue-titolo" eyebrow={site.languages.eyebrow} title={site.languages.title} />
            <p className="mt-6 text-lg text-muted">{site.languages.note}</p>
          </Reveal>

          <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:col-span-7">
            {site.languages.items.map((language, index) => (
              <li key={language.name} className="bg-paper">
                <Reveal delay={index * 80} className="h-full">
                  <div className="flex h-full flex-col justify-between gap-8 p-8 transition-colors duration-500 hover:bg-mist">
                    <div>
                      <p className="text-sm text-muted">{language.level}</p>
                      <h3 className="mt-2 text-3xl">{language.name}</h3>
                    </div>
                    <div
                      role="img"
                      aria-label={`Livello ${language.dots} su ${MAX_DOTS}`}
                      className="flex gap-2"
                    >
                      {Array.from({ length: MAX_DOTS }, (_, dot) => (
                        <span
                          key={dot}
                          aria-hidden="true"
                          className={`h-2.5 w-8 transition-colors duration-500 ${
                            dot < language.dots ? 'bg-accent' : 'bg-line'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
