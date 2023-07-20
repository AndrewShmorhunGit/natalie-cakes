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
