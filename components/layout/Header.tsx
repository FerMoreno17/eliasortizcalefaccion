"use client";

import { useEffect, useState } from "react";
import { Flame, Menu, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE, whatsappLink } from "@/lib/constants";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink shadow-md" : "bg-ink/90"
      }`}
    >
      <div className="heat-divider" />
      <div className="container flex h-20 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ember/15 text-ember">
            <Flame className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-medium text-cream">
            {SITE.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream/80 transition-colors hover:text-ember-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${SITE.phoneWhatsapp}`}
            className="flex items-center gap-2 text-sm font-utility text-cream/80 hover:text-ember-light"
          >
            <Phone className="h-4 w-4" />
            {SITE.phoneDisplay}
          </a>
          <Button asChild size="sm">
            <a
              href={whatsappLink("Hola, quisiera consultar sobre calefacción.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar asesoramiento
            </a>
          </Button>
        </div>

        <button
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          className="text-cream lg:hidden"
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-cream/10 bg-ink lg:hidden">
          <div className="container flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-sm px-2 py-3 text-sm font-medium text-cream/80 hover:bg-cream/5 hover:text-ember-light"
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="sm" className="mt-2">
              <a
                href={whatsappLink("Hola, quisiera consultar sobre calefacción.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar asesoramiento
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
