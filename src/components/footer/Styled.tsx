import { mq, palette, styled } from "styles";

export const FooterSection = styled.div({
  backgroundColor: palette.background_second,
  borderTop: `0.4rem solid ${palette.main_primary_dark}`,
});

export const FooterHeader = styled.h3({
  textAlign: "center",
  textTransform: "capitalize",
  fontSize: "3.2rem",
  [mq.medium]: {
    fontSize: "3rem",
  },
  [mq.small]: {
    fontSize: "2.8rem",
  },
  [mq.mini]: {
    fontSize: "2.8rem",
  },
});

export const FooterParagraph = styled.p({
  fontSize: "2rem",
  fontWeight: 400,
  // textAlign: "center",
  [mq.medium]: {
    fontSize: "1.6rem",
  },
  [mq.small]: {
    fontSize: "1.4rem",
  },
  [mq.mini]: {
    fontSize: "1.4rem",
  },
});
