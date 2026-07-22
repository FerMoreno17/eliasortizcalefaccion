import Image from "next/image";

import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/constants";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-ink">
      <div className="container grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-utility text-xs uppercase tracking-[0.2em] text-ember-light">
            Calefacción integral · más de 5 años de experiencia
          </p>
          <h1 className="mt-5 font-display text-4xl font-medium leading-[1.1] text-cream sm:text-5xl lg:text-6xl">
            Del frío al confort,
            <br />
            <span className="text-ember-light">un sistema a la vez.</span>
          </h1>
          <p className="mt-6 max-w-md text-base text-cream/70">
            Diseñamos, instalamos y mantenemos sistemas de calefacción a
            medida para tu hogar o proyecto, con asesoramiento profesional en
            cada etapa.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a
                href={whatsappLink("Hola, quisiera solicitar un asesoramiento.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar asesoramiento
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-cream/30 text-cream hover:border-ember hover:text-ember-light">
              <a href="#servicios">Ver servicios</a>
            </Button>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-cream/10 pt-6">
            <div>
              <dt className="font-display text-2xl text-cream">+5</dt>
              <dd className="text-xs text-cream/60">años en el rubro</dd>
            </div>
            <div>
              <dt className="font-display text-2xl text-cream">+10</dt>
              <dd className="text-xs text-cream/60">años del equipo técnico</dd>
            </div>
            <div>
              <dt className="font-display text-2xl text-cream">24/7</dt>
              <dd className="text-xs text-cream/60">atención de urgencias</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-lg bg-heat-gradient opacity-40 blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-cream/10">
            <Image
              src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1000&auto=format&fit=crop"
              alt="Sala de estar cálida con radiador y luz natural"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-y-0 right-0 w-1.5 bg-heat-gradient" />
          </div>
        </div>
      </div>
    </section>
  );
}
