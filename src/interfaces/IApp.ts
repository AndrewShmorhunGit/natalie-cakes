import { IInnerContent } from "./IContent";

export interface IMedia {
  big: boolean;
  medium: boolean;
  small: boolean;
  mini: boolean;
}
export interface ILanguages {
  en: string;
  ru: string;
  hb: string;
}
export interface IAppBox {
  isLanguage: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  innerContent: IInnerContent;
  languages: ILanguages;
  windowSize: number;
  isMedia: IMedia;
  setMedia(
    bigParam: number | string,
    mediumParam?: number | string,
    smallParam?: number | string,
    minParam?: number | string
  ): string | number;
}
