import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatCard } from "@/components/ui/StatCard";
import { FAQ } from "@/components/ui/FAQ";
import {
  getFaqs,
  getImpact,
  getTransparencyCommitments,
} from "@/data/localized";
import { getMessages } from "@/i18n/messages";
import { localizedPath } from "@/i18n/path";
import { requireLocale } from "@/i18n/params";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/transparencia">) {
  const locale = await requireLocale(params);
  const messages = getMessages(locale);
  return pageMetadata({
    title: messages.transparencyPage.title,
    description: messages.transparencyPage.seo,
    path: "/transparencia",
    locale,
  });
}

export default async function TransparenciaPage({
  params,
}: PageProps<"/[lang]/transparencia">) {
  const locale = await requireLocale(params);
  const messages = getMessages(locale);
  const commitments = getTransparencyCommitments(locale);
  const { note, stats } = getImpact(locale);

  return (
    <>
      <section className="bg-navy py-16 text-ivory">
        <Container>
          <Breadcrumbs
            label={messages.breadcrumbs}
            tone="dark"
            items={[
              { href: localizedPath(locale, "/"), label: messages.nav.home },
              { label: messages.transparencyPage.title },
            ]}
          />
          <SectionHeader
            eyebrow={messages.transparencyPage.eyebrow}
            title={messages.transparencyPage.heading}
            description={messages.transparencyPage.text}
            tone="dark"
            titleAs="h1"
          />
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <h2 className="font-serif text-2xl text-navy">
            {messages.transparencyPage.commitment}
          </h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {commitments.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-navy/8 bg-white px-5 py-4 text-navy"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-surface py-16">
        <Container>
          <SectionHeader title={messages.transparencyPage.indicators} description={note} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl">
          <h2 className="mb-6 font-serif text-2xl text-navy">
            {messages.transparencyPage.faq}
          </h2>
          <FAQ items={getFaqs(locale)} />
        </Container>
      </section>
      <CTASection locale={locale} />
    </>
  );
}
