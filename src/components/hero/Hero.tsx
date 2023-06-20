import { css } from "@emotion/css";
import {
  DecoContainer,
  FlexCenterContainer,
  FlexColumnContainer,
  FlexRowContainer,
  HeroSection,
  MainHeader,
} from "components/lib/StyledComponents";
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

  const selectorParams = {
    width: 16,
    height: 16,
    step: 2,
    font: "3.2rem",
    color: colorSys.white,
    ringColor: colorSys.main_primary,
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
              ...paddingTopBottom(6, 4),
            })}
          >
            {content.mainHeader}
          </MainHeader>
          <p
            className={css({
              ...flexCenter,
              ...paddingTopBottom(8, 10),
              width: "60rem",
              fontSize: "2.8rem",
              fontWeight: 400,
            })}
          >
            {content.heroTagline}
          </p>
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
              width={contentBox.isLanguage === "ru" ? 26 : 16}
              height={0.8}
              color={textColor}
            />
          </FlexCenterContainer>
          <FlexCenterContainer>
            <FlexRowContainer
              className={css({
                // ...paddingLeftRight(2),
                gap: "6rem",
              })}
            >
              {/* HeroSelectors */}
              <div
                className={css({
                  position: "relative",
                })}
              >
                <div
                  className={css({
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  })}
                >
                  {heroSelectors[0].icon}
                </div>
                <DecoContainer
                  width={selectorParams.width}
                  height={selectorParams.width}
                  color={selectorParams.color}
                  props={{
                    borderRadius: "50%",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: "-1",
                  }}
                />
                <DecoContainer
                  width={selectorParams.width - selectorParams.step}
                  height={selectorParams.width - selectorParams.step}
                  color={selectorParams.ringColor}
                  props={{
                    borderRadius: "50%",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: "-1",
                  }}
                />
                <DecoContainer
                  width={selectorParams.width - 2 * selectorParams.step}
                  height={selectorParams.width - 2 * selectorParams.step}
                  color={selectorParams.color}
                  props={{
                    borderRadius: "50%",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: "-1",
                  }}
                />

                <p
                  className={css({
                    textTransform: "capitalize",
                    transform: "translateY(11.2rem)",
                    fontSize: `${selectorParams.font}`,
                  })}
                >
                  {content.heroSelectors.birthdayCake}
                </p>
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
    </HeroSection>
  );
}
