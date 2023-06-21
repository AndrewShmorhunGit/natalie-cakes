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
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
  // Set MQ state
  const [isMQ, setIsMQ] = useState<"big" | "medium" | "small">("big");

  const handleWindowResize = () => {
    const size = window.innerWidth;
    setWindowSize(size);
    if (size >= 1200) return setIsMQ("big");
    if (size < 1200 && size >= 960) return setIsMQ("medium");
    if (size < 960) return setIsMQ("small");
    return;
  };

  const media: IMedia = {
    big: isMQ === "big",
    medium: isMQ === "medium",
    small: isMQ === "small",
  };

  function setParamsFromMedia(
    bigParam: number | string,
    mediumParam: number | string,
    smallParam: number | string
  ): string | number {
    return media.big ? bigParam : media.medium ? mediumParam : smallParam;
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);
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
  const appBox: IAppBox = {
    isLanguage,
    setLanguage,
    innerContent,
    en,
    ru,
    activeCheck,
    activeStyle,
    windowSize,
    media,
    setParamsFromMedia,
  };
  /////////////////////////////////////////

  return (
    <Container
      className={css({
        minHeight: "100vh",
        ...createGrid(1, 8),
      })}
    >
      <Navigation appBox={appBox} width={windowSize || 0}></Navigation>
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
