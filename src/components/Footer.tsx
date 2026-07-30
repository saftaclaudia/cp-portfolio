import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/saftaclaudia", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/claudia-popescu-frontend-developer/",
    label: "LinkedIn",
  },
];

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="botder-t border-gray-200 fark:border-gray-800 mt-24">
      <div className="max-w-6xl mx-auto px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm yext-gray-500 dark:text-gray-400">
          © {currentYear} Claudia Popescu. {t("footer.rights")}
        </p>
        <div className="flex items-center gap-5">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-500 dark:text-gray-00 hover:text-mint-700 dark:hover:text-mint-300 transitio-colors"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
        <p className="text-sm text-gray-400 dark:text-gray-500">
          {t("footer.madeWith")}
        </p>
      </div>
    </footer>
  );
}
export default Footer;
