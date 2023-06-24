import { palette } from "./imports";
import { mq } from "./media-queries";

// Absolute
export const absoluteCenter = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
};

// Flex

export const flexCenter = {
  display: "flex",
  alginItems: "center",
  justifyContent: "center",
};

export const flexColumn = {
  display: "flex",
  flexDirection: "column",
};

// Grid

export function createGrid(columns: number | string, rows: number | string) {
  return {
    display: "grid",
    gridTemplateColumns: `${
      typeof columns === "number" ? `repeat(${columns}, 1fr)}` : `${columns}`
    }`,
    gridTemplateRows: `${
      typeof rows === "number" ? `repeat(${rows}, 1fr)}` : `${rows}`
    }`,
  };
}

// Containers

export const wideContainer = {
  padding: "1.2rem 4rem",
};

export const marginCenter = {
  marginLeft: "auto",
  marginRight: "auto",
};

export const container = {
  ...marginCenter,
  maxWidth: "140rem",
  padding: "1.2rem 12rem",
  [mq.medium]: { maxWidth: "120rem", padding: "1.2rem 8rem" },
  [mq.small]: { padding: "1.2rem  3.2rem" },
  [mq.mini]: { padding: "1.2rem 3.2rem" },
};

//Container Styling

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

export function setWidth(min: number, max: number = min) {
  return {
    minWidth: `${min}rem`,
    maxWidth: `${max}rem`,
  };
}

// Text Styling

export const uppercaseFirstLetter = {
  ":first-letter": { textTransform: "uppercase" },
};

// FONTS

export const fonts = {
  fontFamily: "Lobster",
};

// SHADOWS

export const appShadows = {
  button: ".2rem .2rem .4rem rgba(0, 0, 0, 0.25)",
  buttonActive: "0 0 0.4rem 0.4rem rgba(256, 256, 256, 0.7)",
};

// BTN's

export const activeStyle = {
  backgroundColor: palette.main_primary_dark,
  color: palette.white,
};
