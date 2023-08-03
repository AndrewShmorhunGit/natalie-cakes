// Components
import { IconAndTextFooterContacts } from "./Components";
import { FooterSection, FooterHeader, FooterParagraph } from "./Styled";
import {
  MainLogo,
  InstagramLogo,
  Container,
  FlexCenterContainer,
  MainLogoText,
  FlexColumnContainer,
  Button,
  DecoContainer,
  MenuLogo,
} from "components";
// Styles
import { css, palette, container, createGrid, paddingTopBottom } from "styles";
// Interfaces
import { IAppBox } from "interfaces";
import { footerContactsData } from "data/components.static.data";
import { loading } from "utils/functions";

export function Footer({ appBox }: { appBox: IAppBox }) {
  const { innerContent: content, isLanguage, setMedia, setModal } = appBox;

  const footerContacts = footerContactsData(content);

  return (
    <FooterSection>
      <Container
        className={css({
          ...container,
          color: palette.text_dark,
        })}
      >
        <FlexCenterContainer className={css({ ...paddingTopBottom(2, 5.2) })}>
          <FlexCenterContainer
            className={css({
              gap: "1.6rem",
            })}
          >
            <MainLogo width={60} height={60} fill={palette.text_dark} />
            <MainLogoText textColor={palette.text_dark} />
          </FlexCenterContainer>
        </FlexCenterContainer>
        <Container
          className={css({
            ...createGrid(
              setMedia("1fr 2fr 1fr", "1fr 1.5fr 1fr", "1fr 1.2fr 1fr", "1fr"),
              setMedia(1, 1, 1, "repeat(3, auto)")
            ),
            rowGap: "4rem",
            placeItems: "center",
          })}
        >
          <FlexColumnContainer
            className={css({
              gridColumn: "1/2",
              gridRow: "1",
              gap: setMedia("2rem", "1.6rem", "1.2rem"),
            })}
          >
            <FooterHeader>{content.footerOther.contacts}</FooterHeader>
            {footerContacts.map(({ name, icon }, index) => {
              return (
                <Container
                  className={css({
                    cursor: "pointer",
                  })}
                  key={name + index}
                >
                  <IconAndTextFooterContacts icon={icon} text={name} />
                </Container>
              );
            })}
          </FlexColumnContainer>
          <FlexColumnContainer
            className={css({
              gridColumn: setMedia("2/3", "2/3", "2/3", "1"),
              gridRow: setMedia("1", "1", "1", "2"),
              gap: setMedia("2rem", "1.6rem", "1.2rem"),
            })}
          >
            <FooterHeader>{content.footerOther.question}</FooterHeader>
            <FooterParagraph className={css({ textAlign: "center" })}>
              {content.footerOther.callBack}
            </FooterParagraph>
            <FlexCenterContainer>
              <Button variant="primary" onClick={() => setModal("call")}>
                {content.callBackBtn}
              </Button>
            </FlexCenterContainer>
          </FlexColumnContainer>
          <FlexColumnContainer
            className={css({
              gridColumn: setMedia("3/-1", "3/-1", "3/-1", "1"),
              gridRow: setMedia(1, 1, 1, 3),
              gap: setMedia("2rem", "1.6rem", "1.2rem"),
            })}
          >
            <FooterHeader>{content.footerOther.follow}</FooterHeader>
            <FlexCenterContainer className={css({ cursor: "pointer" })}>
              <InstagramLogo
                height={"36 "}
                width={"36"}
                fill={palette.main_primary_dark}
              />
            </FlexCenterContainer>
          </FlexColumnContainer>
        </Container>
        <FlexColumnContainer
          className={css({ ...paddingTopBottom(setMedia(8, 6, 4), 2) })}
        >
          <Container
            className={css({
              display: "flex",
              gap: "1.6rem",
              alignItems: "center",
              justifyContent: "center",
            })}
          >
            <FooterHeader>
              {content.footerOther.menu === "Loading"
                ? loading(isLanguage)
                : content.footerOther.menu}
            </FooterHeader>
            <MenuLogo height={"52"} width={"32"} fill={palette.text_dark} />
          </Container>
          <FlexCenterContainer className={css({ ...paddingTopBottom(1, 0) })}>
            <DecoContainer
              width={30}
              height={0.2}
              color={palette.main_primary_dark}
            />
          </FlexCenterContainer>
          <Container
            className={css({
              paddingTop: "3.2rem",
              columnGap: `${setMedia(12, 10, 8, 4)}rem`,
              ...createGrid(4, 1),
            })}
          >
            {content.footerOther.cart.map((position, index) => {
              return (
                <Container
                  key={typeof position === "string" ? position + index : index}
                  className={css({
                    gridColumn: index + 1,
                    alignSelf: "center",
                    textTransform: "capitalize",
                    textAlign: "center",
                    color: palette.main_primary_dark,
                    cursor: "pointer",
                    "&:hover": {
                      color: palette.text_dark,
                    },
                  })}
                >
                  <FooterParagraph>{position}</FooterParagraph>
                </Container>
              );
            })}
          </Container>
        </FlexColumnContainer>
        <p
          className={css({
            textAlign: "center",
            ...paddingTopBottom(setMedia(8, 6, 4), 1.2),
          })}
        >
          &copy; {content.footerOther.rights}
        </p>
      </Container>
    </FooterSection>
  );
}
