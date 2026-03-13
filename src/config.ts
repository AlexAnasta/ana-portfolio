import type { Locale } from "@/i18n";
import { getLocalizedContent } from "@/i18n/content";

export const SITE = {
	website: "https://anastasia-rusakovich.netlify.app/",
	title:
		"Anastasia Rusakovich | Bioinformatics and Cancer Research",
	description:
		"Anastasia Rusakovich resume, bioinformatics and molecular biology at IGDR Rennes. Long-read transcriptomics, circRNA, melanoma research, reproducible workflows, and scientific publications.",
	tags: [
		"Anastasia Rusakovich",
		"Anastasia",
		"Rusakovich",
		"bioinformatics",
		"molecular biology",
		"cancer research",
		"long-read transcriptomics",
		"circRNA",
		"melanoma",
		"NGS data analysis",
		"IGDR Rennes",
		"Rennes France",
		"scientific",
	],
	ogImage: "/og-image.jpg",
	logo: "logo",
	logoText: "Ana",
	lang: "en",
	favicon: "/favicon.png",
	repository: "https://github.com/AlexAnasta/ana-portfolio",
	author: "Anastasia Rusakovich",
	profile: "https://anastasia-rusakovich.netlify.app/",
};

export const ME = {
	name: "Anastasia Rusakovich",
	profession: "Molecular biology and bioinformatics",
	profileImage: "pp.jpg",
	profileFacts: [
		{
			value: 7,
			description: "Years in Molecular Biology",
			color: "wet",
		},
		{
			value: 4,
			description: "Years in Bioinformatics",
			color: "dry",
		}
	],
	contactInfo: {
		email: "anastasia.rusakovich@univ-rennes.fr",
		linkedin: "https://www.linkedin.com/in/anastasia-rusakovich/",
		resumeDoc: "resume.pdf",
	},
	aboutMe: `I <span style="color:#62C4C3;font-weight:600;">started in the lab with a pipette</span>, and somewhere along the way learned to <span style="color:#FAE081;font-weight:600;">write the code</span> that makes sense of my data. Over the last few years I've been deep in <span style="color:#FAE081;font-weight:600;">bioinformatics</span> - moving from <span style="color:#FAE081;font-weight:600;"> shell scripts</span> to <span style="color:#FAE081;font-weight:600;">reproducible containers and pipelines</span>. But I still remember how to <span style="color:#62C4C3;font-weight:600;">aspirate around a blood clot</span> to save a pipette, <span style="color:#62C4C3;font-weight:600;">give bacteria the heat shock</span> of their lives to sneak in a plasmid, or <span style="color:#62C4C3;font-weight:600;">dissect a fly larva's brain</span> when the experiment calls for it.`,
};

export const getSiteConfig = (locale: Locale) => {
	const siteLocale = getLocalizedContent(locale).config.site;

	return {
		...SITE,
		title: siteLocale.title,
		description: siteLocale.description,
		tags: siteLocale.tags,
	};
};

export const getMeConfig = (locale: Locale) => {
	const meLocale = getLocalizedContent(locale).config.me;

	return {
		...ME,
		profession: meLocale.profession,
		profileFacts: ME.profileFacts.map((fact, index) => ({
			...fact,
			description: meLocale.profileFactDescriptions[index] ?? fact.description,
		})),
		aboutMe: meLocale.aboutMe,
	};
};

export const SOCIALS = [
  {
    name: "GitHub",
    url: "https://github.com/aerusakovich",
    icon: "github-fill",
    show: true,
  },
  {
    name: "GitLab",
    url: "https://gitlab.com/aerusakovich",
    icon: "gitlab-fill",
    show: true,
  },
 {
    name: "ORCID",
    url: "https://orcid.org/0000-0001-9663-6238",
    icon: "orcid",
    show: true,
  },
];
