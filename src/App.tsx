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
import { Container } from "components/lib/StyledComponents";
import { css } from "@emotion/css";
import { createGrid } from "styles/styles";
import { IAppBox } from "interfaces/IApp";
import { useMedia } from "hooks/useMedia";
import { useLanguage } from "hooks/useLanguage";

export function App() {
  // Set JS Media Queries //
  const mediaSettings = useMedia();
  // Set Language Content & Functionality//
  const languageSettings = useLanguage(contents);

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
      <Footer appBox={appBox}></Footer>
    </Container>
  );
}

export default App;
