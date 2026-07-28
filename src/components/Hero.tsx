import { useTranslation } from "react-i18next";
import { Code2, Sparkles } from "lucide-react";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-8 py-16 max-w-6xl mx-auto min-h-[75vh]">
      <div className="relative flex justify-center items-center">
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-mint-100 dark:bg-gray-800 flex items-center justify-center">
          <Code2
            size={120}
            className="text-mint-700 dark:text-mint-300"
            strokeWidth={1.5}
          />
        </div>

        <div className="absolute -bottom-4 -left-4 w-28 h-28">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full animate-[spin_16s_linear_infinite]"
          >
            <path
              id="badge-circle"
              d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
              fill="none"
            />
            <text
              className="fill-gray-700 dark:fill-gray-300"
              style={{ fontSize: "7.5px", letterSpacing: "1px" }}
            >
              <textPath href="#badge-circle">
                {t("hero.badge")} • {t("hero.badge")} •
              </textPath>
            </text>
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center">
              <Sparkles size={20} className="text-white dark:text-gray-900" />
            </div>
          </div>
        </div>

        <div className="absolute -top-2 -right-2 w-14 h-14 rounded-full bg-cream-300 flex items-center justify-center animate-bounce [animation-duration:3s]">
          <Sparkles size={24} className="text-gray-800" />
        </div>
      </div>

      <div>
        <p className="text-mint-700 dark:text-mint-300 text-lg mb-2">
          {t("hero.greeting")}
        </p>
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {t("hero.name")}
        </h1>
        <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-6">
          {t("hero.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
          {t("hero.description")}
        </p>

        <div className="flex items-center gap-6">
          <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
            {t("hero.resume")}
          </button>
          <a
            href="#contact"
            className="text-gray-900 dark:text-white font-medium underline underline-offset-4 hover:text-mint-700 dark:hover:text-mint-300 transition-colors"
          >
            {t("hero.contact")}
          </a>
        </div>
      </div>
    </section>
  );
}
export default Hero;
