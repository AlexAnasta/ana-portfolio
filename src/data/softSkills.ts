interface SoftSkill {
    name: string;
    description: string;
    icon: string;
}

const softSkills: SoftSkill[] = [
    {
        name: "Scientific Communication",
        description: "Presented work at conferences, festivals and internal seminars.",
        icon: "message-2-fill"
    },
    {
        name: "Study Design",
        description: "Planned experiments and analytical strategies for molecular biology projects.",
        icon: "tools-fill"
    },
    {
        name: "Collaboration",
        description: "Worked across wet-lab and bioinformatics teams to deliver end-to-end studies.",
        icon: "group-fill"
    },
    {
        name: "Problem Solving",
        description: "Solved complex data and experimental challenges in multidisciplinary contexts.",
        icon: "message-2-fill"
    },
    {
        name: "Time Management",
        description: "Balanced research, publications, presentations and training milestones.",
        icon: "time-fill"
    }
];

export default softSkills;