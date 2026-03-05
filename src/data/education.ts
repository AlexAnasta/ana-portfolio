interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const education: Education[] = [
    {
        title: "PhD Student - Bioinformatics, Cancer Research, Molecular Biology",
        startDate: "2023-11-01",
        school: "Institute of Genetics and Development of Rennes (IGDR)",
        location: "Rennes, France",
        description: "Thesis: Long-read sequencing to investigate the role of circular RNA in melanoma treatment resistance and identify novel biomarkers.",
        currentUni: true,
    },
    {
        title: "Master of Science - Molecular Biology, Biophysics",
        startDate: "2019-09-01",
        endDate: "2022-02-15",
        school: "Moscow State Academy of Veterinary Medicine and Biotechnology - MVA by K.I. Skryabin",
        location: "Moscow, Russia",
        description: "Honours degree. Thesis on FOXO3A gene polymorphism and genetic predisposition to human longevity.",
        currentUni: false,
    },
    {
        title: "Bachelor of Science - Genetics, Selection",
        startDate: "2015-09-01",
        endDate: "2019-06-26",
        school: "Moscow State Academy of Veterinary Medicine and Biotechnology - MVA by K.I. Skryabin",
        location: "Moscow, Russia",
        description: "Honours degree. Thesis on FCER1A polymorphisms (rs2251746 and rs2427837) for predicting risk of IgE-dependent diseases.",
        currentUni: false,
    },
    {
        title: "Machine Learning in Python for Solving Bioinformatics Problems (Advanced Course)",
        startDate: "2023-08-29",
        endDate: "2023-10-07",
        school: "BLASTIM",
        location: "Moscow, Russia",
        description: "Advanced training focused on applied machine learning techniques in bioinformatics.",
        currentUni: false,
    },
    {
        title: "Summer School on ML in Bioinformatics",
        startDate: "2023-08-28",
        endDate: "2023-08-30",
        school: "National Research University Higher School of Economics (HSE)",
        location: "Moscow, Russia",
        description: "Intensive school on machine learning methods and practical bioinformatics applications.",
        currentUni: false,
    },
    {
        title: "NGS Data Analysis (Advanced Course)",
        startDate: "2023-06-03",
        endDate: "2023-06-09",
        school: "Institute of Synthetic Biology",
        location: "Moscow, Russia",
        description: "Advanced training on next-generation sequencing data analysis workflows.",
        currentUni: false,
    },
    {
        title: "Statistics, R and Data Analysis (Advanced Course)",
        startDate: "2023-03-27",
        endDate: "2023-04-28",
        school: "BLASTIM",
        location: "Moscow, Russia",
        description: "Applied statistics and R-based data analysis for scientific projects.",
        currentUni: false,
    },
    {
        title: "Python and R for NGS Data Analysis (Advanced Course)",
        startDate: "2023-03-25",
        endDate: "2023-03-27",
        school: "Institute of Synthetic Biology",
        location: "Moscow, Russia",
        description: "Practical training on Python and R usage for NGS analysis pipelines.",
        currentUni: false,
    },
    {
        title: "Scientific Presentations (Advanced Course)",
        startDate: "2020-02-19",
        endDate: "2020-02-20",
        school: "Science Birds",
        location: "Online",
        description: "Training focused on communicating scientific results effectively.",
        currentUni: false,
    },
];

export default education;