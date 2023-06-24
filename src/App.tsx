import { palette } from "styles/palette";
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
import { useState } from "react";
import { IActiveBtnStyle, IInnerContent } from "interfaces/IContent";
import { Interpolation, Theme } from "@emotion/react";
import { Container } from "components/lib/StyledComponents";
import { css } from "@emotion/css";
import { createGrid } from "styles/styles";
import { IAppBox } from "interfaces/IApp";
import { useMedia } from "hooks/useMedia";

export function App() {
  // Set JS Media Queries //
  const mediaSettings = useMedia();

  // Set Language Content & Functionality//
  const [isLanguage, setLanguage] = useState("en");
  const { contentEn, contentRu } = contents;
  const activeStyle: IActiveBtnStyle = {
    backgroundColor: palette.main_primary_dark,
    color: palette.white,
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
    windowSize: mediaSettings.windowSize,
    media: mediaSettings.media,
    setMedia: mediaSettings.setMedia,
  };

  /////////////////////////////////////////

  return (
    <Container
      className={css({
        minHeight: "100vh",
        ...createGrid("minmax(0, 1fr)", "minmax(1fr, 3fr)"),
        color: palette.text_dark,
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
