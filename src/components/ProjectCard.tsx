import { Link } from "react-router-dom";
import type { Project } from "../types/project";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation();

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-mint-500 dark:hover:border-mint-500 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-mint-900/20 transition-all duration-300"
    >
      <div className="relative aspect-[16/10] bg-mint-50 dark:bg-gray-800 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={t(`projects.${project.slug}.title`)}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-600 text-sm">
            Preview coming soon
          </div>
        )}
      </div>

      <div className="p-6 bg-white dark:bg-gray-900">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {t(`projects.${project.slug}.title`)}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
          {t(`projects.${project.slug}.description`)}
        </p>
      </div>
    </Link>
  );
}

export default ProjectCard;
