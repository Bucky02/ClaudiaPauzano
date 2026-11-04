import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { site } from '@/config/site';
import { getCategoryLabel, portfolioCategories, projects, type Project } from '@/config/portfolio';
import Lightbox from '@/components/Lightbox';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const RATIO_CLASS: Record<Project['ratio'], string> = {
  portrait: 'aspect-[4/5]',
  landscape: 'aspect-[4/3]',
};

export default function Portfolio() {
  const [filter, setFilter] = useState<string>('tutti');
  const [selected, setSelected] = useState<Project | null>(null);

  const visibleProjects = filter === 'tutti' ? projects : projects.filter((project) => project.category === filter);

  return (
    <section id="portfolio" className="scroll-mt-24 bg-mist py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            id="portfolio-titolo"
            eyebrow={site.portfolio.eyebrow}
            title={site.portfolio.title}
            intro={site.portfolio.intro}
          />
        </Reveal>

        <div role="group" aria-label={site.ui.filtersLabel} className="mt-12 flex flex-wrap gap-2">
          {portfolioCategories.map((category) => {
            const active = filter === category.id;
            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(category.id)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                  active
                    ? 'border-ink bg-ink text-paper'
                    : 'border-line bg-paper text-ink hover:border-ink'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <ul key={filter} className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {visibleProjects.map((project, index) => (
            <li
              key={project.id}
              className="mb-6 break-inside-avoid animate-fade-up"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <button
                type="button"
                onClick={() => setSelected(project)}
                aria-label={`${site.ui.openProject}: ${project.title}`}
                className="group relative block w-full overflow-hidden bg-paper text-left"
              >
                <div className={`${RATIO_CLASS[project.ratio]} overflow-hidden`}>
                  <img
                    src={project.cover.src}
                    alt={project.cover.alt}
                    width={940}
                    height={650}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <span className="absolute left-4 top-4 bg-paper px-3 py-1 text-xs font-medium uppercase tracking-wider text-ink">
                  {getCategoryLabel(project.category)}
                </span>

                <span className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/20 to-transparent p-6 transition-colors duration-500 group-hover:from-ink">
                  <span className="flex items-end justify-between gap-4">
                    <span>
                      <span className="block text-sm text-paper/80">{project.year}</span>
                      <span className="mt-1 block font-display text-2xl text-paper">{project.title}</span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-6 w-6 shrink-0 text-paper transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>

        <Reveal className="mt-16">
          <div className="flex flex-col items-start justify-between gap-6 border-t border-line pt-10 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl">{site.portfolio.behance.title}</h3>
              <p className="mt-2 max-w-xl text-muted">{site.portfolio.behance.text}</p>
            </div>
            <a
              href={site.portfolio.behance.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink px-7 py-3.5 text-sm font-medium text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
            >
              {site.portfolio.behance.cta}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>

      {selected && <Lightbox project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
