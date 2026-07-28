import type { Project } from "../types/project";
import { FaGithub } from "react-icons/fa6";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const visibleTech = project.tech.slice(0, 5);
  const remainingCount = project.tech.length - visibleTech.length;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-mint-500 dark:hover:border-mint-500 transition-colors">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {visibleTech.map((techName) => (
          <span
            key={techName}
            className="text-xs font-medium bg-mint-100 dark:bg-gray-800 text-mint-700 dark:text-mint-300 px-2.5 py-1 rounded-full"
          >
            {techName}
          </span>
        ))}
        {remainingCount > 0 && (
          <span className="text-sx font-medium text-gray-500 dark:text-gray-400 px-2.5 py-1">
            +{remainingCount} more
          </span>
        )}
      </div>

      <div className="flex items-center gap-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-300 hover:text-mint-700 dark:hover:text-mint-300 transition-colors"
        >
          <FaGithub size={16} />
          Code
        </a>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-300 hover:text-mint-700 dark:hover:text-mint-300 transition-colors"
          >
            <ExternalLink size={16} />
            Live
          </a>
        )}
      </div>
    </div>
  );
}
export default ProjectCard;
