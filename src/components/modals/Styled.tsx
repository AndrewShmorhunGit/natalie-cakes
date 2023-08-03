import { palette, styled } from "styles";

export const ModalBackgroundContainer = styled.main({
  position: "fixed",
  maxWidth: "100%",
  maxHeight: "100%",
  inset: 0,
  background: "rgba(0, 0, 0, 0.7)",
  transition: "all 0.5s ease",
});

export const ModalContentContainer = styled.div({
  transition: "all 0.5s ease-in-out",
  position: "relative",
  background: palette.background_main,
  borderRadius: "0.6rem",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    height: "0.4rem",
    width: "1.6rem",
  },
  "&::-webkit-scrollbar-track": {
    background: palette.background_main,
    borderRadius: "2.4rem",
  },
  "&::-webkit-scrollbar-thumb": {
    background: palette.main_primary,
    borderRadius: "2.4rem",
    border: `4px solid ${palette.background_main}`,

    ":active": {
      background: palette.main_primary_dark,
    },
  },
});
