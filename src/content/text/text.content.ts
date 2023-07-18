import { IInnerContent } from "interfaces/IContent";
import { menuContentEmpty } from "./menu.content";

const address = "Natalie 23 str, Eilat";
const phone = "972-54-283-07777";
const email = "nataliecakes@gmail.com";
const rights =
  "Natalie Cakes, all rights reserved. Designed and developed by Andrew Shmorhun. 2023";

export const contentEmpty: IInnerContent = {
  // Navigation
  about: "   ",
  contacts: "   ",
  makeSweet: "   ",
  // Hero
  mainHeader: "   ",
  heroTagline: "   ",
  slogan: "   ",
  heroSelectors: {
    birthdayCake: "   ",
    cakesAndPies: "   ",
    cupCakes: "   ",
    gingerBread: "   ",
  },
  /// Info
  infoHeader: "   ",
  ingredients: "   ",
  ingredientsText: {
    h1: "   ",
    p1: "   ",
    h2: "   ",
    p2: "   ",
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
