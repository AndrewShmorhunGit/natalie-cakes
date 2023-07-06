import { ILanguages } from "interfaces/IApp";
import { IContent, IInnerContent } from "interfaces/IContent";
import { useCallback, useState } from "react";

interface ILanguageSettings {
  isLanguage: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  innerContent: IInnerContent;
  languages: ILanguages;
}

export const useLanguage = (contents: IContent): ILanguageSettings => {
  const [isLanguage, setLanguage] = useState("en");
  const { contentEn, contentRu, contentHb } = contents;

  const checkLanguage = useCallback(
    (language: string): IInnerContent => {
      if (language === "en") {
        return contentEn;
      }
      if (language === "ru") {
        return contentRu;
      }
      if (language === "hb") {
        return contentHb;
      }
      return contentEn;
    },
    [contentRu, contentEn, contentHb]
  );

  // Set languages
  const innerContent = checkLanguage(isLanguage);
  const languages = { en: "en", ru: "ru", hb: "hb" };

  return { isLanguage, setLanguage, innerContent, languages };
};
