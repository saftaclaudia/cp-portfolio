import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "./langContext";
import type { ReactNode } from "react";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState<"en" | "de">(() => {
    const saved = localStorage.getItem("language");
    return saved === "de" ? "de" : "en";
  });

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  }, [language, i18n]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "de" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
