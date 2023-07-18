import { RefObject } from "react";
import { IInnerContent } from "./IContent";

export interface IMedia {
  big: boolean;
  medium: boolean;
  small: boolean;
  mini: boolean;
}

export interface ISetMediaArgs {
  bigParam: number | string;
  mediumParam?: number | string;
  smallParam?: number | string;
  minParam?: number | string;
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
  isLanguageLoading: boolean;
  // Media
  windowSize: number;
  isMedia: IMedia;
  setMedia(
    bigParam: number | string,
    mediumParam?: number | string,
    smallParam?: number | string,
    minParam?: number | string
  ): string | number;
  setMediaByStep(param: number, step: number): number;
  useHover<T extends HTMLElement = HTMLElement>(
    elementRef: RefObject<T>
  ): boolean;
  hoverRef: React.MutableRefObject<null>;
  isModal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  // Effects
  isLangTransition: boolean;
}
