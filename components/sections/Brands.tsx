import { BRANDS } from "@/lib/constants";

export function Brands() {
  return (
    <section className="border-y border-ink/10 bg-ink py-14">
      <div className="container">
        <p className="text-center font-utility text-xs uppercase tracking-[0.2em] text-cream/50">
          Trabajamos con primeras marcas
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {BRANDS.map((brand) => (
            <span
              key={brand}
              className="font-display text-xl text-cream/60 transition-colors hover:text-ember-light"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
