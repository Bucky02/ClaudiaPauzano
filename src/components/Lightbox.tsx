import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, X } from 'lucide-react';
import { site } from '@/config/site';
import { getCategoryLabel, type Project } from '@/config/portfolio';

type LightboxProps = {
  project: Project;
  onClose: () => void;
};

export default function Lightbox({ project, onClose }: LightboxProps) {
  const [index, setIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const total = project.images.length;
  const current = project.images[index];
  const titleId = `lightbox-title-${project.id}`;

  useEffect(() => {
    const returnFocusTo = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      returnFocusTo?.focus();
    };
  }, []);

  useEffect(() => {
    const go = (delta: number) => setIndex((i) => (i + delta + total) % total);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft' && total > 1) go(-1);
      if (event.key === 'ArrowRight' && total > 1) go(1);
      if (event.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>('button, a[href]');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose, total]);

  const go = (delta: number) => setIndex((i) => (i + delta + total) % total);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm animate-fade-in"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-y-auto bg-paper shadow-2xl animate-fade-up"
      >
        <div className="flex items-start justify-between gap-4 border-b border-line p-5 md:p-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              {getCategoryLabel(project.category)} · {project.year}
            </p>
            <h2 id={titleId} className="mt-1 text-2xl md:text-3xl">
              {project.title}
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={site.ui.close}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-line transition-colors hover:border-ink hover:bg-ink hover:text-paper"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="relative bg-mist">
          <img
            key={current.src}
            src={current.src}
            alt={current.alt}
            className="mx-auto max-h-[60vh] w-full object-contain animate-fade-in"
          />

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label={site.ui.previous}
                className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-paper text-ink shadow transition-colors hover:bg-ink hover:text-paper"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label={site.ui.next}
                className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-paper text-ink shadow transition-colors hover:bg-ink hover:text-paper"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </>
          )}
        </div>

        {total > 1 && (
          <div className="flex gap-3 overflow-x-auto border-b border-line p-4">
            {project.images.map((image, imageIndex) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setIndex(imageIndex)}
                aria-label={`${site.ui.thumbnail} ${imageIndex + 1}`}
                aria-current={imageIndex === index}
                className={`h-16 w-20 shrink-0 overflow-hidden border-2 transition-colors ${
                  imageIndex === index ? 'border-accent' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={image.src} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-4 p-5 md:p-6">
          <p className="max-w-2xl text-base text-muted">{project.description}</p>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={site.ui.externalLink}
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline"
            >
              {site.ui.externalLink}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
