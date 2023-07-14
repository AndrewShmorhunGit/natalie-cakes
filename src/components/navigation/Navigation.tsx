// Components
import {
  Button,
  Container,
  FlexColumnContainer,
  FlexRowContainer,
  MainLogoText,
  NavBurger,
  NavigationSection,
  MainLogo,
  RelativeContainer,
} from "components";
// Styles
import { css } from "@emotion/css";
import { palette, mq } from "styles";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
// Interfaces
import { IAppBox } from "interfaces/IApp";
import { setFlag } from "utils/functions";

export function Navigation({
  appBox,
}: {
  appBox: IAppBox;
}): EmotionJSX.Element {
  const { setMedia, isMedia } = appBox;

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
        {appBox.isMedia.big || appBox.isMedia.medium ? (
          <>
            <Container>
              <Button variant="secondary">{appBox.innerContent.about}</Button>
              <Button
                variant="secondary"
                className={css({ margin: "0 3.6rem" })}
              >
                {appBox.innerContent.contacts}
              </Button>
              <Button variant="primary">{appBox.innerContent.makeSweet}</Button>
            </Container>
            <RelativeContainer>
              <FlexColumnContainer
                className={css({
                  position: "absolute",
                  overflow: "hidden",
                  maxHeight: "4rem",
                  gap: "0.4rem",
                  right: appBox.isLanguage === "hb" ? "0" : "-4.2rem",
                  top: "-1.9rem",
                  zIndex: 2,
                  transition: "max-height 1.4s ease-in",
                  ":hover": {
                    maxHeight: "25rem",
                    transition: "max-height 1.4s ease-out",
                  },
                })}
              >
                <Button variant="language">{setFlag(appBox.isLanguage)}</Button>

                <Button
                  variant="language"
                  onClick={() => appBox.setLanguage("en")}
                  className={css({
                    display: `${appBox.isLanguage === "en" ? "none" : "flex"}`,
                  })}
                >
                  {setFlag(appBox.languages.en)}
                </Button>
                <Button
                  variant="language"
                  onClick={() => appBox.setLanguage("ru")}
                  className={css({
                    display: `${appBox.isLanguage === "ru" ? "none" : "flex"}`,
                  })}
                >
                  {setFlag(appBox.languages.ru)}
                </Button>
                <Button
                  variant="language"
                  onClick={() => appBox.setLanguage("hb")}
                  className={css({
                    display: `${appBox.isLanguage === "hb" ? "none" : "flex"}`,
                  })}
                >
                  {setFlag(appBox.languages.hb)}
                </Button>
              </FlexColumnContainer>
            </RelativeContainer>
          </>
        ) : (
          <Container className={css({ width: "8rem" })}>
            <NavBurger />
          </Container>
        )}
      </FlexRowContainer>
    </NavigationSection>
  );
}
