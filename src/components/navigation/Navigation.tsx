import { Button, MainLogoText } from "components/lib/Components";
import { MainLogo } from "components/imports";
import { css } from "@emotion/css";
import { container, colorSys, mq } from "styles/imports";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { IContentBox } from "interfaces/IContent";

export function Navigation({
  contentBox,
}: {
  contentBox: IContentBox;
}): EmotionJSX.Element {
  return (
    <div
      className={css({
        ...container,
        width: "auto",
        background: colorSys.main_primary,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
        // top: "0",
      })}
    >
      <div
        className={css({
          minWidth: "32rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "2rem",
        })}
      >
        <MainLogo width="64" height="64" fill={colorSys.white} />
        <MainLogoText textColor={colorSys.white} />
      </div>

      <div
        className={css({
          width: "minmax(30rem, 45rem)",
          display: "flex",
          flexDirection: "row",
          gap: "1.2rem",
          alignItems: "center",
          [mq.small]: {
            gap: "0.8rem",
          },
        })}
      >
        <Button variant="secondary">{contentBox.innerContent.about}</Button>
        <Button variant="secondary">{contentBox.innerContent.contacts}</Button>
        <Button variant="primary">{contentBox.innerContent.makeSweet}</Button>
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
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
        </div>
      </div>
    </div>
  );
}
