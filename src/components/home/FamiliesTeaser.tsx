import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getFamilyPaths } from "@/data/localized";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { localizedPath } from "@/i18n/path";
import { Icon } from "@/lib/icons";

export function FamiliesTeaser({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  const familyPaths = getFamilyPaths(locale);

  return (
    <section className="py-20 lg:py-28" aria-labelledby="familias-inicio">
      <Container>
        <SectionHeader
          eyebrow={messages.home.familiesEyebrow}
          title={messages.home.familiesTitle}
          description={messages.home.familiesText}
          id="familias-inicio"
        />
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {familyPaths.map((path) => (
            <li key={path.title}>
              <Card className="flex h-full flex-col justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-navy/5 text-navy">
                    <Icon name={path.icon} />
                  </div>
                  <h3 className="font-serif text-xl text-navy">{path.title}</h3>
                </div>
                <div className="mt-5">
                  <Button href={localizedPath(locale, path.href)} variant="outline" size="sm">
                    {path.cta}
                  </Button>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
