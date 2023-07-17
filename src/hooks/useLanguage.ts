import { ILanguages } from "interfaces/IApp";
import { IInnerContent } from "interfaces/IContent";
import { useCallback, useEffect, useState } from "react";
import { useAsync } from "./useAsync";
import { contentEn } from "content/text/text.content";
import { httpGetContents } from "utils/http.request";

interface ILanguageSettings {
  isLanguage: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  innerContent: IInnerContent;
  languages: ILanguages;
  isLoadingTextContent: boolean;
}

export const useLanguage = (): ILanguageSettings => {
  const [isLanguage, setLanguage] = useState("en");
  const defaultContent = contentEn;
  const [isContents, setContents] = useState({
    contentEn: defaultContent,
    contentRu: null,
    contentHb: null,
  });

  const { data, run, isLoading: isLoadingTextContent, isSuccess } = useAsync();

  // console.log(isSuccess);
  const checkLanguage = useCallback(
    (language: string): IInnerContent => {
      if (language === "ru" && isContents.contentRu) {
        return isContents.contentRu;
      }
      if (language === "hb" && isContents.contentHb) {
        return isContents.contentHb;
      }
      return isContents.contentEn;
    },
    [isContents.contentEn, isContents.contentRu, isContents.contentHb]
  );

  useEffect(() => {
    run(httpGetContents());
    isSuccess && setContents(data);
  }, []);

  // Set languages
  const innerContent = checkLanguage(isLanguage);
  const languages = { en: "en", ru: "ru", hb: "hb" };

  return {
    isLanguage,
    setLanguage,
    innerContent,
    languages,
    isLoadingTextContent,
  };
};
