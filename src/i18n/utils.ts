import { getRelativeLocaleUrl } from "astro:i18n";
import { ui } from "./translations";

export const languages = {
  es: "Español",
  en: "English",
};

export type TranslationKey = keyof (typeof ui)[typeof defaultLang];
export type Lang = keyof typeof languages;

export const defaultLang: Lang = "es";

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return (
      (ui[lang] as Record<string, string>)[key] ??
      (ui[defaultLang] as Record<string, string>)[key] ??
      key
    );
  };
}

export function getRouteWithoutLocale(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && segments[0] in languages) {
    segments.shift();
  }
  return segments.join("/");
}

export function getLocalizedPath(path: string, lang: Lang): string {
  const route = path === "/" ? "" : path.replace(/^\/+|\/+$/g, "");
  return getRelativeLocaleUrl(lang, route);
}

export function getAlternatePaths(pathname: string) {
  const route = getRouteWithoutLocale(pathname);

  return Object.keys(languages).map((lang) => ({
    lang: lang as Lang,
    path: getRelativeLocaleUrl(lang, route),
  }));
}
