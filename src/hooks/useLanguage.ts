import { ILanguages } from "interfaces/IApp";
import { IContent } from "interfaces/IContent";
import { useState } from "react";
// import { useAsync } from "./useAsync";
import { contentsData } from "content/text/text.content";

interface ILanguageSettings {
  userLanguage: string;
  isLanguage: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  innerContent: IContent;
  languages: ILanguages;
  // isLanguageLoading: boolean;
  // isLanguageError: boolean;
  isLangTransition: boolean;
}

export const useLanguage = (): ILanguageSettings => {
  const userLanguage = "ru";
  // const { run, isLoading, isError } = useAsync();
  const [isLanguage, setLanguage] = useState(userLanguage);
  const [isLangTransition, setLangTransition] = useState(false);

  const innerContent: IContent = contentsData;

  // useEffect(() => {

  //   setLangTransition(true);
  //   setTimeout(() => {
  //     setLangTransition(false);
  //   }, 1000);
  // }, [isLanguage]);

  const languages = { en: "en", ru: "ru", hb: "hb" };

  return {
    userLanguage,
    isLanguage,
    setLanguage,
    innerContent,
    languages,
    // isLanguageLoading: isLoading,
    // isLanguageError: isError,
    isLangTransition,
  };
};
