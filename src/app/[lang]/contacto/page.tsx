import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { site } from "@/data/site";
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
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <aside className="rounded-3xl border border-navy/8 bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wine">
              {messages.contactPage.direct}
            </p>
            <p className="mt-4 font-serif text-3xl text-navy">{site.contact.name}</p>
            <p className="mt-1 text-muted">{site.contact.role}</p>
            <p className="mt-6 text-sm font-medium text-navy">
              {messages.contactPage.emailLabel}
            </p>
            <a
              href={`mailto:${site.contact.email}`}
              className="mt-1 inline-block text-lg text-wine underline-offset-4 hover:underline"
            >
              {site.contact.email}
            </a>
            <p className="mt-8 text-sm text-muted">{messages.location}</p>
          </aside>
          <ContactForm locale={locale} initialMotivo={motivo} />
        </Container>
      </section>
    </>
  );
}
