import { FlagEn, FlagHb, FlagRu } from "components";

export function toCamelCase(str: string): string {
  var regExp = /[ _-]\w/gi;
  return str.replace(regExp, function (match: string): string {
    return match.charAt(1).toUpperCase();
  });
}

export function setFlag(language: string): JSX.Element | string {
  const params = { width: "42", height: "36" };
  if (language === "en") return FlagEn(params);
  if (language === "hb") return FlagHb(params);
  if (language === "ru") return FlagRu(params);
  return language;
  // if (language === "ua") return flagUa;
}
