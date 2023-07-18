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
  AppContainer,
} from "components";

// Styles
import "./styles/App.css";
// Interfaces
import { IAppBox } from "interfaces/IApp";
// Hooks
import { useMedia, useLanguage, useHover } from "hooks";
import { useRef, useState } from "react";
import { css } from "styles";
import React from "react";

export function App() {
  // Set JS Media Queries //
  const mediaSettings = useMedia();
  // Set Language Content & Functionality//
  const languageSettings = useLanguage();
  // Modal state
  const [isModal, setModal] = useState(false);

  const [isOpacity, setOpacity] = useState(1);

  // Effects
  // Language change transition
  const [isLangTransition, setLangTransition] = useState(false);

  React.useEffect(() => {
    setLangTransition(true);
    setTimeout(() => {
      setOpacity(0.2);
    }, 500);
    setTimeout(() => {
      setOpacity(1);
      setLangTransition(false);
    }, 1000);
  }, [languageSettings.isLanguage]);

  // Main Application params and functions Box
  const appBox: IAppBox = {
    // useLanguage
    isLanguage: languageSettings.isLanguage,
    setLanguage: languageSettings.setLanguage,
    innerContent: languageSettings.innerContent,
    languages: languageSettings.languages,
    isLanguageLoading: languageSettings.isLanguageLoading,
    // useMedia
    windowSize: mediaSettings.windowSize,
    isMedia: mediaSettings.isMedia,
    setMedia: mediaSettings.setMedia,
    setMediaByStep: mediaSettings.setMediaByStep,
    useHover,
    hoverRef: useRef(null),
    isModal,
    setModal,
    // Effects
    isLangTransition,
  };

  ////////////////////////////////////////////////

  return (
    <AppContainer
      dir={languageSettings.isLanguage === "hb" ? "rtl" : "ltr"}
      className={css({
        transition: "opacity 1s ease-in-out",
        opacity: isOpacity,
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
    </AppContainer>
  );
}

export default App;
