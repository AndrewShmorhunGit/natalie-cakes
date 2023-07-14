// Components
import {
  Container,
  DecoContainer,
  FlexCenterContainer,
  InfoContainer,
  InfoDecoLine,
  InfoHeader,
  InfoLogoContainer,
  InfoParagraph,
  InfoSubHeader,
  InformationSection,
  MainHeader,
  DesignLogo,
  IngredientsLogo,
  OrderLogo,
  InformationImportantContainer,
} from "components";
// Styles
import {
  css,
  mq,
  palette,
  container,
  createGrid,
  paddingTopBottom,
} from "styles";
// Interfaces
import { IAppBox } from "interfaces/IApp";

export function Information({ appBox }: { appBox: IAppBox }) {
  const { innerContent: content, setMedia, isMedia } = appBox;

  const logoSettings = setMedia(128, 100, 84, 48);

  return (
    <InformationSection>
      <Container
        className={css({
          justifyContent: "start",
          alignContent: "center",
        })}
      >
        <MainHeader
          className={css({
            ...container,
            color: palette.white,
            textTransform: "capitalize",
          })}
        >
          {content.infoHeader}
        </MainHeader>
      </Container>
      <Container
        className={css({
          background:
            "linear-gradient(180deg, rgb(57,36,28,0.7) 0%, #FFF4F4 100%)",
          ...paddingTopBottom(8),
          borderTop: `0.4rem solid ${palette.main_primary_dark}`,
        })}
      >
        <Container
          className={css({
            ...container,
            display: "flex",
            flexDirection: "column",
            rowGap: isMedia.mini ? "8.4rem" : "12.4rem",
            [mq.mini]: { padding: "1.2rem 1.6rem" },
          })}
        >
          {/* INGREDIENTS */}
          <Container
            className={css({
              gridRow: "1",
              ...createGrid("3fr 1fr", 1),
            })}
          >
            <InfoContainer
              className={css({
                display: "flex",
                flexDirection: "column",
              })}
            >
              <InfoHeader>{content.ingredients}</InfoHeader>
              <InfoDecoLine />
              <InfoSubHeader>{content.ingredientsText.h1}</InfoSubHeader>
              <InfoParagraph>{content.ingredientsText.p1}</InfoParagraph>
              <InfoSubHeader>{content.ingredientsText.h2}</InfoSubHeader>
              <InfoParagraph>{content.ingredientsText.p2}</InfoParagraph>
            </InfoContainer>
            <InfoLogoContainer
              Logo={
                <IngredientsLogo height={logoSettings} width={logoSettings} />
              }
              isCondition={isMedia.mini}
              setMedia={setMedia}
              type={"right"}
              step={+setMedia(2.4, 2, 1.6, 1)}
            />
          </Container>
          {/* DESIGN */}
          {/* setMedia, logoSettings, isMedia, {content x 5}, type('left'/'right) */}
          <Container
            className={css({
              gridRow: "2",
              ...createGrid("1fr 3fr", 1),
            })}
          >
            <InfoLogoContainer
              Logo={<DesignLogo height={logoSettings} width={logoSettings} />}
              isCondition={isMedia.mini}
              setMedia={setMedia}
              type={"left"}
              step={+setMedia(2.4, 2, 1.6, 1)}
            />
            <InfoContainer
              className={css({
                display: "flex",
                flexDirection: "column",
              })}
            >
              <InfoHeader>{content.design}</InfoHeader>
              <InfoDecoLine />
              <InfoSubHeader>{content.designText.h1}</InfoSubHeader>
              <InfoParagraph>{content.designText.p1}</InfoParagraph>
              <InfoSubHeader>{content.designText.h2}</InfoSubHeader>
              <InfoParagraph>{content.designText.p2}</InfoParagraph>
            </InfoContainer>
          </Container>
          {/* ORDER */}
          <Container
            className={css({
              gridRow: "3",
            })}
          >
            <Container
              className={css({
                ...createGrid("3fr 1fr", 1),
              })}
            >
              <InfoContainer
                className={css({
                  display: "flex",
                  flexDirection: "column",
                })}
              >
                <InfoHeader>{content.order}</InfoHeader>
                <InfoDecoLine />
                <InfoSubHeader>{content.orderText.h1}</InfoSubHeader>
                <InfoParagraph>{content.orderText.p1}</InfoParagraph>
                <InfoSubHeader>{content.orderText.h2}</InfoSubHeader>
                <InfoParagraph>{content.orderText.p2}</InfoParagraph>
              </InfoContainer>
              <InfoLogoContainer
                Logo={<OrderLogo height={logoSettings} width={logoSettings} />}
                isCondition={isMedia.mini}
                setMedia={setMedia}
                type={"right"}
                step={+setMedia(2.4, 2, 1.6, 1)}
              />
            </Container>
          </Container>
          {/* IMPORTANT */}
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
                  <InfoDecoLine />
                </Container>
                {/* REFACTORING AS A DECORATED TITLE */}
                {/* (isMedia, setMedia, text)  */}
                <InformationImportantContainer
                  className={css({
                    minWidth: `${setMedia(32, 30, 28)}rem`,
                    marginTop: `${isMedia.mini ? "4rem" : "2rem"}`,
                    marginBottom: `${isMedia.mini ? "4rem" : "2rem"}`,
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
                  <InfoHeader>{content.importantText.h1}</InfoHeader>
                </InformationImportantContainer>
              </Container>
              <Container>
                <FlexCenterContainer
                  className={css({
                    flexDirection: "column",
                    gap: "3.2rem",
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
      </Container>
    </InformationSection>
  );
}
