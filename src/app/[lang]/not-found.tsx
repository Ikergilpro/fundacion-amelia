import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getMessages } from "@/i18n/messages";
import { defaultLocale } from "@/i18n/config";
import { localizedPath } from "@/i18n/path";

export default function NotFound() {
  const messages = getMessages(defaultLocale);

  return (
    <section className="py-24">
      <Container className="max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-wine">
          {messages.notFound.eyebrow}
        </p>
        <h1 className="mt-4 font-serif text-4xl text-navy">
          {messages.notFound.title}
        </h1>
        <p className="mt-4 text-muted">{messages.notFound.text}</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href={localizedPath(defaultLocale, "/")}>
            {messages.notFound.home}
          </Button>
          <Button href={localizedPath(defaultLocale, "/contacto")} variant="outline">
            {messages.notFound.contact}
          </Button>
        </div>
      </Container>
    </section>
  );
}
