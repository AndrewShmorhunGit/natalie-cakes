// Components
import {
  HeroBackDropFilterContainer,
  HeroSection,
  HeroSelectorDecoContainer,
  // HeroTagLine,
  HeroBirthdayCakesLogo,
  HeroCakesAndPiesLogo,
  HeroCupCakesLogo,
  HeroGingerbreadLogo,
  MainHeader,
  Container,
  DecoContainer,
  FlexCenterContainer,
  FlexColumnContainer,
} from "components";
// Styles
import { css, palette, container, createGrid, paddingTopBottom } from "styles";
// Interfaces
import { IAppBox, IHeroSelectors, ISelectorParams, ILogos } from "interfaces";

export function Hero({ appBox }: { appBox: IAppBox }) {
  const {
    innerContent: content,
    setMedia,
    isMedia,
    isLanguage,
    useHover,
    // hoverRef,
  } = appBox;
  // const selectorRef = useRef(null)
  // const isHover = useHover(selectorRef);
  const textColor: string = palette.white;

  const logoProps: ILogos = {
    width: setMedia(72, 60, 52, 60),
    height: setMedia(72, 60, 52, 60),
  };

  const selectorParams: ISelectorParams = {
    width: +setMedia(14, 12, 10, 16),
    height: +setMedia(14, 12, 10, 16),
    step: +setMedia(1.6, 1.6, 1.4, 1.8),
    font: `${setMedia(2.2, 2, 1.8)}rem`,
    color: palette.white,
    ringColor: palette.main_primary,
    textPadding: +setMedia(11.6, 10.6, 9.2),
    decoProps: {
      transition: "all 0.4s",
      borderRadius: "50%",
      position: "absolute",
      top: isMedia.mini ? "calc(50% + 2rem)" : "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: "-1",
    },
  };

  const heroSelectors: IHeroSelectors[] = [
    {
      name: content.heroSelectors.birthdayCake,
      icon: HeroBirthdayCakesLogo(logoProps),
    },
    {
      name: content.heroSelectors.cakesAndPies,
      icon: HeroCakesAndPiesLogo(logoProps),
    },
    {
      name: content.heroSelectors.cupCakes,
      icon: HeroCupCakesLogo(logoProps),
    },
    {
      name: content.heroSelectors.gingerBread,
      icon: HeroGingerbreadLogo(logoProps),
    },
  ];

  return (
    <HeroSection
      className={css({
        color: textColor,
        overflow: "hidden",
      })}
    >
      <HeroBackDropFilterContainer>
        <FlexColumnContainer
          className={css({
            ...container,

            hight: "100%",
          })}
        >
          <MainHeader
            className={css({
              textAlign: "center",
              ...paddingTopBottom(setMedia(6.8, 6, 4, 3.2)),
            })}
          >
            {content.mainHeader}
          </MainHeader>

          {/* <HeroTagLine
            className={css({
              // ...paddingTopBottom(4, 4),
              maxWidth: `${setMedia(68, 56, 52, 32)}rem`,
              fontSize: "2.8rem",
              fontWeight: 400,
            })}
          >
            {content.heroTagline}
          </HeroTagLine> */}
          {!isMedia.mini && (
            <Container className={css({ display: "grid" })}>
              <h2
                className={css({
                  textAlign: "center",
                  alignSelf: "center",
                  ...paddingTopBottom(2),
                  fontSize: "4.4rem",
                  fontWeight: 400,
                })}
              >
                {content.slogan}
              </h2>
            </Container>
          )}
          <FlexCenterContainer
            className={css({
              ...paddingTopBottom(0, setMedia(10, 8, 4, 8)),
            })}
          >
            <DecoContainer
              width={isLanguage === "ru" ? 26 : 16}
              height={0.2}
              color={textColor}
            />
          </FlexCenterContainer>

          <Container
            className={css(
              isMedia.mini
                ? {
                    transform: "rotate(45deg)",
                    fontWeight: 600,
                    color: palette.text_dark,
                    columnGap: "2rem",
                    rowGap: "2rem",
                    ...createGrid(
                      `repeat(2, ${selectorParams.width}rem)`,
                      `repeat(2, ${selectorParams.height}rem)`
                    ),
                  }
                : {
                    padding: `${setMedia("6", "4", "3.2")}rem 0`,
                    ...createGrid(`repeat(4,${setMedia(20, 18, 14)}rem)`, 1),
                  }
            )}
          >
            {/* HeroSelectors */}
            {heroSelectors.map((selector) => (
              <HeroSelectorDecoContainer
                key={selector.name}
                clickHandler={() => console.log(selector.name)}
                selector={selector}
                selectorParams={selectorParams}
                useHover={useHover}
              />
            ))}
          </Container>
        </FlexColumnContainer>
      </HeroBackDropFilterContainer>
    </HeroSection>
  );
}
