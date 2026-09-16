"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { contactAudiences } from "@/data/content";
import { cn } from "@/lib/utils";

type FormVariant = "contact" | "professional" | "subsidy" | "ally";

const variantCopy: Record<
  FormVariant,
  { title: string; submit: string; note: string }
> = {
  contact: {
    title: "Enviar mensaje",
    submit: "Enviar mensaje",
    note: "El formulario está preparado para conectarse más adelante. Por ahora no se envía a un servidor.",
  },
  professional: {
    title: "Quiero integrarme a la red",
    submit: "Enviar interés profesional",
    note: "Esta ficha no constituye aún un registro de prestadores.",
  },
  subsidy: {
    title: "Solicitar información",
    submit: "Solicitar información",
    note: "Esta no es todavía una solicitud formal de subsidio.",
  },
  ally: {
    title: "Quiero ser aliado",
    submit: "Enviar interés",
    note: "El dossier y los convenios se compartirán cuando el canal institucional esté habilitado.",
  },
};

function Field({
  label,
  name,
  children,
  required = true,
}: {
  label: string;
  name: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-navy">
        {label}
        {required ? "" : " (opcional)"}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "min-h-11 w-full rounded-xl border border-navy/15 bg-white px-3 text-navy outline-none transition-colors placeholder:text-muted/70 focus:border-gold";

function resolveAudience(variant: FormVariant, motivo?: string) {
  if (variant === "professional") return "profesional";
  if (variant === "ally") return "empresa";
  if (variant === "subsidy") return "familia";
  if (motivo === "orientacion") return "familia";
  if (contactAudiences.some((item) => item.value === motivo) && motivo) {
    return motivo;
  }
  return contactAudiences[0].value;
}

export function ContactForm({
  variant = "contact",
  className,
  initialMotivo,
}: {
  variant?: FormVariant;
  className?: string;
  initialMotivo?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const copy = variantCopy[variant];
  const defaultAudience = resolveAudience(variant, initialMotivo);

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
        <p className="font-serif text-2xl">Gracias por tu interés.</p>
        <p className="mt-3 leading-relaxed text-muted">{copy.note}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("space-y-5", className)} noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre" name="nombre">
          <input id="nombre" name="nombre" required autoComplete="name" className={inputClass} />
        </Field>
        <Field label="Correo electrónico" name="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </Field>
        <Field label="Teléfono" name="telefono" required={false}>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            className={inputClass}
          />
        </Field>
        <Field label="Organización" name="organizacion" required={false}>
          <input id="organizacion" name="organizacion" className={inputClass} />
        </Field>
      </div>

      {variant === "contact" || variant === "ally" ? (
        <Field label="Motivo" name="motivo">
          <select
            id="motivo"
            name="motivo"
            required
            defaultValue={defaultAudience}
            className={inputClass}
          >
            {contactAudiences.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
      ) : null}

      {variant === "professional" ? (
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Profesión" name="profesion">
            <input id="profesion" name="profesion" required className={inputClass} />
          </Field>
          <Field label="Especialidad" name="especialidad">
            <input id="especialidad" name="especialidad" required className={inputClass} />
          </Field>
          <Field label="Ciudad" name="ciudad">
            <input id="ciudad" name="ciudad" required className={inputClass} />
          </Field>
          <Field label="Años o tipo de experiencia" name="experiencia">
            <input id="experiencia" name="experiencia" required className={inputClass} />
          </Field>
        </div>
      ) : null}

      <Field label="Mensaje" name="mensaje">
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
          Acepto el aviso de privacidad y el tratamiento de mis datos para responder
          esta solicitud cuando el canal institucional esté habilitado.
        </label>
      </div>

      <p className="text-sm text-muted">{copy.note}</p>
      <Button type="submit">{copy.submit}</Button>
    </form>
  );
}
