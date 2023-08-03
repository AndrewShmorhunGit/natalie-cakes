import heroBgImage from "content/images/hero/hero-background-img.jpg";
import { mq, paddingTopBottom, styled } from "styles";

export const HeroSection = styled.main({
  minHeight: "100vh",
  backgroundImage: `url(${heroBgImage})`,
  backgroundRepeat: "none",
  backgroundSize: "cover",
  paddingBottom: "12rem",
  [mq.large]: { backgroundPositionY: "50%" },
  [mq.mini]: { backgroundPositionX: "50%" },
});

export const HeroBackDropFilterContainer = styled.div({
  ...paddingTopBottom(12, 18),
  height: "100%",
  background: "rgb(0,0,0,0.3)",
  backdropFilter: "blur(0.4rem)",
});

export const MainHeader = styled.h1({
  fontSize: "6.8rem",
  fontWeight: 400,
  [mq.medium]: {
    fontSize: "6.2rem",
  },
  [mq.small]: {
    fontSize: "5.4rem",
  },
  [mq.mini]: {
    fontSize: "4.8rem",
  },
});

// Remove
export const HeroTagLine = styled.h2({
  ...paddingTopBottom(8, 10),
  fontSize: "2.8rem",
  fontWeight: 400,
  [mq.small]: {
    fontSize: "2.4rem",
    width: "50rem",
  },
  [mq.mini]: {
    width: "40rem",
    fontSize: "2rem",
  },
});
