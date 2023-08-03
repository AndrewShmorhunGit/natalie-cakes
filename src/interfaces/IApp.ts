import { RefObject } from "react";
import { IContent, IInnerContent } from "./IContent";

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

export interface ISetMedia {
  (
    bigParam: string | number,
    mediumParam?: string | number | undefined,
    smallParam?: string | number | undefined,
    minParam?: string | number | undefined
  ): string | number;
}

export interface IAppBox {
  isLanguage: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  innerContent: IContent;
  languages: ILanguages;
  // isLanguageLoading: boolean;
  isLangTransition: boolean;
  // Media
  windowSize: number;
  isMedia: IMedia;
  setMedia: ISetMedia;
  setMediaByStep(param: number, step: number): number;
  useHover<T extends HTMLElement = HTMLElement>(
    elementRef: RefObject<T>
  ): boolean;
  hoverRef: React.MutableRefObject<null>;
  isModal: string;
  setModal: React.Dispatch<React.SetStateAction<string>>;
}
