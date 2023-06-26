import {
  Button,
  Container,
  FlexColumnContainer,
  FlexRowContainer,
  MainLogoText,
  NavigationSection,
} from "components/lib/StyledComponents";
import { MainLogo } from "components/imports";
import { css } from "@emotion/css";
import { palette, mq } from "styles/imports";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { IAppBox } from "interfaces/IApp";
import { activeStyle } from "styles/styles";

export function Navigation({
  appBox: appBox,
}: {
  appBox: IAppBox;
}): EmotionJSX.Element {
  const setMedia = appBox.setMedia;

  return (
    <NavigationSection>
      <FlexRowContainer
        className={css({
          gap: "2rem",
          minWidth: "32rem",
        })}
      >
        <MainLogo
          width={setMedia(64, 62, 60, 58)}
          height={setMedia(64, 62, 60, 58)}
          fill={palette.white}
        />
        <MainLogoText textColor={palette.white} />
      </FlexRowContainer>

      <FlexRowContainer
        className={css({
          width: "minmax(30rem, 45rem)",
          gap: "1.2rem",
          // [mq.mini]: {
          //   gap: "0.8rem",
          // },
        })}
      >
        {appBox.isMedia.big || appBox.isMedia.medium ? (
          <Container>
            <Button variant="secondary">{appBox.innerContent.about}</Button>
            <Button variant="secondary" className={css({ margin: "0 3.6rem" })}>
              {appBox.innerContent.contacts}
            </Button>
            <Button variant="primary">{appBox.innerContent.makeSweet}</Button>
          </Container>
        ) : (
          <Container>
            <h3>(Burger)</h3>
          </Container>
        )}
        <FlexColumnContainer
          className={css({
            gap: "0.4rem",
            paddingLeft: "1.2rem",
            [mq.small]: {
              gap: "0.2rem",
            },
          })}
        >
          <Button
            variant="language"
            onClick={() => appBox.setLanguage("en")}
            className={css(appBox.isLanguage === "en" ? activeStyle : null)}
          >
            {appBox.languages.en}
          </Button>
          <Button
            variant="language"
            onClick={() => appBox.setLanguage("ru")}
            className={css(appBox.isLanguage === "ru" ? activeStyle : null)}
          >
            {appBox.languages.ru}
          </Button>
        </FlexColumnContainer>
      </FlexRowContainer>
    </NavigationSection>
  );
}
