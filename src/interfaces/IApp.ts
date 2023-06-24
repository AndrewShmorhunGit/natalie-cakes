import { IActiveBtnStyle, IInnerContent } from "./IContent";

export interface IMedia {
  big: boolean;
  medium: boolean;
  small: boolean;
  mini: boolean;
}

export interface IAppBox {
  isLanguage: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  innerContent: IInnerContent;
  en: string;
  ru: string;
  activeCheck: any;
  activeStyle: IActiveBtnStyle;
  windowSize: number;
  media: IMedia;
  setMedia(
    bigParam: number | string,
    mediumParam?: number | string,
    smallParam?: number | string,
    minParam?: number | string
  ): string | number;
}
