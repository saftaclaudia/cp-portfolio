import { useTranslation } from "react-i18next";
import { Sun, Moon, Globe, X, Menu } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useTheme } from "../context/useTheme";
import { useLanguage } from "../context/useLanguage";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/saftaclaudia", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/claudia-popescu-frontend-developer/",
    label: "LinkedIn",
  },
];

const navItems = [
  { to: "/", key: "header.home" },
  { to: "/#skills", key: "header.skills" },
  { to: "/#projects", key: "header.projects" },
  { to: "/contact", key: "header.contact" },
];

function Logo() {
  return (
    <div className="w-11 h-11 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center">
      <span className="text-white dark:text-gray-900 font-bold text-sm">
        CP
      </span>
    </div>
  );
}

function isNavItemActive(to: string, pathname: string, hash: string) {
  if (to === "/") return pathname === "/" && !hash;
  if (to.startsWith("/#")) return pathname === "/" && hash === to.slice(1);
  return pathname === to;
}

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const { t } = useTranslation();
  const { pathname, hash } = useLocation();

  return (
    <>
      {navItems.map((item) => {
        const active = isNavItemActive(item.to, pathname, hash);
        return (
          <Link
            key={item.to}
            to={item.to}
            onClick={onNavigate}
            className={
              active
                ? "w-fit rounded-sm text-gray-900 dark:text-white font-medium border-b-2 border-mint-500 pb-0.5 hover:text-mint-700 dark:hover:text-mint-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500 transition-colors"
                : "w-fit rounded-sm text-gray-600 dark:text-gray-300 font-medium border-b-2 border-transparent pb-0.5 hover:text-mint-700 dark:hover:text-mint-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500 transition-colors"
            }
          >
            {t(item.key)}
          </Link>
        );
      })}
    </>
  );
}

function SocialLinks() {
  return (
    <>
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="rounded-sm text-gray-700 dark:text-gray-300 hover:text-mint-700 dark:hover:text-mint-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500 transition-colors"
          >
            <Icon size={20} />
          </a>
        );
      })}
    </>
  );
}

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="rounded-sm flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-mint-700 dark:hover:text-mint-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500 transition-colors"
      aria-label="Toggle language"
    >
      <Globe size={20} />
      <span className="text-xs font-medium">
        {language === "en" ? "DE" : "EN"}
      </span>
    </button>
  );
}

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-sm text-gray-700 dark:text-gray-300 hover:text-mint-700 dark:hover:text-mint-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-50/95 dark:bg-gray-950/95 backdrop-blur-sm transition-colors border-b border-gray-200 dark:border-gray-800">
      <div className="md:hidden flex items-center justify-between py-4 px-6">
        <Logo />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="rounded-sm text-gray-900 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-5 px-6 pb-6">
          <NavLinks onNavigate={() => setIsMenuOpen(false)} />

          <div className="flex items-center gap-5 pt-4 mt-2 -mx-6 px-6 border-t border-gray-200 dark:border-gray-800">
            <SocialLinks />
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      )}

      <div className="hidden md:grid grid-cols-3 items-center py-6 px-8">
        <nav className="flex gap-6">
          <NavLinks />
        </nav>

        <div className="flex justify-center">
          <Logo />
        </div>

        <div className="flex justify-end items-center gap-4">
          <SocialLinks />
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;
