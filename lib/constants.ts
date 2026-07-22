export const SITE = {
  name: "Abrigo Calefacción",
  phoneDisplay: "11 2852-5448",
  phoneWhatsapp: "5491128525448",
  email: "hola@abrigocalefaccion.com.ar",
  location: "Temperley, Buenos Aires",
  hours: "Lunes a viernes de 9 a 17 hs · Urgencias 24/7",
};

export const whatsappLink = (message: string) =>
  `https://api.whatsapp.com/send?phone=${SITE.phoneWhatsapp}&text=${encodeURIComponent(
    message
  )}`;

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Obras e instalaciones", href: "#obras" },
  { label: "Por qué elegirnos", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export type ServiceItem = {
  title: string;
  description: string;
  image: string;
};

export const SERVICES: ServiceItem[] = [
  {
    title: "Calderas",
    description:
      "Venta e instalación de calderas a gas y eléctricas para calefacción y agua caliente todo el año.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Pisos radiantes",
    description:
      "Sistemas de calefacción por piso radiante, cálculo de balance térmico incluido en cada proyecto.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Radiadores y toalleros",
    description:
      "Instalación y reparación de radiadores y toalleros, con asesoramiento sobre el equipo ideal para tu espacio.",
    image:
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Climatizadores de piscina",
    description:
      "Equipos para climatizar piscinas cubiertas y descubiertas, con eficiencia energética garantizada.",
    image:
      "https://images.unsplash.com/photo-1572331165267-854da2b10ccf?q=80&w=800&auto=format&fit=crop",
  },
];

export const BRANDS = [
  "PEISA",
  "BAXI",
  "TRIANGULAR",
  "EUTERMA",
  "FERROLI",
  "ASUA",
];

export type FeatureItem = {
  title: string;
  description: string;
};

export const WHY_US: FeatureItem[] = [
  {
    title: "Atención personalizada",
    description:
      "Trato directo y adaptado a las necesidades específicas de cada cliente para garantizar soluciones precisas.",
  },
  {
    title: "Proyectos a medida",
    description:
      "Diseñamos sistemas de calefacción ajustados a las características únicas de cada espacio.",
  },
  {
    title: "Experiencia comprobada",
    description:
      "Más de 5 años en el sector y un equipo técnico con más de 10 años de trayectoria.",
  },
  {
    title: "Acompañamiento integral",
    description:
      "Te acompañamos desde el asesoramiento inicial hasta la ejecución final del proyecto.",
  },
];

export const WORKS = [
  "Instalación de piso radiante",
  "Sistemas de calefacción con radiadores",
  "Instalación de calderas y climatizadores",
  "Cálculo de balance térmico",
];

export const WORKS_INCLUDES = [
  "Provisión de equipos y materiales",
  "Mano de obra especializada",
  "Asesoramiento personalizado en cada proyecto",
];
