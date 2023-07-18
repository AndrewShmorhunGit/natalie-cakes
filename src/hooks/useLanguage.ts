import { ILanguages } from "interfaces/IApp";
import { IInnerContent } from "interfaces/IContent";
import { useEffect, useState } from "react";
import { contentEmpty } from "content/text/text.content";
import { httpGetContents } from "utils/http.request";
import { useAsync } from "./useAsync";

interface ILanguageSettings {
  userLanguage: string;
  isLanguage: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  innerContent: IInnerContent;
  languages: ILanguages;
  isLanguageLoading: boolean;
  isLanguageError: boolean;
}

export const useLanguage = (): ILanguageSettings => {
  const userLanguage = "hb";
  const { run, isLoading, isError } = useAsync();
  const [isLanguage, setLanguage] = useState(userLanguage);

  useEffect(() => {
    run(
      httpGetContents(isLanguage).then((data) => {
        // setContent(contentEmpty);
        setTimeout(() => {
          setContent(data);
        }, 1000);
      })
    );
    // isLoading && setContent(contentEmpty);
  }, [isLanguage]);

  const [isContent, setContent] = useState(contentEmpty);

  const languages = { en: "en", ru: "ru", hb: "hb" };

  return {
    userLanguage,
    isLanguage,
    setLanguage,
    innerContent: isContent,
    languages,
    isLanguageLoading: isLoading,
    isLanguageError: isError,
  };
};
