import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getFamilyPaths } from "@/data/localized";
import { Icon } from "@/lib/icons";
import { getMessages } from "@/i18n/messages";
import { localizedPath } from "@/i18n/path";
import { requireLocale } from "@/i18n/params";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/familias">) {
  const locale = await requireLocale(params);
  const messages = getMessages(locale);
  return pageMetadata({
    title: messages.familiesPage.title,
    description: messages.familiesPage.seo,
    path: "/familias",
    locale,
  });
}

export default async function FamiliasPage({ params }: PageProps<"/[lang]/familias">) {
  const locale = await requireLocale(params);
  const messages = getMessages(locale);
  const familyPaths = getFamilyPaths(locale);

  return (
    <>
      <section className="bg-navy py-16 text-ivory">
        <Container>
          <Breadcrumbs
            label={messages.breadcrumbs}
            tone="dark"
            items={[
              { href: localizedPath(locale, "/"), label: messages.nav.home },
              { label: messages.familiesPage.title },
            ]}
          />
          <SectionHeader
            eyebrow={messages.familiesPage.eyebrow}
            title={messages.familiesPage.heading}
            description={messages.familiesPage.text}
            tone="dark"
            titleAs="h1"
          />
        </Container>
      </section>
      <section className="py-16 lg:py-24">
        <Container>
          <ul className="grid gap-5 lg:grid-cols-2">
            {familyPaths.map((path) => (
              <li key={path.title}>
                <Card className="flex h-full flex-col justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gold/15 text-navy">
                      <Icon name={path.icon} />
                    </div>
                    <h2 className="font-serif text-2xl text-navy">{path.title}</h2>
                  </div>
                  <div className="mt-6">
                    <Button href={localizedPath(locale, path.href)}>{path.cta}</Button>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CTASection locale={locale} />
    </>
  );
}
