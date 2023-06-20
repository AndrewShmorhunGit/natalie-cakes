// FLEX

import { mq } from "./media-queries";

// CONTAINERS

export function paddingTopBottom(top: number, bottom: number = top): any {
  return {
    paddingTop: `${top}rem`,
    paddingBottom: `${bottom}rem`,
  };
}

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
  [mq.medium]: { padding: "1.2rem 12rem" },
  [mq.small]: { padding: "1.2rem 6rem" },
};

// FONTS

const fontsGalada = {
  fontFamily: "Galada",
};

export const fonts = {
  fontsGalada,
};
