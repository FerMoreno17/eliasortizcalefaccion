import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { SERVICES } from "@/lib/constants";

export function Services() {
  return (
    <section id="servicios" className="bg-cream py-20 md:py-28">
      <div className="container">
        <div className="max-w-xl">
          <p className="font-utility text-xs uppercase tracking-[0.2em] text-ember">
            Productos y servicio técnico
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium text-ink sm:text-4xl">
            Todo lo que necesitás en calefacción, en un solo lugar
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-lg border border-ink/10 bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-medium text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-steel">{service.description}</p>
                <a
                  href="#contacto"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ember hover:text-ember-dark"
                >
                  Saber más
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
