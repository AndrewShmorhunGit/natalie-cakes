import { flagEn, flagHb, flagRu } from "components";

export function toCamelCase(str: string): string {
  var regExp = /[ _-]\w/gi;
  return str.replace(regExp, function (match: string): string {
    return match.charAt(1).toUpperCase();
  });
}

export function setFlag(language: string): JSX.Element | string {
  const params = { width: "42", height: "36" };
  if (language === "en") return flagEn(params);
  if (language === "hb") return flagHb(params);
  if (language === "ru") return flagRu(params);
  return language;
  // if (language === "ua") return flagUa;
}
