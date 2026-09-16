import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { Icon } from "@/lib/icons";
import { getProgram, getProgramSlugs, getPrograms } from "@/data/localized";
import { locales } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { localizedPath } from "@/i18n/path";
import { requireLocale } from "@/i18n/params";
import { pageMetadata } from "@/lib/seo";
import { getCtas } from "@/i18n/navigation";

type ProgramPageProps = PageProps<"/[lang]/programas/[slug]">;

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    getProgramSlugs().map((slug) => ({ lang, slug })),
  );
}

export async function generateMetadata({ params }: ProgramPageProps) {
  const locale = await requireLocale(params);
  const { slug } = await params;
  const program = getProgram(locale, slug);
  if (!program) {
    const messages = getMessages(locale);
    return pageMetadata({
      title: messages.programsPage.title,
      description: messages.programsPage.heading,
      path: "/programas",
      locale,
    });
  }
  return pageMetadata({
    title: program.name,
    description: program.seoDescription,
    path: `/programas/${program.slug}`,
    locale,
  });
}

export default async function ProgramPage({ params }: ProgramPageProps) {
  const locale = await requireLocale(params);
  const { slug } = await params;
  const program = getProgram(locale, slug);
  if (!program) notFound();

  const messages = getMessages(locale);
  const ctas = getCtas(locale);
  const programs = getPrograms(locale);
  const related = programs
    .filter((item) => item.family === program.family && item.slug !== program.slug)
    .slice(0, 3);
  const status = program.status ?? "active";

  return (
    <>
      <section className="bg-ivory py-12 lg:py-16">
        <Container>
          <Breadcrumbs
            label={messages.breadcrumbs}
            items={[
              { href: localizedPath(locale, "/"), label: messages.nav.home },
              { href: localizedPath(locale, "/programas"), label: messages.nav.programs },
              { label: program.name },
            ]}
          />
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex size-14 items-center justify-center rounded-full bg-gold/15 text-navy">
                  <Icon name={program.icon} size={28} />
                </div>
                {program.status && program.status !== "active" ? (
                  <Badge tone="gold">{messages.programCard.status[status]}</Badge>
                ) : null}
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-wine">
                {program.subtitle}
              </p>
              <h1 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">
                {program.name}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                {program.objective}
              </p>
            </div>
            <Button href={ctas.primary.href}>{ctas.primary.label}</Button>
          </div>
        </Container>
      </section>

      {program.highlight ? (
        <section className="bg-navy py-10 text-ivory">
          <Container>
            <blockquote className="max-w-3xl font-serif text-2xl text-light-gold sm:text-3xl">
              {program.highlight}
            </blockquote>
          </Container>
        </section>
      ) : null}

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <h2 className="font-serif text-2xl text-navy">
              {messages.programCard.activities}
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {program.activities.map((activity) => (
                <li
                  key={activity}
                  className="rounded-xl border border-navy/8 bg-white px-4 py-3 text-navy"
                >
                  {activity}
                </li>
              ))}
            </ul>

            {program.extraSections?.map((section) => (
              <section key={section.title} className="mt-12">
                <h2 className="font-serif text-2xl text-navy">{section.title}</h2>
                {section.description ? (
                  <p className="mt-3 leading-relaxed text-muted">
                    {section.description}
                  </p>
                ) : null}
                {section.items ? (
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-2 text-muted">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.note ? (
                  <p className="mt-5 rounded-2xl bg-gold/10 px-4 py-3 text-sm text-navy">
                    {section.note}
                  </p>
                ) : null}
              </section>
            ))}
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-navy/8 bg-white p-6">
              <h2 className="font-serif text-xl text-navy">
                {messages.programCard.audience}
              </h2>
              <ul className="mt-4 space-y-2">
                {program.audience.map((item) => (
                  <li key={item} className="text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {related.length > 0 ? (
              <div className="rounded-2xl border border-navy/8 bg-white p-6">
                <h2 className="font-serif text-xl text-navy">
                  {messages.programCard.related}
                </h2>
                <ul className="mt-4 space-y-3">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Button
                        href={localizedPath(locale, `/programas/${item.slug}`)}
                        variant="outline"
                        size="sm"
                      >
                        {item.name}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </Container>
      </section>
      <CTASection locale={locale} />
    </>
  );
}
