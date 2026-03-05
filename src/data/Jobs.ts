/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
	title: string;
	startDate: string;
	endDate?: string;
	company: string;
	location: string;
	description: string;
	goals: string[];
	currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience: WorkExperience[] = [
	{
		title: "PhD Student (Long-Read Transcriptomics & Cancer Research)",
		startDate: "2023-10-01",
		company: "Institute of Genetics and Development of Rennes (IGDR)",
		location: "Rennes, France",
		description:
			"Long-read transcriptomics and circRNA research in melanoma treatment resistance.",
		goals: [
			"Developed in silico simulation frameworks for circRNA ground-truth generation (Python, Bash, R).",
			"Benchmarked bioinformatics tools using standardized performance metrics.",
			"Analyzed Oxford Nanopore long-read sequencing data.",
			"Performed differential expression and isoform profiling in melanoma cell lines.",
			"Identified circRNA candidates as potential biomarkers and therapeutic targets.",
			"Executed data analysis on HPC clusters (SLURM, GenOuest).",
			"Built reproducible workflows with Nextflow and version control (GitHub, GitLab).",
			"Presented research at conferences and published findings in peer-reviewed journals.",
		],
		currentJob: true,
	},
	{
		title: "Research Engineer (Molecular Biology & Bioinformatics)",
		startDate: "2019-04-01",
		endDate: "2023-11-07",
		company: "Joint Institute for Nuclear Research (JINR)",
		location: "Dubna, Russia",
		description:
			"Combined wet-lab molecular biology and bioinformatics analysis for NGS projects.",
		goals: [
			"Prepared H. sapiens, D. melanogaster, and E. coli samples for molecular workflows.",
			"Performed PCR, RT-PCR, iPCR, and Long-PCR, including primer and TaqMan probe design.",
			"Handled Sanger sequencing analysis and NGS sample preparation (Illumina).",
			"Conducted NGS quality control, trimming, mapping, and variant analysis.",
			"Automated analysis tasks with Bash, R, and Python scripting.",
			"Presented work at conferences, supervised international Master's students, and contributed to patents.",
		],
		currentJob: false,
	},
	{
		title: "Laboratory Assistant (Cell Culture)",
		startDate: "2017-09-05",
		endDate: "2019-03-31",
		company: "Joint Institute for Nuclear Research (JINR)",
		location: "Dubna, Russia",
		description:
			"Supported cell culture activities in molecular biology projects.",
		goals: [
			"Maintained HEK293 mammalian cell cultures.",
			"Supported routine lab operations and documentation.",
			"Contributed to literature review for ongoing projects.",
		],
		currentJob: false,
	},
	{
		title: "Laboratory Assistant (Neutron Activation Analysis)",
		startDate: "2016-07-19",
		endDate: "2016-08-30",
		company: "Joint Institute for Nuclear Research (JINR)",
		location: "Dubna, Russia",
		description:
			"Assisted with sample preparation for neutron activation analysis.",
		goals: [
			"Prepared plant, moss, and meteorite samples for neutron activation analysis.",
			"Followed laboratory protocols for sample processing and traceability.",
		],
		currentJob: false,
	},
];
export default workExperience;
