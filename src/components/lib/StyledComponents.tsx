import styled from "@emotion/styled/macro";
import { palette, appShadows, mq, styles } from "styles/imports";
import { css } from "@emotion/css";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import {
  infoLogoContainerAbsoluteSettings,
  paddingTopBottom,
  wideContainer,
} from "styles/styles";
import { IHeroSelectors, ISelectorParams } from "interfaces/IHero";

// STYLED GENERAL CUSTOM COMPONENTS

// BUTTONS
const buttonVariants: any = {
  primary: {
    width: "22.4rem",
    height: "6rem",
    border: `0.3rem solid ${palette.main_primary_dark}`,
    fontSize: "2.4rem",
    fontWeight: "600",
    color: palette.main_primary_dark,
    "&:hover": {
      background: palette.background_second,
    },
    [mq.medium]: { width: "20rem", height: "5.2rem", fontSize: "2rem" },
    [mq.small]: { width: "16rem", height: "4rem", fontSize: "1.6rem" },
  },
  secondary: {
    width: "12rem",
    height: "4.8rem",
    fontSize: "2rem",
    backgroundColor: palette.main_primary,
    color: palette.white,
    border: `0.2rem solid ${palette.white}`,
    [mq.medium]: { width: "10rem", height: "4rem", fontSize: "1.6rem" },
    [mq.small]: { width: "8rem", height: "3.2rem", fontSize: "1.2rem" },
  },
  language: {
    width: "3.2rem",
    height: "3.2rem",
    fontSize: "1.6rem",
    border: `0.2rem solid ${palette.main_primary_dark}`,
    textTransform: "none",
    borderRadius: "0.4rem",
    [mq.medium]: { width: "2.8rem", height: "2.8rem", fontSize: "1.2rem" },
    // [mq.small]: { width: "2.4rem", height: "2.4rem", fontSize: "1rem" },
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

// STYLED APP COMPONENTS

// NAV
const NavigationSection = styled.main({
  ...wideContainer,
  position: "fixed",
  top: 0,
  zIndex: 99,
  width: "100%",
  background: "linear-gradient(270deg, #FF8E8E 0%, #995555 100%)",
  backgroundColor:
    "radial-gradient(562% 18036% at 115.87% 50%, #FF8E8E 0%, #995555 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  overflow: "hidden",
});

function NavBurger({
  gap = 0.8,
  lineHight = 0.4,
  lineWidth = 2.8,
  circleRadius = 5.2,
}) {
  return (
    <Container
      className={css({
        display: "grid",
        // transform: "",
      })}
    >
      <RelativeContainer
        className={css({
          width: "12rem",
          alignSelf: "center",
          transition: "all 1s ease",
          "&:hover": {
            transform: "rotate(0.5turn)",
            // boxShadow: appShadows.buttonActive,
          },
        })}
      >
        <DecoContainer
          width={circleRadius}
          height={circleRadius}
          color={palette.background_main}
          style={{
            borderRadius: "50%",
            position: "absolute",
            left: "50%",
            top: "50%",
            // translate: "all 1s ease",
            transform: "translate(-50%, -50%)",
            border: `solid 0.2rem ${palette.main_primary_dark}`,
          }}
        />
        <DecoContainer
          width={lineWidth}
          height={lineHight}
          color={palette.main_primary_dark}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: `translate(-50%, calc(-50% + ${gap}rem))`,
          }}
        />
        <DecoContainer
          width={lineWidth}
          height={lineHight}
          color={palette.main_primary_dark}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50% , -50%)",
          }}
        />
        <DecoContainer
          width={lineWidth}
          height={lineHight}
          color={palette.main_primary_dark}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: `translate(-50%, calc(-50% - ${gap}rem))`,
          }}
        />
      </RelativeContainer>
    </Container>
  );
}

// HERO
const HeroSection = styled.main({
  // backgroundImage: `url("content/images/hero/hero-background-img.jpg")`,
  backgroundImage: `url("https://media.istockphoto.com/id/700712598/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B4%D0%B5%D0%BD%D1%8C-%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F-%D0%BC%D0%B8%D0%BB%D0%BE%D1%97-%D0%B4%D0%B8%D1%82%D0%B8%D0%BD%D0%B8.jpg?s=612x612&w=0&k=20&c=OkG9eyPfm3xVB0KHWiuLnQl2P4lUIOBRHvehsHR9BI4=")`,
  backgroundRepeat: "none",
  backgroundSize: "cover",
});

