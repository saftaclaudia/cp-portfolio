import { createContext } from "react";

export interface LanguageContextType {
  language: "en" | "de";
  toggleLanguage: () => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);
