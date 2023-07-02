import { css } from "@emotion/css";
import {
  FlexCenterContainer,
  FlexColumnContainer,
  FlexRowContainer,
} from "components/lib/StyledComponents";
import {
  IsraeliShekel,
  PersonsLogo,
  RadiusLogo,
  WeightLogo,
} from "components/logos/Logos";
import { createMenuData } from "data/menu.data";
import { IAppBox } from "interfaces/IApp";
import { palette } from "styles/palette";
import { appShadows, container, paddingTopBottom } from "styles/styles";

export function Menu({ appBox }: { appBox: IAppBox }) {
  const content = appBox.innerContent.menuContent;
  const menuData = createMenuData(content);

  return (
    <div
      className={css({
        backgroundColor: palette.background_main,
      })}
    >
      <div className={css({ ...container })}>
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
                  ...paddingTopBottom(2, 4),
                })}
              >
                <h3>{category.name}</h3>
              </div>
              {category.positions.map((item) => {
                return (
                  <div
                    key={item.itemName}
                    className={css({
                      maxWidth: "64rem",
                      minWidth: "32rem",
                      padding: "2rem",
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
                          <FlexCenterContainer
                            key={variant.size}
                            className={css({
                              // maxWidth: "32rem",
                              padding: "1.2rem",
                              fontSize: "2rem",
                              gap: "3.2rem",
                              border: `solid 0.2rem ${palette.main_primary}`,
                              borderRadius: "2rem",
                              alignItems: "center",
                            })}
                          >
                            <h3
                              className={css({
                                color: palette.main_primary,
                                fontSize: "2.8rem",
                              })}
                            >
                              {variant.size}
                            </h3>
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
                              className={css({ gap: "1.2rem" })}
                            >
                              <PersonsLogo height={32} width={32} />
                              <p>{variant.persons}</p>
                            </FlexRowContainer>
                            <FlexRowContainer
                              className={css({ gap: "1.2rem" })}
                            >
                              <WeightLogo height={24} width={24} />
                              <p>{variant.weight}</p>
                            </FlexRowContainer>
                            <FlexRowContainer
                              className={css({ gap: "1.2rem" })}
                            >
                              <IsraeliShekel height={24} width={24} />
                              <p>{variant.price}</p>
                            </FlexRowContainer>
                          </FlexCenterContainer>
                        );
                      })}
                    </FlexColumnContainer>
                  </div>
                );
              })}
            </FlexColumnContainer>
          );
        })}
      </div>
    </div>
  );
}
