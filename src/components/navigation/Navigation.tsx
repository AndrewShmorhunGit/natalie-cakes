// Components
import {
  Container,
  FlexRowContainer,
  MainLogoText,
  NavBurger,
  NavigationSection,
  MainLogo,
  NavButtonsContainer,
} from "components";
// Styles
import { css } from "@emotion/css";
import { palette, mq } from "styles";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
// Interfaces
import { IAppBox } from "interfaces/IApp";
// Helpers
import { setFlag } from "utils/functions";

export function Navigation({
  appBox,
}: {
  appBox: IAppBox;
}): EmotionJSX.Element {
  const {
    innerContent: content,
    languages,
    isLanguage,
    setLanguage,
    setMedia,
    isMedia,
    setModal,
  } = appBox;

  return (
    <NavigationSection>
      <FlexRowContainer
        className={css({
          gap: "2rem",
        })}
      >
        <MainLogo
          width={setMedia(64, 62, 60, 58)}
          height={setMedia(64, 62, 60, 58)}
          fill={palette.white}
        />
        {!isMedia.mini && <MainLogoText textColor={palette.white} />}
      </FlexRowContainer>
      <FlexRowContainer
        className={css({
          width: "minmax(10rem, 45rem)",
          gap: "1.2rem",
          [mq.mini]: {
            gap: "0rem",
          },
        })}
      >
        {isMedia.big || isMedia.medium ? (
          <NavButtonsContainer
            content={content}
            setFlag={setFlag}
            languages={languages}
            isLanguage={isLanguage}
            setLanguage={setLanguage}
            variant="navigation"
          />
        ) : (
          <Container className={css({ width: "8rem" })}>
            <NavBurger clickHandler={() => setModal(true)} />
          </Container>
        )}
      </FlexRowContainer>
    </NavigationSection>
  );
}
