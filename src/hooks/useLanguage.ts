import { ILanguages } from "interfaces/IApp";
import { IContent, IInnerContent } from "interfaces/IContent";
import { useState } from "react";

interface ILanguageSettings {
  isLanguage: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  innerContent: IInnerContent;
  languages: ILanguages;
}

export const useLanguage = (contents: IContent): ILanguageSettings => {
  const [isLanguage, setLanguage] = useState("en");
  const { contentEn, contentRu } = contents;

  function checkLanguage(language: string): IInnerContent {
    if (language === "en") {
      return contentEn;
    }
    if (language === "ru") {
      return contentRu;
    }
    return contentEn;
  }

  // Set languages
  const innerContent = checkLanguage(isLanguage);
  const languages = { en: "en", ru: "ru" };

  return { isLanguage, setLanguage, innerContent, languages };
};
