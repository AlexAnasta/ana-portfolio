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
}

const workExperience: WorkExperience[] = [
  {
    title: "PhD Student (Long-Read Transcriptomics & Cancer Research)",
    startDate: "2023-10-01",
    company: "Institute of Genetics and Development of Rennes (IGDR)",
    location: "Rennes, France",
    description: "Long-read transcriptomics and circRNA research in melanoma treatment resistance.",
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
    website: "https://igdr.univ-rennes.fr/en",
    currentJob: true,
    badges: ["dry lab"],
  },
  {
    title: "Research Engineer (Molecular Biology & Bioinformatics)",
    startDate: "2019-04-01",
    endDate: "2023-11-07",
    company: "Joint Institute for Nuclear Research (JINR)",
    location: "Dubna, Russia",
    description: "Combined wet-lab molecular biology and bioinformatics analysis for NGS projects.",
    goals: [
      "Prepared H. sapiens, D. melanogaster, and E. coli samples for molecular workflows.",
      "Performed PCR, RT-PCR, iPCR, and Long-PCR, including primer and TaqMan probe design.",
      "Handled Sanger sequencing analysis and NGS sample preparation (Illumina).",
      "Conducted NGS quality control, trimming, mapping, and variant analysis.",
      "Automated analysis tasks with Bash, R, and Python scripting.",
      "Presented work at conferences, supervised international Master's students, and contributed to patents.",
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
    description: "Supported cell culture activities in molecular biology projects.",
    goals: [
      "Maintained HEK293 mammalian cell cultures.",
      "Supported routine lab operations and documentation.",
      "Contributed to literature review for ongoing projects.",
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
    description: "Assisted with sample preparation for neutron activation analysis.",
    goals: [
      "Prepared plant, moss, and meteorite samples for neutron activation analysis.",
      "Followed laboratory protocols for sample processing and traceability.",
    ],
    website: "https://www.jinr.ru/main-en/",
    currentJob: false,
    badges: ["wet lab"],
  },
];

export default workExperience;