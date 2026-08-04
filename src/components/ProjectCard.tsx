import { Link } from "react-router-dom";
import type { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-mint-500 dark:hover:border-mint-500 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-mint-900/20 transition-all duration-300"
    >
      <div className="relative aspect-[16/10] bg-gray-100 dark:bg-gray-800 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600 text-sm">
            Preview coming soon
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <h3 className="absolute bottom-4 left-5 text-xl font-bold text-white">
          {project.title}
        </h3>
      </div>

      <div className="p-6 bg-white dark:bg-gray-900">
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
    </Link>
  );
}

export default ProjectCard;
