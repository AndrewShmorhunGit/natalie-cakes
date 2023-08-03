import { palette, appShadows, mq, styled } from "styles";

export const InformationSection = styled.main({
  marginTop: "-12rem",
  background: "linear-gradient(180deg, rgb(57,36,28,0.95) 0%, #FFF4F4 100%)",
  borderTop: `0.4rem solid ${palette.main_primary_dark}`,
  backdropFilter: "blur(0.4rem)",
});

export const InfoContainer = styled.div({
  display: "flex",
  minWidth: "32rem",
  maxWidth: "120rem",
  padding: "1.6rem 1.6rem 3.2rem 3.2rem",
  margin: "0 2.4rem",
  boxShadow: appShadows.button,
  borderRadius: "1.2rem",
  backgroundColor: `${palette.background_second}`,
  [mq.mini]: { margin: "0" },
});

export const InformationImportantContainer = styled.div({
  display: "grid",
  height: "8rem",
  borderRadius: "4rem",
  border: `solid 0.2rem ${palette.text_dark}`,
  backgroundColor: palette.background_third,
  overflow: "hidden",
  position: "relative",
});

export const InfoHeader = styled.h3({
  textAlign: "center",
  textTransform: "capitalize",
  fontSize: "3.2rem",
  fontWeight: "600",
  alignSelf: "center",
  zIndex: "2",
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

export const InfoSubHeader = styled.h4({
  textTransform: "capitalize",
  fontSize: "2.8rem",
  fontWeight: 400,
  paddingBottom: "0.4rem",
  paddingTop: "1.2rem",
  [mq.medium]: {
    fontSize: "2.4rem",
  },
  [mq.small]: {
    fontSize: "2rem",
  },
  [mq.mini]: {
    fontSize: "1.8rem",
  },
});

export const InfoParagraph = styled.p({
  fontSize: "2rem",
  fontWeight: 400,
  paddingLeft: "1.2rem",
  [mq.medium]: {
    fontSize: "1.6rem",
  },
  [mq.small]: {
    fontSize: "1.5rem",
  },
  [mq.mini]: {
    fontSize: "1.5rem",
  },
});
