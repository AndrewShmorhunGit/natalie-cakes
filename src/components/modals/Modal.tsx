// Components
import {
  Container,
  FlexCenterContainer,
  FlexColumnContainer,
  InfoHeader,
  NavButtonsContainer,
  CloseLogo,
  ModalContentContainer,
} from "components";
// Styles
import { css, palette } from "styles";
// Interfaces
import { IAppBox } from "interfaces";
// Hooks
import { useClickOutside } from "hooks/useClickOutside";
import { useRef } from "react";
// Helpers
import { setFlag } from "utils/functions";

function Modal({ appBox }: { appBox: IAppBox }) {
  const {
    isModal,
    setModal,
    innerContent: content,
    languages,
    isLanguage,
    isLangTransition,
    setLanguage,
    isMedia,
  } = appBox;

  const refClickOutside = useRef<HTMLDivElement | null>(null);
  useClickOutside(refClickOutside, () => setModal("none"));

  interface IModalSettings {
    [x: string]: {
      state: string;
      condition: boolean;
      title: string;
      size: "large" | "middle" | "small" | "none";
    };
  }

  const none = "none";
  const burger = "burger";
  const test = "test";
  const call = "call";
  // const menuItem = "menuItem";

  const modals: IModalSettings = {
    none: {
      state: none,
      condition: false,
      title: "",
      size: "none",
    },
    burger: {
      state: burger,
      condition: isModal === burger && (isMedia.small || isMedia.mini),
      title: "Navigation",
      size: "large",
    },
    call: {
      state: call,
      condition: isModal === call,
      title: "Tell your contacts",
      size: "large",
    },
    test: {
      state: test,
      condition: isModal === test && (isMedia.big || isMedia.medium),
      title: "Test modal Title",
      size: "small",
    },
  };

  const modalSize = modals[isModal].size;
  const modalShow = modals[isModal].condition && isModal !== none;
  const modalTitle = modals[isModal].title;

  return (
    <FlexCenterContainer
      className={css({
        position: "fixed",
        maxWidth: "100%",
        maxHeight: "100%",
        inset: 0,
        background: "rgba(0, 0, 0, 0.7)",
        transition: "all 0.5s ease",
        // open/close conditions
        display: isModal === "none" ? "none" : "flex",
        zIndex: modalShow ? 99 : -1,
        opacity: modalShow ? 1 : 0,
      })}
    >
      <ModalContentContainer
        ref={refClickOutside}
        className={css(
          modalSize === "large" && {
            margin: "5vh 5vw",
            minWidth: "90vw",
            minHeight: "90vh",
          },
          modalSize === "middle" && {
            margin: "15vh 15vw",
            minWidth: "70vw",
            minHeight: "70vh",
          },
          modalSize === "small" && {
            margin: "25vh 25vw",
            minWidth: "50vw",
            minHeight: "50vh",
          },
          modalSize === "none" && {
            minWidth: "100%",
            minHeight: "100%",
          }
        )}
      >
        <FlexCenterContainer>
          <FlexColumnContainer
            className={css({ padding: "8rem 6rem", gap: "6rem" })}
          >
            <InfoHeader>{modalTitle}</InfoHeader>
            <Container
              className={css({
                cursor: "pointer",
                position: "absolute",
                top: "2rem",
                right: "2rem",
              })}
              onClick={() => setModal("none")}
            >
              <CloseLogo
                height={42}
                width={42}
                fill={palette.main_primary_dark}
              />
            </Container>
            {/* Content */}
            {isModal === burger && (
              <NavButtonsContainer
                content={content}
                setFlag={setFlag}
                languages={languages}
                isLanguage={isLanguage}
                setLanguage={setLanguage}
                variant={"burger"}
                isLangTransition={isLangTransition}
              />
            )}
            {isModal === call && (
              <Container>
                <h2>Call back info form</h2>
              </Container>
            )}
            {isModal === test && (
              <Container>
                <h2>Here is your modal!</h2>
              </Container>
            )}
          </FlexColumnContainer>
        </FlexCenterContainer>
      </ModalContentContainer>
    </FlexCenterContainer>
  );
}

export { Modal };
