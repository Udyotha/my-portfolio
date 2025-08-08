import {
    Code2,
    GraduationCap,
    Briefcase,
    Award,
    Rocket,
    Heart,
    Coffee,
    BookOpen,
    Zap,
    Database,
    Server,
    Cloud,
    Mail,
    MapPin,
    Phone
} from 'lucide-react';

import { FiGithub, FiLinkedin, FiCodesandbox } from 'react-icons/fi';

import PROJECT_IMG_1 from "../assets/images/project-1.png";
import PROJECT_IMG_2 from "../assets/images/project-2.png";
import PROJECT_IMG_3 from "../assets/images/project-3.png";
import PROJECT_IMG_4 from "../assets/images/project-4.jpg";

export const SKILLS_CATEGORY = [
    {
        title: "Frontend",
        icon: Code2,
        description: "crafting beautiful, responsive user interfaces",
        skills: [
            { name: "JavaScript", level: 95, color: "bg-blue-500" },
            { name: "TypeScript", level: 90, color: "bg-blue-600" },
            { name: "React", level: 88, color: "bg-gray-800" },
            { name: "Angular", level: 92, color: "bg-cyan-500" },
            { name: "Bootstrap", level: 85, color: "bg-pink-500" },
        ],
    },
    {
        title: "Backend",
        icon: Server,
        description: "Building robust server-side solutions",
        skills: [
            { name: "Node.js", level: 90, color: "bg-green-500" },
            { name: "GraphQL", level: 88, color: "bg-gray-700" },
            { name: "Prisma", level: 85, color: "bg-yellow-500" },
            { name: "Python", level: 80, color: "bg-pink-600" },
            { name: "REST APIs", level: 92, color: "bg-orange-500" },
        ],
    },
    {
        title: "Database",
        icon: Database,
        description: "Managing and optimizing data storage",
        skills: [
            { name: "PostgreSQL", level: 88, color: "bg-green-600" },
            { name: "pgAdmin", level: 80, color: "bg-orange-600" },
            { name: "DBeaver", level: 80, color: "bg-gray-600" },
            { name: "Firebase", level: 78, color: "bg-yellow-600" },
        ],
    },
    {
        title: "DevOps",
        icon: Cloud,
        description: "Deploying and scaling applications",
        skills: [
            { name: "GitLab", level: 82, color: "bg-blue-600" },
            { name: "CI/CD", level: 78, color: "bg-orange-600" },
            { name: "Terraform", level: 90, color: "bg-gray-900" },
            { name: "Git", level: 95, color: "bg-orange-700" },
        ],
    },
];

export const TECH_STACK = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "Webpack",
    "Vite",
    "Jest",
    "Playwright",
    "Figma"
];

export const STATS = [
    { number: "3", label: "Personal Projects Completed"},
    { number: "2+", label: "Years Experience"},
    { number: "10+", label: "Technologies"},
    { number: "100%", label: "Stakeholder satisfaction"},
];

export const PROJECTS = [
    {
        id: 1,
        title: "Car advertisement and price prediction system for sri lanka",
        description: "A web application that allows users to view and post car advertisements, with a machine learning model to predict car prices based on various features.",
        image:PROJECT_IMG_1,
        tags: ["JavaScript", "Python", "Django", "CSS", "Machine Learning"],
        liveUrl: null,
        githubUrl: "https://github.com/Udyotha/SLCarPricePredictionV2",
        featured: false,
        category: "Full Stack"
    },
    {
        id: 2,
        title: "Inventory management system for LTL transformers",
        description: "A java application for managing inventory and tracking shipments for a transformer company",
        image: PROJECT_IMG_2,
        tags: ["Java", "MySQL"],
        liveUrl: null,
        githubUrl: "https://github.com/Udyotha/InventoryManagementSystem",
        featured: false,
        category: "Desktop Application"
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "A personal portfolio website built with React and Tailwind CSS.",
        image: PROJECT_IMG_3,
        tags: ["React", "Tailwind", "Framer Motion"],
        liveUrl: "https://udyotha.github.io/my-portfolio/",
        githubUrl: "https://github.com/Udyotha/my-portfolio",
        featured: false,
        category: "Frontend"
    },

];

