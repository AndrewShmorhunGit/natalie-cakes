// Components
import {
  CallToAction,
  Footer,
  Gallery,
  Hero,
  Information,
  Menu,
  Modal,
  Navigation,
  Container,
} from "components";
import { contents } from "content/text/text.content";
// Styles
import "./styles/App.css";
import { css } from "@emotion/css";
import { createGrid } from "styles/styles";
import { palette } from "styles/palette";
// Interfaces
import { IAppBox } from "interfaces/IApp";
// Hooks
import { useMedia, useLanguage, useHover } from "hooks";
import { useRef, useState } from "react";

export function App() {
  // Set JS Media Queries //
  const mediaSettings = useMedia();
  // Set Language Content & Functionality//
  const languageSettings = useLanguage(contents);
  // Modal state
  const [isModal, setModal] = useState(false);

  // Main Application params and functions Box
  const appBox: IAppBox = {
    // useLanguage
    isLanguage: languageSettings.isLanguage,
    setLanguage: languageSettings.setLanguage,
    innerContent: languageSettings.innerContent,
    languages: languageSettings.languages,
    // useMedia
    windowSize: mediaSettings.windowSize,
    isMedia: mediaSettings.isMedia,
    setMedia: mediaSettings.setMedia,
    setMediaByStep: mediaSettings.setMediaByStep,
    useHover,
    hoverRef: useRef(null),
    isModal,
    setModal,
  };

  /////////////////////////////////////////

  return (
    <Container
      dir={appBox.isLanguage === "hb" ? "rtl" : "ltr"}
      className={css({
        minHeight: "100vh",
        ...createGrid("minmax(0, 1fr)", "minmax(1fr, 3fr)"),
        color: palette.text_dark,
      })}
    >
      <Navigation appBox={appBox} />
      <Hero appBox={appBox} />
      <Information appBox={appBox} />
      <Menu appBox={appBox} />
      <Modal appBox={appBox} />
      <Gallery></Gallery>
      <CallToAction></CallToAction>
      <Footer appBox={appBox} />
    </Container>
  );
}

export default App;
