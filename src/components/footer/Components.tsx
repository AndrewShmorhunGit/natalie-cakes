import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { FlexRowContainer } from "components";
import { FooterParagraph } from "./Styled";
import { css } from "styles";

export function IconAndTextFooterContacts({
  icon,
  text,
}: {
  icon: EmotionJSX.Element;
  text: string;
}) {
  return (
    <FlexRowContainer className={css({ gap: "2rem" })}>
      {icon}
      <FooterParagraph>{text}</FooterParagraph>
    </FlexRowContainer>
  );
}
