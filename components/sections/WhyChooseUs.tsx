import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { WHY_US } from "@/lib/constants";

export function WhyChooseUs() {
  return (
    <section id="nosotros" className="bg-cream py-20 md:py-28">
      <div className="container">
        <div className="max-w-xl">
          <p className="font-utility text-xs uppercase tracking-[0.2em] text-ember">
            Por qué elegirnos
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium text-ink sm:text-4xl">
            Experiencia, calidad y atención personalizada
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.map((item, index) => (
            <Card key={item.title} className="border-ink/10">
              <CardContent className="pt-6">
                <span className="font-display text-3xl text-ember/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <CardTitle className="mt-4 text-lg">{item.title}</CardTitle>
                <p className="mt-2 text-sm text-steel">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
