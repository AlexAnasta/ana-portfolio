import type { ImageMetadata } from "astro";

export interface Publication {
  type: "paper" | "patent";
  title: string;
  year: number;
  venue: string;
  summary: string;
  url: string;
  tags: string[];
  cover: string; // path relative to src/
  pciUrl?: string;
}

export interface CodeContribution {
  type: "workflow" | "container" | "project";
  title: string;
  description: string;
  url: string;
  tags: string[];
}

export interface Grant {
  title: string;
  issuedBy: string;
  date: string;
  url?: string;
}

export const grants: Grant[] = [
  {
    title: "Doctoral Fellowship",
    issuedBy: "French Ministry of Higher Education and Research",
    date: "Nov 2023",
  },
  {
    title: "SFBI Travel Grant",
    issuedBy: "SFBI",
    date: "Jun 2025",
    url: "https://www.sfbi.fr",
  },
];

export const publications: Publication[] = [
  {
    type: "paper",
    title: "Benchmarking circRNA Detection Tools from Long-Read Sequencing",
    year: 2025,
    venue: "bioRxiv · PCI Genomics · Peer Community Journal",
    summary: "Circular RNAs (circRNAs) are unique non-coding RNAs with covalently closed loop structures formed through backsplicing events. This study is the first to independently benchmark available detection tools using long-read sequencing data using biologically driven simulation.",
    url: "https://www.biorxiv.org/content/10.1101/2025.04.17.649290v3",
    tags: ["circRNA", "Long-Read Sequencing", "Bioinformatics", "RNA Research", "Genomics"],
    cover: "/images/benchmarking_circrna/pdf_overview.jpg",
    pciUrl: "https://doi.org/10.24072/pci.genomics.100439",
  },
  {
    type: "patent",
    title: "Method for Determining Genetic Predisposition to Human Longevity",
    year: 2020,
    venue: "Russian Federation Patent · RU2741838",
    summary: "A cost-effective biotechnological method for predicting human longevity genetic predisposition based on the rs2802288 locus of the FOXO3A gene.",
    url: "https://www1.fips.ru/ofpstorage/Doc/IZPM/RUNWC1/000/000/002/741/838/%D0%98%D0%97-02741838-00001/document.pdf",
    tags: ["Longevity", "FOXO3A", "rs2802288", "Molecular Diagnostics"],
    cover: "/images/human_longevity/pdf_overview.jpg",
  },
  {
    type: "patent",
    title: "Method for Predicting Risk of IgE-Dependent Diseases",
    year: 2019,
    venue: "Russian Federation Patent · RU2723390",
    summary: "A molecular diagnostic method for predicting risk of IgE-dependent diseases through serum-based genetic analysis of FCER1A polymorphisms.",
    url: "https://www1.fips.ru/ofpstorage/Doc/IZPM/RUNWC1/000/000/002/723/390/%D0%98%D0%97-02723390-00001/document.pdf",
    tags: ["Immunoglobulin E", "IgE", "FCER1A", "rs2251746", "rs2427837", "Molecular Diagnostics"],
    cover: "/images/immunoglobulin/pdf_overview.jpg",
  },
];

export const codeContributions: CodeContribution[] = [
  {
    type: "workflow",
    title: "circRNA Simulation Pipeline",
    description: "Nextflow pipeline for in silico simulation of circular RNAs to generate ground-truth datasets for benchmarking detection tools.",
    url: "https://github.com/aerusakovich/", // TODO: fill in repo URL
    tags: ["Nextflow", "Python", "circRNA", "Simulation"],
  },
  {
    type: "workflow",
    title: "Long-Read circRNA Analysis Pipeline",
    description: "End-to-end Nextflow workflow for Oxford Nanopore long-read transcriptomics analysis, including isoform detection and differential expression.",
    url: "https://github.com/aerusakovich/", // TODO: fill in repo URL
    tags: ["Nextflow", "ONT", "Long-read", "Transcriptomics"],
  },
  {
    type: "container",
    title: "Patched Tool Containers",
    description: "Docker/Singularity containers with patched versions of circRNA detection tools for reproducible benchmarking in HPC environments.",
    url: "https://github.com/aerusakovich/", // TODO: fill in repo URL
    tags: ["Docker", "Singularity", "HPC", "Reproducibility"],
  },
];