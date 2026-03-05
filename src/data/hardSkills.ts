interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "Python, Bash and R Scripting",
    description: "Daily use for simulation, analysis automation and reproducible research workflows",
    icon: "tools-fill"
  },
  {
    name: "Long-Read and NGS Analysis",
    description: "Oxford Nanopore and Illumina data processing, QC, mapping and downstream interpretation",
    icon: "nodejs"
  },
  {
    name: "Workflow Orchestration",
    description: "Built reproducible pipelines with Nextflow and HPC execution using SLURM",
    icon: "time-line"
  },
  {
    name: "Reproducible Environments",
    description: "Containerized tools with Conda, Docker and Singularity for community reuse",
    icon: "react"
  },
  {
    name: "Version Control and Collaboration",
    description: "Research development and collaboration with GitHub and GitLab",
    icon: "link"
  }
];

export default hardSkills;