import { css } from "@emotion/css";
import {
  BackDropFilterContainer,
  Container,
  DecoContainer,
  FlexCenterContainer,
  FlexColumnContainer,
  // FlexRowContainer,
  HeroSection,
  HeroSelectorDecoContainer,
  HeroTagLine,
  MainHeader,
} from "components/lib/StyledComponents";
import {
  HeroBirthdayCakesLogo,
  HeroCakesAndPiesLogo,
  HeroCupCakesLogo,
  HeroGingerbreadLogo,
} from "components/logos/Logos";
// import { create } from "domain";
import { IAppBox } from "interfaces/IApp";
import { IInnerContent } from "interfaces/IContent";
import { IHeroSelectors, ISelectorParams } from "interfaces/IHero";
import { ILogos } from "interfaces/ILogos";
import {
  // appShadows,
  container,
  createGrid,
  flexCenter,
  paddingTopBottom,
} from "styles/styles";
import { palette } from "styles/imports";

export function Hero({ appBox: appBox }: { appBox: IAppBox }) {
  const content: IInnerContent = appBox.innerContent;
  const textColor: string = palette.white;
  const setMedia = appBox.setMedia;

  const logoProps: ILogos = {
    width: setMedia(72, 60, 52, 48),
    height: setMedia(72, 60, 52, 48),
  };

  const selectorParams: ISelectorParams = {
    width: +setMedia(14, 12, 10),
    height: +setMedia(14, 12, 10),
    step: 1.6,
    font: "2.2rem",
    color: palette.white,
    ringColor: palette.main_primary,
    textPadding: +setMedia(12, 10, 8),
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
      <BackDropFilterContainer>
        <FlexColumnContainer
          className={css({
            ...container,
          })}
        >
          <MainHeader
            className={css({
              ...paddingTopBottom(6, 4),
            })}
          >
            {content.mainHeader}
          </MainHeader>
          <HeroTagLine
            className={css({
              // ...flexCenter,
              ...paddingTopBottom(8, 10),
              width: "60rem",
              fontSize: "2.8rem",
              fontWeight: 400,
            })}
          >
            {content.heroTagline}
          </HeroTagLine>
          <h2
            className={css({
              ...flexCenter,
              ...paddingTopBottom(0, 2),
              fontSize: "4.4rem",
              fontWeight: 400,
            })}
          >
            {content.slogan}:
          </h2>
          <FlexCenterContainer
            className={css({
              ...paddingTopBottom(0, 8),
            })}
          >
            <DecoContainer
              width={appBox.isLanguage === "ru" ? 26 : 16}
              height={0.2}
              color={textColor}
            />
          </FlexCenterContainer>

          <Container
            className={css({
              ...createGrid(`repeat(4,${setMedia(20, 18, 12)}rem)`, 1),
              ...paddingTopBottom(6),
            })}
          >
            {/* HeroSelectors */}
            {heroSelectors.map((selector) => (
              <HeroSelectorDecoContainer
                key={selector.name}
                selector={selector}
                selectorParams={selectorParams}
              />
            ))}
          </Container>
        </FlexColumnContainer>
      </BackDropFilterContainer>
    </HeroSection>
  );
}
