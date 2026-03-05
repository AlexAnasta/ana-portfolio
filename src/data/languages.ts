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
		level: "Native",
		description: "I speak, read, and write.",
		show: true,
	},
	{
		name: "French",
		level: "B1",
		description: "I speak fluently and write fluently",
		show: true,
	},
];

export default languages;
