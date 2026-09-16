import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getProfessionalContent } from "@/data/localized";
import { getMessages } from "@/i18n/messages";
import { localizedPath } from "@/i18n/path";
import { requireLocale } from "@/i18n/params";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/profesionales">) {
  const locale = await requireLocale(params);
  const messages = getMessages(locale);
  return pageMetadata({
    title: messages.professionalsPage.title,
    description: messages.professionalsPage.seo,
    path: "/profesionales",
    locale,
  });
}

export default async function ProfesionalesPage({
  params,
}: PageProps<"/[lang]/profesionales">) {
  const locale = await requireLocale(params);
  const messages = getMessages(locale);
  const { profiles, requirements } = getProfessionalContent(locale);

  return (
    <>
      <section className="bg-navy py-16 text-ivory">
        <Container>
          <Breadcrumbs
            label={messages.breadcrumbs}
            tone="dark"
            items={[
              { href: localizedPath(locale, "/"), label: messages.nav.home },
              { label: messages.professionalsPage.title },
            ]}
          />
          <SectionHeader
            eyebrow={messages.professionalsPage.eyebrow}
            title={messages.professionalsPage.heading}
            description={messages.professionalsPage.text}
            tone="dark"
            titleAs="h1"
          />
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl text-navy">
              {messages.professionalsPage.profiles}
            </h2>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {profiles.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-navy/8 bg-white px-4 py-3 text-navy"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-navy">
              {messages.professionalsPage.requirements}
            </h2>
            <ul className="mt-5 space-y-2 text-muted">
              {requirements.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-wine" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            title={messages.professionalsPage.formTitle}
            description={messages.professionalsPage.formText}
          />
          <ContactForm locale={locale} variant="professional" />
        </Container>
      </section>
    </>
  );
}