export const JOURNEY_STEPS = [
    {
        year: "2018",
        title: "BSc(Hons) in Information Technology",
        company: "General Sir John Kotelawala Defence University",
        description : "This program included modules covering the core areas of IT along with two software projects. The projects I completed are an Inventory System for a Construction Company and an Advertisement and Price Prediction System for Sri Lanka",
        icon: GraduationCap,
        color: "bg-blue-500"
    },
    {
        year: "2021",
        title: "Software Engineer Intern",
        company: "Zebra Technologies",
        description : "I developed mobile applications using Java and Firebase within Android Studio. During this time, I gained valuable experience in software engineering best practices and agile team methodologies commonly used in the industry",
        icon: Code2,
        color: "bg-green-500"
    },
    {
        year: "2022",
        title: "Quality Assuarance Engineer",
        company: "GTN Technologies",
        description : "My role at web technologies team involved maintaining the quality of the Trading Application by discovering bugs, confirming feature implementations, and creating automated tests using Playwrigh",
        icon: Briefcase,
        color: "bg-purple-500"
    },
    {
        year: "2023",
        title: "Associate Software Engineer",
        company: "GTN Technologies",
        description : "In this role, I began full-stack development using React and Node.js, working primarily with TypeScript and JavaScript. On the frontend, in addition to JavaScript and TypeScript, I utilized JSX, Bootstrap, and CSS to build intuitive user interfaces. For the backend, besides JS and TS, I worked with Prisma and GraphQL. I managed databases using PostgreSQL. During my time as an Associate Software Engineer, I fixed over 50 bugs, added more than 5 new features, and enhanced existing functionalities",
        icon: Briefcase,
        color: "bg-orange-500"
    },
    {
        year: "2024",
        title: "Software Engineer",
        company: "GTN Technologies",
        description : "In this role, I continued to fulfill the responsibilities of an Associate Software Engineer while expanding my skills in DevOps. I deployed services using GitLab CI/CD pipelines and created and managed AWS infrastructure with Terraform. Additionally, I mentored junior developers and conducted code reviews to uphold software engineering best practices and enhance codebase performance.During my time as a Software Engineer, I fixed over 100 bugs, implemented more than 7 new features, deployed 10+ services following DevOps practices, and built the infrastructure for 5+ services.",
        icon: Briefcase,
        color: "bg-cyan-500"
    },
];

export const PASSIONS = [
    {
        icon: Heart,
        title: "User Experience",
        description: "Crafting intuitive and engaging user experiences.",
    },
    {
        icon: Coffee,
        title: "Problem Solving",
        description: "Turning challenges into opportunities.",
    },
];

export const SOCIAL_LINKS = [
    {
        name: "GitHub",
        icon: FiGithub,
        url: "https://github.com/Udyotha",
        color: "hover: text-gray-400",
        bgColor: "hover:bg-gray-800",
    },
    {
        name: "LinkedIn",
        icon: FiLinkedin,
        url: "https://www.linkedin.com/in/udyotha-sankalpana-534710152/",
        color: "hover: text-blue-400",
        bgColor: "hover:bg-blue-500/10",
    },
    {
        name: "LeetCode",
        icon: FiCodesandbox,
        url: "https://leetcode.com/Udyotha",
        color: "hover: text-yellow-400",
        bgColor: "hover:bg-yellow-500/10",
    },
    {
        name: "Email",
        icon: Mail,
        url: "mailto:udyotha@gmail.com",
        color: "hover: text-green-400",
        bgColor: "hover:bg-green-500/10",
    },
];

export const CONTACT_INFO = [
    {
        icon: MapPin,
        label: "Location",
        value: "Maharagama, Sri Lanka",
    },
    {
        icon: Mail,
        label: "Email",
        value: "udyotha@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+94 71 655 1333",
    },
];