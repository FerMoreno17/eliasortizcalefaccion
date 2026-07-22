"use client";

import { useState } from "react";
import { Formik, Form, Field, type FieldProps } from "formik";
import { Loader2, Send } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  contactSchema,
  initialContactValues,
  type ContactValues,
} from "@/lib/validations/contact";

const SERVICE_OPTIONS = [
  "Calderas",
  "Pisos radiantes",
  "Radiadores y toalleros",
  "Climatizadores de piscina",
  "Otro / no estoy seguro",
];

type SubmitState = "idle" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<SubmitState>("idle");

  return (
    <Formik<ContactValues>
      initialValues={initialContactValues}
      validationSchema={contactSchema}
      onSubmit={async (values, { resetForm, setSubmitting }) => {
        setStatus("idle");
        try {
          // Reemplazá esta simulación por la llamada a tu API o servicio de email
          // (por ejemplo: fetch("/api/contact", { method: "POST", body: JSON.stringify(values) }))
          await new Promise((resolve) => setTimeout(resolve, 900));
          console.log("Contacto enviado:", values);
          setStatus("success");
          resetForm();
        } catch (error) {
          setStatus("error");
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="space-y-5" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Field name="name">
                {({ field }: FieldProps) => (
                  <Input
                    id="name"
                    placeholder="Tu nombre"
                    hasError={!!(errors.name && touched.name)}
                    {...field}
                  />
                )}
              </Field>
              {errors.name && touched.name && (
                <p className="text-xs text-ember-dark">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Field name="phone">
                {({ field }: FieldProps) => (
                  <Input
                    id="phone"
                    placeholder="11 1234-5678"
                    hasError={!!(errors.phone && touched.phone)}
                    {...field}
                  />
                )}
              </Field>
              {errors.phone && touched.phone && (
                <p className="text-xs text-ember-dark">{errors.phone}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Field name="email">
              {({ field }: FieldProps) => (
                <Input
                  id="email"
                  type="email"
                  placeholder="tunombre@email.com"
                  hasError={!!(errors.email && touched.email)}
                  {...field}
                />
              )}
            </Field>
            {errors.email && touched.email && (
              <p className="text-xs text-ember-dark">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Servicio que te interesa</Label>
            <Field name="service">
              {({ field }: FieldProps) => (
                <select
                  id="service"
                  className="flex h-12 w-full rounded-sm border border-ink/15 bg-white px-4 py-2 text-sm text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
                  {...field}
                >
                  <option value="" disabled>
                    Elegí una opción
                  </option>
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
            </Field>
            {errors.service && touched.service && (
              <p className="text-xs text-ember-dark">{errors.service}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Mensaje</Label>
            <Field name="message">
              {({ field }: FieldProps) => (
                <Textarea
                  id="message"
                  placeholder="Contanos qué necesitás: tipo de espacio, equipo actual, plazos..."
                  hasError={!!(errors.message && touched.message)}
                  {...field}
                />
              )}
            </Field>
            {errors.message && touched.message && (
              <p className="text-xs text-ember-dark">{errors.message}</p>
            )}
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" /> Enviar consulta
              </>
            )}
          </Button>

          {status === "success" && (
            <p className="text-sm text-ember-dark">
              Gracias por contactarnos. Te responderemos a la brevedad.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-ember-dark">
              Se produjo un error al enviar tu mensaje. Intentá nuevamente.
            </p>
          )}
        </Form>
      )}
    </Formik>
  );
}
