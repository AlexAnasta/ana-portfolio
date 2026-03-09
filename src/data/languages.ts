interface Language {
	name: string;
	level: string;
	description: string;
	show: boolean;
}

const languages: Language[] = [
	{
		name: "Russian",
		level: "Mother tongue",
		description: "Native proficiency in speaking, reading, and writing.",
		show: true,
	},
	{
		name: "English",
		level: "C1",
		description: "I speak, read, and write fluently.",
		show: true,
	},
	{
		name: "French",
		level: "B1",
		description: "I can understand others and express myself in everyday situations, but I am not yet fluent.",
		show: true,
	},
];

export default languages;
