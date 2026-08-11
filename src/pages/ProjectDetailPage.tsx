import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects } from "../data/projects";
import { useTranslation } from "react-i18next";

function ProjectDetailPage() {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const primaryButtonClass =
    "flex items-center gap-2 bg-coral-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-coral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 dark:focus-visible:ring-offset-gray-950 transition-colors";
  const secondaryButtonClass =
    "rounded-sm flex items-center gap-2 text-gray-900 dark:text-white font-medium underline underline-offset-4 hover:text-mint-700 dark:hover:text-mint-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500 transition-colors";

  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <Link
        to="/#projects"
        className="group rounded-sm inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-mint-700 dark:hover:text-mint-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500 transition-colors mb-8"
      >
        <ArrowLeft
          size={16}
          className="transition-transform duration-200 group-hover:-translate-x-1"
        />
        {t("projectDetail.back")}
      </Link>

      {project.image && (
        <div className="rounded-2xl overflow-hidden mb-8 border border-gray-200 dark:border-gray-800">
          <img
            src={project.image}
            alt={t(`projects.${project.slug}.title`)}
            className="w-full h-auto"
          />
        </div>
      )}

      <p className="text-coral-500 dark:text-coral-300 font-semibold text-sm tracking-wide uppercase mb-2">
        {t("projectDetail.eyebrow")}
      </p>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {t(`projects.${project.slug}.title`)}
      </h1>
      <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
        {t(`projects.${project.slug}.description`)}
      </p>

      <div className="mb-8">
        {project.tech.map((group) => (
          <div key={group.category} className="mb-4 last:mb-0">
            <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-2">
              <span className="w-3 h-0.5 rounded-full bg-mint-500" />
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((techName) => (
                <span
                  key={techName}
                  className="text-sm font-medium bg-mint-100 dark:bg-gray-800 text-mint-700 dark:text-mint-300 px-3 py-1.5 rounded-full"
                >
                  {techName}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-6">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={primaryButtonClass}
          >
            <ExternalLink size={18} />
            {t("projectDetail.liveDemo")}
          </a>
        )}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={
            project.liveUrl ? secondaryButtonClass : primaryButtonClass
          }
        >
          <FaGithub size={18} />
          {t("projectDetail.viewCode")}
        </a>
      </div>
    </div>
  );
}

export default ProjectDetailPage;
