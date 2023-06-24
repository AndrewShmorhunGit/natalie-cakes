import { css } from "@emotion/css";
import {
  Container,
  DecoContainer,
  FlexCenterContainer,
  InfoContainer,
  InfoHeader,
  InfoParagraph,
  InfoSubHeader,
} from "components/lib/StyledComponents";
import { IAppBox } from "interfaces/IApp";
import { colorSys } from "styles/colors";
import { createGrid, paddingTopBottom } from "styles/general";

export function Information({ appBox: appBox }: { appBox: IAppBox }) {
  const content = appBox.innerContent;

  return (
    <main
      className={css({
        background: "linear-gradient(180deg, #53352C 0%, #FFF4F4 100%)",
        borderTop: `0.2rem solid ${colorSys.main_primary_dark}`,
        padding: "4rem",
      })}
    >
      <Container
        className={css({
          ...createGrid(1, 4),
          columnGap: "2rem",
          rowGap: "3rem",
        })}
      >
        <InfoContainer
          className={css({
            // gridColumn: "1/3",
            gridRow: "1",
            display: "flex",
            flexDirection: "column",
          })}
        >
          <InfoHeader className={css({})}>{content.ingredients}</InfoHeader>

          <FlexCenterContainer>
            <DecoContainer
              width={18}
              height={0.2}
              color={colorSys.main_primary}
            />
          </FlexCenterContainer>
          <InfoSubHeader>{content.ingredientsText.h1}</InfoSubHeader>
          <InfoParagraph>{content.ingredientsText.p1}</InfoParagraph>
          <InfoSubHeader>{content.ingredientsText.h2}</InfoSubHeader>
          <InfoParagraph>{content.ingredientsText.p2}</InfoParagraph>
        </InfoContainer>
        {/* <DecoContainer
          width={10}
          height={10}
          color={"red"}
          props={{ gridColumn: "3/-1", gridRow: "1" }}
        /> */}
        <InfoContainer
          className={css({
            // gridColumn: "2/-1",
            gridRow: "2",
            display: "flex",
            flexDirection: "column",
          })}
        >
          <InfoHeader className={css({})}>{content.design}</InfoHeader>
          <FlexCenterContainer>
            <DecoContainer
              width={18}
              height={0.2}
              color={colorSys.main_primary}
            />
          </FlexCenterContainer>
          <InfoSubHeader>{content.designText.h1}</InfoSubHeader>
          <InfoParagraph>{content.designText.p1}</InfoParagraph>
          <InfoSubHeader>{content.designText.h2}</InfoSubHeader>
          <InfoParagraph>{content.designText.p2}</InfoParagraph>
        </InfoContainer>
        <InfoContainer
          className={css({
            // gridColumn: "1/3",
            gridRow: "3",
            display: "flex",
            flexDirection: "column",
          })}
        >
          <InfoHeader>{content.order}</InfoHeader>
          <FlexCenterContainer>
            <DecoContainer
              width={18}
              height={0.2}
              color={colorSys.main_primary}
            />
          </FlexCenterContainer>
          <InfoSubHeader>{content.orderText.h1}</InfoSubHeader>
          <InfoParagraph>{content.orderText.p1}</InfoParagraph>
          <InfoSubHeader>{content.orderText.h2}</InfoSubHeader>
          <InfoParagraph>{content.orderText.p2}</InfoParagraph>
        </InfoContainer>

        <InfoContainer
          className={css({
            gridColumn: "1/-1",
            gridRow: "4",
            ...createGrid("1fr 4fr ", 2),
            // position: "relative",
          })}
        >
          <Container>
            <InfoHeader
              className={css({
                // gridColumn: "1/2",
                // gridRow: "1",
                ...paddingTopBottom(2, 0),
              })}
            >
              {content.important}
            </InfoHeader>
            <DecoContainer
              width={18}
              height={0.2}
              color={colorSys.main_primary}
              // props={{
              //   gridColumn: "1/2",
              //   gridRow: "1",
              // }}
            />
            <InfoHeader
              className={css({
                // gridColumn: "1/2",
                // gridRow: "1",
                ...paddingTopBottom(0, 4),
              })}
            >
              {content.importantText.h1}
            </InfoHeader>
          </Container>
          <Container className={css({ gridColumn: "2/-1", gridRow: "1/-1" })}>
            <InfoParagraph>{content.importantText.p1}</InfoParagraph>
            <InfoParagraph>{content.importantText.p2}</InfoParagraph>
          </Container>
        </InfoContainer>
      </Container>
    </main>
  );
}
