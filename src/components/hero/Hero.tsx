// Components
import {
  HeroBackDropFilterContainer,
  HeroSection,
  HeroSelectorDecoContainer,
  // HeroTagLine,
  MainHeader,
  Container,
  DecoContainer,
  FlexCenterContainer,
  FlexColumnContainer,
} from "components";
// Styles
import { css, palette, container, createGrid, paddingTopBottom } from "styles";
// Interfaces
import { IAppBox } from "interfaces";
import { heroData } from "data/static.data";

export function Hero({ appBox }: { appBox: IAppBox }) {
  const {
    innerContent: content,
    setMedia,
    isMedia,
    isLanguage,
    useHover,
  } = appBox;
  const textColor: string = palette.white;

  const {
    heroSelectorParamsData: selectorParams,
    heroSelectorsData: heroSelectors,
  } = heroData(content, setMedia, isMedia);

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
                    color: palette.black,
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
            {heroSelectors.map((selector, index) => (
              <HeroSelectorDecoContainer
                key={selector.name + index}
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
