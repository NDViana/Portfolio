
import PSoftToolsFrontEnd from "@/public/PSoftToolsFrontend.png";
import StockTrackerBackend from "@/public/StockPageBackEnd.png"
export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
]


export const projectsData = [
    {
        title: "PSoft Tools",
        description:
            "An open-source educational platform designed to help students grasp Principles of Software concepts. " +
            "It features automated problem generation, solution verification, and visualizations of common design patterns.",

        tags: ["React", "TypeScript", "Python", "Git", "Node.js"],
        imageUrl: PSoftToolsFrontEnd,
    },
    {
        title: "Stock Tracker",
        description:
            "A sleek web application that simplifies stock analysis by providing real-time trends, historical data, " +
            "and performance insights. all presented through a clean and intuitive interface.",
        tags: ["React", "TypeScript", "Flask", "CSS"],
        imageUrl: StockTrackerBackend,
    },


]

export const skillsData = [
    "C++",
    "Java",
    "Python",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Flask",
] as const;