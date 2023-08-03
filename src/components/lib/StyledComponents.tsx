import React from "react";

// Styles
import {
  css,
  styled,
  palette,
  appShadows,
  mq,
  styles,
  createGrid,
} from "styles";
// Interfaces

import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
// Content

///////////////////////////
// STYLED APP COMPONENTS //
///////////////////////////

// APP

const AppContainer = styled.main({
  minHeight: "100vh",
  ...createGrid("minmax(0, 1fr)", "minmax(1fr, 3fr)"),
  color: palette.text_dark,
});

const MainHeader = styled.h1({
  fontSize: "6.8rem",
  fontWeight: 400,
  [mq.medium]: {
    fontSize: "6.2rem",
  },
  [mq.small]: {
    fontSize: "5.4rem",
  },
  [mq.mini]: {
    fontSize: "4.8rem",
  },
});

///////////////////////
// STYLED COMPONENTS //
///////////////////////

// BUTTONS

const buttonVariants: any = {
  primary: {
    width: "24rem",
    height: "6rem",
    border: `0.3rem solid ${palette.main_primary_dark}`,
    fontSize: "2.4rem",
    fontWeight: "600",
    color: palette.main_primary_dark,
    "&:hover": {
      background: palette.background_second,
    },
    [mq.medium && mq.small]: {
      width: "20rem",
      height: "5.2rem",
      fontSize: "2rem",
    },
    // [mq.small]: { width: "16rem", height: "4rem", fontSize: "1.6rem" },
  },
  secondary: {
    width: "12rem",
    height: "4.8rem",
    fontSize: "2rem",
    backgroundColor: palette.main_primary,
    color: palette.white,
    border: `0.2rem solid ${palette.white}`,
    [mq.medium]: { width: "10rem", height: "4rem", fontSize: "1.6rem" },
    // [mq.small]: { width: "8rem", height: "3.2rem", fontSize: "1.2rem" },
  },
  language: {
    height: "4rem",
    border: `0.2rem solid ${palette.background_main}`,
    borderRadius: "0.4rem",
    background: palette.main_primary,
    "&:hover": {
      transform: "translateY(0rem)",
      background: palette.main_primary_dark,
    },
    "&:active": {
      boxShadow: "none",
    },
  },
};

const Button = styled.button(
  {
    borderRadius: "1.2rem",
    fontFamily: "inherit",
    fontStyle: "normal",
    fontWeight: "400",
    transition: "all 0.5s ease-out",
    textTransform: "capitalize",
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-0.1rem)",
      boxShadow: appShadows.button,
    },
    "&:active": {
      transform: "translateY(-0.1rem)",
      boxShadow: appShadows.buttonActive,
    },
  },
  ({ variant = "secondary" }: { variant: string }) => buttonVariants[variant]
);

// CONTAINERS

const Container = styled.div({
  marginLeft: "auto",
  marginRight: "auto",
});

const RelativeContainer = styled.div({
  position: "relative",
});

const AbsoluteBottomContainer = styled.div({
  position: "absolute",
  bottom: 0,
});

const AbsoluteCenterContainer = styled.div({
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
});

const GridContainer = styled.div({
  display: "grid",
});

const FlexRowContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const FlexColumnContainer = styled.div({
  display: "flex",
  flexDirection: "column",
});

const FlexCenterContainer = styled.div({
  ...styles.flexCenter,
});

const LogoHeaderContainer = styled.div({
  maxHeight: "10rem",
  display: "flex",
  alignItems: "center",
  borderBottom: `solid .2rem ${palette.main_primary_dark}`,
  borderTop: `solid .2rem ${palette.main_primary_dark}`,
  color: palette.text_dark,
  padding: "1.2rem 3.6rem",
  boxShadow: appShadows.button,
  background: palette.background_second,
});

const LogoHeaderTitle = styled.h3({
  textTransform: "capitalize",
  display: "flex",
  gap: "2.4rem",
  alignItems: "center",
});

// COMPONENTS

function LogoTitleBlock({
  Logo,
  title,
  setMediaByStep,
  isLanguage,
}: {
  Logo: EmotionJSX.Element;
  title: string | React.ReactNode;
  setMediaByStep: (param: number, step: number) => number;
  isLanguage: string;
}): EmotionJSX.Element {
  return (
    <LogoHeaderContainer>
      <DecoContainer
        width={6.2}
        height={6.2}
        color={palette.background_main}
        style={{
          borderRadius: "50%",
          border: `solid 0.2rem ${palette.main_primary_dark}`,
        }}
      />
      <FlexRowContainer
        className={css({
          gap: "3.2rem",
          transform: `translateX(${isLanguage === "hb" ? "" : "-"}5.1rem)`,
        })}
      >
        {Logo}
        <LogoHeaderTitle
          className={css({
            fontSize: `${setMediaByStep(2.4, 0.2)}rem`,
          })}
        >
          {title}
        </LogoHeaderTitle>
      </FlexRowContainer>
    </LogoHeaderContainer>
  );
}

function DecoContainer({
  width,
  height,
  color,
  style,
  ref,
}: {
  width: number;
  height: number;
  color: string;
  style?: React.CSSProperties | undefined;
  ref?: React.MutableRefObject<null>;
}) {
  return (
    <FlexCenterContainer
      ref={ref}
      className={css({
        width: `${width}rem`,
        height: `${height}rem`,
        background: `${color}`,
        borderRadius: "1rem",
        ...style,
      })}
    ></FlexCenterContainer>
  );
}

// COMMON

function MainLogoText({
  textColor = palette.text_dark,
}: {
  textColor: string;
}): EmotionJSX.Element {
  return (
    <FlexCenterContainer
      className={css({
        transition: "all 0.5s ease",
        color: textColor,
        flexDirection: "column",
        gap: "0.8rem",
        lineHeight: "1",
        h3: {
          fontWeight: "400",
          textAlign: "center",
          fontSize: "3.2rem",
        },
        h4: { textAlign: "center", fontSize: "1.8rem", fontWeight: "300" },
        [mq.medium]: {
          // gap: "0.8rem",
          h3: {
            fontSize: "2.8rem",
          },
          h4: {
            fontSize: "1.6rem",
          },
        },
        [mq.small]: {
          // gap: "0.8rem",
          h3: {
            fontSize: "2.4rem",
          },
          h4: {
            fontSize: "1.4rem",
          },
        },
        [mq.mini]: {
          // gap: "0.8rem",
          h3: {
            fontSize: "2.4rem",
          },
          h4: {
            fontSize: "1.4rem",
          },
        },
      })}
    >
      <h3>Natalie Cakes</h3>
      <h4>Homemade Baking</h4>
    </FlexCenterContainer>
  );
}

export {
  // App
  AppContainer,
  // Styled and Custom Reusable Components
  Button,
  Container,
  RelativeContainer,
  AbsoluteCenterContainer,
  AbsoluteBottomContainer,
  GridContainer,
  FlexRowContainer,
  FlexColumnContainer,
  FlexCenterContainer,
  LogoHeaderContainer,
  LogoHeaderTitle,
  LogoTitleBlock,
  MainHeader,
  MainLogoText,
  DecoContainer,
};
