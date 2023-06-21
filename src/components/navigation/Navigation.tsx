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
import { IAppBox } from "interfaces/IContent";

export function Navigation({
  contentBox,
  width,
}: {
  contentBox: IAppBox;
  width: number;
}): EmotionJSX.Element {
  return (
    <NavigationSection className={css({ position: "relative" })}>
      {width}

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
        <Button variant="secondary">{contentBox.innerContent.about}</Button>
        <Button variant="secondary">{contentBox.innerContent.contacts}</Button>
        <Button variant="primary">{contentBox.innerContent.makeSweet}</Button>
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
            onClick={() => contentBox.setLanguage("en")}
            className={css(
              contentBox.activeCheck(contentBox.en, contentBox.activeStyle)
            )}
          >
            {contentBox.en}
          </Button>
          <Button
            variant="language"
            onClick={() => contentBox.setLanguage("ru")}
            className={css(
              contentBox.activeCheck(contentBox.ru, contentBox.activeStyle)
            )}
          >
            {contentBox.ru}
          </Button>
        </FlexColumnContainer>
      </FlexRowContainer>
    </NavigationSection>
  );
}
