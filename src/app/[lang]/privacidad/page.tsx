import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { getMessages } from "@/i18n/messages";
import { localizedPath } from "@/i18n/path";
import { requireLocale } from "@/i18n/params";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/privacidad">) {
  const locale = await requireLocale(params);
  const messages = getMessages(locale);
  return pageMetadata({
    title: messages.privacyPage.title,
    description: messages.privacyPage.seo,
    path: "/privacidad",
    locale,
  });
}

export default async function PrivacidadPage({ params }: PageProps<"/[lang]/privacidad">) {
  const locale = await requireLocale(params);
  const messages = getMessages(locale);

  return (
    <section className="py-16 lg:py-24">
      <Container className="max-w-3xl">
        <Breadcrumbs
          label={messages.breadcrumbs}
          items={[
            { href: localizedPath(locale, "/"), label: messages.nav.home },
            { label: messages.privacyPage.title },
          ]}
        />
        <h1 className="font-serif text-4xl text-navy">{messages.privacyPage.title}</h1>
        <p className="mt-6 leading-relaxed text-muted">{messages.privacyPage.p1}</p>
        <div className="mt-8 space-y-4 leading-relaxed text-muted">
          <p>{messages.privacyPage.p2}</p>
          <p>{messages.privacyPage.p3}</p>
          <p>{messages.privacyPage.p4}</p>
        </div>
      </Container>
    </section>
  );
}
