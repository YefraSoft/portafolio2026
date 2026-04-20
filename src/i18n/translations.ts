// src/i18n/translations.ts
import { heroUi } from "./hero";
import { landingUi } from "./landing";
import { navUi } from "./nav";
import { servicesUi } from "./services";

export const ui = {
  es: {
    ...landingUi.es,
    ...navUi.es,
    //Tittles
    "title.home": "Inicio",
    "title.home.description":
      "Ingeniero de software especializado en backend, IA y sistemas fullstack. Disponible para consultoría y proyectos.",

    // Portfolio
    "portfolio.title": "Portafolio",
    "portfolio.subtitle": "Proyectos seleccionados",
    "portfolio.view_all": "Ver todos los proyectos",
    "portfolio.view_project": "Ver proyecto",
    "portfolio.view_code": "Ver código",

    // Services
    "services.title": "Servicios",
    "services.subtitle": "Cómo puedo ayudarte",
    "services.cta": "Solicitar propuesta",

    // Blog
    "blog.title": "Blog",
    "blog.subtitle": "Artículos sobre ingeniería de software, IA y desarrollo",
    "blog.read_more": "Leer artículo",
    "blog.min_read": "min de lectura",
    

    // Footer
    "footer.rights": "Todos los derechos reservados.",
    "footer.built_with": "Construido con",
  },
  en: {
    ...landingUi.en,
    ...navUi.en,
    //Tittles
    "title.home": "home",
    "title.home.description":
      "Software engineer specializing in backend, AI, and full-stack systems. Available for consulting and projects.",

    // Portfolio
    "portfolio.title": "Portfolio",
    "portfolio.subtitle": "Selected projects",
    "portfolio.view_all": "View all projects",
    "portfolio.view_project": "View project",
    "portfolio.view_code": "View code",

    // Services
    "services.title": "Services",
    "services.subtitle": "How I can help you",
    "services.cta": "Request a proposal",

    // Blog
    "blog.title": "Blog",
    "blog.subtitle": "Articles on software engineering, AI and development",
    "blog.read_more": "Read article",
    "blog.min_read": "min read",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.built_with": "Built with",
  },
} as const;
