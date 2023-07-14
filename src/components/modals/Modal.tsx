import {
  Button,
  Container,
  FlexCenterContainer,
  FlexColumnContainer,
  MainHeader,
  NavButtonsContainer,
} from "components";
import { css, palette } from "styles";
import { IAppBox } from "interfaces";
// Helpers
import { setFlag } from "utils/functions";

export function Modal({ appBox }: { appBox: IAppBox }) {
  const {
    isModal,
    setModal,
    innerContent: content,
    languages,
    isLanguage,
    setLanguage,
    isMedia,
  } = appBox;
  return (
    <FlexCenterContainer
      className={css({
        display: `${isMedia.big || isMedia.medium ? "none" : "block"}`,
        position: "fixed",
        maxWidth: "100%",
        maxHeight: "100%",
        inset: 0,
        background: "rgba(0, 0, 0, 0.7)",
        zIndex: isModal ? 99 : -1,
        // overflow: "auto",
        opacity: isModal ? 1 : 0,
        transition: "all 0.5s ease",
      })}
    >
      <Container
        className={css({
          margin: "2vh 2vw",
          minWidth: "90vw",
          minHeight: "90vh",
          background: palette.background_main,
          borderRadius: "2rem",
        })}
      >
        <FlexCenterContainer>
          <FlexColumnContainer
            className={css({ padding: "8rem 6rem", gap: "6rem" })}
          >
            <MainHeader>Modal Burger</MainHeader>
            <NavButtonsContainer
              content={content}
              setFlag={setFlag}
              languages={languages}
              isLanguage={isLanguage}
              setLanguage={setLanguage}
              variant={"burger"}
            />
            <FlexCenterContainer>
              <Button variant="primary" onClick={() => setModal(false)}>
                Close Modal
              </Button>
            </FlexCenterContainer>
          </FlexColumnContainer>
        </FlexCenterContainer>
      </Container>
    </FlexCenterContainer>
  );
}
