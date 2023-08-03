import { MenuItem } from "content/text/menu.content";

export interface IMenuContent {
  moussesCakes: {
    name: string;
    chocolatePassionFruit: MenuItem;
    strawberriesWithTops: MenuItem;
    chocolateCherry: MenuItem;
    berryYogurt: MenuItem;
  };
  biscuitCakes: {
    name: string;
    berryVanilla: MenuItem;
    chocolateCaramel: MenuItem;
    chocolateRaspberry: MenuItem;
    lemonBlueberry: MenuItem;
  };
  classicCakes: {
    name: string;
    napoleon: MenuItem;
    honeyCake: MenuItem;
  };
  cheesecakes: {
    name: string;
    cheesecake: MenuItem;
    cheesecakeCaramel: MenuItem;
  };
}

export interface IInnerContent {
  // Nav
  about: string;
  contacts: string;
  makeSweet: string;
  // Hero
  mainHeader: string;
  heroTagline: string;
  slogan: string;
  heroSelectors: {
    birthdayCake: string;
    cakesAndPies: string;
    cupCakes: string;
    gingerBread: string;
  };
  // Info
  infoHeader: string;
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
  // Footer
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
  callBackBtn: string;
  // Menu
  menuTitle: string;
  menuContent: IMenuContent;
  sweetness: string;
  sourness: string;
  taste: string;
}

export interface IContent {
  contentEn: IInnerContent;
  contentRu: IInnerContent;
  contentHb: IInnerContent;
}
