import { IActiveBtnStyle, IInnerContent } from "./IContent";

export interface IMedia {
  big: boolean;
  medium: boolean;
  small: boolean;
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
  setParamsFromMedia: Function;
}
