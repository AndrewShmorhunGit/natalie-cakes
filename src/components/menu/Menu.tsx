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
} from "components";
// Styles
import { css, palette, container, createGrid, paddingTopBottom } from "styles";
// Interfaces
import { IAppBox } from "interfaces/IApp";
// Data
import { createMenuData } from "data/menu.data";

export function Menu({ appBox }: { appBox: IAppBox }) {
  const {
    innerContent: { menuContent },
    innerContent: content,
    isMedia,
    setMedia,
  } = appBox;
  const menuData = createMenuData(menuContent);

  return (
    <MenuSection>
      <Container
        className={css({
          ...container,
        })}
      >
        {/* {Iteration from menuData object} */}
        {menuData.categories.map((category) => {
          return (
            <FlexColumnContainer key={category.name}>
              <Container
                className={css({
                  width: "100%",
                  display: "grid",
                  padding: "2rem 2.2rem",
                  borderLeft: `solid 0.4rem ${palette.main_primary_dark}`,
                  borderRight: `solid 0.4rem ${palette.main_primary_dark}`,
                  marginTop: `${isMedia.mini ? "4rem" : "4rem"}`,
                  marginBottom: `${isMedia.mini ? "4rem" : "8rem"}`,
                  backgroundColor: palette.background_third,
                })}
              >
                {/* <DecoContainer
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
                /> */}
                <MenuCategoryHeader>{category.name} </MenuCategoryHeader>
              </Container>

              <Container
                className={css({
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
                              ? 8
                              : 10
                          )}
                          {GetRateStars(
                            item.sourness,
                            5,
                            content.sourness,
                            appBox.isLanguage === "hb"
                              ? 6.8
                              : isMedia.mini
                              ? 8
                              : 10
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
                                    fontSize: "2.8rem",
                                  })}
                                >
                                  {variant.size}
                                </h3>
                              </FlexCenterContainer>
                              <FlexCenterContainer
                                className={css({ flexDirection: "column" })}
                              >
                                <FlexCenterContainer>
                                  <RadiusLogo height={16} width={16} />
                                </FlexCenterContainer>
                                <p className={css({ textAlign: "center" })}>
                                  {variant.radius}mm
                                </p>
                              </FlexCenterContainer>
                              <FlexRowContainer
                                className={css({ gap: ".8rem" })}
                              >
                                <PersonsLogo height={32} width={32} />
                                <p>{variant.persons}</p>
                              </FlexRowContainer>
                              <FlexRowContainer
                                className={css({ gap: ".8rem" })}
                              >
                                <WeightLogo height={24} width={24} />
                                <p>{variant.weight}</p>
                              </FlexRowContainer>
                              <FlexRowContainer
                                className={css({ gap: ".8rem" })}
                              >
                                <IsraeliShekel height={24} width={24} />
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
