import { CTASection } from "@/components/ui/CTASection";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProgramGrid } from "@/components/programs/ProgramGrid";
import { getProgramsIntro } from "@/data/localized";
import { getMessages } from "@/i18n/messages";
import { requireLocale } from "@/i18n/params";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/programas">) {
  const locale = await requireLocale(params);
  const messages = getMessages(locale);
  return pageMetadata({
    title: messages.programsPage.title,
    description: getProgramsIntro(locale),
    path: "/programas",
    locale,
  });
}

export default async function ProgramasPage({ params }: PageProps<"/[lang]/programas">) {
  const locale = await requireLocale(params);
  const messages = getMessages(locale);

  return (
    <>
      <section className="bg-navy py-16 text-ivory lg:py-20">
        <Container>
          <SectionHeader
            eyebrow={messages.programsPage.eyebrow}
            title={messages.programsPage.heading}
            description={getProgramsIntro(locale)}
            tone="dark"
            titleAs="h1"
          />
        </Container>
      </section>
      <section className="py-16 lg:py-24">
        <Container>
          <ProgramGrid locale={locale} />
        </Container>
      </section>
      <CTASection locale={locale} />
    </>
  );
}
