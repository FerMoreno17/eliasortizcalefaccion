import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/forms/ContactForm";
import { SITE, whatsappLink } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contacto" className="bg-cream py-20 md:py-28">
      <div className="container grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="font-utility text-xs uppercase tracking-[0.2em] text-ember">
            Contacto
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium text-ink sm:text-4xl">
            ¿Necesitás mejorar la calefacción de tu hogar o proyecto?
          </h2>
          <p className="mt-6 text-base text-steel">
            Escribinos y un especialista te va a ayudar a encontrar la mejor
            solución para tu espacio.
          </p>

          <div className="mt-10 space-y-6">
            <a
              href={whatsappLink("Hola, quisiera consultar sobre calefacción.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink/5 text-ember">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="font-utility text-xs uppercase tracking-[0.15em] text-steel">
                  Teléfono
                </p>
                <p className="font-display text-lg text-ink">{SITE.phoneDisplay}</p>
              </div>
            </a>

            <a href={`mailto:${SITE.email}`} className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink/5 text-ember">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="font-utility text-xs uppercase tracking-[0.15em] text-steel">
                  Email
                </p>
                <p className="font-display text-lg text-ink">{SITE.email}</p>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink/5 text-ember">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="font-utility text-xs uppercase tracking-[0.15em] text-steel">
                  Ubicación
                </p>
                <p className="font-display text-lg text-ink">{SITE.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-sm lg:col-span-3 lg:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
