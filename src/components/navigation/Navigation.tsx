import { Button, MainLogoText } from "components/lib/Components";
import { MainLogo } from "components/logos/Logos";
import { css } from "@emotion/css";
import { container, colorSys } from "styles/imports";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { useState } from "react";
import { content } from "content/content";

export function Navigation(): EmotionJSX.Element {
  const { contentEn, contentRu } = content;

  const [isLanguage, setLanguage] = useState("en");

  function checkLanguage(language: string) {
    if (language === "en") {
      return contentEn;
    }
    if (language === "ru") {
      return contentRu;
    }
    return contentEn;
  }

  const language = checkLanguage(isLanguage);

  return (
    <div
      className={css({
        ...container,
        background: colorSys.main_primary,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      })}
    >
      {/* <h2>Navigation</h2> */}
      <div
        className={css({
          minWidth: "32rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          // justifyContent: "space-between",
          gap: "2rem",
        })}
      >
        <MainLogo width="80" height="80" fill={colorSys.white} />
        <MainLogoText textColor={colorSys.white} />
      </div>
      <Button variant="language" onClick={() => setLanguage("en")}>
        en
      </Button>
      <Button variant="language" onClick={() => setLanguage("ru")}>
        ru
      </Button>

      <div
        className={css({
          width: "60%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          // rowGap: "12rem",
        })}
      >
        <Button variant="secondary">{language.about}</Button>
        <Button variant="secondary">{language.contacts}</Button>
        <Button variant="primary">{language.makeSweet}</Button>
      </div>
    </div>
  );
}
