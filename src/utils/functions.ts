import { FlagEn, FlagHb, FlagRu } from "components";
import { ReactNode } from "react";

export function toCamelCase(str: string | ReactNode): string {
  let regExp = /[ _-]\w/gi;
  if (typeof str !== "string") return "reactNode";
  return str.replace(regExp, function (match: string): string {
    return match.charAt(1).toUpperCase();
  });
}

export function setFlag(language: string): JSX.Element | string {
  const params = { width: "42", height: "36" };
  if (language === "en") return FlagEn(params);
  if (language === "hb") return FlagHb(params);
  if (language === "ru") return FlagRu(params);
  return "(Error) Language or flag is not found!";
  // if (language === "ua") return flagUa;
}

export const loading = (language: string): string => {
  if (language === "en") return "Loading...";
  if (language === "ru") return "Загрузка...";
  if (language === "hb") return "טוען...";
  return "(Error) Language is not received!";
};

export const getGalleryModalState = (str: string) => {
  const state = str.split(".")[0].split("design_")[1];
  return state;
};

// Use it!
export const showPrice = (price: number): string => {
  const unit: string = (price * 100).toFixed().slice(0, -2);
  const cents: string = (price * 100).toFixed().slice(-2);
  const arrayToJoin: string[] = [unit === "" ? "0" : unit, cents];
  const actualPrice: string = arrayToJoin.join(",");
  return actualPrice;
};

// Fix it!
export function selectorsLink(index: number) {
  const level =
    index === 1 ? 1000 : index === 2 ? 1500 : index === 3 ? 2000 : 2600;
  if (window.scrollY <= level) {
    window.scrollBy(0, 30);
    setTimeout(() => selectorsLink(index), 0);
  }
}
