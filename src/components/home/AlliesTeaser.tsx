import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PartnerLogo } from "@/components/ui/PartnerLogo";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { strategicAlly } from "@/data/allies";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { localizedPath } from "@/i18n/path";

const placeholderSlots = Array.from({ length: 5 }, (_, index) => index);

export function AlliesTeaser({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);

  return (
    <section className="py-20 lg:py-28" aria-labelledby="aliados-inicio">
      <Container>
        <SectionHeader
          eyebrow={messages.home.alliesEyebrow}
          title={messages.home.alliesTitle}
          description={messages.home.alliesText}
          id="aliados-inicio"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <PartnerLogo name={strategicAlly.name} href={strategicAlly.href} />
          {placeholderSlots.map((slot) => (
            <PartnerLogo key={slot} placeholder={messages.partnerPlaceholder} />
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href={localizedPath(locale, "/donantes")}>
            {messages.home.alliesCta}
          </Button>
          <Button href={localizedPath(locale, "/contacto?motivo=fundacion")} variant="outline">
            {messages.home.dossierCta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
