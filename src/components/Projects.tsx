import { projects } from "../data/project";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="px-8 py-16 max-w 6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 darj:text0white mb-2 text-center">
        {t("header.projects")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
