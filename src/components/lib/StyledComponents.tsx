import { useRef } from "react";
// Logos
import {
  RateFilledStarLogo,
  RateEmptyStarLogo,
  ArrowDownLogo,
} from "components";
// Styles

import {
  css,
  styled,
  palette,
  appShadows,
  mq,
  styles,
  infoLogoContainerAbsoluteSettings,
  paddingTopBottom,
  createGrid,
  container,
} from "styles";
// Interfaces
import {
  IHeroSelectors,
  IInnerContent,
  ILanguages,
  IMedia,
  ISelectorParams,
  IInfoBlock,
} from "interfaces";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
// Content
import heroBgImage from "content/images/hero/hero-background-img.jpg";

///////////////////////////
// STYLED APP COMPONENTS //
///////////////////////////

// APP

const AppContainer = styled.main({
  minHeight: "100vh",
  ...createGrid("minmax(0, 1fr)", "minmax(1fr, 3fr)"),
  color: palette.text_dark,
});

// NAV

const NavigationSection = styled.main({
  ...container,
  position: "fixed",
  top: 0,
  zIndex: 2,
  width: "100vw",
  minWidth: "100dvw",
  background: palette.background_nav_transparent,
  backgroundColor: palette.gradient_primary_to_primary_dark,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  // overflow: "hidden",
});

const LanguageDropdownContainer = styled.div({
  position: "absolute",
  overflow: "hidden",
  maxHeight: "4rem",
  gap: "0.4rem",

  transition: "max-height 1.4s ease-in",
  ":hover": {
    maxHeight: "25rem",
    transition: "max-height 1.4s ease-out",
  },
});

function UpDownArrow({
  circleRadius = 5.2,
  rotate,
}: {
  circleRadius?: number;
  rotate: number;
}) {
  return (
    <RelativeContainer
      className={css({
        cursor: "pointer",
        transition: "all 1s ease",
        transform: `rotate(${rotate}turn)`,
      })}
    >
      <FlexCenterContainer
        className={css({
          zIndex: 1,
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        })}
      >
        <ArrowDownLogo
          height={24}
          width={24}
          fill={palette.main_primary_dark}
        />
      </FlexCenterContainer>
      <DecoContainer
        width={circleRadius}
        height={circleRadius}
        color={palette.background_main}
        style={{
          borderRadius: "50%",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          border: `solid 0.2rem ${palette.main_primary_dark}`,
          zIndex: 0,
          // boxShadow: appShadows.buttonActive,
        }}
      />
    </RelativeContainer>
  );
}

function NavButtonsContainer({
  content,
  setFlag,
  languages,
  isLanguage,
  setLanguage,
  variant,
  isLangTransition,
}: {
  content: IInnerContent;
  setFlag(language: string): string | JSX.Element;
  languages: ILanguages;
  isLanguage: string;
  setLanguage(value: React.SetStateAction<string>): void;
  variant: string;
  isLangTransition: boolean;
}) {
  return (
    <Container>
      <Container
        className={css({
          display: "flex",
          flexDirection: variant === "navigation" ? "row" : "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
        })}
      >
        <Button variant="primary">{content.makeSweet}</Button>
        <Button variant="secondary">{content.about}</Button>
        <Button variant="secondary">{content.contacts}</Button>
        <RelativeContainer>
          <LanguageDropdownContainer
            className={css({
              left: isLanguage === "hb" ? "-4rem" : 0,
              top: "-2rem",
              transform:
                variant !== "navigation"
                  ? `translate(${isLanguage !== "hb" ? 150 : -160}%, -11.2rem)`
                  : "",
            })}
          >
            <Button variant="language">{setFlag(isLanguage)}</Button>
            <Button
              variant="language"
              onClick={() => !isLangTransition && setLanguage("en")}
              className={css({
                display: `${isLanguage === "en" ? "none" : "flex"}`,
              })}
            >
              {setFlag(languages.en)}
            </Button>
            <Button
              variant="language"
              onClick={() => !isLangTransition && setLanguage("ru")}
              className={css({
                display: `${isLanguage === "ru" ? "none" : "flex"}`,
              })}
            >
              {setFlag(languages.ru)}
            </Button>
            <Button
              variant="language"
              onClick={() => !isLangTransition && setLanguage("hb")}
              className={css({
                display: `${isLanguage === "hb" ? "none" : "flex"}`,
              })}
            >
              {setFlag(languages.hb)}
            </Button>
          </LanguageDropdownContainer>
        </RelativeContainer>
      </Container>
    </Container>
  );
}

