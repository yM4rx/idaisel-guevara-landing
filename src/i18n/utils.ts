import { en } from "./locales/en";
import { es } from "./locales/es";

const ui = { es, en } as const;

type Lang = keyof typeof ui;

export function useTranslations(lang: Lang) {
  return ui[lang];
}
