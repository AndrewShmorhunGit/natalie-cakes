import { ILanguages } from "interfaces/IApp";
import { IInnerContent } from "interfaces/IContent";
import { useEffect, useState } from "react";
// import { useAsync } from "./useAsync";
import { contentsData } from "content/text/text.content";
import { useAsync } from "./useAsync";

interface ILanguageSettings {
  userLanguage: string;
  isLanguage: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  innerContent: IInnerContent;
  languages: ILanguages;
  isLanguageLoading: boolean;
  // isLanguageError: boolean;
}

export const useLanguage = (): ILanguageSettings => {
  const userLanguage = "ru";
  const { isLoading } = useAsync();
  const [isLanguage, setLanguage] = useState(userLanguage);

  const [isContent, setContent] = useState(contentsData.contentEn);

  useEffect(() => {
    setContent(
      isLanguage === "en"
        ? contentsData.contentEn
        : isLanguage === "ru"
        ? contentsData.contentRu
        : contentsData.contentHb
    );
  }, [isLanguage]);

  const languages = { en: "en", ru: "ru", hb: "hb" };

  return {
    userLanguage,
    isLanguage,
    setLanguage,
    innerContent: isContent,
    languages,
    isLanguageLoading: isLoading,
    // isLanguageError: isError,
  };
};
