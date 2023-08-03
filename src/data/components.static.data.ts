import {
  boy1,
  boy2,
  boy3,
  boy4,
  boy5,
  boy6,
  boy7,
  girl1,
  girl2,
  girl3,
  girl4,
  girl5,
  girl6,
  girl7,
  girl8,
  girl9,
  classic1,
  classic2,
  classic3,
  classic4,
  classic5,
  classic6,
  classic7,
  classic8,
  classic9,
  classic10,
  classic11,
  classic12,
  classic13,
  fruit1,
  fruit2,
  fruit3,
  fruit4,
  fruit5,
  fruit6,
  fruit7,
  fruit8,
  fruit9,
} from "content";
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
  ICarouselParams,
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

export const galleryData = () => {
  const carouselInitialStateData = {
    boys: 0,
    girls: 0,
    fruits: 0,
    classics: 0,
  };

  const rotate = (
    direction: "left" | "right" = "left",
    limit: number,
    setMedia: ISetMedia,
    isCarouselState: number,
    setCarouselState: React.Dispatch<React.SetStateAction<number>>
  ): void => {
    const slidesOnScreen = +setMedia(3, 2, 1);

    if (isCarouselState >= limit - slidesOnScreen && direction === "left") {
      setCarouselState(0);
      return;
    }
    if (isCarouselState === 0 && direction === "right") {
      setCarouselState(limit - slidesOnScreen);
      return;
    }
    if (direction === "right") {
      setCarouselState(isCarouselState - 1);
      return;
    }
    setCarouselState(isCarouselState + 1);
  };

  const logoParams = { width: 40, height: 40 };

  const setCarouselParams = (slidesArray: string[]): ICarouselParams => {
    return {
      slides: slidesArray,
      slideWidth: 24,
      sliderColumnGap: 4,
      length: slidesArray.length,
      rotate,
    };
  };

  const boys = [boy1, boy2, boy3, boy4, boy5, boy6, boy7];
  const girls = [girl1, girl2, girl3, girl4, girl5, girl6, girl7, girl8, girl9];
  const classics = [
    classic1,
    classic2,
    classic3,
    classic4,
    classic5,
    classic6,
    classic7,
    classic8,
    classic9,
    classic10,
    classic11,
    classic12,
    classic13,
  ];
  const fruits = [
    fruit1,
    fruit2,
    fruit3,
    fruit4,
    fruit5,
    fruit6,
    fruit7,
    fruit8,
    fruit9,
  ];
  return {
    boys,
    girls,
    fruits,
    classics,
    carouselInitialStateData,
    logoParams,
    setCarouselParams,
    rotate,
  };
};
