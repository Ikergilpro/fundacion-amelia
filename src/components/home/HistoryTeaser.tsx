import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getSiteCopy } from "@/data/localized";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { localizedPath } from "@/i18n/path";

export function HistoryTeaser({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  const { history } = getSiteCopy(locale);

  return (
    <section className="py-20 lg:py-28" aria-labelledby="historia-inicio">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeader title={history.title} id="historia-inicio" />
          <div className="mt-6 space-y-4 leading-relaxed text-muted">
            {history.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8">
            <Button href={localizedPath(locale, "/nosotros#historia")} variant="outline">
              {messages.home.historyCta}
            </Button>
          </div>
        </div>
        <PhotoSlot
          alt={messages.home.historyPhotoAlt}
          label={messages.home.historyPhotoLabel}
        />
      </Container>
    </section>
  );
}
