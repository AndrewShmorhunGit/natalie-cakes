// Components
import {
  IsraeliShekel,
  PersonsLogo,
  RadiusLogo,
  WeightLogo,
  FlexCenterContainer,
  FlexColumnContainer,
  FlexRowContainer,
  GetRateStars,
  MenuCategoryHeader,
  Container,
  MenuPositionContainer,
  MenuPositionHeader,
  PositionVariantContainer,
  MenuSection,
  RateAndTasteContainer,
  UpDownArrow,
  MenuCategoryContainer,
} from "components";
// Styles
import { css, palette, container, createGrid, paddingTopBottom } from "styles";
// Interfaces
import { IAppBox } from "interfaces/IApp";
// Data
import { createMenuData } from "data/menu.data";
import { toCamelCase } from "utils/functions";
// React
import { useState } from "react";

export function Menu({ appBox }: { appBox: IAppBox }) {
  const {
    innerContent: { menuContent },
    innerContent: content,
    isMedia,
    setMedia,
    setMediaByStep,
  } = appBox;

  const menuData = createMenuData(menuContent);

  const categories: any = menuData.categories.reduce((total, category) => {
    total = {
      ...total,
      [toCamelCase(category.name)]: false,
    };
    return total;
  }, {});

  const [isArrow, setIsArrow] = useState({ ...categories });

  console.log(isArrow);

  return (
    <MenuSection>
      <Container
        className={css({
          ...container,
        })}
      >
        {/* {Iteration from menuData object} */}
        {menuData.categories.map((category) => {
          const isArrowProp = toCamelCase(category.name);
          return (
            <FlexColumnContainer key={category.name}>
              <MenuCategoryContainer
                className={css({
                  fontSize: `${setMediaByStep(4, 0.2)}rem`,
                  ...createGrid("1fr 10fr", 1),
                })}
              >
                <Container
                  className={css({ alignSelf: "center" })}
                  onClick={() =>
                    setIsArrow({
                      ...isArrow,
                      [isArrowProp]: !isArrow[isArrowProp],
                    })
                  }
                >
                  <UpDownArrow rotate={isArrow[isArrowProp] ? 0.5 : 0} />
                </Container>
                <MenuCategoryHeader>{category.name} </MenuCategoryHeader>
              </MenuCategoryContainer>

              <Container
                className={css({
                  overflow: "hidden",
                  // Scale Y
                  // transform: `scaleY(${isArrow[categoryName] ? 1 : 0})`,
                  // transformOrigin: "top",
                  // transition: "transform 1s ease-in",
                  // Max Hight
                  maxHeight: `${isArrow[isArrowProp] ? "200rem" : "0"}`,
                  transition: `max-height .6s ease-out`,

                  columnGap: "4rem",
                  rowGap: "4rem",
                  ...createGrid(setMedia(2, 1), 1),
                })}
              >
                {category.positions.map((item, index) => {
                  return (
                    <MenuPositionContainer
                      key={item.itemName}
                      className={css({
                        gridRow: `${
                          isMedia.big ? ((index + 1) * 2) % 2 : index + 1
                        }`,
                      })}
                    >
                      <MenuPositionHeader>{item.itemName}</MenuPositionHeader>
                      <FlexCenterContainer
                        className={css({
                          ...paddingTopBottom(2.4),
                          height: "auto",
                        })}
                      >
                        <img
                          src={item.imgSrc}
                          alt={item.description}
                          className={css({
                            height: "100%",
                            minWidth: "28rem",
                          })}
                        />
                      </FlexCenterContainer>
                      {/* // From Here // */}
                      <RateAndTasteContainer
                        className={css({
                          ...createGrid(
                            isMedia.mini ? 1 : 2,
                            isMedia.mini ? 2 : 1
                          ),
                        })}
                      >
                        <Container
                          className={css({
                            textTransform: "capitalize",
                            alignSelf: "center",
                          })}
                        >
                          {GetRateStars(
                            item.sweetness,
                            5,
                            content.sweetness,
                            appBox.isLanguage === "hb"
                              ? 6.8
                              : isMedia.mini
                              ? 8.8
                              : 11.2
                          )}
                          {GetRateStars(
                            item.sourness,
                            5,
                            content.sourness,
                            appBox.isLanguage === "hb"
                              ? 6.8
                              : isMedia.mini
                              ? 8.8
                              : 11.2
                          )}
                        </Container>
                        <Container>
                          <h3
                            className={css({
                              ":first-letter": { textTransform: "uppercase" },
                            })}
                          >
                            {content.taste} -
                          </h3>
                          <p>{item.tasteAccent}</p>
                        </Container>
                      </RateAndTasteContainer>
                      <FlexColumnContainer className={css({ gap: "1.2rem" })}>
                        {item.variants.map((variant) => {
                          return (
                            <PositionVariantContainer
                              key={variant.size}
                              className={css({
                                ...createGrid(
                                  `0.5fr ${
                                    isMedia.mini ? "1.5fr" : "1fr"
                                  } 1fr 1fr 1fr`,
                                  1
                                ),
                              })}
                            >
                              <FlexCenterContainer>
                                <h3
                                  className={css({
                                    color: palette.main_primary,
                                    fontSize: `${setMedia(
                                      2.8,
                                      2.6,
                                      2.4,
                                      2.2
                                    )}rem`,
                                  })}
                                >
                                  {variant.size}
                                </h3>
                              </FlexCenterContainer>
                              <FlexCenterContainer
                                className={css({ flexDirection: "column" })}
                              >
                                <FlexCenterContainer>
                                  <RadiusLogo
                                    height={setMediaByStep(16, 1)}
                                    width={setMediaByStep(16, 1)}
                                  />
                                </FlexCenterContainer>
                                <p className={css({ textAlign: "center" })}>
                                  {variant.radius}mm
                                </p>
                              </FlexCenterContainer>
                              <FlexRowContainer
                                className={css({ gap: ".8rem" })}
                              >
                                <PersonsLogo
                                  height={setMediaByStep(32, 2)}
                                  width={setMediaByStep(32, 2)}
                                />
                                <p>{variant.persons}</p>
                              </FlexRowContainer>
                              <FlexRowContainer
                                className={css({ gap: ".8rem" })}
                              >
                                <WeightLogo
                                  height={setMediaByStep(24, 2)}
                                  width={setMediaByStep(24, 2)}
                                />
                                <p>{variant.weight}</p>
                              </FlexRowContainer>
                              <FlexRowContainer
                                className={css({ gap: ".8rem" })}
                              >
                                <IsraeliShekel
                                  height={setMediaByStep(24, 2)}
                                  width={setMediaByStep(24, 2)}
                                />
                                <p>{variant.price}</p>
                              </FlexRowContainer>
                            </PositionVariantContainer>
                          );
                        })}
                      </FlexColumnContainer>
                    </MenuPositionContainer>
                  );
                })}
              </Container>
            </FlexColumnContainer>
          );
        })}
      </Container>
    </MenuSection>
  );
}
