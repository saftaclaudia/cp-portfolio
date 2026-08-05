import { useTranslation } from "react-i18next";
import { Sparkles } from "lucide-react";
import profilePhoto from "../assets/profile.jpg";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 px-8 py-24 max-w-6xl mx-auto min-h-[85vh]">
      <div className="relative flex justify-center items-center group">
        <div className="w-[min(70vw,22rem)] h-[min(70vw,22rem)] rounded-full overflow-hidden ring-4 ring-mint-100 dark:ring-gray-800 transition-transform duration-500 group-hover:scale-105">
          <img
            src={profilePhoto}
            alt={t("hero.name")}
            className="w-full h-full object-cover"
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

        <div className="absolute -top-2 -right-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 shadow-md flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-mint-500 animate-pulse" />
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
            {t("hero.available")}
          </span>
        </div>
      </div>

      <div>
        <p className="text-mint-700 dark:text-mint-300 text-lg mb-3">
          {t("hero.greeting")}
        </p>
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
          {t("hero.name")}
        </h1>
        <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-8">
          {t("hero.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-md mb-10 text-lg leading-relaxed">
          {t("hero.description")}
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://saftaclaudia.github.io/interactive-resume/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-7 py-3.5 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 dark:focus-visible:ring-offset-gray-950 transition-all duration-200 inline-block"
          >
            {t("hero.resume")}
          </a>
          <a
            href="/cv.pdf"
            download
            className="rounded-sm text-gray-900 dark:text-white font-medium underline underline-offset-4 hover:text-mint-700 dark:hover:text-mint-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500 transition-colors"
          >
            {t("hero.downloadCv")}
          </a>
        </div>
      </div>
    </section>
  );
}
export default Hero;
