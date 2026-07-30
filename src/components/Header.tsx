import { useTranslation } from "react-i18next";
import { Sun, Moon, Globe, X, Menu } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useTheme } from "../context/useTheme";
import { useLanguage } from "../context/useLanguage";
import { Link } from "react-router-dom";
import { useState } from "react";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/saftaclaudia", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/claudia-popescu-frontend-developer/",
    label: "LinkedIn",
  },
];

function Header() {
  const { t } = useTranslation();
  const { isDark, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50  bg-gray-50/95 dark:bg-gray-950/95 backdrop-blur-sm transition-colors border-b border-gray-200 dark:border-gray-800">
      <div className="md:hidden flex items-center justify-between py-4 px-6">
        <div className="w-11 h-11 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center">
          <span className="text-white dark:text-gray-900 font-bold text-sm">
            CP
          </span>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-gray-900 dark:text-white"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-5 px-6 pb-6">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-900 dark:text-white font-medium hover:text-mint-700 hover:dark:text-mint-300 transition-colors"
          >
            {t("header.home")}
          </Link>
          <Link
            to="/#projects"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-600 dark:text-gray-300 hover:text-mint-700 hover:dark:text-mint-300 transition-colors"
          >
            {t("header.projects")}
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-600 dark:text-gray-300 hover:text-mint-700 hover:dark:text-mint-300 transition-colors"
          >
            {t("header.contact")}
          </Link>

          <div className="flex items-center gap-5 pt-4 mt-2 -mx-6 px-6  border-t border-gray-200 dark:border-gray-800">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-700 dark:text-gray-300 hover:text-mint-700 hover:dark:text-mint-300 transition-colors"
                >
                  <Icon size={20} />
                </a>
              );
            })}

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-mint-700 hover:dark:text-mint-300 transition-colors"
              aria-label="Toggle language"
            >
              <Globe size={20} />
              <span className="text-xs font-medium">
                {language === "en" ? "DE" : "EN"}
              </span>
            </button>
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:text-mint-700 hover:dark:text-mint-300 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      )}

      <div className="hidden md:grid grid-cols-3 items-center py-6 px-8">
        <nav className="flex gap-6">
          <Link
            to="/"
            className="text-gray-900 dark:text-white font-medium hover:text-mint-700 dark:hover:text-mint-300 transition-colors"
          >
            {t("header.home")}
          </Link>
          <Link
            to="/#projects"
            className="text-gray-600 dark:text-gray-300 hover:text-mint-700 dark:hover:text-mint-300 transition-colors"
          >
            {t("header.projects")}
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 dark:text-gray-300 hover:text-mint-700 dark:hover:text-mint-300 transition-colors"
          >
            {t("header.contact")}
          </Link>
        </nav>

        <div className="flex justify-center">
          <div className="w-11 h-11 rounded-full bg-gray-900 dark:bg-white  flex items-center justify-center">
            <span className="text-white dark:text-gray-900 font-bold text-sm">
              CP
            </span>
          </div>
        </div>

        <div className="flex justify-end items-center gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-mint-700 dark:hover:text-mint-300 transition-colors"
              >
                <Icon size={20} />
              </a>
            );
          })}

          <button
            onClick={toggleLanguage}
            className="flex text-center gap-1 text-gray-700 dark:text-gray-300 hover:text-mint-700 dark:hover:text-mint-300 transition-colors"
            aria-label="Toggle language"
          >
            <Globe size={20} />
            <span className="text-xs font-medium">
              {language === "en" ? "DE" : "EN"}
            </span>
          </button>
          <button
            onClick={toggleTheme}
            className="text-gray-700 dark:text-gray-300 hover:text-mint-700 dark:hover:text-mint-300 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
