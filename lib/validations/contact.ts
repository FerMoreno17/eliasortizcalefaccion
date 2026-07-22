import * as Yup from "yup";

export const contactSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, "Ingresá al menos 2 caracteres")
    .max(60, "Máximo 60 caracteres")
    .required("Contanos tu nombre"),
  email: Yup.string()
    .trim()
    .email("Ingresá un email válido")
    .required("Ingresá tu email"),
  phone: Yup.string()
    .trim()
    .matches(/^[0-9+\-\s()]{6,20}$/, "Ingresá un teléfono válido")
    .required("Ingresá tu teléfono"),
  service: Yup.string().required("Elegí un servicio"),
  message: Yup.string()
    .trim()
    .min(10, "Contanos un poco más, mínimo 10 caracteres")
    .max(600, "Máximo 600 caracteres")
    .required("Contanos qué necesitás"),
});

export type ContactValues = Yup.InferType<typeof contactSchema>;

export const initialContactValues: ContactValues = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};
