import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { getMessages } from "@/i18n/messages";
import { localizedPath } from "@/i18n/path";
import { requireLocale } from "@/i18n/params";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/terminos">) {
  const locale = await requireLocale(params);
  const messages = getMessages(locale);
  return pageMetadata({
    title: messages.termsPage.title,
    description: messages.termsPage.seo,
    path: "/terminos",
    locale,
  });
}

export default async function TerminosPage({ params }: PageProps<"/[lang]/terminos">) {
  const locale = await requireLocale(params);
  const messages = getMessages(locale);

  return (
    <section className="py-16 lg:py-24">
      <Container className="max-w-3xl">
        <Breadcrumbs
          label={messages.breadcrumbs}
          items={[
            { href: localizedPath(locale, "/"), label: messages.nav.home },
            { label: messages.termsPage.title },
          ]}
        />
        <h1 className="font-serif text-4xl text-navy">{messages.termsPage.title}</h1>
        <div className="mt-6 space-y-4 leading-relaxed text-muted">
          <p>{messages.termsPage.p1}</p>
          <p>{messages.termsPage.p2}</p>
          <p>{messages.termsPage.p3}</p>
        </div>
      </Container>
    </section>
  );
}
