type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  id?: string;
};

export default function SectionHeading({ eyebrow, title, intro, id }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 id={id} className="text-4xl md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {intro && <p className="mt-6 text-lg text-muted">{intro}</p>}
    </div>
  );
}
