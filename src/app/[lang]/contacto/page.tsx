import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getMessages } from "@/i18n/messages";
import { localizedPath } from "@/i18n/path";
import { requireLocale } from "@/i18n/params";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/contacto">) {
  const locale = await requireLocale(params);
  const messages = getMessages(locale);
  return pageMetadata({
    title: messages.contactPage.title,
    description: messages.contactPage.seo,
    path: "/contacto",
    locale,
  });
}

export default async function ContactoPage({
  params,
  searchParams,
}: PageProps<"/[lang]/contacto">) {
  const locale = await requireLocale(params);
  const messages = getMessages(locale);
  const query = await searchParams;
  const motivo = typeof query.motivo === "string" ? query.motivo : undefined;

  return (
    <>
      <section className="bg-navy py-16 text-ivory">
        <Container>
          <Breadcrumbs
            label={messages.breadcrumbs}
            tone="dark"
            items={[
              { href: localizedPath(locale, "/"), label: messages.nav.home },
              { label: messages.contactPage.title },
            ]}
          />
          <SectionHeader
            eyebrow={messages.contactPage.title}
            title={messages.contactPage.heading}
            description={messages.contactPage.text}
            tone="dark"
            titleAs="h1"
          />
        </Container>
      </section>
      <section className="py-16 lg:py-24">
        <Container className="max-w-3xl">
          <ContactForm locale={locale} initialMotivo={motivo} />
        </Container>
      </section>
    </>
  );
}
