import { MenuItem } from "content/text/menu.content";
import { ReactNode } from "react";

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
  about: string | ReactNode;
  contacts: string | ReactNode;
  makeSweet: string | ReactNode;
  // Hero
  mainHeader: string | ReactNode;
  heroTagline: string;
  slogan: string | ReactNode;
  heroSelectors: {
    birthdayCake: string | ReactNode;
    cakesAndPies: string | ReactNode;
    cupCakes: string | ReactNode;
    gingerBread: string | ReactNode;
  };
  // Info
  infoHeader: string | ReactNode;
  ingredients: string | ReactNode;
  ingredientsText: {
    h1: string | ReactNode;
    p1: string | ReactNode;
    h2: string | ReactNode;
    p2: string | ReactNode;
  };
  design: string;
  designText: {
    h1: string | ReactNode;
    p1: string | ReactNode;
    h2: string | ReactNode;
    p2: string | ReactNode;
  };
  order: string;
  orderText: {
    h1: string | ReactNode;
    p1: string | ReactNode;
    h2: string | ReactNode;
    p2: string | ReactNode;
  };
  important: string;
  importantText: {
    h1: string | ReactNode;
    p1: string | ReactNode;
    p2: string | ReactNode;
  };
  // Footer
  footerContacts: {
    address: string;
    phone: string;
    email: string;
  };
  footerOther: {
    contacts: string | ReactNode;
    question: string | ReactNode;
    callBack: string | ReactNode;
    follow: string | ReactNode;
    menu: string | ReactNode;
    cart: string[] | ReactNode[];
    rights: string;
  };
  callBackBtn: string | ReactNode;
  // Menu
  menuTitle: string | ReactNode;
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
