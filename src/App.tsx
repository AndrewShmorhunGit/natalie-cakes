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
import { useState } from "react";
import {
  IActiveBtnStyle,
  IContentBox,
  IInnerContent,
} from "interfaces/IContent";
import { Interpolation, Theme } from "@emotion/react";

function App() {
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

  const innerContent = checkLanguage(isLanguage);
  const en: string = "en";
  const ru: string = "ru";

  // Active language button styles

  const activeCheck = (
    language: string,
    action: any
  ): Interpolation<Theme> | null => isLanguage === language && action;

  const contentBox: IContentBox = {
    isLanguage,
    setLanguage,
    innerContent,
    en,
    ru,
    activeCheck,
    activeStyle,
  };

  return (
    <div>
      <Navigation contentBox={contentBox}></Navigation>
      <Hero contentBox={contentBox}></Hero>
      <Information contentBox={contentBox}></Information>
      <CallToAction></CallToAction>
      <Gallery></Gallery>
      <Footer contentBox={contentBox}></Footer>
      <Modal></Modal>
    </div>
  );
}

export default App;
