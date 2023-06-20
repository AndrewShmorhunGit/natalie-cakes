import { css } from "@emotion/css";
import {
  DecoLine,
  FlexCenterContainer,
  FlexColumnContainer,
  FlexRowContainer,
  MainHeader,
} from "components/lib/Styled Components";
import {
  HeroBirthdayCakesLogo,
  HeroCakesAndPiesLogo,
  HeroCupCakesLogo,
  HeroGingerbreadLogo,
} from "components/logos/Logos";
import { IContentBox, IInnerContent } from "interfaces/IContent";
import { IHeroSelectors } from "interfaces/IHero";
import { ILogos } from "interfaces/ILogos";

import { container, flexCenter, paddingTopBottom } from "styles/general";
import { colorSys } from "styles/imports";

export function Hero({ contentBox }: { contentBox: IContentBox }) {
  const content: IInnerContent = contentBox.innerContent;
  const textColor: string = colorSys.white;

  const logoProps: ILogos = {
    width: "48",
    height: "48",
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
    <main
      className={css({
        color: textColor,
        backgroundImage: `url("https://media.istockphoto.com/id/700712598/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B4%D0%B5%D0%BD%D1%8C-%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F-%D0%BC%D0%B8%D0%BB%D0%BE%D1%97-%D0%B4%D0%B8%D1%82%D0%B8%D0%BD%D0%B8.jpg?s=612x612&w=0&k=20&c=OkG9eyPfm3xVB0KHWiuLnQl2P4lUIOBRHvehsHR9BI4=")`,
        backgroundRepeat: "none",
        backgroundSize: "cover",
      })}
    >
      <div
        className={css({
          ...paddingTopBottom(12, 18),
          height: "100%",
          background: "rgb(0,0,0,0.3)",
          backdropFilter: "blur(1.6rem)",
          // backdropFilter: "sepia(90%);",
        })}
      >
        <FlexColumnContainer
          className={css({
            ...container,
          })}
        >
          <MainHeader
            className={css({
              ...flexCenter,
              ...paddingTopBottom(6),
              fontWeight: 400,
            })}
          >
            {content.mainHeader}
          </MainHeader>
          <p
            className={css({
              ...flexCenter,
              ...paddingTopBottom(8, 12),
              width: "60rem",
              fontSize: "2.4rem",
              fontWeight: 400,
            })}
          >
            {content.heroTagline}
          </p>
          <h2
            className={css({
              ...flexCenter,
              ...paddingTopBottom(0, 2),
              fontSize: "4rem",
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
            <DecoLine
              width={contentBox.isLanguage === "ru" ? 26 : 16}
              height={0.8}
              color={textColor}
            />
          </FlexCenterContainer>
          <FlexCenterContainer>
            <FlexRowContainer>
              {/* HeroSelector */}
              <div>
                <p>{content.heroSelectors.birthdayCake}</p>
              </div>
              <div>
                <p>{content.heroSelectors.cakesAndPies}</p>
              </div>
              <div>
                <p>{content.heroSelectors.cupCakes}</p>
              </div>
              <div>
                <p>{content.heroSelectors.gingerBread}</p>
              </div>
            </FlexRowContainer>
          </FlexCenterContainer>
        </FlexColumnContainer>
      </div>
    </main>
  );
}