function NavBurger({
  gap = 0.8,
  lineHight = 0.4,
  lineWidth = 2.8,
  circleRadius = 5.2,
  clickHandler,
}: {
  gap?: number;
  lineHight?: number;
  lineWidth?: number;
  circleRadius?: number;
  clickHandler?: () => void;
}) {
  return (
    <Container
      className={css({
        display: "grid",
      })}
      onClick={(e) => {
        typeof clickHandler !== "undefined" && clickHandler();
      }}
    >
      <RelativeContainer
        className={css({
          width: "12rem",
          alignSelf: "center",
          transition: "all 1s ease",
          "&:hover": {
            transform: "rotate(0.5turn)",
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
            transform: "translate(-50%, -50%)",
            border: `solid 0.2rem ${palette.main_primary_dark}`,
            // boxShadow: appShadows.buttonActive,
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
  // minHeight: "100vh",
  backgroundImage: `url(${heroBgImage})`,
  backgroundRepeat: "none",
  backgroundSize: "cover",
  paddingBottom: "12rem",
  [mq.large]: { backgroundPositionY: "50%" },
  [mq.mini]: { backgroundPositionX: "50%" },
});

const HeroBackDropFilterContainer = styled.div({
  ...paddingTopBottom(12, 18),
  height: "100%",
  background: "rgb(0,0,0,0.3)",
  backdropFilter: "blur(0.4rem)",
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
  useHover,
  style,
}: {
  selector: IHeroSelectors;
  selectorParams: ISelectorParams;
  clickHandler?: () => void;
  useHover: <T extends HTMLElement = HTMLElement>(
    elementRef: React.RefObject<T>
  ) => boolean;
  style?: React.CSSProperties | undefined;
}): EmotionJSX.Element {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  return (
    <RelativeContainer
      ref={hoverRef}
      className={css({
        cursor: "pointer",
        position: "absolute",
        borderRadius: "50%",
        top: "50%",
        left: "50%",
        transform: `translate(-50%, ${isHover ? "calc(-50% - 1px)" : "-50%"})`,
        transition: selectorParams.decoProps.transition,
        [mq.mini]: {
          top: "0%",
          left: "0%",
          transform: `rotate(-45deg) translateY(${isHover ? "-1px" : "0"})`,
        },
      })}
      onClick={(e) => {
        typeof clickHandler !== "undefined" && clickHandler();
      }}
    >
      <AbsoluteCenterContainer
        className={css({
          overflow: "hidden",
        })}
      >
        {selector.icon}
      </AbsoluteCenterContainer>
      <DecoContainer
        width={selectorParams.width}
        height={selectorParams.height}
        color={selectorParams.color}
        style={{
          ...selectorParams.decoProps,
          boxShadow: isHover ? appShadows.buttonActive : "none",
        }}
      />

      <DecoContainer
        width={selectorParams.width - selectorParams.step}
        height={selectorParams.height - selectorParams.step}
        color={selectorParams.ringColor}
        style={
          isHover
            ? {
                ...selectorParams.decoProps,
                transform: `translate(-50%, -50%) rotate(1turn)`,
              }
            : {
                ...selectorParams.decoProps,
              }
        }
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

const InformationSection = styled.main({
  marginTop: "-12rem",
  background: "linear-gradient(180deg, rgb(57,36,28,0.95) 0%, #FFF4F4 100%)",
  borderTop: `0.4rem solid ${palette.main_primary_dark}`,
  backdropFilter: "blur(0.4rem)",
});

const InfoContainer = styled.div({
  display: "flex",
  minWidth: "32rem",
  maxWidth: "120rem",
  padding: "1.6rem 1.6rem 3.2rem 3.2rem",
  margin: "0 2.4rem",
  boxShadow: appShadows.button,
  borderRadius: "1.2rem",
  backgroundColor: `${palette.background_second}`,
  [mq.mini]: { margin: "0" },
});

const InformationImportantContainer = styled.div({
  display: "grid",
  height: "8rem",
  borderRadius: "4rem",
  border: `solid 0.2rem ${palette.text_dark}`,
  backgroundColor: palette.background_third,
  overflow: "hidden",
  position: "relative",
});

const InfoHeader = styled.ul({
  textAlign: "center",
  textTransform: "capitalize",
  fontSize: "3.2rem",
  fontWeight: "600",
  alignSelf: "center",
  zIndex: "2",
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
  listStyleType: "circle",
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

function InfoImportantTitle({
  isMedia,
  setMedia,
  title,
}: {
  isMedia: IMedia;
  setMedia: (
    bigParam: string | number,
    mediumParam?: string | number | undefined,
    smallParam?: string | number | undefined,
    minParam?: string | number | undefined
  ) => string | number;
  title: string;
}): EmotionJSX.Element {
  return (
    <InformationImportantContainer
      className={css({
        minWidth: `${setMedia(32, 30, 28)}rem`,
        marginTop: `${isMedia.mini ? "4rem" : "2rem"}`,
        marginBottom: `${isMedia.mini ? "4rem" : "2rem"}`,
      })}
    >
      <DecoContainer
        width={4}
        height={30}
        color={palette.main_primary}
        style={{
          position: "absolute",
          left: "calc(50% - 4rem)",
          bottom: "-7rem",
          transform: "rotate(45deg)",
        }}
      />
      <DecoContainer
        width={4}
        height={30}
        color={palette.main_primary}
        style={{
          position: "absolute",
          left: "calc(50% + 8rem)",
          bottom: "-7rem",
          transform: "rotate(45deg)",
        }}
      />
      <InfoHeader>{title}</InfoHeader>
    </InformationImportantContainer>
  );
}

function InfoBlock({
  infContentData,
  isMedia,
  setMedia,
  index,
}: {
  infContentData: IInfoBlock;
  isMedia: IMedia;
  setMedia: (
    bigParam: string | number,
    mediumParam?: string | number | undefined,
    smallParam?: string | number | undefined,
    minParam?: string | number | undefined
  ) => string | number;
  index: number;
}) {
  const { text, title, logo } = infContentData;

  return (
    <Container
      className={css({
        gridRow: "2",
        ...createGrid(index % 2 === 0 ? "1fr 3fr" : "3fr 1fr", 1),
      })}
    >
      {index % 2 === 0 && (
        <InfoLogoContainer
          Logo={logo}
          isCondition={isMedia.mini}
          setMedia={setMedia}
          type={"left"}
          step={+setMedia(2.4, 2, 1.6, 1)}
        />
      )}
      <InfoContainer
        className={css({
          display: "flex",
          flexDirection: "column",
        })}
      >
        <InfoHeader>{title}</InfoHeader>
        <InfoDecoLine />
        <InfoSubHeader>{text.h1}</InfoSubHeader>
        <InfoParagraph>{text.p1}</InfoParagraph>
        <InfoSubHeader>{text.h2}</InfoSubHeader>
        <InfoParagraph>{text.p2}</InfoParagraph>
      </InfoContainer>
      {index % 2 === 1 && (
        <InfoLogoContainer
          Logo={logo}
          isCondition={isMedia.mini}
          setMedia={setMedia}
          type={"right"}
          step={+setMedia(2.4, 2, 1.6, 1)}
        />
      )}
    </Container>
  );
}

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
          boxShadow: appShadows.button,
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

function InfoDecoLine() {
  return (
    <FlexCenterContainer>
      <DecoContainer width={18} height={0.2} color={palette.main_primary} />
    </FlexCenterContainer>
  );
}

// MENU

const MenuSection = styled.main({
  backgroundColor: palette.background_main,
  ...paddingTopBottom(4),
});

const MenuCategoryContainer = styled.div({
  width: "100%",
  alignSelf: "center",
  padding: "2rem 3.6rem",
  borderLeft: `solid 0.4rem ${palette.main_primary_dark}`,
  borderRight: `solid 0.4rem ${palette.main_primary_dark}`,
  backgroundColor: palette.background_second,
});

const MenuCategoryHeader = styled.h3({
  textTransform: "capitalize",
  textAlign: "center",
});

const MenuPositionContainer = styled.div({
  maxWidth: "80rem",
  minWidth: "32rem",
  padding: "2rem",
  border: `solid .2rem ${palette.main_primary_dark}`,
  borderRadius: "1.2rem",
  boxShadow: appShadows.button,
  backgroundColor: palette.background_second,
});

const MenuPositionHeader = styled.h4({
  fontSize: "2.4rem",
  textTransform: "capitalize",
  textAlign: "center",
  fontWeight: 600,
});

const PositionVariantContainer = styled.div({
  minWidth: "100%",
  padding: "1.2rem",
  fontSize: "2rem",
  fontWeight: "600",
  border: `solid 0.2rem ${palette.main_primary}`,
  borderRadius: "1.2rem",
  alignSelf: "center",
  alignItems: "center",
  columnGap: "1.6rem",
  [mq.mini]: {
    padding: "1rem",
    fontSize: "1.8rem",
    columnGap: "1.4rem",
    minWidth: "34.8rem",
  },
});

const RateAndTasteContainer = styled.div({
  [mq.mini]: {
    fontSize: "1.6rem",
    rowGap: "1rem",
    paddingBottom: "2rem",
  },
  fontSize: "2rem",
  columnGap: "1.2rem",
  ...paddingTopBottom(0, 2),
});

function GetRateStars(
  rate: number,
  max: number,
  content: string,
  width: number = 10,
  size: number = 20
): EmotionJSX.Element {
  return (
    <FlexRowContainer>
      <p className={css({ width: `${width}rem` })}>{content}:</p>
      <Container
        className={css({ columnGap: "0.4rem", ...createGrid(max, 1) })}
      >
        {Array.from(Array(max).keys()).map((num) => {
          return (
            <div key={num} className={css({ alignSelf: "center" })}>
              {num + 1 <= rate ? (
                <RateFilledStarLogo
                  height={size}
                  width={size}
                  fill={palette.main_primary}
                />
              ) : (
                <RateEmptyStarLogo
                  height={size}
                  width={size}
                  fill={palette.main_primary}
                />
              )}
            </div>
          );
        })}
      </Container>
    </FlexRowContainer>
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

function IconAndTextFooterContacts({
  icon,
  text,
}: {
  icon: EmotionJSX.Element;
  text: string;
}) {
  return (
    <FlexRowContainer className={css({ gap: "2rem" })}>
      {icon}
      <FooterParagraph>{text}</FooterParagraph>
    </FlexRowContainer>
  );
}

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

const ScrollYContainer = styled.div({
  transition: "all 0.5s ease",
  position: "relative",
  background: palette.background_main,
  borderRadius: "0.6rem",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    height: "0.4rem",
    width: "1.6rem",
  },
  "&::-webkit-scrollbar-track": {
    background: palette.background_main,
    borderRadius: "2.4rem",
  },
  "&::-webkit-scrollbar-thumb": {
    background: palette.main_primary,
    borderRadius: "2.4rem",
    border: `4px solid ${palette.background_main}`,

    ":active": {
      background: palette.main_primary_dark,
    },
  },
});
// COMPONENTS

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
  // Navigation
  NavigationSection,
  NavBurger,
  NavButtonsContainer,
  // Hero
  HeroSection,
  HeroBackDropFilterContainer,
  HeroTagLine,
  MainHeader,
  HeroSelectorDecoContainer,
  // Information
  InformationSection,
  InfoContainer,
  InformationImportantContainer,
  InfoSubHeader,
  InfoHeader,
  InfoParagraph,
  InfoImportantTitle,
  InfoBlock,
  InfoLogoContainer,
  InfoDecoLine,
  // Menu
  MenuSection,
  MenuCategoryContainer,
  MenuCategoryHeader,
  MenuPositionContainer,
  MenuPositionHeader,
  PositionVariantContainer,
  RateAndTasteContainer,
  GetRateStars,
  UpDownArrow,
  // Footer
  FooterSection,
  FooterParagraph,
  FooterHeader,
  IconAndTextFooterContacts,
  // Styled and Custom Reusable Components
  Button,
  Container,
  RelativeContainer,
  AbsoluteCenterContainer,
  AbsoluteBottomContainer,
  FlexRowContainer,
  FlexColumnContainer,
  FlexCenterContainer,
  ScrollYContainer,
  MainLogoText,
  DecoContainer,
};
