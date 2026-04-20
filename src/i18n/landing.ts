import { aboutUi } from "./about";
import { contactUi } from "./contact";
import { cvUi } from "./cv";
import { heroUi } from "./hero";

export const landingUi = {
  es: {
    ...heroUi.es,
    ...aboutUi.es,
    ...cvUi.es,
    ...contactUi.es,
    "stack.title": "Últimos proyectos",
    "stack.subtitle": "Algunos proyectos organizados por categoría",
    "portfolio.viewAll": "Ver todos",
    "saas.title": "Soluciones SaaS",
    "saas.subtitle": "Software listo para implementar en tu negocio",
    "saas.viewAll": "Ver todos",
  },
  en: {
    ...heroUi.en,
    ...aboutUi.en,
    ...cvUi.en,
    ...contactUi.en,
    "stack.title": "Latest Projects",
    "stack.subtitle": "Selected projects by category",
    "portfolio.viewAll": "View all",
    "saas.title": "SaaS Solutions",
    "saas.subtitle": "Ready-to-use software for your business",
    "saas.viewAll": "View all",
  },
} as const;
