import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center pc-8 bg-gray-50 dark:bg-gray-950">
      <p className="text-mint-700 dark:text-mint-300 text-lg mb-2">
        {t("hero.greeting")}
      </p>
      <h1 className="tex-5xl font-bold text-gray-900 dark:text-white mb-4">
        {t("hero.name")}
      </h1>
      <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-6">
        {t("hero.title")}
      </h2>
      <p className="text-gray-600 dark: text-gray-00 max-w-xl mb-8">
        {t("hero.description")}
      </p>
      <button
        onClick={scrollToProjects}
        className="bg-mint-500 hover:bg-mint-700 text-white px-6 py-3 rouded-lg font-medium  transition-colors"
      >
        {t("hero.cta")}
      </button>
    </section>
  );
}
export default Hero;
