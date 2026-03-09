export type Badge = "wet lab" | "dry lab";

export interface Skill {
  name: string;
  nameItalic?: boolean;
  description: string;
  icon: string;
  badges?: Badge[];
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "bioinformatics",
    title: "Bioinformatics",
    skills: [
      { name: "Coding & Scripting", description: "Python, R, Bash.", icon: "coding", badges: ["dry lab"] },
      { name: "Sanger & NGS Analysis", description: "Sanger sequencing data analysis, Illumina data analysis, quality control, trimming, mapping, variant calling.", icon: "ngs", badges: ["wet lab", "dry lab"] },
      { name: "Long-Read Sequencing", description: "Oxford Nanopore (ONT), long-read transcriptomics, long-read data analysis.", icon: "longRead", badges: ["dry lab"] },
      { name: "Transcriptomics & RNA Analysis", description: "Differential expression, isoform profiling, circRNA analysis.", icon: "transcriptomics", badges: ["wet lab", "dry lab"] },
      { name: "Benchmarking & Simulation", description: "<em>In silico</em> simulation frameworks, ground-truth generation, benchmarking, performance metrics.", icon: "benchmarking", badges: ["dry lab"] },
      { name: "Workflow & Infrastructure", description: "HPC, SLURM, Nextflow, GitHub, GitLab, Conda, Docker, Singularity, reproducible workflows.", icon: "workflow", badges: ["dry lab"] },
    ],
  },
  {
    id: "wetLab",
    title: "Wet Lab",
    skills: [
      { name: "PCR-Based Methods", description: "PCR, RT-PCR, iPCR, Long-PCR.", icon: "pcr", badges: ["wet lab"] },
      { name: "Primer & Probe Design", description: "Primer design, TaqMan probe design.", icon: "primerProbe", badges: ["wet lab"] },
      { name: "Sanger & NGS Sample Preparation", description: "Sanger sequencing, Illumina library and sample preparation.", icon: "sequencingLab", badges: ["wet lab", "dry lab"] },
      { name: "Molecular Cloning", description: "Plasmid construction, cloning, plasmid extraction.", icon: "cloning", badges: ["wet lab"] },
      { name: "Cell Culture", description: "Mammalian cell culture, HEK293 maintenance.", icon: "cellCulture", badges: ["wet lab"] },
      { name: "Sample Preparation", description: "<em>H.sapiens</em>, <em>D.melanogaster</em>, <em>E. coli</em>, plant, moss, and meteorite sample preparation.", icon: "samplePrep", badges: ["wet lab"] },
    ],
  },
  {
    id: "experience",
    title: "Experience With",
    skills: [
      { name: "H. sapiens", nameItalic: true, description: "Blood, serum, buccal epithelium, human genetic diagnostics, sample preparation and analysis.", icon: "human", badges: ["wet lab", "dry lab"] },
      { name: "D. melanogaster", nameItalic: true, description: "DNA, RNA, sample preparation and analysis.", icon: "drosophila", badges: ["wet lab", "dry lab"] },
      { name: "E. coli", nameItalic: true, description: "Sample preparation, plasmid work.", icon: "ecoli", badges: ["wet lab"] },
      { name: "HEK293", description: "Mammalian cell culture, cell maintenance.", icon: "hek293", badges: ["wet lab"] },
      { name: "Melanoma cell lines", nameItalic: true, description: "Data analysis for sensitive/resistant models, transcriptomics, circRNA.", icon: "melanoma", badges: ["dry lab"] },
      { name: "Environmental samples", description: "Plants, mosses, meteorites: sample preparation for neutron activation analysis.", icon: "environmental", badges: ["wet lab"] },
    ],
  },
  {
    id: "softSkills",
    title: "Soft Skills",
    skills: [
      { name: "Scientific Communication", description: "Conference presentations, seminar talks, interdisciplinary communication, public science communication.", icon: "sciComm" },
      { name: "Scientific Writing", description: "Manuscript preparation, publication writing, technical writing, patent writing.", icon: "writing" },
      { name: "Research Design", description: "Literature review, hypothesis development, experimental design, data interpretation.", icon: "researchDesign" },
      { name: "Education", description: "Masters student supervision, practical training, knowledge transfer.", icon: "teaching" },
      { name: "Project Management", description: "Planning, prioritization, independent project execution across wet-lab and bioinformatics tasks.", icon: "projectManagement" },
      { name: "Organisation", description: "Conference and event organisation, visual design, logo creation, coordination of activities.", icon: "organisation" },
    ],
  },
];

export default skillCategories;