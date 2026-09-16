import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProgramCard } from "@/components/programs/ProgramCard";
import {
  getProgramFamilies,
  getProgramsByFamily,
  getProgramsIntro,
} from "@/data/localized";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { localizedPath } from "@/i18n/path";

export function ProgramsPreview({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  const families = getProgramFamilies(locale);

  return (
    <section className="bg-surface py-20 lg:py-28" aria-labelledby="programas-inicio">
      <Container>
        <SectionHeader
          eyebrow={messages.home.programsEyebrow}
          title={messages.home.programsTitle}
          description={getProgramsIntro(locale)}
          id="programas-inicio"
        />
        <div className="mt-14 space-y-14">
          {families.map((family) => {
            const items = getProgramsByFamily(locale, family.id);
            return (
              <div key={family.id}>
                <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wine">
                      {family.name}
                    </p>
                    <p className="mt-1 max-w-xl text-muted">{family.description}</p>
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {items.map((program) => (
                    <ProgramCard key={program.slug} program={program} locale={locale} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Button href={localizedPath(locale, "/programas")} variant="outline">
            {messages.home.programsAll}
          </Button>
        </div>
      </Container>
    </section>
  );
}
