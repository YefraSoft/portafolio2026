# YefraSoft.com

Portafolio personal de **Eduardo Efrain Garcia Suarez**, desarrollado con Astro y Tailwind CSS. El sitio presenta perfil profesional, curriculum, proyectos, soluciones SaaS y canales de contacto en una experiencia bilingue preparada para SEO.

## Descripcion

YefraSoft.com es una web personal enfocada en mostrar experiencia como ingeniero de software, especialista en IA y desarrollador full stack. El proyecto esta pensado como una carta de presentacion profesional: combina una landing con secciones de impacto, curriculum descargable, contenido internacionalizado y una base preparada para crecer hacia portafolio, blog y servicios.

El sitio esta disponible en dos idiomas:

- Espanol: `/es/`
- Ingles: `/en/`

## Caracteristicas

- Landing page bilingue con hero, seccion sobre mi, proyectos, productos SaaS y contacto.
- Curriculum en rutas localizadas con opcion de generacion PDF desde el navegador.
- Sistema de traducciones propio basado en archivos TypeScript.
- Layout global con metadatos SEO, Open Graph, Twitter Cards, canonical URL y alternates `hreflang`.
- Sitemap automatico con soporte i18n mediante `@astrojs/sitemap`.
- Estilos con Tailwind CSS v4, fuentes personalizadas y animaciones de entrada.
- Navegacion responsive con selector de idioma.
- Componentes reutilizables para header, footer, tarjetas de proyectos, tarjetas SaaS y formulario de contacto.
- `robots.txt` configurado para indexacion y referencia al sitemap.

## Stack Tecnologico

- **Astro 6**: framework principal para el sitio estatico.
- **TypeScript**: tipado estricto y estructura de datos del contenido.
- **Tailwind CSS 4**: sistema de estilos, tokens de tema y utilidades responsive.
- **tailwindcss-animated**: animaciones declarativas.
- **@astrojs/sitemap**: generacion de sitemap con configuracion internacionalizada.
- **@astrojs/mdx**: soporte preparado para contenido MDX.
- **html2pdf.js**: generacion del CV en PDF desde la pagina de curriculum.

## Rutas Actuales

| Ruta | Descripcion |
| --- | --- |
| `/` | Redirecciona al idioma por defecto (`/es/`). |
| `/es/` | Landing principal en espanol. |
| `/en/` | Landing principal en ingles. |
| `/es/cv` | Curriculum en espanol. |
| `/en/cv` | Resume en ingles. |
| `/es/services` | Base de pagina de servicios en espanol. |

La navegacion ya contempla secciones como portafolio, servicios, blog y contacto. Algunas rutas estan preparadas como parte de la expansion del sitio.

## Internacionalizacion

La internacionalizacion esta configurada desde `astro.config.mjs` con:

- Idioma por defecto: `es`
- Locales: `es`, `en`
- Prefijo obligatorio para el idioma por defecto: `/es/`
- Alternates generados en el layout principal mediante `astro:i18n`

Los textos se centralizan en `src/i18n/` y se consumen con `useTranslations(lang)`. Esto permite mantener la UI separada de los componentes y facilita agregar nuevos idiomas o ajustar copy por seccion.

## SEO

El layout principal incluye:

- `title` y `description` por pagina.
- URL canonica.
- Open Graph tags.
- Twitter Card.
- `hreflang` para Espanol e Ingles.
- `x-default`.
- Enlace al sitemap.

El sitio esta configurado con `site: "https://yefrasoft.com"` para generar URLs absolutas correctas en produccion.

## Requisitos

Este proyecto requiere:

- Node.js `>=22.12.0`
- npm

## Instalacion

```sh
npm install
```

## Comandos

| Comando | Accion |
| --- | --- |
| `npm run dev` | Inicia el servidor local en `localhost:4321`. |
| `npm run build` | Genera la version de produccion en `dist/`. |
| `npm run preview` | Sirve localmente el build de produccion. |
| `npm run astro` | Ejecuta comandos de la CLI de Astro. |

Esto permite probar el sitio desde otros dispositivos dentro de la misma red local cuando sea necesario.

## Estado del Proyecto

El proyecto ya cuenta con la base principal del portafolio:

- Landing funcional en dos idiomas.
- Curriculum localizado.
- Sistema de traducciones.
- Componentes visuales reutilizables.
- Configuracion SEO y sitemap.
- Base de estilos y tema visual.

## Autor

**Eduardo Efrain Garcia Suarez**  
YefraSoft

- GitHub: [YefraSoft](https://github.com/YefraSoft)
- LinkedIn: [Eduardo Efrain Garcia Suarez](https://www.linkedin.com/in/efrain-garcia-suarez-227a88401)
- Sitio: [https://yefrasoft.com](https://yefrasoft.com)

## Licencia

Proyecto personal. El codigo, contenido visual y textos del portafolio pertenecen a YefraSoft salvo que se indique lo contrario.
