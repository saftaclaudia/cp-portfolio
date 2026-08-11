import { Link } from "react-router-dom";
import type { Project } from "../types/project";
import { useTranslation } from "react-i18next";
import { ImageOff, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation();
  const previewTags = project.tech[0]?.items.slice(0, 3) ?? [];

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-mint-500 dark:hover:border-mint-500 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-mint-900/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 dark:focus-visible:ring-offset-gray-950 transition-all duration-300"
    >
      <div className="relative aspect-[16/10] bg-mint-50 dark:bg-gray-800 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={t(`projects.${project.slug}.title`)}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-mint-50 to-mint-100 dark:from-gray-800 dark:to-gray-900 text-mint-700/60 dark:text-gray-500">
            <ImageOff size={28} strokeWidth={1.5} />
            <span className="text-sm font-medium">
              {t("projectCard.comingSoon")}
            </span>
          </div>
        )}

        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-coral-500 text-white flex items-center justify-center shadow-lg opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
          <ArrowUpRight size={20} />
        </div>
      </div>

      <div className="p-6 bg-white dark:bg-gray-900">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {t(`projects.${project.slug}.title`)}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4">
          {t(`projects.${project.slug}.description`)}
        </p>
        <div className="flex flex-wrap gap-2">
          {previewTags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium bg-mint-100 dark:bg-gray-800 text-mint-700 dark:text-mint-300 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
