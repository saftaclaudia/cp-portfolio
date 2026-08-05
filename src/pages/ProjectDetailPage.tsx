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

  return (
    <div className="max-w-4xl mx-auto px-8 py-16">
      <Link
        to="/#projects"
        className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-mint-700 dark:hover:text-mint-300 transition-colors mb-8"
      >
        <ArrowLeft size={16} />
        Back to projects
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

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {t(`projects.${project.slug}.title`)}
      </h1>
      <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
        {t(`projects.${project.slug}.description`)}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map((techName) => (
          <span
            key={techName}
            className="text-sm font-medium bg-mint-100 dark:bg-gray-800 text-mint-700 dark:text-mint-300 px-3 py-1.5 rounded-full"
          >
            {techName}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
        >
          <FaGithub size={18} />
          View Code
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-900 dark:text-white font-medium underline underline-offset-4 hover:text-mint-700 dark:hover:text-mint-300 transition-colors"
          >
            <ExternalLink size={18} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectDetailPage;
