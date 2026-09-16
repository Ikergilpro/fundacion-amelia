import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { PartnerLogo } from "@/components/ui/PartnerLogo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { strategicAlly } from "@/data/allies";
import { getCollaborationWays } from "@/data/localized";
import { getMessages } from "@/i18n/messages";
import { localizedPath } from "@/i18n/path";
import { requireLocale } from "@/i18n/params";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/donantes">) {
  const locale = await requireLocale(params);
  const messages = getMessages(locale);
  return pageMetadata({
    title: messages.donorsPage.title,
    description: messages.donorsPage.seo,
    path: "/donantes",
    locale,
  });
}

const logoSlots = Array.from({ length: 7 }, (_, index) => index);

export default async function DonantesPage({ params }: PageProps<"/[lang]/donantes">) {
  const locale = await requireLocale(params);
  const messages = getMessages(locale);
  const collaborationWays = getCollaborationWays(locale);

  return (
    <>
      <section className="bg-navy py-16 text-ivory">
        <Container>
          <Breadcrumbs
            label={messages.breadcrumbs}
            tone="dark"
            items={[
              { href: localizedPath(locale, "/"), label: messages.nav.home },
              { label: messages.nav.donors },
            ]}
          />
          <SectionHeader
            eyebrow={messages.nav.donors}
            title={messages.donorsPage.heading}
            description={messages.donorsPage.text}
            tone="dark"
            titleAs="h1"
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#ser-aliado" variant="gold">
              {messages.donorsPage.becomeAlly}
            </Button>
            <Button href={localizedPath(locale, "/contacto?motivo=fundacion")} variant="light">
              {messages.donorsPage.dossier}
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeader title={messages.donorsPage.ways} />
          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {collaborationWays.map((item) => (
              <li key={item.title}>
                <Card className="h-full">
                  <h2 className="font-serif text-xl text-navy">{item.title}</h2>
                  <p className="mt-2 text-muted">{item.description}</p>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="empresas" className="scroll-mt-28 bg-surface py-16">
        <Container>
          <SectionHeader
            title={messages.donorsPage.companiesTitle}
            description={messages.donorsPage.companiesText}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <PartnerLogo name={strategicAlly.name} href={strategicAlly.href} />
            {logoSlots.map((slot) => (
              <PartnerLogo key={slot} placeholder={messages.partnerPlaceholder} />
            ))}
          </div>
        </Container>
      </section>

      <section id="ser-aliado" className="scroll-mt-28 py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            title={messages.donorsPage.talkTitle}
            description={messages.donorsPage.talkText}
          />
          <ContactForm locale={locale} variant="ally" />
        </Container>
      </section>
    </>
  );
}
