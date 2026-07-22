import { Clock, Flame, Mail, MapPin, Phone } from "lucide-react";

import { SITE, whatsappLink } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="heat-divider" />
      <div className="container grid gap-10 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ember/15 text-ember">
              <Flame className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-medium">{SITE.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-cream/70">
            Soluciones integrales en calefacción: venta de equipos, instalación,
            servicio técnico y proyectos a medida.
          </p>
        </div>

        <div className="space-y-4 text-sm">
          <p className="font-utility uppercase tracking-[0.15em] text-cream/50">
            Contacto
          </p>
          <a
            href={whatsappLink("Hola, quisiera consultar sobre calefacción.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-cream/80 hover:text-ember-light"
          >
            <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-3 text-cream/80 hover:text-ember-light"
          >
            <Mail className="h-4 w-4" /> {SITE.email}
          </a>
          <p className="flex items-center gap-3 text-cream/80">
            <MapPin className="h-4 w-4" /> {SITE.location}
          </p>
        </div>

        <div className="space-y-4 text-sm">
          <p className="font-utility uppercase tracking-[0.15em] text-cream/50">
            Horarios
          </p>
          <p className="flex items-start gap-3 text-cream/80">
            <Clock className="mt-0.5 h-4 w-4 shrink-0" /> {SITE.hours}
          </p>
        </div>
      </div>

      <div className="border-t border-cream/10 py-6">
        <p className="container text-xs text-cream/50">
          © {new Date().getFullYear()} {SITE.name}. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
