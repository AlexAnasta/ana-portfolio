import type { Badge } from "./skillCategories";

interface Education {
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
}

const education: Education[] = [
  {
    title: "PhD (Bioinformatics & Cancer Research)",
    startDate: "2023-11-01",
    school: "Institute of Genetics and Development of Rennes (IGDR)",
    location: "Rennes, France",
    description: "Long-read sequencing to investigate circular RNA in melanoma treatment resistance and novel biomarker discovery.",
    thesis: "Long-read sequencing to investigate the role of circular RNA in melanoma treatment resistance and identify novel biomarkers.",
    thesisLabel: "PhD Thesis",
    lab: "Gene Expression and Oncogenesis Team",
    supervisors: ["Yuna Blum", "Thomas Derrien", "Marie-Dominique Galibert"],
    website: "https://igdr.univ-rennes.fr/en",
    currentUni: true,
    type: "degree",
    badges: ["dry lab"],
  },
  {
    title: "Master of Science (Molecular Biology & Biophysics)",
    startDate: "2019-09-01",
    endDate: "2022-02-15",
    school: "Moscow State Academy of Veterinary Medicine and Biotechnology",
    location: "Moscow, Russia",
    description: "FOXO3A gene polymorphism and genetic predisposition to human longevity.",
    thesis: "Development of a method to determine the presence of genetic predisposition to human longevity based on the analysis of FOXO3A gene polymorphism.",
    thesisLabel: "MSc Project",
	lab: "Laboratory of Nuclear Problems",
    supervisors: ["Vita Laga", "Elena Kravchenko"],
    website: "https://international.mgavm.ru/",
    currentUni: false,
    type: "degree",
    badges: ["wet lab", "honours"],
  },
  {
    title: "Bachelor of Science (Genetics & Selection)",
    startDate: "2015-09-01",
    endDate: "2019-06-26",
    school: "Moscow State Academy of Veterinary Medicine and Biotechnology",
    location: "Moscow, Russia",
    description: "FCER1A polymorphisms for predicting risk of IgE-dependent diseases.",
    thesis: "FCER1A polymorphisms (rs2251746 and rs2427837) for predicting risk of IgE-dependent diseases.",
    thesisLabel: "BSc Project",
	lab: "Laboratory of Nuclear Problems",
    supervisors: ["Anatoly Bakai", "Elena Kravchenko"],
    website: "https://international.mgavm.ru/",
    currentUni: false,
    type: "degree",
    badges: ["wet lab", "honours"],
  },
   {
    title: "How to make your research more visible and accessible: publication strategy and ethical aspects",
    startDate: "2024-06-14",
    endDate: "2024-06-14",
    school: "Collège doctoral de Bretagne",
    location: "Rennes, France",
    description: "Strategic tools and ethical frameworks necessary to maximize research visibility through Open Access publishing, digital identity management, and the critical evaluation of predatory publishing practices.",
    website: "https://ed-svs.doctorat-bretagne.fr/fr",
    currentUni: false,
    type: "training",
  },
   {
    title: "Research Integrity in scientific professions",
    startDate: "2024-05-06",
    endDate: "2024-05-07",
    school: "Collège doctoral de Bretagne",
    location: "Rennes, France",
    description: "Research integrity, the mechanisms of scientific misconduct, the ethical frameworks and professional responsibility required to maintain international standards in a competitive research environment.",
    website: "https://ed-svs.doctorat-bretagne.fr/fr",
    currentUni: false,
    type: "training",
  },
  {
    title: "Machine Learning in Python for Bioinformatics",
    startDate: "2023-08-29",
    endDate: "2023-10-07",
    school: "BLASTIM",
    location: "Moscow, Russia",
    description: "Applied machine learning techniques in bioinformatics. Advanced course.",
    website: "https://agency.blastim.ru/educenter",
    currentUni: false,
    type: "training",
    badges: ["dry lab"],
  },
  {
    title: "Summer School on ML in Bioinformatics",
    startDate: "2023-08-28",
    endDate: "2023-08-30",
    school: "Higher School of Economics (HSE)",
    location: "Moscow, Russia",
    description: "Machine learning methods and practical bioinformatics applications.",
    website: "https://www.hse.ru/en/",
    currentUni: false,
    type: "training",
    badges: ["dry lab"],
  },
  {
    title: "NGS Data Analysis",
    startDate: "2023-06-03",
    endDate: "2023-06-09",
    school: "Institute of Synthetic Biology",
    location: "Moscow, Russia",
    description: "Next-generation sequencing data analysis workflows. Advanced course.",
    website: "https://biomedschool.ru/",
    currentUni: false,
    type: "training",
    badges: ["dry lab"],
  },
  {
    title: "Statistics, R and Data Analysis",
    startDate: "2023-03-27",
    endDate: "2023-04-28",
    school: "BLASTIM",
    location: "Moscow, Russia",
    description: "Applied statistics and R-based data analysis for scientific projects. Advanced course.",
    website: "https://agency.blastim.ru/educenter",
    currentUni: false,
    type: "training",
    badges: ["dry lab"],
  },
  {
    title: "Python and R for NGS Data Analysis",
    startDate: "2023-03-25",
    endDate: "2023-03-27",
    school: "Institute of Synthetic Biology",
    location: "Moscow, Russia",
    description: "Python and R for NGS analysis pipelines. Advanced course.",
    website: "https://biomedschool.ru/",
    currentUni: false,
    type: "training",
    badges: ["dry lab"],
  },
  {
    title: "Scientific Presentations",
    startDate: "2020-02-19",
    endDate: "2020-02-20",
    school: "Science Birds",
    location: "Dubna, Russia",
    description: "Communicating scientific results effectively. Advanced course.",
	website: "https://sciencebirds.de/",
    currentUni: false,
    type: "training",
  },
];

export default education;