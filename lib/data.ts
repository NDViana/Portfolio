import { Briefcase} from "lucide-react";
import PSoftToolsFrontEnd from "@/public/PSoftToolsFrontend.png";
import racetrack_padded_gif from "@/public/racetrack_padded_final.gif";
import racetrack_padded_static from "@/public/racetrack_padded_static.png";
import BarbellBenders from "@/public/BarbellBenders.png";
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
        title: "RL Racetrack",
        description:
            "This project implements a Q-learning agent that learns to drive a car around a racetrack. The agent learns to navigate from a starting line to a finish line while avoiding going off-track. The environment is built using a custom Gymnasium-compatible interface with Pygame visualization.",
        tags: ["Python", "Q-learning", "Reinforcement Learning", "Pygame"],
        imageUrl: racetrack_padded_static,
        imageUrlHover: racetrack_padded_gif,
        projectUrl: "https://github.com/NDViana/RLRacetrack" // Update with your actual repo URL
    },
    {
        title: "Barbell Benders",
        description: "A full workout tracker backend with JWT authentication, PostgreSQL integration, and RESTful APIs for managing user accounts and workouts. Deployed with Docker and documented via Swagger UI.",
        tags: ["Java", "Spring Boot", "Spring Data JPA", "PostgreSQL", "Swagger", "Maven"],
        imageUrl: BarbellBenders,
        projectUrl: "https://github.com/NDViana/Barbell-Benders-Backend"
    }


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
    "PostgreSQL",
    "Spring Boot",
    "Swagger",
    "Q-learning",
    "Reinforcement Learning",
    "Pygame",
] as const;
