"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import type { Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { cn } from "@/lib/utils";

type FormVariant = "contact" | "professional" | "subsidy" | "ally";

function Field({
  label,
  name,
  optionalLabel,
  children,
  required = true,
}: {
  label: string;
  name: string;
  optionalLabel: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-navy">
        {label}
        {required ? "" : ` ${optionalLabel}`}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "min-h-11 w-full rounded-xl border border-navy/15 bg-white px-3 text-navy outline-none transition-colors placeholder:text-muted/70 focus:border-gold";

function resolveAudience(
  variant: FormVariant,
  motivo: string | undefined,
  audiences: readonly { value: string }[],
) {
  if (variant === "professional") return "profesional";
  if (variant === "ally") return "empresa";
  if (variant === "subsidy") return "familia";
  if (motivo === "orientacion") return "familia";
  if (audiences.some((item) => item.value === motivo) && motivo) {
    return motivo;
  }
  return audiences[0].value;
}

export function ContactForm({
  locale,
  variant = "contact",
  className,
  initialMotivo,
}: {
  locale: Locale;
  variant?: FormVariant;
  className?: string;
  initialMotivo?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const messages = getMessages(locale);
  const copy = {
    contact: {
      submit: messages.form.contactSubmit,
      note: messages.form.contactNote,
    },
    professional: {
      submit: messages.form.professionalSubmit,
      note: messages.form.professionalNote,
    },
    subsidy: {
      submit: messages.form.subsidySubmit,
      note: messages.form.subsidyNote,
    },
    ally: {
      submit: messages.form.allySubmit,
      note: messages.form.allyNote,
    },
  }[variant];
  const defaultAudience = resolveAudience(
    variant,
    initialMotivo,
    messages.form.audiences,
  );

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={cn(
          "rounded-2xl border border-gold/40 bg-white p-6 text-navy",
          className,
        )}
        role="status"
      >
        <p className="font-serif text-2xl">{messages.form.thanks}</p>
        <p className="mt-3 leading-relaxed text-muted">{copy.note}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("space-y-5", className)} noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={messages.form.name} name="nombre" optionalLabel={messages.form.optional}>
          <input id="nombre" name="nombre" required autoComplete="name" className={inputClass} />
        </Field>
        <Field label={messages.form.email} name="email" optionalLabel={messages.form.optional}>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </Field>
        <Field
          label={messages.form.phone}
          name="telefono"
          required={false}
          optionalLabel={messages.form.optional}
        >
          <input
            id="telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            className={inputClass}
          />
        </Field>
        <Field
          label={messages.form.organization}
          name="organizacion"
          required={false}
          optionalLabel={messages.form.optional}
        >
          <input id="organizacion" name="organizacion" className={inputClass} />
        </Field>
      </div>

      {variant === "contact" || variant === "ally" ? (
        <Field label={messages.form.reason} name="motivo" optionalLabel={messages.form.optional}>
          <select
            id="motivo"
            name="motivo"
            required
            defaultValue={defaultAudience}
            className={inputClass}
          >
            {messages.form.audiences.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
      ) : null}

      {variant === "professional" ? (
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            label={messages.form.profession}
            name="profesion"
            optionalLabel={messages.form.optional}
          >
            <input id="profesion" name="profesion" required className={inputClass} />
          </Field>
          <Field
            label={messages.form.specialty}
            name="especialidad"
            optionalLabel={messages.form.optional}
          >
            <input id="especialidad" name="especialidad" required className={inputClass} />
          </Field>
          <Field label={messages.form.city} name="ciudad" optionalLabel={messages.form.optional}>
            <input id="ciudad" name="ciudad" required className={inputClass} />
          </Field>
          <Field
            label={messages.form.experience}
            name="experiencia"
            optionalLabel={messages.form.optional}
          >
            <input id="experiencia" name="experiencia" required className={inputClass} />
          </Field>
        </div>
      ) : null}

      <Field label={messages.form.message} name="mensaje" optionalLabel={messages.form.optional}>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          className={cn(inputClass, "min-h-32 py-3")}
        />
      </Field>

      <div className="flex items-start gap-3">
        <input
          id="privacidad"
          name="privacidad"
          type="checkbox"
          required
          className="mt-1 size-4 accent-navy"
        />
        <label htmlFor="privacidad" className="text-sm leading-relaxed text-muted">
          {messages.form.privacy}
        </label>
      </div>

      <p className="text-sm text-muted">{copy.note}</p>
      <Button type="submit">{copy.submit}</Button>
    </form>
  );
}
