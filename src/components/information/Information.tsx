import { css } from "@emotion/css";
import {
  Container,
  DecoContainer,
  FlexCenterContainer,
  InfoContainer,
  InfoHeader,
  InfoParagraph,
  InfoSubHeader,
  MainHeader,
} from "components/lib/StyledComponents";
import { DesignLogo, IngredientsLogo, OrderLogo } from "components/logos/Logos";
import { IAppBox } from "interfaces/IApp";
import { palette } from "styles/palette";
import {
  appShadows,
  container,
  createGrid,
  paddingTopBottom,
} from "styles/styles";

export function Information({ appBox }: { appBox: IAppBox }) {
  const content = appBox.innerContent;
  const { setMedia, isMedia } = appBox;

  return (
    <main
      className={css({
        background: "linear-gradient(180deg, #53352C 0%, #FFF4F4 100%)",
        borderTop: `0.2rem solid ${palette.main_primary_dark}`,
        padding: "4rem",
      })}
    >
      <MainHeader
        className={css({ color: palette.white, ...paddingTopBottom(1.2, 4) })}
      >
        Information
      </MainHeader>

      <Container
        className={css({
          display: "flex",
          flexDirection: "column",
          ...container,
          rowGap: "4rem",
        })}
      >
        <Container
          className={css({
            gridRow: "1",
            ...createGrid("2fr 1fr", 1),
          })}
        >
          <InfoContainer
            className={css({
              display: "flex",
              flexDirection: "column",
              zIndex: "2",
            })}
          >
            <InfoHeader>{content.ingredients}</InfoHeader>

            <FlexCenterContainer>
              <DecoContainer
                width={18}
                height={0.2}
                color={palette.main_primary}
              />
            </FlexCenterContainer>

            <InfoSubHeader>{content.ingredientsText.h1}</InfoSubHeader>
            <InfoParagraph>{content.ingredientsText.p1}</InfoParagraph>
            <InfoSubHeader>{content.ingredientsText.h2}</InfoSubHeader>
            <InfoParagraph>{content.ingredientsText.p2}</InfoParagraph>
          </InfoContainer>

          <Container
            className={css({
              position: "relative",
            })}
          >
            <Container
              className={css({
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(calc(-50% - 2rem), -50%)",
                zIndex: "2",
              })}
            >
              <IngredientsLogo
                height={setMedia(128, 100, 84, 78)}
                width={setMedia(128, 100, 84, 78)}
              />
            </Container>

            <DecoContainer
              width={+setMedia(24, 20, 16, 14)}
              height={+setMedia(24, 20, 16, 14)}
              color={palette.main_primary}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(calc(-50% - 2rem ), -50%)",
                borderRadius: "50%",
                border: `solid ${palette.main_primary_dark} .2rem`,
                boxShadow: appShadows.buttonActive,
              }}
            />
          </Container>
        </Container>

        <Container
          className={css({
            gridRow: "2",
            ...createGrid("1fr 2fr", 1),
          })}
        >
          <Container className={css({ position: "relative" })}>
            <DecoContainer
              width={+setMedia(24, 20, 16, 14)}
              height={+setMedia(24, 20, 16, 14)}
              color={palette.main_primary}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(calc(-50% + 2rem ), -50%)",
                borderRadius: "50%",
                border: `solid ${palette.main_primary_dark} .2rem`,
                boxShadow: appShadows.buttonActive,
              }}
            />
            <Container
              className={css({
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(calc(-50% + 2rem), -50%)",
                zIndex: "2",
              })}
            >
              <DesignLogo
                height={setMedia(128, 100, 84, 78)}
                width={setMedia(128, 100, 84, 78)}
              />
            </Container>
          </Container>
          <InfoContainer
            className={css({
              display: "flex",
              flexDirection: "column",
              zIndex: "2",
            })}
          >
            <InfoHeader>{content.design}</InfoHeader>

            <FlexCenterContainer>
              <DecoContainer
                width={18}
                height={0.2}
                color={palette.main_primary}
              />
            </FlexCenterContainer>

            <InfoSubHeader>{content.designText.h1}</InfoSubHeader>
            <InfoParagraph>{content.designText.p1}</InfoParagraph>
            <InfoSubHeader>{content.designText.h2}</InfoSubHeader>
            <InfoParagraph>{content.designText.p2}</InfoParagraph>
          </InfoContainer>
        </Container>

        <Container
          className={css({
            gridRow: "3",
          })}
        >
          <Container
            className={css({
              ...createGrid("2fr 1fr", 1),
            })}
          >
            <InfoContainer
              className={css({
                display: "flex",
                flexDirection: "column",
                zIndex: "2",
              })}
            >
              <InfoHeader>{content.order}</InfoHeader>
              <FlexCenterContainer>
                <DecoContainer
                  width={18}
                  height={0.2}
                  color={palette.main_primary}
                />
              </FlexCenterContainer>
              <InfoSubHeader>{content.orderText.h1}</InfoSubHeader>
              <InfoParagraph>{content.orderText.p1}</InfoParagraph>
              <InfoSubHeader>{content.orderText.h2}</InfoSubHeader>
              <InfoParagraph>{content.orderText.p2}</InfoParagraph>
            </InfoContainer>
            <Container
              className={css({
                position: "relative",
              })}
            >
              <Container
                className={css({
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(calc(-50% - 2rem), -50%)",
                  zIndex: "2",
                })}
              >
                <OrderLogo
                  height={setMedia(128, 100, 84, 78)}
                  width={setMedia(128, 100, 84, 78)}
                />
              </Container>
              <DecoContainer
                width={+setMedia(24, 20, 16, 14)}
                height={+setMedia(24, 20, 16, 14)}
                color={palette.main_primary}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(calc(-50% - 2rem ), calc(-50%))",
                  borderRadius: "50%",
                  border: `solid ${palette.main_primary_dark} .2rem`,
                  boxShadow: appShadows.buttonActive,
                }}
              />
            </Container>
          </Container>
        </Container>
        <FlexCenterContainer>
          <InfoContainer
            className={css(
              isMedia.mini
                ? { display: "flex", flexDirection: "column" }
                : {
                    gridColumn: "1/-1",
                    gridRow: "4",
                    ...createGrid(`1fr ${setMedia(3, 4, 5, 0)}fr`, 2),
                    marginLeft: "2rem",
                  }
            )}
          >
            <Container
              className={css({
                ...createGrid(1, 2),
              })}
            >
              <Container>
                <InfoHeader className={css({ paddingTop: "4rem" })}>
                  {content.important}
                </InfoHeader>
                <FlexCenterContainer>
                  <DecoContainer
                    width={18}
                    height={0.2}
                    color={palette.main_primary}
                  />
                </FlexCenterContainer>
              </Container>
              <Container
                className={css({
                  display: "grid",
                  minWidth: `${setMedia(32, 30, 28)}rem`,
                  height: "8rem",
                  // maxHeight: `16rem`,
                  borderRadius: "4rem",
                  border: `solid 0.2rem ${palette.text_dark}`,
                  marginTop: `${isMedia.mini ? "4rem" : "2rem"}`,
                  marginBottom: `${isMedia.mini ? "4rem" : "2rem"}`,
                  backgroundColor: palette.background_third,
                  overflow: "hidden",
                  position: "relative",
                })}
              >
                <DecoContainer
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
                />
                <InfoHeader
                  className={css({
                    textAlign: "center",
                    alignSelf: "center",
                    zIndex: "2",
                  })}
                >
                  {content.importantText.h1}
                </InfoHeader>
              </Container>
            </Container>
            <Container
            // className={css({ gridColumn: "2/-1", gridRow: "1/-1" })}
            >
              <FlexCenterContainer
                className={css({
                  flexDirection: "column",
                  gap: "3.2rem",
                  // paddingTop: "3.6rem",
                  padding: `${isMedia.mini ? "1.6" : "4.4"}rem`,
                })}
              >
                <InfoParagraph>{content.importantText.p1}</InfoParagraph>
                <InfoParagraph>{content.importantText.p2}</InfoParagraph>
              </FlexCenterContainer>
            </Container>
          </InfoContainer>
        </FlexCenterContainer>
      </Container>
    </main>
  );
}
