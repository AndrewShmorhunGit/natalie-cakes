// Components
import {
  Container,
  FlexCenterContainer,
  FlexColumnContainer,
  InfoHeader,
  NavButtonsContainer,
  ScrollYContainer,
  CloseLogo,
} from "components";
// Styles
import { css, palette } from "styles";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
// Interfaces
import { IAppBox } from "interfaces";
// Hooks
import { useClickOutside } from "hooks/useClickOutside";
import { useRef } from "react";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
// Helpers
import { setFlag } from "utils/functions";

function Modal({
  setModal,
  titleConditions,
  component,
  size = "large",
}: {
  setModal: React.Dispatch<React.SetStateAction<string>>;
  titleConditions: string;
  component: EmotionJSX.Element | null;
  size: string;
}) {
  const title = titleConditions;
<<<<<<< Updated upstream
=======
=======
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

<<<<<<< features/main
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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes

  const none = "none";
  const burger = "burger";
  const test = "test";
  // const callBack = "call back";
  // const menuItem = "menuItem";

<<<<<<< Updated upstream
=======

  const none = "none";
  const burger = "burger";
  const test = "test";
  // const callBack = "call back";
  // const menuItem = "menuItem";

>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
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
    test: {
      state: test,
      condition: isModal === test && (isMedia.big || isMedia.medium),
      title: "Test modal Title",
      size: "small",
    },
=======
  const openModalConditions: { [x: string]: boolean } = {
    burger: isModal === "burger" && (isMedia.small || isMedia.mini),
    any: isModal === "any" && (isMedia.big || isMedia.medium),
  };

  const titleConditions: { [x: string]: string } = {
    burger: "modal.burgerContent.title",
    any: "Any modal Title",
>>>>>>> set content loaders
  };
>>>>>>> Stashed changes

  const modalSize = modals[isModal].size;
  const modalShow = modals[isModal].condition && isModal !== none;
  const modalTitle = modals[isModal].title;
>>>>>>> Stashed changes

  const modalSize = modals[isModal].size;
  const modalShow = modals[isModal].condition && isModal !== none;
  const modalTitle = modals[isModal].title;

  const modalSize = modals[isModal].size;
  const modalShow = modals[isModal].condition && isModal !== none;
  const modalTitle = modals[isModal].title;

  return (
    <FlexCenterContainer
      className={css({
<<<<<<< features/main
<<<<<<< Updated upstream
        display: `${isMedia.big || isMedia.medium ? "none" : "block"}`,
=======
>>>>>>> Stashed changes
=======
        display: isModal === "none" ? "none" : "flex",
>>>>>>> back look commit
        position: "fixed",
        maxWidth: "100%",
        maxHeight: "100%",
        inset: 0,
        background: "rgba(0, 0, 0, 0.7)",
<<<<<<< features/main
<<<<<<< Updated upstream
        // Open/close conditions
=======
        // open/close conditions
>>>>>>> set content loaders
        zIndex: openModalConditions[isModal] ? 99 : -1,
        opacity: openModalConditions[isModal] ? 1 : 0,
=======
>>>>>>> Stashed changes
        transition: "all 0.5s ease",
        // open/close conditions
        display: isModal === "none" ? "none" : "flex",
        zIndex: modalShow ? 99 : -1,
        opacity: modalShow ? 1 : 0,
      })}
    >
      <ScrollYContainer
<<<<<<< Updated upstream
        className={css({
          position: "relative",
          // Content size
          margin: "5vh 5vw",
          minWidth: "90vw",
          minHeight: "90vh",
        })}
<<<<<<< Updated upstream
=======
=======
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
      <ScrollYContainer
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
      >
        <FlexCenterContainer>
          <FlexColumnContainer
            className={css({ padding: "8rem 6rem", gap: "6rem" })}
          >
<<<<<<< Updated upstream
<<<<<<< Updated upstream
            <InfoHeader>{title}</InfoHeader>
=======
<<<<<<< Updated upstream
<<<<<<< Updated upstream
            <InfoHeader>{title}</InfoHeader>
=======
            <InfoHeader>{modalTitle}</InfoHeader>
>>>>>>> Stashed changes
=======
            <InfoHeader>{modalTitle}</InfoHeader>
>>>>>>> Stashed changes
>>>>>>> Stashed changes
=======
            <InfoHeader>{modalTitle}</InfoHeader>
>>>>>>> Stashed changes
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
            {isModal === test && (
              <Container>
<<<<<<< features/main
<<<<<<< Updated upstream
                <h2>Here is your dynamic modal!</h2>
=======
                <h2>Here is modal content!</h2>
>>>>>>> Stashed changes
=======
                <h2>Here is your modal!</h2>
>>>>>>> set content loaders
              </Container>
            )}
            <FlexCenterContainer></FlexCenterContainer>
          </FlexColumnContainer>
        </FlexCenterContainer>
      </ScrollYContainer>
    </FlexCenterContainer>
  );
}

export { Modal };
