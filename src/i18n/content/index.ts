import type { Locale } from "@/i18n";
import en from "../en";
import fr from "../fr";

const localizedContent = {
	en,
	fr
} as const;

export const getLocalizedContent = (locale: Locale) => {
	return localizedContent[locale] ?? localizedContent.en;
};
