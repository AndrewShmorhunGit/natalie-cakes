import {
  Container,
  FlexCenterContainer,
  FlexColumnContainer,
  InfoHeader,
  NavButtonsContainer,
  ScrollYContainer,
  CloseLogo,
} from "components";
import { css, palette } from "styles";
import { IAppBox } from "interfaces";
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

  const openModalConditions: any = {
    burger: isModal === "burger" && (isMedia.small || isMedia.mini),
    any: isModal === "any" && (isMedia.big || isMedia.medium),
  };

  const titleConditions: any = {
    burger: "modal.burgerContent.title",
    any: "Any modal Title",
  };

  return (
    <FlexCenterContainer
      className={css({
        display: `${isMedia.big || isMedia.medium ? "none" : "block"}`,
        position: "fixed",
        maxWidth: "100%",
        maxHeight: "100%",
        inset: 0,
        background: "rgba(0, 0, 0, 0.7)",
        // Open/close conditions
        zIndex: openModalConditions[isModal] ? 99 : -1,
        opacity: openModalConditions[isModal] ? 1 : 0,
        transition: "all 0.5s ease",
      })}
    >
      <ScrollYContainer
        className={css({
          position: "relative",
          // Content size
          margin: "5vh 5vw",
          minWidth: "90vw",
          minHeight: "90vh",
        })}
      >
        <FlexCenterContainer>
          <FlexColumnContainer
            className={css({ padding: "8rem 6rem", gap: "6rem" })}
          >
            <InfoHeader>{titleConditions[isModal]}</InfoHeader>
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
            {isModal === "burger" && (
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
            {isModal === "any" && (
              <Container>
                <h2>Here is your dynamic modal!</h2>
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
