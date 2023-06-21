import {
  Button,
  FlexColumnContainer,
  FlexRowContainer,
  MainLogoText,
  NavigationSection,
} from "components/lib/StyledComponents";
import { MainLogo } from "components/imports";
import { css } from "@emotion/css";
import { colorSys, mq } from "styles/imports";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { IAppBox } from "interfaces/IApp";

export function Navigation({
  appBox: appBox,
}: {
  appBox: IAppBox;
  width: number;
}): EmotionJSX.Element {
  return (
    <NavigationSection>
      <FlexRowContainer
        className={css({
          gap: "2rem",
          minWidth: "32rem",
        })}
      >
        <MainLogo width="64" height="64" fill={colorSys.white} />
        <MainLogoText textColor={colorSys.white} />
      </FlexRowContainer>

      <FlexRowContainer
        className={css({
          width: "minmax(30rem, 45rem)",
          gap: "1.2rem",
          [mq.small]: {
            gap: "0.8rem",
          },
        })}
      >
        <Button variant="secondary">{appBox.innerContent.about}</Button>
        <Button variant="secondary">{appBox.innerContent.contacts}</Button>
        <Button variant="primary">{appBox.innerContent.makeSweet}</Button>
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
            className={css(appBox.activeCheck(appBox.en, appBox.activeStyle))}
          >
            {appBox.en}
          </Button>
          <Button
            variant="language"
            onClick={() => appBox.setLanguage("ru")}
            className={css(appBox.activeCheck(appBox.ru, appBox.activeStyle))}
          >
            {appBox.ru}
          </Button>
        </FlexColumnContainer>
      </FlexRowContainer>
    </NavigationSection>
  );
}
