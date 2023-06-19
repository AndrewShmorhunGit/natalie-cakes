import { Button, MainLogoText } from "components/lib/Components";
import { MainLogo } from "components/logos/Logos";
import { css } from "@emotion/css";
import { container, colorSys } from "styles/imports";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { useState } from "react";
import { content } from "content/content";

export function Navigation(): EmotionJSX.Element {
  // Language functionality
  const [isLanguage, setLanguage] = useState("en");
  const { contentEn, contentRu } = content;

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
  const en: string = "en";
  const ru: string = "ru";
  // Active language button styles

  const active = (language: string) =>
    isLanguage === language && {
      backgroundColor: colorSys.main_primary_dark,
      color: colorSys.white,
    };

  // Component

  return (
    <div
      className={css({
        ...container,
        width: "100%",
        background: colorSys.main_primary,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "fixed",
        top: "0",
        transition: "width 2sec",
      })}
    >
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

      <div
        className={css({
          width: "minmax(30rem, 45rem)",
          display: "flex",
          flexDirection: "row",
          gap: "1.2rem",
        })}
      >
        <Button variant="secondary">{language.about}</Button>
        <Button variant="secondary">{language.contacts}</Button>
        <Button variant="primary">{language.makeSweet}</Button>
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "0.4rem",
            paddingLeft: "1.2rem",
          })}
        >
          <Button
            variant="language"
            onClick={() => setLanguage("en")}
            className={css(active(en))}
          >
            {en}
          </Button>
          <Button
            variant="language"
            onClick={() => setLanguage("ru")}
            className={css(active(ru))}
          >
            {ru}
          </Button>
        </div>
      </div>
    </div>
  );
}
