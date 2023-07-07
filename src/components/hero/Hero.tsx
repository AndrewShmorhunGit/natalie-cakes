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
  const { innerContent: content, setMedia } = appBox;
  const textColor: string = palette.white;

  const logoProps: ILogos = {
    width: setMedia(72, 60, 52, 48),
    height: setMedia(72, 60, 52, 48),
  };

  const selectorParams: ISelectorParams = {
    width: +setMedia(14, 12, 10),
    height: +setMedia(14, 12, 10),
    step: +setMedia(1.6, 1.6, 1.4, 1.2),
    font: `${setMedia(2.2, 2, 1.8)}rem`,
    color: palette.white,
    ringColor: palette.main_primary,
    textPadding: +setMedia(11.6, 10.6, 9.2, 16),
    decoProps: {
      borderRadius: "50%",
      position: "absolute",
      top: "50%",
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
    { name: content.heroSelectors.cupCakes, icon: HeroCupCakesLogo(logoProps) },
    {
      name: content.heroSelectors.gingerBread,
      icon: HeroGingerbreadLogo(logoProps),
    },
  ];

  return (
    <HeroSection
      className={css({
        color: textColor,
      })}
    >
      <HeroBackDropFilterContainer>
        <FlexColumnContainer
          className={css({
            ...container,
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
          <Container className={css({ display: "grid" })}>
            <h2
              className={css({
                alignSelf: "center",
                ...paddingTopBottom(2),
                fontSize: "4.4rem",
                fontWeight: 400,
              })}
            >
              {content.slogan}
            </h2>
          </Container>
          <FlexCenterContainer
            className={css({
              ...paddingTopBottom(0, setMedia(10, 8, 4, 2)),
            })}
          >
            <DecoContainer
              width={appBox.isLanguage === "ru" ? 26 : 16}
              height={0.2}
              color={textColor}
            />
          </FlexCenterContainer>

          <Container
            className={css(
              appBox.isMedia.mini
                ? {
                    columnGap: "4rem",
                    ...createGrid("repeat(2, auto)", "repeat(2, 20rem)"),
                  }
                : {
                    padding: `${setMedia("6", "4", "3.2", "2")}rem 0`,
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
              />
            ))}
          </Container>
        </FlexColumnContainer>
      </HeroBackDropFilterContainer>
    </HeroSection>
  );
}
