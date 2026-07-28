import { useLanguage } from "../context/useLanguage";

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      {language === "en" ? "DE" : "EN"}
    </button>
  );
}
export default LanguageToggle;
