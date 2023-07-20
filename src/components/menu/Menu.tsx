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
  MainHeader,
} from "components";
// Styles
import { css, palette, container, createGrid, paddingTopBottom } from "styles";
// Interfaces
import { IAppBox } from "interfaces";
// Data
import { createMenuData } from "data/menu.data";
<<<<<<< features/main
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { toCamelCase } from "utils/functions";
=======
import { loading, toCamelCase } from "utils/functions";
import { contentEmpty } from "content/text/text.content";
>>>>>>> set content loaders
// React
=======
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { toCamelCase } from "utils/functions";
// React
=======
import { contentEmpty } from "content/text/text.content";
import { loading, toCamelCase } from "utils/functions";
// Hooks
>>>>>>> Stashed changes
=======
import { contentEmpty } from "content/text/text.content";
import { loading, toCamelCase } from "utils/functions";
// Hooks
>>>>>>> Stashed changes
>>>>>>> Stashed changes
=======
import { contentEmpty } from "content/text/text.content";
import { loading, toCamelCase } from "utils/functions";
// Hooks
>>>>>>> Stashed changes
import { useState } from "react";

export function Menu({ appBox }: { appBox: IAppBox }) {
  const {
    innerContent: content,
    isLanguage,
    isMedia,
    setMedia,
    setMediaByStep,
    setModal,
  } = appBox;

  const menuData = createMenuData(content.menuContent);

<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
  // Fix types
<<<<<<< features/main
  const categories: any = menuData.categories.reduce((total, category) => {
    total = {
      ...total,
      [toCamelCase(category.name)]: false,
    };
    return total;
  }, {});
<<<<<<< Updated upstream
=======
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> set content loaders
  const categories: { [x: string]: boolean } | null =
    menuData.categories.reduce((total, category) => {
      total = {
        ...total,
        [toCamelCase(category.name)]: false,
      };
      return total;
    }, {});
<<<<<<< features/main
>>>>>>> Stashed changes
>>>>>>> Stashed changes
=======
>>>>>>> set content loaders

  const [isArrow, setIsArrow] = useState({ ...categories });

  return (
    <MenuSection>
      <MainHeader
        className={css({
          ...container,
          paddingBottom: "8rem",
          textTransform: "capitalize",
        })}
      >
        Menu /*Translate*/
      </MainHeader>
      <Container
        className={css({
          ...container,
        })}
      >
        {menuData.categories.map((category, index) => {
          const isArrowProp = toCamelCase(category.name);
          return (
            <FlexColumnContainer
              key={
                typeof category.name !== "string"
                  ? index
                  : category.name + index
              }
            >
              <MenuCategoryContainer
                className={css({
                  fontSize: `${setMediaByStep(4, 0.2)}rem`,
                  ...createGrid("1fr 100fr", 1),
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
                  <UpDownArrow
                    circleRadius={setMediaByStep(5.2, 0.2)}
                    rotate={isArrow[isArrowProp] ? 0.5 : 0}
                  />
                </Container>
                <MenuCategoryHeader
                  className={css({
                    fontSize: `${setMediaByStep(4, 0.4)}rem`,
                  })}
                >
                  {category.name === "Loading"
                    ? loading(isLanguage)
                    : category.name}
                </MenuCategoryHeader>
              </MenuCategoryContainer>

              <Container
                className={css({
                  margin: "2rem 0",
                  overflow: "hidden",
                  maxHeight: `${isArrow[isArrowProp] ? "200rem" : "0"}`,
                  transition: `max-height ${
                    isArrow[isArrowProp] ? ".4s ease-in" : ".8s ease-out"
                  }`,
                  columnGap: `${setMediaByStep(4, 0.8)}rem`,
                  rowGap: `${setMediaByStep(4, 0.8)}rem`,
                  ...createGrid(setMedia(2, 1), 1),
                })}
              >
                {content !== contentEmpty &&
                  category.positions.map((item, index) => {
                    return (
                      <MenuPositionContainer
                        key={item.itemName + index}
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
<<<<<<< features/main
<<<<<<< Updated upstream
                          onClick={() => setModal("any")}
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
=======
=======
>>>>>>> set content loaders
                        >
                          <img
                            src={item.imgSrc}
                            alt={item.description}
                            className={css({
                              cursor: "pointer",
                              height: "100%",
                              minWidth: "28rem",
                            })}
<<<<<<< features/main
                            onClick={() => setModal("test")}
=======
                            onClick={() => setModal("any")}
>>>>>>> set content loaders
                          />
                        </FlexCenterContainer>
                        {/* // From Here // */}
                        <RateAndTasteContainer
<<<<<<< features/main
>>>>>>> Stashed changes
=======
>>>>>>> set content loaders
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
                                ":first-letter": {
                                  textTransform: "uppercase",
                                },
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
                                key={variant.size + index}
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
