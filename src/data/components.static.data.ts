import {
  // Footer
  EnvelopLogo,
  LocationLogo,
  PhoneLogo,
  // Hero
  HeroBirthdayCakesLogo,
  HeroCakesAndPiesLogo,
  HeroCupCakesLogo,
  HeroGingerbreadLogo,
  // Info
  DesignLogo,
  IngredientsLogo,
  OrderLogo,
} from "components";
import {
  IFooterContacts,
  IInfoBlock,
  IInnerContent,
  ILogos,
  IMedia,
  ISelectorParams,
  ISetMedia,
} from "interfaces";
import { palette } from "styles";

// FOOTER

export const footerContactsData = (
  content: IInnerContent
): IFooterContacts[] => {
  const logoPropsContactsData: ILogos = {
    width: "32",
    height: "32",
    fill: palette.main_primary_dark,
  };

  return [
    {
      name: `${content.footerContacts.address}`,
      icon: LocationLogo(logoPropsContactsData),
    },
    {
      name: `${content.footerContacts.phone}`,
      icon: PhoneLogo(logoPropsContactsData),
    },
    {
      name: `${content.footerContacts.email}`,
      icon: EnvelopLogo(logoPropsContactsData),
    },
  ];
};

// HERO

export const heroData = (
  content: IInnerContent,
  setMedia: ISetMedia,
  isMedia: IMedia
) => {
  const heroLogoPropsData = () => {
    return {
      width: setMedia(72, 60, 52, 60),
      height: setMedia(72, 60, 52, 60),
    };
  };

  const heroSelectorsData = [
    {
      name: content.heroSelectors.birthdayCake,
      icon: HeroBirthdayCakesLogo(heroLogoPropsData()),
    },
    {
      name: content.heroSelectors.cakesAndPies,
      icon: HeroCakesAndPiesLogo(heroLogoPropsData()),
    },
    {
      name: content.heroSelectors.cupCakes,
      icon: HeroCupCakesLogo(heroLogoPropsData()),
    },
    {
      name: content.heroSelectors.gingerBread,
      icon: HeroGingerbreadLogo(heroLogoPropsData()),
    },
  ];

  const heroSelectorParamsData: ISelectorParams = {
    width: +setMedia(14, 12, 10, 16),
    height: +setMedia(14, 12, 10, 16),
    step: +setMedia(1.6, 1.6, 1.4, 1.8),
    font: `${setMedia(2.2, 2, 1.8)}rem`,
    color: palette.gradient_background_main_to_second,
    ringColor: palette.gradient_primary_to_primary_dark,
    textPadding: +setMedia(11.6, 10.6, 9.2, 11.2),
    decoProps: {
      transition: "all 1s",
      borderRadius: "50%",
      position: "absolute",
      top: isMedia.mini ? "calc(50% + 2rem)" : "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: "-1",
    },
  };

  return { heroSelectorParamsData, heroSelectorsData };
};

// INFORMATION

export const infoData = (content: IInnerContent, setMedia: ISetMedia) => {
  const infoLogoSettings = () => {
    const logoSettings = setMedia(128, 100, 84, 48);
    return { width: logoSettings, height: logoSettings };
  };

  const infoContentData: IInfoBlock[] = [
    {
      title: content.ingredients,
      text: content.ingredientsText,
      logo: IngredientsLogo(infoLogoSettings()),
    },
    {
      title: content.design,
      text: content.designText,
      logo: DesignLogo(infoLogoSettings()),
    },
    {
      title: content.order,
      text: content.orderText,
      logo: OrderLogo(infoLogoSettings()),
    },
  ];
  return { infoContentData };
};
