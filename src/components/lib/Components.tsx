import styled from "@emotion/styled/macro";
import { colorSys, flexCenter, fonts, appShadows, mq } from "styles/imports";
import { css } from "@emotion/css";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";

const buttonVariants: any = {
  primary: {
    ...flexCenter,
    width: "22.5rem",
    height: "6rem",
    background: colorSys.white,
    border: `0.3rem solid ${colorSys.main_primary_dark}`,
    fontSize: "2.4rem",
    color: colorSys.main_primary,
    "&:hover": {
      background: colorSys.background_second,
      border: `0.2rem solid ${colorSys.main_primary_dark}`,
    },
  },
  secondary: {
    fontSize: "2rem",
    background: colorSys.main_primary,
    color: colorSys.white,
    border: "0",
  },
};

const Button = styled.button(
  {
    padding: "1.2rem 2.4rem",
    borderRadius: "1.2rem",
    fontFamily: "Galada",
    fontStyle: "normal",
    fontWeight: "400",
    transition: "all 1s ease",
    "&:hover": {
      transform: "translateY(-0.2rem)",
      boxShadow: appShadows.button,
    },
  },
  ({ variant = "secondary" }: { variant: string }) => buttonVariants[variant]
);

// const MainLogoText = styled.div({
//   ...fonts.fontsLancelot,
//   ...flexCenter,
//   flexDirection: "column",
//   gap: "1.2rem",
//   "&:h3": {
//     fontSize: "4.2rem",
//     content: "Natalie Cakes",
//   },
//   "&:h4": { fontSize: "2.2rem", content: "Homemade Baking" },
// });

function MainLogoText({
  textColor = colorSys.text_dark,
}: {
  textColor: string;
}): EmotionJSX.Element {
  return (
    <div
      className={css({
        color: textColor,
        ...fonts.fontsLancelot,
        ...flexCenter,
        flexDirection: "column",
        gap: "1.2rem",
        h3: {
          textAlign: "center",
          fontSize: "4.2rem",
        },
        h4: {
          textAlign: "center",
          fontSize: "2.2rem",
        },
        [mq.medium]: {
          gap: "0.8rem",
          h3: {
            fontSize: "3.6rem",
          },
          h4: {
            fontSize: "1.8rem",
          },
        },
        [mq.small]: {
          gap: "0.8rem",
          h3: {
            fontSize: "3rem",
          },
          h4: {
            fontSize: "1.3rem",
          },
        },
      })}
    >
      <h3>Natalie Cakes</h3>
      <h4>Homemade Baking</h4>
    </div>
  );
}

export { Button, MainLogoText };
