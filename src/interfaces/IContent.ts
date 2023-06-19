export interface IContent {
  contentEn: IInnerContent;
  contentRu: IInnerContent;
}

export interface IInnerContent {
  about: string;
  contacts: string;
  makeSweet: string;
  mainHeader: string;
  heroTagline: string;
  slogan: string;
  icons: {
    birthdayCake: string;
    cakesAndPies: string;
    cupCakes: string;
    gingerBread: string;
  };
  ingredients: string;
  ingredientsText: {
    p1: string;
    p2: string;
  };
  design: string;
  designText: {
    p1: string;
    p2: string;
  };
  order: string;
  orderText: {
    h1: string;
    p1: string;
    h2: string;
    p2: string;
  };
  important: string;
  importantText: {
    h1: string;
    p1: string;
    p2: string;
  };
  footerContacts: {
    address: string;
    phone: string;
    email: string;
  };
  footerOther: {
    question: string;
    callBack: string;
    follow: string;
    menu: string;
    cart: string[];
    rights: string;
  };
}

export interface IActiveBtnStyle {
  backgroundColor: string;
  color: string;
}

export interface IContentBox {
  isLanguage: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  innerContent: IInnerContent;
  en: string;
  ru: string;
  activeCheck: any;
  activeStyle: IActiveBtnStyle;
}
