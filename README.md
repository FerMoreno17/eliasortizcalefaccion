# Abrigo Calefacción — Landing Page

Landing page para un servicio de calefacción, inspirada en la estructura de
sitios como surclimatizacion.com, construida con:

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** con tokens de diseño propios (paleta "frío → ember")
- **shadcn/ui** (Button, Input, Textarea, Label, Card)
- **Formik + Yup** para el formulario de contacto, con validación completa
- Componentes 100% reutilizables y contenido centralizado en `lib/constants.ts`

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Estructura

```
app/
  layout.tsx        # Fuentes (Fraunces, Inter, Space Grotesk) y metadata
  page.tsx           # Ensambla todas las secciones
  globals.css
components/
  ui/                # Primitivas shadcn/ui (button, input, textarea, label, card)
  layout/            # Header, Footer, WhatsappButton
  sections/          # Hero, Services, Brands, About, Projects, WhyChooseUs, ContactSection
  forms/
    ContactForm.tsx  # Formik + Yup
lib/
  constants.ts       # Todo el contenido del sitio (textos, servicios, marcas, contacto)
  validations/
    contact.ts       # Esquema Yup del formulario
  utils.ts           # cn() helper de shadcn
```

## Personalización rápida

1. **Contenido y datos de contacto**: editá `lib/constants.ts` (nombre del
   negocio, teléfono, WhatsApp, email, servicios, marcas, features).
2. **Colores/tipografía**: editá `tailwind.config.ts` (colores `ink`, `ember`,
   `cream`, `steel`) y las fuentes en `app/layout.tsx`.
3. **Imágenes**: las imágenes son de Unsplash como placeholder. Reemplazalas
   por fotos reales del negocio en `lib/constants.ts` y en cada sección
   (`Hero.tsx`, `About.tsx`, `Projects.tsx`).
4. **Envío del formulario**: en `components/forms/ContactForm.tsx`, el
   `onSubmit` simula el envío. Reemplazalo por tu endpoint real (API route de
   Next.js, servicio de email tipo Resend/SendGrid, o un webhook).

## Notas

- El botón flotante de WhatsApp y los CTA usan el número configurado en
  `SITE.phoneWhatsapp` (formato internacional sin espacios ni símbolos).
- El formulario ya maneja estados de carga, éxito y error.
- Diseño responsive, con foco visible en todos los controles interactivos.
