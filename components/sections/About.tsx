import Image from "next/image";

export function About() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1000&auto=format&fit=crop"
              alt="Radiador blanco en una sala de estar moderna"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-lg bg-heat-gradient-radial opacity-70 blur-xl" />
        </div>

        <div className="order-1 lg:order-2">
          <p className="font-utility text-xs uppercase tracking-[0.2em] text-ember">
            Quiénes somos
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium text-ink sm:text-4xl">
            Soluciones integrales en calefacción
          </h2>
          <p className="mt-6 text-base text-steel">
            Somos una empresa especializada en asistencia técnica,
            instalación y reparación de sistemas de calefacción: calderas,
            climatizadores de piscina, sistemas por agua y eléctricos, y
            equipos a gas.
          </p>
          <p className="mt-4 text-base text-steel">
            Nuestro equipo técnico cuenta con amplia experiencia y
            capacitación para garantizar soluciones eficientes, con atención
            totalmente personalizada y flota propia para llegar donde nos
            necesites.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Reparación de equipos",
              "Mantenimiento preventivo y correctivo",
              "Repuestos originales",
              "Urgencias 24 hs, los 365 días",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ink">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
