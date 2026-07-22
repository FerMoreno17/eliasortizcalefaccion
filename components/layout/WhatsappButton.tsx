import { MessageCircle } from "lucide-react";

import { whatsappLink } from "@/lib/constants";

export function WhatsappButton() {
  return (
    <a
      href={whatsappLink("Hola, quisiera consultar sobre calefacción.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-ember text-cream shadow-lg transition-transform hover:scale-105 hover:bg-ember-dark"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
