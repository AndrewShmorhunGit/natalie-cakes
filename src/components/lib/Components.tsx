import styled from "@emotion/styled/macro";
import { colorSys, flexCenter, appShadows, mq } from "styles/imports";
import { css } from "@emotion/css";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";

// STYLED COMPONENTS

const buttonVariants: any = {
  primary: {
    width: "22.4rem",
    height: "6rem",
    background: colorSys.white,
    border: `0.3rem solid ${colorSys.main_primary_dark}`,
    fontSize: "2.4rem",
    fontWeight: "600",
    color: colorSys.main_primary_dark,
    "&:hover": {
      background: colorSys.background_second,
      border: `0.2rem solid ${colorSys.main_primary_dark}`,
    },
    [mq.medium]: { width: "20rem", height: "5.2rem", fontSize: "2rem" },
    [mq.small]: { width: "16rem", height: "4rem", fontSize: "1.6rem" },
  },
  secondary: {
    width: "12rem",
    height: "4.8rem",
    fontSize: "2rem",
    background: colorSys.main_primary,
    color: colorSys.white,
    border: `0.2rem solid ${colorSys.white}`,
    [mq.medium]: { width: "10rem", height: "4rem", fontSize: "1.6rem" },
    [mq.small]: { width: "8rem", height: "3.2rem", fontSize: "1.2rem" },
  },
  language: {
    width: "3.2rem",
    height: "3.2rem",
    fontSize: "1.6rem",
    border: `0.2rem solid ${colorSys.main_primary_dark}`,
    textTransform: "none",
    borderRadius: "0.4rem",
    [mq.medium]: { width: "2.8rem", height: "2.8rem", fontSize: "1.2rem" },
    [mq.small]: { width: "2.4rem", height: "2.4rem", fontSize: "1rem" },
  },
};

const Button = styled.button(
  {
    borderRadius: "1.2rem",
    fontFamily: "inherit",
    fontStyle: "normal",
    fontWeight: "400",
    transition: "all 0.5s ease",
    textTransform: "capitalize",
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
  // ({language = 'en'}: {language: string}) => languageBtnVariants[language],
);

const MainHeader = styled.h1({
  fontSize: "6rem",
});

// COMPONENTS

function MainLogoText({
  textColor = colorSys.text_dark,
}: {
  textColor: string;
}): EmotionJSX.Element {
  return (
    <div
      className={css({
        transition: "all 0.5s ease",
        color: textColor,
        ...flexCenter,
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
      })}
    >
      <h3>Natalie Cakes</h3>
      <h4>Homemade Baking</h4>
    </div>
  );
}

export { Button, MainHeader, MainLogoText };