const HeroBackDropFilterContainer = styled.div({
  ...paddingTopBottom(12, 18),
  height: "100%",
  background: "rgb(0,0,0,0.3)",
  backdropFilter: "blur(1.6rem)",
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

const HeroTagLine = styled.h2({
  ...paddingTopBottom(8, 10),
  // width: "60rem",
  fontSize: "2.8rem",
  fontWeight: 400,

  [mq.small]: {
    fontSize: "2.4rem",
    width: "50rem",
  },
  [mq.mini]: {
    width: "40rem",
    fontSize: "2rem",
  },
});

function HeroSelectorDecoContainer({
  selector,
  selectorParams,
  clickHandler,
  style,
}: {
  selector: IHeroSelectors;
  selectorParams: ISelectorParams;
  clickHandler?: () => void;
  style?: React.CSSProperties | undefined;
}): EmotionJSX.Element {
  return (
    <RelativeContainer
      className={css({ cursor: "pointer" })}
      onClick={(e) => {
        typeof clickHandler !== "undefined" && clickHandler();
      }}
    >
      <AbsoluteCenterContainer>{selector.icon}</AbsoluteCenterContainer>
      <DecoContainer
        width={selectorParams.width}
        height={selectorParams.height}
        color={selectorParams.color}
        style={{
          ...selectorParams.decoProps,
          // border: `solid ${palette.main_primary_dark} .2rem`,

          boxShadow: appShadows.buttonActive,
        }}
      />
      <DecoContainer
        width={selectorParams.width - selectorParams.step}
        height={selectorParams.height - selectorParams.step}
        color={selectorParams.ringColor}
        style={{
          ...selectorParams.decoProps,
          // '&:hover':'',
        }}
      />
      <DecoContainer
        width={selectorParams.width - 2 * selectorParams.step}
        height={selectorParams.height - 2 * selectorParams.step}
        color={selectorParams.color}
        style={{
          ...selectorParams.decoProps,
        }}
      />
      <Container
        className={css({
          ...styles.flexCenter,
          transform: `translateY(${selectorParams.textPadding}rem)`,
        })}
      >
        <p
          className={css({
            width: `12rem`,
            textAlign: "center",
            textTransform: "capitalize",
            fontSize: `${selectorParams.font}`,
          })}
        >
          {selector.name}
        </p>
      </Container>
    </RelativeContainer>
  );
}

// INFO

const InfoContainer = styled.div({
  display: "flex",
  minWidth: "32rem",
  maxWidth: "120rem",
  // margin: "1.2rem",
  padding: "1.6rem 1.6rem 3.6rem",
  border: `solid ${palette.main_primary_dark} .2rem`,
  boxShadow: appShadows.buttonActive,
  borderRadius: "1.2rem",
  backgroundColor: `${palette.background_second}`,
  opacity: 0.9,
});

const InfoHeader = styled.ul({
  textAlign: "center",
  textTransform: "capitalize",
  fontSize: "3.2rem",
  paddingBottom: "1.2rem",
  [mq.medium]: {
    fontSize: "3rem",
  },
  [mq.small]: {
    fontSize: "2.8rem",
  },
  [mq.mini]: {
    fontSize: "2.8rem",
  },
});

const InfoSubHeader = styled.h4({
  // textAlign: "center",
  textTransform: "capitalize",
  fontSize: "2.8rem",
  fontWeight: 400,
  paddingBottom: "0.4rem",
  paddingTop: "1.2rem",
  [mq.medium]: {
    fontSize: "2.4rem",
  },
  [mq.small]: {
    fontSize: "2rem",
  },
  [mq.mini]: {
    fontSize: "1.8rem",
  },
});

const InfoParagraph = styled.li({
  fontSize: "2rem",
  fontWeight: 400,
  paddingLeft: "1.2rem",
  [mq.medium]: {
    fontSize: "1.6rem",
  },
  [mq.small]: {
    fontSize: "1.5rem",
  },
  [mq.mini]: {
    fontSize: "1.5rem",
  },
});

function InfoLogoContainer({
  Logo,
  type,
  isCondition,
  step,
  big = 24,
  medium = 20,
  small = 16,
  mini = 8,
  setMedia,
}: {
  Logo: EmotionJSX.Element;
  type: "left" | "right";
  isCondition: boolean;
  big?: number;
  medium?: number;
  small?: number;
  mini?: number;
  step: number;
  setMedia: (
    bigParam: string | number,
    mediumParam?: string | number | undefined,
    smallParam?: string | number | undefined,
    minParam?: string | number | undefined
  ) => string | number;
}) {
  return (
    <Container className={css({ position: "relative", zIndex: "2" })}>
      <DecoContainer
        width={+setMedia(big, medium, small, mini)}
        height={+setMedia(big, medium, small, mini)}
        color={palette.main_primary}
        style={{
          position: "absolute",
          ...infoLogoContainerAbsoluteSettings(isCondition, type),
          // border: `solid ${palette.main_primary_dark} .2rem`,
          boxShadow: appShadows.buttonActive,
        }}
      />
      <DecoContainer
        width={+setMedia(big - step, medium - step, small - step, mini - step)}
        height={+setMedia(big - step, medium - step, small - step, mini - step)}
        color={palette.white}
        style={{
          position: "absolute",

          ...infoLogoContainerAbsoluteSettings(isCondition, type),
        }}
      />
      <DecoContainer
        width={
          +setMedia(
            big - step * 2,
            medium - step * 2,
            small - step * 2,
            mini - step * 2
          )
        }
        height={
          +setMedia(
            big - step * 2,
            medium - step * 2,
            small - step * 2,
            mini - step * 2
          )
        }
        color={palette.main_primary}
        style={{
          position: "absolute",
          ...infoLogoContainerAbsoluteSettings(isCondition, type),
        }}
      />
      <Container
        className={css({
          position: "absolute",
          ...infoLogoContainerAbsoluteSettings(isCondition, type),
          zIndex: "2",
        })}
      >
        {Logo}
      </Container>
    </Container>
  );
}

// FOOTER

const FooterSection = styled.div({
  backgroundColor: palette.background_second,
  borderTop: `0.2rem solid ${palette.main_primary_dark}`,
});

const FooterHeader = styled.h3({
  textAlign: "center",
  textTransform: "capitalize",
  fontSize: "3.2rem",
  [mq.medium]: {
    fontSize: "3rem",
  },
  [mq.small]: {
    fontSize: "2.8rem",
  },
  [mq.mini]: {
    fontSize: "2.8rem",
  },
});

const FooterParagraph = styled.p({
  fontSize: "2rem",
  fontWeight: 400,
  // textAlign: "center",
  [mq.medium]: {
    fontSize: "1.6rem",
  },
  [mq.small]: {
    fontSize: "1.4rem",
  },
  [mq.mini]: {
    fontSize: "1.4rem",
  },
});

// CONTAINERS

// const BlockContainer = styled.div({
//   display: "block",
// });
const Container = styled.div({
  marginLeft: "auto",
  marginRight: "auto",
  // display: "flex",
  // overflow: "hidden",
  // height: "auto",
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

// COMPONENTS

function IconAndTextFooterContacts({
  icon,
  text,
}: {
  icon: EmotionJSX.Element;
  text: string;
}) {
  return (
    <FlexRowContainer>
      {icon}
      <FooterParagraph className={css({ paddingLeft: "2rem" })}>
        {text}
      </FooterParagraph>
    </FlexRowContainer>
  );
}

function DecoContainer({
  width,
  height,
  color,
  style,
}: {
  width: number;
  height: number;
  color: string;
  style?: React.CSSProperties | undefined;
}) {
  return (
    <FlexCenterContainer
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
  Button,
  MainHeader,
  NavigationSection,
  HeroSection,
  HeroTagLine,
  FooterSection,
  FooterParagraph,
  FooterHeader,
  Container,
  RelativeContainer,
  AbsoluteCenterContainer,
  AbsoluteBottomContainer,
  FlexRowContainer,
  FlexColumnContainer,
  FlexCenterContainer,
  HeroBackDropFilterContainer as BackDropFilterContainer,
  InfoLogoContainer,
  InfoContainer,
  InfoSubHeader,
  InfoHeader,
  InfoParagraph,
  IconAndTextFooterContacts,
  NavBurger,
  MainLogoText,
  DecoContainer,
  HeroSelectorDecoContainer,
};
