import { palette, paddingTopBottom, appShadows, mq, styled } from "styles";

export const MenuSection = styled.main({
  borderTop: `0.4rem solid ${palette.main_primary_dark}`,
  backgroundColor: palette.background_main,
  ...paddingTopBottom(4, 8),
});

export const MenuCategoryContainer = styled.div({
  width: "100%",
  alignSelf: "center",
  padding: "2rem 3.6rem",
  borderLeft: `solid 0.2rem ${palette.main_primary_dark}`,
  borderRight: `solid 0.2rem ${palette.main_primary_dark}`,
  backgroundColor: palette.background_second,
});

export const MenuCategoryHeader = styled.h3({
  textTransform: "capitalize",
  textAlign: "center",
});

export const MenuPositionContainer = styled.div({
  maxWidth: "80rem",
  minWidth: "32rem",
  padding: "2rem",
  border: `solid .2rem ${palette.main_primary_dark}`,
  borderRadius: "1.2rem",
  boxShadow: appShadows.button,
  backgroundColor: palette.background_second,
});

export const MenuPositionHeader = styled.h4({
  fontSize: "2.4rem",
  textTransform: "capitalize",
  textAlign: "center",
  fontWeight: 600,
});

export const PositionVariantContainer = styled.div({
  minWidth: "100%",
  padding: "1.2rem",
  fontSize: "2rem",
  fontWeight: "600",
  border: `solid 0.2rem ${palette.main_primary}`,
  borderRadius: "1.2rem",
  alignSelf: "center",
  alignItems: "center",
  columnGap: "1.6rem",
  [mq.mini]: {
    padding: "1rem",
    fontSize: "1.8rem",
    columnGap: "1.4rem",
    minWidth: "34.8rem",
  },
});

export const RateAndTasteContainer = styled.div({
  [mq.mini]: {
    fontSize: "1.6rem",
    rowGap: "1rem",
    paddingBottom: "2rem",
  },
  fontSize: "2rem",
  columnGap: "1.2rem",
  ...paddingTopBottom(0, 2),
});
