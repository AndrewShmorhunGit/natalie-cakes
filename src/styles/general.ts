// FLEX

import { mq } from "./media-queries";

// CONTAINERS

export const absoluteCenter = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
};

export const heroSelectorDecoStyle = {
  borderRadius: "50%",
  ...absoluteCenter,
};

export function paddingLeftRight(
  left: number | string,
  right: number | string = left
): any {
  return {
    paddingLeft: typeof left === "string" ? left : `${left}rem`,
    paddingRight: typeof right === "string" ? right : `${right}rem`,
  };
}

export function paddingTopBottom(
  top: number | string,
  bottom: number | string = top
): any {
  return {
    paddingTop: typeof top === "string" ? top : `${top}rem`,
    paddingBottom: typeof bottom === "string" ? bottom : `${bottom}rem`,
  };
}

export const uppercaseFirstLetter = {
  ":first-letter": { textTransform: "uppercase" },
};

export const marginCenter = {
  marginLeft: "auto",
  marginRight: "auto",
};

export const flexCenter = {
  display: "flex",
  alginItems: "center",
  justifyContent: "center",
};

export const wideContainer = {
  padding: "1.2rem 4rem",
};

export const container = {
  ...marginCenter,
  maxWidth: "140rem",
  padding: "1.2rem 12rem",
  [mq.medium]: { maxWidth: "120rem", padding: "1.2rem 12rem" },
  [mq.small]: { padding: "1.2rem 6rem" },
};

// FONTS

export const fonts = {
  fontFamily: "Lobster",
};
