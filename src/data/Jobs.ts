import type { Badge } from "./skillCategories";

interface WorkExperience {
  title: string;
  startDate: string;
  endDate?: string;
  company: string;
  location: string;
  description: string;
  goals: string[];
  currentJob: boolean;
  website?: string;
  badges?: Badge[];
  lab?: string;
  supervisors?: string[];
}

const workExperience: WorkExperience[] = [
  {
    title: "PhD Student (Long-Read Transcriptomics & Cancer Research)",
    startDate: "2023-11-01",
    company: "Institute of Genetics and Development of Rennes (IGDR)",
    location: "Rennes, France",
    description: "Long-read transcriptomics and circRNA research focused on BRAFi resistance in melanoma.",
    lab: "Gene Expression and Oncogenesis Team",
    goals: [
      "Developed in silico simulation frameworks for circRNA ground-truth generation (Python, Bash, R).",
      "Benchmarked bioinformatics tools using standardized performance metrics.",
      "Analyzed Oxford Nanopore long-read sequencing data.",
      "Performed differential expression and isoform profiling in melanoma cell lines.",
      "Identified circRNA candidates as potential biomarkers and therapeutic targets.",
      "Performed data analysis on HPC clusters (SLURM, GenOuest).",
      "Built reproducible workflows with Nextflow and Git-based version control (GitHub, GitLab).",
      "Presented research at conferences and published findings in peer-reviewed journals.",
    ],
    website: "https://igdr.univ-rennes.fr/en",
    currentJob: true,
    badges: ["dry lab"],
  },
  {
    title: "Research Engineer (Molecular Biology & Bioinformatics)",
    startDate: "2019-04-01",
    endDate: "2023-10-27",
    company: "Joint Institute for Nuclear Research (JINR)",
    location: "Dubna, Russia",
    description: "Combined wet-lab molecular biology with bioinformatics analysis in radiobiology and genetics projects",
    lab: "Laboratory of Nuclear Problems",
	goals: [
      "Prepared H. sapiens, D. melanogaster, and E. coli samples for molecular workflows.",
      "Performed PCR, RT-PCR, iPCR, and long range PCR, including primer and TaqMan probe design.",
      "Performed Sanger sequencing analysis and NGS sample preparation (Illumina).",
      "Conducted NGS quality control, trimming, mapping, and variant analysis.",
      "Conducted plasmid design and cloning workflows, including plasmid extraction and bacterial transformation.",
      "Automated analysis tasks with Bash, R, and Python scripting.",
      "Presented work at conferences, supervised international Master's students, and contributed to national patents.",
    ],
    website: "https://www.jinr.ru/main-en/",
    currentJob: false,
    badges: ["wet lab", "dry lab"],
  },
  {
    title: "Laboratory Assistant (Cell Culture)",
    startDate: "2017-09-05",
    endDate: "2019-03-31",
    company: "Joint Institute for Nuclear Research (JINR)",
    location: "Dubna, Russia",
    description: "Assisted with cell culture in a radiobiology project focused on human cell radioprotection.",
    lab: "Laboratory of Nuclear Problems",
	goals: [
      "Maintained HEK293 mammalian cell cultures.",
      "Supported routine lab operations and documentation.",
    ],
    website: "https://www.jinr.ru/main-en/",
    currentJob: false,
    badges: ["wet lab"],
  },
  {
    title: "Laboratory Assistant (Neutron Activation Analysis)",
    startDate: "2016-07-19",
    endDate: "2016-08-30",
    company: "Joint Institute for Nuclear Research (JINR)",
    location: "Dubna, Russia",
    description: "Assisted with sample preparation for neutron activation analysis in ecological studies (ICP Vegetation Programme).",
    lab: "Laboratory of Neutron Physics",
	goals: [
      "Prepared plant, moss, and meteorite samples for neutron activation analysis.",
      "Followed laboratory protocols for sample processing.",
    ],
    website: "https://www.jinr.ru/main-en/",
    currentJob: false,
    badges: ["wet lab"],
  },
];

export default workExperience;