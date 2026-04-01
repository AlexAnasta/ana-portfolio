import type { Badge } from "@/data/skillCategories";

export type LocaleMessages = {
	localeSwitcher: {
		label: string;
		english: string;
		french: string;
		russian: string;
	};
	home: {
		meta: {
			title: string;
			description: string;
		};
		actions: {
			downloadCv: string;
			linkedinAria: string;
			emailAria: string;
		};
		tabs: {
			about: string;
			contribution: string;
			communication: string;
			skills: string;
		};
		about: {
			workExperience: string;
			education: string;
			training: string;
		};
		skills: {
			languages: string;
		};
		contribution: {
			papers: string;
			patents: string;
			workflowsContainers: string;
			projects: string;
			grantsFellowships: string;
			pciRecommended: string;
		};
		research: {
			p1: string;
			p2: string;
			p3: string;
		};
			professionTypewriter: {
				prefix: string;
				items: Array<{
					text: string;
					color: string;
				}>;
			};
	};
	footer: {
		madeWith: string;
	};
};

export type SiteConfig = {
	title: string;
	description: string;
	tags: string[];
};

export type MeConfig = {
	profession: string;
	profileFactDescriptions: string[];
	aboutMe: string;
};

export type Publication = {
	type: "paper" | "patent";
	title: string;
	year: number;
	venue: string;
	summary: string;
	url: string;
	tags: string[];
	cover: string;
	pciUrl?: string;
};

export type CodeContribution = {
	type: "workflow" | "container" | "project";
	title: string;
	description: string;
	url: string;
	tags: string[];
};

export type Grant = {
	title: string;
	issuedBy: string;
	date: string;
	url?: string;
};

export type EducationItem = {
	title: string;
	startDate: string;
	endDate?: string;
	school: string;
	location: string;
	description: string;
	thesis?: string;
	thesisLabel?: string;
	lab?: string;
	supervisors?: string[];
	website?: string;
	currentUni: boolean;
	type: "degree" | "training";
	badges?: Badge[];
};

export type JobItem = {
	title: string;
	startDate: string;
	endDate?: string;
	company: string;
	location: string;
	description: string;
	lab?: string;
	goals: string[];
	website?: string;
	currentJob: boolean;
	badges?: Badge[];
};

export type LanguageItem = {
	name: string;
	level: string;
	description: string;
	show: boolean;
};

export type MenuItem = {
	href: string;
	label: string;
};

export type GenericSkill = {
	name: string;
	description: string;
	icon: string;
};

export type SkillCategoryItem = {
	name: string;
	nameItalic?: boolean;
	description: string;
	icon: string;
	badges?: Badge[];
};

export type SkillCategory = {
	id: string;
	title: string;
	skills: SkillCategoryItem[];
};

export type CommunicationEvent = {
	title: string;
	subtitle?: string;
	lab?: string;
	location?: string;
	date?: string;
	description?: string;
	url?: string;
	logo?: string;
	documentUrl?: string;
	documentLabel?: string;
	featured?: boolean;
};

export type CommunicationSubgroup = {
	title: string;
	items: CommunicationEvent[];
};

export type CommunicationCategory = {
	id: string;
	title: string;
	cover?: string;
	items?: CommunicationEvent[];
	subgroups?: CommunicationSubgroup[];
};

export type LocalizedDictionary = {
	messages: LocaleMessages;
	config: {
		site: SiteConfig;
		me: MeConfig;
	};
	publications: Publication[];
	codeContributions: CodeContribution[];
	grants: Grant[];
	communications: CommunicationCategory[];
	education: EducationItem[];
	jobs: JobItem[];
	languages: LanguageItem[];
	menu: MenuItem[];
	hardSkills: GenericSkill[];
	softSkills: GenericSkill[];
	skillCategories: SkillCategory[];
};
