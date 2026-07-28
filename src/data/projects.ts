import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Interactive Resume",
    description:
      "This project is a modern, interactive resume built as a single-page web application. It combines clean UI design with dynamic JavaScript behavior to create an engaging user experience.The goal of this project was to go beyond a traditional CV and build a visually appealing, responsive, and interactive resume that reflects both technical and design skills.",
    tech: ["JavaScript (ES6+)", "HTML5", "CSS3", "IntersectionObserverAPI"],

    liveUrl: "https://saftaclaudia.github.io/interactive-resume/",
    githubUrl: "https://github.com/saftaclaudia/interactive-resume",
  },
  {
    id: "project-2",
    title: "MediTrack",
    description:
      "MediTrack is a full-stack web application designed for women 40+ to take control of their health — track recommended medical exams, manage appointments, monitor daily nutrition, log physical activity, and stay on top of hydration goals.",
    tech: [
      "React 19 + TypeScript",
      "Vite 7",
      "Redux Toolkit",
      "Zustand",
      "Axios",
      "TailwindCss",
      "React Router v7",
      "Lucide React",
      "Recharts",
      "i18next +react-i18next",
      "@react-oauth/google",
      "date-fns",
      "Node.js + Express 4",
      "MongoDB + Mongoose 8",
      "JSON Web Tokens (JWT)",
      "bcryptjs",
      "nodemailer",
      "google-auth-library",
      "node-cron",
      "express-rate-limit",
      "express-validator",
      "dotenv",
      "cors",
    ],
    githubUrl: "https://github.com/saftaclaudia/meditrack-app",
  },
];
