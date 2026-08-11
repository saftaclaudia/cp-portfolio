import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="px-8 py-24 max-w-6xl mx-auto">
      <p className="text-coral-500 dark:text-coral-300 font-semibold text-sm tracking-wide uppercase text-center mb-3">
        {t("projects.eyebrow")}
      </p>
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 text-center">
        {t("header.projects")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
