import type { Project } from "../types/project";
import interactiveResumeImg from "../assets/projects/preview_interactive-resume.png";

export const projects: Project[] = [
  {
    id: "project-1",
    slug: "interactive-resume",
    tech: [
      {
        category: "Tech Stack",
        items: [
          "JavaScript (ES6+)",
          "HTML5",
          "CSS3",
          "IntersectionObserverAPI",
        ],
      },
    ],
    liveUrl: "https://saftaclaudia.github.io/interactive-resume/",
    githubUrl: "https://github.com/saftaclaudia/interactive-resume",
    image: interactiveResumeImg,
  },
  {
    id: "project-2",
    slug: "meditrack",
    tech: [
      {
        category: "Frontend",
        items: [
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
        ],
      },
      {
        category: "Backend",
        items: [
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
      },
    ],
    githubUrl: "https://github.com/saftaclaudia/meditrack-app",
  },
];
