import { container, palette, styled } from "styles";

export const NavigationSection = styled.main({
  ...container,
  position: "fixed",
  top: 0,
  zIndex: 9,
  width: "100vw",
  minWidth: "100dvw",
  background: palette.background_nav_transparent,
  backgroundColor: palette.gradient_primary_to_primary_dark,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  // overflow: "hidden",
});

export const LanguageDropdownContainer = styled.div({
  position: "absolute",
  overflow: "hidden",
  maxHeight: "4rem",
  gap: "0.4rem",
  transition: "max-height 1.4s ease-in",
  ":hover": {
    maxHeight: "25rem",
    transition: "max-height 1.4s ease-out",
  },
});
