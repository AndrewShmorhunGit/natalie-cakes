import { IInnerContent } from "interfaces/IContent";
import { menuContentEmpty } from "./menu.content";
import { HeaderDecoLoader, BlockDecoLoader } from "components";
import {
  decoBlockPropsData,
  decoHeaderPropsData,
} from "data/settings.static.data";
const decoHeaderProps = decoHeaderPropsData;
const decoBlockProps = decoBlockPropsData;
const address = "Natalie 23 str, Eilat";
const phone = "972-54-283-07777";
const email = "nataliecakes@gmail.com";
const rights =
  "Natalie Cakes, all rights reserved. Designed and developed by Andrew Shmorhun. 2023";

export const contentEmpty: IInnerContent = {
  // Navigation
  about: HeaderDecoLoader(decoHeaderProps),
  contacts: HeaderDecoLoader(decoHeaderProps),
  makeSweet: HeaderDecoLoader(decoHeaderProps),
  // Hero
  mainHeader: HeaderDecoLoader(decoHeaderProps),
  heroTagline: "",
  slogan: "Loading",
  heroSelectors: {
    birthdayCake: HeaderDecoLoader(decoHeaderProps),
    cakesAndPies: HeaderDecoLoader(decoHeaderProps),
    cupCakes: HeaderDecoLoader(decoHeaderProps),
    gingerBread: HeaderDecoLoader(decoHeaderProps),
  },
  /// Info
  infoHeader: HeaderDecoLoader(decoHeaderProps),
  ingredients: "Loading",
  ingredientsText: {
    h1: HeaderDecoLoader(decoHeaderProps),
    p1: BlockDecoLoader(decoBlockProps),
    h2: HeaderDecoLoader(decoHeaderProps),
    p2: BlockDecoLoader(decoBlockProps),
  },
  design: "Loading",
  designText: {
    h1: HeaderDecoLoader(decoHeaderProps),
    p1: BlockDecoLoader(decoBlockProps),
    h2: HeaderDecoLoader(decoHeaderProps),
    p2: BlockDecoLoader(decoBlockProps),
  },
  order: "Loading",
  orderText: {
    h1: HeaderDecoLoader(decoHeaderProps),
    p1: BlockDecoLoader(decoBlockProps),
    h2: HeaderDecoLoader(decoHeaderProps),
    p2: BlockDecoLoader(decoBlockProps),
  },
  important: "Loading",
  importantText: {
    h1: HeaderDecoLoader(decoHeaderProps),
    p1: BlockDecoLoader(decoBlockProps),
    p2: BlockDecoLoader(decoBlockProps),
  },
  // Footer
  footerContacts: {
    address,
    phone,
    email,
  },

  footerOther: {
    contacts: HeaderDecoLoader(decoHeaderProps),
    question: HeaderDecoLoader(decoHeaderProps),
    callBack: "",
    follow: HeaderDecoLoader(decoHeaderProps),
    menu: "Loading",
    cart: [
      HeaderDecoLoader(decoHeaderProps),
      HeaderDecoLoader(decoHeaderProps),
      HeaderDecoLoader(decoHeaderProps),
      HeaderDecoLoader(decoHeaderProps),
    ],
    rights,
  },
  callBackBtn: HeaderDecoLoader(decoHeaderProps),
  //Menu
  menuContent: menuContentEmpty,
  sweetness: "",
  sourness: "",
  taste: "",
};
