// Components
import {
  IsraeliShekel,
  PersonsLogo,
  RadiusLogo,
  WeightLogo,
  FlexCenterContainer,
  FlexColumnContainer,
  FlexRowContainer,
} from "components";
// Styles
import {
  css,
  palette,
  appShadows,
  container,
  createGrid,
  paddingTopBottom,
} from "styles";
// Interfaces
import { IAppBox } from "interfaces/IApp";
// Data
import { createMenuData } from "data/menu.data";

export function Menu({ appBox }: { appBox: IAppBox }) {
  const content = appBox.innerContent.menuContent;
  const { isMedia, setMedia } = appBox;
  const menuData = createMenuData(content);

  return (
    <div
      className={css({
        backgroundColor: palette.background_main,
      })}
    >
      <div
        className={css({
          ...container,
        })}
      >
        {/* {Iteration from menuData object} */}
        {menuData.categories.map((category) => {
          return (
            <FlexColumnContainer
              key={category.name}
              className={css({
                // ...createGrid(2, 3),
              })}
            >
              <div
                className={css({
                  fontSize: "4.4rem",
                  textTransform: "capitalize",
                  textAlign: "center",
                  gridColumn: "1/-1",
                  ...paddingTopBottom(2, 4),
                })}
              >
                <h3>{category.name}</h3>
              </div>
              <div className={css({ display: "grid", alignSelf: "center" })}>
                <div
                  className={css({
                    columnGap: "4rem",
                    rowGap: "4rem",
                    ...createGrid(setMedia(2, 1), 1),
                  })}
                >
                  {category.positions.map((item, index) => {
                    return (
                      <div
                        key={item.itemName}
                        className={css({
                          gridRow: `${
                            isMedia.big ? ((index + 1) * 2) % 2 : index + 1
                          }`,
                          maxWidth: "80rem",
                          minWidth: "32rem",
                          padding: "2rem",
                          // margin: "0 2rem 4rem 2rem",
                          border: `solid .2rem ${palette.main_primary_dark}`,
                          borderRadius: "1.2rem",
                          boxShadow: appShadows.button,
                          backgroundColor: palette.background_third,
                        })}
                      >
                        <h4
                          className={css({
                            fontSize: "2.8rem",
                            // textTransform: "uppercase",
                            textTransform: "capitalize",
                            textAlign: "center",
                            fontWeight: 300,
                          })}
                        >
                          {item.itemName}
                        </h4>
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
                        <FlexRowContainer
                          className={css({
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "2rem 2rem",
                            fontSize: "2rem",
                          })}
                        >
                          <div
                            className={css({
                              textTransform: "capitalize",
                            })}
                          >
                            <p>sourness {item.sourness}</p>
                            <p>sweetness {item.sweetness}</p>
                          </div>
                          <div
                            className={css({
                              // display: "flex",
                              // width: "50%",
                              // flexDirection: "column",
                            })}
                          >
                            <h3>Taste accent - </h3>
                            <p>{item.tasteAccent}</p>
                          </div>
                        </FlexRowContainer>
                        <FlexColumnContainer className={css({ gap: "1.2rem" })}>
                          {item.variants.map((variant) => {
                            return (
                              <div
                                key={variant.size}
                                className={css({
                                  minWidth: "100%",
                                  padding: "1.2rem",
                                  fontSize: "2rem",
                                  // gap: "3.2rem",
                                  fontWeight: "600",
                                  border: `solid 0.2rem ${palette.main_primary}`,
                                  borderRadius: "2rem",
                                  alignSelf: "center",
                                  alignItems: "center",
                                  columnGap: "1.6rem",
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
                              </div>
                            );
                          })}
                        </FlexColumnContainer>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FlexColumnContainer>
          );
        })}
      </div>
    </div>
  );
}
