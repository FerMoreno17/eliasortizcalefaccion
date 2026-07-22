import Image from "next/image";

import { Button } from "@/components/ui/button";
import { WORKS, WORKS_INCLUDES, whatsappLink } from "@/lib/constants";

export function Projects() {
  return (
    <section id="obras" className="relative overflow-hidden bg-ink py-20 text-cream md:py-28">
      <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-utility text-xs uppercase tracking-[0.2em] text-ember-light">
            Obras e instalaciones
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium sm:text-4xl">
            Cada espacio necesita una solución única
          </h2>
          <p className="mt-6 max-w-lg text-base text-cream/70">
            Realizamos obras completas de calefacción adaptadas a cada
            necesidad, tanto en viviendas como en proyectos de mayor escala,
            trabajando junto a arquitectos, constructoras e instaladores.
          </p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="font-utility text-xs uppercase tracking-[0.15em] text-cream/50">
                Trabajamos en
              </p>
              <ul className="mt-3 space-y-2">
                {WORKS.map((item) => (
                  <li key={item} className="text-sm text-cream/80">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-utility text-xs uppercase tracking-[0.15em] text-cream/50">
                Incluye
              </p>
              <ul className="mt-3 space-y-2">
                {WORKS_INCLUDES.map((item) => (
                  <li key={item} className="text-sm text-cream/80">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Button asChild size="lg" className="mt-10">
            <a
              href={whatsappLink("Hola, quisiera pedir una evaluación para mi proyecto.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedir evaluación
            </a>
          </Button>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-lg lg:aspect-auto lg:h-full">
          <Image
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000&auto=format&fit=crop"
            alt="Instalador colocando tuberías de piso radiante"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
