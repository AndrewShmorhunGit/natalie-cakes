import { css } from "@emotion/css";
import { MainLogo } from "components/imports";
import {
  FlexCenterContainer,
  FlexColumnContainer,
  FlexRowContainer,
  // FlexColumnContainer,
  MainLogoText,
} from "components/lib/StyledComponents";
import { IContentBox } from "interfaces/IContent";
import { colorSys } from "styles/colors";
import { container, paddingTopBottom } from "styles/general";

export function Footer({ contentBox }: { contentBox: IContentBox }) {
  const content = contentBox.innerContent;
  return (
    <div
      className={css({
        ...container,
      })}
    >
      <FlexColumnContainer>
        <MainLogoText textColor={colorSys.text_dark} />
        <FlexCenterContainer className={css({ ...paddingTopBottom(2.4, 6) })}>
          <MainLogo width="6rem" height="6rem" fill={colorSys.text_dark} />
        </FlexCenterContainer>
      </FlexColumnContainer>
      <FlexCenterContainer
        className={css({
          alignItems: "space-between",
          ...paddingTopBottom(8, 2),
        })}
      >
        <FlexColumnContainer>
          <h3>{content.footerOther.contacts}</h3>
          <p>{content.footerContacts.address}</p>
          <p>{content.footerContacts.phone}</p>
          <p>{content.footerContacts.email}</p>
        </FlexColumnContainer>
        <FlexColumnContainer>
          <h3>{content.footerOther.question}</h3>
        </FlexColumnContainer>
        <FlexColumnContainer>
          <h3>{content.footerOther.follow}</h3>
        </FlexColumnContainer>
      </FlexCenterContainer>
      <FlexColumnContainer>
        <h3>{content.footerOther.menu}</h3>
        <FlexRowContainer>
          {content.footerOther.cart.map((position) => {
            return <p>{position}</p>;
          })}
        </FlexRowContainer>
      </FlexColumnContainer>
      <p className={css({ textAlign: "center", ...paddingTopBottom(8, 2) })}>
        &copy; {content.footerOther.rights}
      </p>
    </div>
  );
}
