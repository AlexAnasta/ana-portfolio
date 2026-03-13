import en from "./en";
import fr from "./fr";

export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

const messages = {
	en,
	fr,
} as const;

type MessageKey =
	| "localeSwitcher.label"
	| "localeSwitcher.english"
	| "localeSwitcher.french"
	| "localeSwitcher.russian"
	| "home.meta.title"
	| "home.meta.description"
	| "home.tabs.about"
	| "home.tabs.contribution"
	| "home.tabs.communication"
	| "home.tabs.skills"
	| "home.actions.downloadCv"
	| "home.actions.linkedinAria"
	| "home.actions.emailAria"
	| "home.about.workExperience"
	| "home.about.education"
	| "home.about.training"
	| "home.skills.languages"
	| "home.contribution.papers"
	| "home.contribution.patents"
	| "home.contribution.workflowsContainers"
	| "home.contribution.projects"
	| "home.contribution.grantsFellowships"
	| "home.contribution.pciRecommended"
	| "home.research.p1"
	| "home.research.p2"
	| "home.research.p3"
	| "footer.madeWith";

export const isSupportedLocale = (value: string | null): value is Locale => {
	return value !== null && locales.includes(value as Locale);
};

export const getLocaleFromUrl = (url: URL): Locale => {
	const pathnameSegments = url.pathname.split("/").filter(Boolean);
	const localeFromPath = pathnameSegments[0] ?? null;

	if (isSupportedLocale(localeFromPath)) {
		return localeFromPath;
	}

	const lang = url.searchParams.get("lang");

	if (isSupportedLocale(lang)) {
		return lang;
	}

	return defaultLocale;
};

export const useTranslations = (locale: Locale) => {
	const dictionary = (messages[locale] ?? messages[defaultLocale]).messages;

	return (key: MessageKey): string => {
		switch (key) {
			case "localeSwitcher.label":
				return dictionary.localeSwitcher.label;
			case "localeSwitcher.english":
				return dictionary.localeSwitcher.english;
			case "localeSwitcher.french":
				return dictionary.localeSwitcher.french;
			case "localeSwitcher.russian":
				return dictionary.localeSwitcher.russian;
			case "home.meta.title":
				return dictionary.home.meta.title;
			case "home.meta.description":
				return dictionary.home.meta.description;
			case "home.tabs.about":
				return dictionary.home.tabs.about;
			case "home.tabs.contribution":
				return dictionary.home.tabs.contribution;
			case "home.tabs.communication":
				return dictionary.home.tabs.communication;
			case "home.tabs.skills":
				return dictionary.home.tabs.skills;
			case "home.actions.downloadCv":
				return dictionary.home.actions.downloadCv;
			case "home.actions.linkedinAria":
				return dictionary.home.actions.linkedinAria;
			case "home.actions.emailAria":
				return dictionary.home.actions.emailAria;
			case "home.about.workExperience":
				return dictionary.home.about.workExperience;
			case "home.about.education":
				return dictionary.home.about.education;
			case "home.about.training":
				return dictionary.home.about.training;
			case "home.skills.languages":
				return dictionary.home.skills.languages;
			case "home.contribution.papers":
				return dictionary.home.contribution.papers;
			case "home.contribution.patents":
				return dictionary.home.contribution.patents;
			case "home.contribution.workflowsContainers":
				return dictionary.home.contribution.workflowsContainers;
			case "home.contribution.projects":
				return dictionary.home.contribution.projects;
			case "home.contribution.grantsFellowships":
				return dictionary.home.contribution.grantsFellowships;
			case "home.contribution.pciRecommended":
				return dictionary.home.contribution.pciRecommended;
			case "home.research.p1":
				return dictionary.home.research.p1;
			case "home.research.p2":
				return dictionary.home.research.p2;
			case "home.research.p3":
				return dictionary.home.research.p3;
			case "footer.madeWith":
				return dictionary.footer.madeWith;
			default:
				return key;
		}
	};
};