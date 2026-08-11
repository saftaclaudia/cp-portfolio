import { useTranslation } from "react-i18next";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiGit,
} from "react-icons/si";

const skills = [
  { icon: SiReact, label: "React" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiJavascript, label: "JavaScript" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: SiHtml5, label: "HTML5" },
  { icon: SiCss, label: "CSS3" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiGit, label: "Git" },
];

function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="px-8 py-24 max-w-6xl mx-auto">
      <p className="text-coral-500 dark:text-coral-300 font-semibold text-sm tracking-wide uppercase text-center mb-3">
        {t("skills.eyebrow")}
      </p>
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 text-center">
        {t("skills.title")}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-center max-w-md mx-auto mb-14">
        {t("skills.subtitle")}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.label}
              className="flex flex-col items-center gap-3 p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-mint-500 dark:hover:border-mint-500 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-mint-700/20 transition-all duration-300"
            >
              <Icon size={32} className="text-mint-700 dark:text-mint-300" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Skills;
