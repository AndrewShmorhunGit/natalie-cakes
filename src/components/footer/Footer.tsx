import { css } from "@emotion/css";
import { MainLogo } from "components/imports";
import {
  Button,
  Container,
  DecoContainer,
  FlexCenterContainer,
  FlexColumnContainer,
  FlexRowContainer,
  FooterSection,
  IconAndTextContainer,
  InfoHeader,
  InfoParagraph,
  MainLogoText,
} from "components/lib/StyledComponents";
import {
  EnvelopLogo,
  InstagramLogo,
  LocationLogo,
  PhoneLogo,
} from "components/logos/Logos";
import { IContentBox } from "interfaces/IContent";
import { IFooterContacts } from "interfaces/IFooter";
import { ILogos } from "interfaces/ILogos";
import { colorSys } from "styles/colors";
import {
  container,
  createGrid,
  paddingLeftRight,
  paddingTopBottom,
} from "styles/general";

export function Footer({ contentBox }: { contentBox: IContentBox }) {
  const content = contentBox.innerContent;

  const logoPropsContacts: ILogos = {
    width: "32",
    height: "32",
    fill: colorSys.main_primary_dark,
  };

  const footerContacts: IFooterContacts[] = [
    {
      name: `${content.footerContacts.address}`,
      icon: LocationLogo(logoPropsContacts),
    },
    {
      name: `${content.footerContacts.phone}`,
      icon: PhoneLogo(logoPropsContacts),
    },
    {
      name: `${content.footerContacts.email}`,
      icon: EnvelopLogo(logoPropsContacts),
    },
  ];

  return (
    <FooterSection>
      <Container
        className={css({
          ...container,
          color: colorSys.text_dark,
        })}
      >
        <FlexCenterContainer className={css({ ...paddingTopBottom(2, 5.2) })}>
          <FlexCenterContainer
            className={css({
              ...paddingLeftRight(0, 1.6),
            })}
          >
            <MainLogo width="6rem" height="6rem" fill={colorSys.text_dark} />
          </FlexCenterContainer>
          <MainLogoText textColor={colorSys.text_dark} />
        </FlexCenterContainer>
        <Container
          className={css({
            ...createGrid("1fr 1.2fr 1fr", 1),
            ...paddingTopBottom(0, 6),
            placeItems: "center",
          })}
        >
          <FlexColumnContainer
            className={css({ gridColumn: "1/2", gap: "2rem" })}
          >
            <InfoHeader>{content.footerOther.contacts}</InfoHeader>
            {footerContacts.map(({ name, icon }) => {
              return (
                <Container className={css({ cursor: "pointer" })}>
                  <IconAndTextContainer icon={icon} text={name} key={name} />
                </Container>
              );
            })}
          </FlexColumnContainer>
          <FlexColumnContainer
            className={css({ gridColumn: "2/3", gap: "2rem" })}
          >
            <InfoHeader>{content.footerOther.question}</InfoHeader>
            <InfoParagraph className={css({ textAlign: "center" })}>
              {content.footerOther.callBack}
            </InfoParagraph>
            <FlexCenterContainer>
              <Button variant="primary">Take a call</Button>
            </FlexCenterContainer>
          </FlexColumnContainer>
          <FlexColumnContainer
            className={css({ gridColumn: "3/-1", gap: "2rem" })}
          >
            <InfoHeader>{content.footerOther.follow}</InfoHeader>
            <FlexCenterContainer className={css({ cursor: "pointer" })}>
              <InstagramLogo
                height={"36 "}
                width={"36"}
                fill={colorSys.main_primary_dark}
              />
            </FlexCenterContainer>
          </FlexColumnContainer>
        </Container>
        <FlexColumnContainer className={css({ ...paddingTopBottom(6, 2) })}>
          <InfoHeader>{content.footerOther.menu}</InfoHeader>
          <FlexCenterContainer className={css({ ...paddingTopBottom(1, 0) })}>
            <DecoContainer
              width={30}
              height={0.2}
              color={colorSys.main_primary_dark}
            />
          </FlexCenterContainer>
          <FlexRowContainer
            className={css({ ...paddingTopBottom(2), gap: "0rem" })}
          >
            {content.footerOther.cart.map((position) => {
              return (
                <Container
                  key={position}
                  className={css({
                    textTransform: "capitalize",
                    color: colorSys.main_primary_dark,
                    cursor: "pointer",
                    "&:hover": {
                      color: colorSys.text_dark,
                    },
                  })}
                >
                  <InfoParagraph>{position}</InfoParagraph>
                </Container>
              );
            })}
          </FlexRowContainer>
        </FlexColumnContainer>
        <p
          className={css({
            textAlign: "center",
            ...paddingTopBottom(8, 1.2),
          })}
        >
          &copy; {content.footerOther.rights}
        </p>
      </Container>
    </FooterSection>
  );
}
