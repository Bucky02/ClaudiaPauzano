import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { site } from '@/config/site';
import { images } from '@/config/images';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import SocialLinks from '@/components/SocialLinks';

export default function Contact() {
  const { contact } = site;

  const details = [
    { icon: Mail, label: contact.labels.email, value: contact.email, href: contact.emailHref },
    { icon: Phone, label: contact.labels.phone, value: contact.phone, href: contact.phoneHref },
    { icon: MapPin, label: contact.labels.location, value: site.location, href: undefined },
  ];

  return (
    <section id="contatti" className="scroll-mt-24 bg-mist py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <SectionHeading id="contatti-titolo" eyebrow={contact.eyebrow} title={contact.title} />
            <p className="mt-6 max-w-xl text-lg text-muted">{contact.text}</p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={contact.emailHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-accent"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {contact.ctaEmail}
              </a>
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink px-7 py-3.5 text-sm font-medium text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {contact.ctaWhatsapp}
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6">
            <div className="relative overflow-hidden bg-paper">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={images.contact.src}
                  alt={images.contact.alt}
                  width={1600}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <ul className="divide-y divide-line">
                {details.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-center gap-4 p-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-mist text-accent">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wider text-muted">{label}</p>
                      {href ? (
                        <a href={href} className="break-words text-base text-ink underline-offset-4 hover:underline">
                          {value}
                        </a>
                      ) : (
                        <p className="text-base text-ink">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <SocialLinks />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
