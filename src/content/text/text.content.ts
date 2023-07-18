import { IInnerContent } from "interfaces/IContent";
import { menuContentEmpty } from "./menu.content";
import { DecoLoader } from "components";

const address = "Natalie 23 str, Eilat";
const phone = "972-54-283-07777";
const email = "nataliecakes@gmail.com";
const rights =
  "Natalie Cakes, all rights reserved. Designed and developed by Andrew Shmorhun. 2023";

const props = {
  width: 620,
  height: 60,
};

export const contentEmpty: IInnerContent = {
  // Navigation
  about: DecoLoader(props),
  contacts: DecoLoader(props),
  makeSweet: DecoLoader(props),
  // Hero
  mainHeader: DecoLoader(props),
  heroTagline: "",
  slogan: DecoLoader(props),
  heroSelectors: {
    birthdayCake: "   ",
    cakesAndPies: "   ",
    cupCakes: "   ",
    gingerBread: "   ",
  },
  /// Info
  infoHeader: DecoLoader(props),
  ingredients: DecoLoader({
    width: 620,
    height: 280,
  }),
  ingredientsText: {
    h1: DecoLoader({
      width: 620,
      height: 280,
    }),
    p1: DecoLoader(props),
    h2: DecoLoader(props),
    p2: DecoLoader(props),
  },
  design: "   ",
  designText: {
    h1: "   ",
    p1: "   ",
    h2: "   ",
    p2: "   ",
  },
  order: "   ",
  orderText: {
    h1: "   ",
    p1: "   ",
    h2: "   ",
    p2: "   ",
  },
  important: "   ",
  importantText: {
    h1: "   ",
    p1: "   ",
    p2: "   ",
  },
  // Footer
  footerContacts: {
    address,
    phone,
    email,
  },

  footerOther: {
    contacts: "   ",
    question: "   ",
    callBack: "   ",
    follow: "   ",
    menu: "   ",
    cart: ["   ", "   ", "   ", "   "],
    rights,
  },
  callBackBtn: "   ",
  //Menu
  menuContent: menuContentEmpty,
  sweetness: "   ",
  sourness: "   ",
  taste: "   ",
};
