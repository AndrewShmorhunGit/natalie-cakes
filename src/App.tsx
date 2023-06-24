import { colorSys } from "styles/colors";
import {
  CallToAction,
  Footer,
  Gallery,
  Hero,
  Information,
  Modal,
  Navigation,
} from "./components/imports";
import "./styles/App.css";
import { contents } from "content/content";
import { useEffect, useState } from "react";
import { IActiveBtnStyle, IInnerContent } from "interfaces/IContent";
import { Interpolation, Theme } from "@emotion/react";
import { Container } from "components/lib/StyledComponents";
import { css } from "@emotion/css";
import { createGrid } from "styles/general";
import { IAppBox, IMedia } from "interfaces/IApp";

export function App() {
  // Set JS Media Queries //
  const [isWindowSize, setWindowSize] = useState<number>(window.innerWidth);
  // Set MQ state
  const [isMQ, setIsMQ] = useState<"big" | "medium" | "small" | "mini">("big");

  const handleWindowResize = () => {
    const size = window.innerWidth;
    setWindowSize(size);
    if (size >= 1200) return setIsMQ("big");
    if (size < 1200 && size >= 960) return setIsMQ("medium");
    if (size < 960 && size >= 660) return setIsMQ("small");
    if (size < 660) return setIsMQ("mini");
    return;
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  const media: IMedia = {
    big: isMQ === "big",
    medium: isMQ === "medium",
    small: isMQ === "small",
    mini: isMQ === "mini",
  };

  function setParamsFromMedia(
    bigParam: number | string,
    mediumParam: number | string = bigParam,
    smallParam: number | string = mediumParam,
    minParam: number | string = smallParam
  ): string | number {
    return media.big
      ? bigParam
      : media.medium
      ? mediumParam
      : media.small
      ? smallParam
      : minParam;
  }

  /////////////////////

  // Set Language Content & Functionality//
  const [isLanguage, setLanguage] = useState("en");
  const { contentEn, contentRu } = contents;
  const activeStyle: IActiveBtnStyle = {
    backgroundColor: colorSys.main_primary_dark,
    color: colorSys.white,
  };
  function checkLanguage(language: string): IInnerContent {
    if (language === "en") {
      return contentEn;
    }
    if (language === "ru") {
      return contentRu;
    }
    return contentEn;
  }
  // Set languages
  const innerContent = checkLanguage(isLanguage);
  const en: string = "en";
  const ru: string = "ru";
  // Active language button styles
  const activeCheck = (
    language: string,
    action: any
  ): Interpolation<Theme> | null => isLanguage === language && action;
  /////////////////////////////////////////
  // Main Application params and functions Box
  const appBox: IAppBox = {
    // useLanguage
    isLanguage,
    setLanguage,
    innerContent,
    en,
    ru,
    activeCheck,
    activeStyle,
    // useMedia
    windowSize: isWindowSize,
    media,
    setParamsFromMedia,
  };

  /////////////////////////////////////////

  return (
    <Container
      className={css({
        minHeight: "100vh",
        ...createGrid("minmax(0, 1fr)", "minmax(1fr, 3fr)"),
        color: colorSys.text_dark,
      })}
    >
      <Navigation appBox={appBox}></Navigation>
      <Hero appBox={appBox}></Hero>
      <Information appBox={appBox}></Information>
      <Gallery></Gallery>
      <Modal></Modal>
      <CallToAction></CallToAction>
      <Container>WhiteSpace</Container>
      <Footer appBox={appBox}></Footer>
    </Container>
  );
}

export default App;
