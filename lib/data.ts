import { Briefcase} from "lucide-react";
import PSoftToolsFrontEnd from "@/public/PSoftToolsFrontend.png";
import StockTrackerBackend from "@/public/StockPageBackEnd.png";

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

export const experience = [
    {
        year: "2020",
        title: "Intern",
        location: "NYC Parks Dept",
        description: "Collected, analyzed, and logged environmental and maintenance data for urban parks and recreational areas, ensuring accuracy and consistency\n" +
            " across records.",
        icon: Briefcase,
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
        projectUrl: "https://github.com/tolmiery/PSoft-Tools"

    },
    {
        title: "Stock Tracker",
        description:
            "A sleek web application that simplifies stock analysis by providing real-time trends, historical data, " +
            "and performance insights. all presented through a clean and intuitive interface.",
        tags: ["React", "TypeScript", "Flask", "CSS"],
        imageUrl: StockTrackerBackend,
        projectUrl: "https://github.com/NDViana/Stocktracker/tree/main"

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