import { Logo } from "@/components/brand/Logo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Timeline } from "@/components/ui/Timeline";
import { ValueCard } from "@/components/ui/ValueCard";
import {
  getDevelopmentPlan,
  getGovernance,
  getSiteCopy,
  getValues,
} from "@/data/localized";
import { getMessages } from "@/i18n/messages";
import { localizedPath } from "@/i18n/path";
import { requireLocale } from "@/i18n/params";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/nosotros">) {
  const locale = await requireLocale(params);
  const messages = getMessages(locale);
  return pageMetadata({
    title: messages.about.title,
    description: messages.about.seo,
    path: "/nosotros",
    locale,
  });
}

export default async function NosotrosPage({ params }: PageProps<"/[lang]/nosotros">) {
  const locale = await requireLocale(params);
  const messages = getMessages(locale);
  const copy = getSiteCopy(locale);
  const values = getValues(locale);
  const governance = getGovernance(locale);
  const home = localizedPath(locale, "/");

  return (
    <>
      <section className="bg-navy py-16 text-ivory">
        <Container>
          <Breadcrumbs
            label={messages.breadcrumbs}
            tone="dark"
            items={[
              { href: home, label: messages.nav.home },
              { label: messages.about.title },
            ]}
          />
          <SectionHeader
            eyebrow={messages.about.title}
            title={messages.about.heading}
            description={messages.about.intro}
            tone="dark"
            titleAs="h1"
          />
        </Container>
      </section>

      <section id="historia" className="scroll-mt-28 py-16 lg:py-24">
        <Container className="grid items-start gap-10 lg:grid-cols-[auto_1fr]">
          <Logo size="page" className="justify-self-start" />
          <div className="max-w-3xl">
            <SectionHeader title={copy.history.title} />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              {copy.history.body.map((paragraph) => (
                <p key={paragraph.slice(0, 20)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="mision" className="scroll-mt-28 bg-surface py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow={messages.about.mission} title={copy.mission} />
          </div>
          <div id="vision" className="scroll-mt-28">
            <SectionHeader eyebrow={messages.about.vision} title={copy.vision} />
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow={messages.about.valuesEyebrow}
            title={messages.about.valuesTitle}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </Container>
      </section>

      <section id="gobernanza" className="bg-ivory py-16 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow={messages.about.govEyebrow}
            title={messages.about.govTitle}
          />
          <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {governance.map((item, index) => (
              <li
                key={item.title}
                className="rounded-2xl border border-navy/8 bg-white p-6"
              >
                <p className="text-sm text-wine">{index + 1}</p>
                <h3 className="mt-2 font-serif text-xl text-navy">{item.title}</h3>
                <p className="mt-2 text-muted">{item.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow={messages.about.planEyebrow}
            title={messages.about.planTitle}
            description={messages.about.planText}
          />
          <div className="mt-10">
            <Timeline years={getDevelopmentPlan(locale)} />
          </div>
        </Container>
      </section>

      <CTASection locale={locale} />
    </>
  );
}
