export interface IActiveLanguageBtnStyle {
  backgroundColor: string;
  color: string;
}

interface IMenuItemData {
  itemName: string;
  description: string;
  tasteAccent: string;
}

export interface IMenuContent {
  moussesCakes: {
    name: string;
    chocolatePassionFruit: IMenuItemData;
  };
}

export interface IInnerContent {
  about: string;
  contacts: string;
  makeSweet: string;
  mainHeader: string;
  heroTagline: string;
  slogan: string;
  heroSelectors: {
    birthdayCake: string;
    cakesAndPies: string;
    cupCakes: string;
    gingerBread: string;
  };
  ingredients: string;
  ingredientsText: {
    h1: string;
    p1: string;
    h2: string;
    p2: string;
  };
  design: string;
  designText: {
    h1: string;
    p1: string;
    h2: string;
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
    contacts: string;
    question: string;
    callBack: string;
    follow: string;
    menu: string;
    cart: string[];
    rights: string;
  };
  menuContent: IMenuContent;
}

export interface IContent {
  contentEn: IInnerContent;
  contentRu: IInnerContent;
}
