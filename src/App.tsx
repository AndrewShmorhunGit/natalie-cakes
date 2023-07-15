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
import { contents } from "content/text/text.content";
// Styles
import "./styles/App.css";
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

  ////////////////////////////////////////////////

  return (
    <AppContainer dir={languageSettings.isLanguage === "hb" ? "rtl" : "ltr"}>
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
