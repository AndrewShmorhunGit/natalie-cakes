import {
  InfoContainer,
  InfoHeader,
  InfoParagraph,
  InfoSubHeader,
  InformationImportantContainer,
} from "./Styled";
import { DecoContainer, Container, FlexCenterContainer } from "components";
import {
  palette,
  createGrid,
  infoLogoContainerAbsoluteSettings,
  appShadows,
  css,
} from "styles";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { IMedia, IInfoBlock } from "interfaces";
import { loading } from "utils/functions";

function InfoLogoContainer({
  Logo,
  type,
  isCondition,
  step,
  big = 24,
  medium = 20,
  small = 16,
  mini = 8,
  setMedia,
}: {
  Logo: EmotionJSX.Element;
  type: "left" | "right";
  isCondition: boolean;
  big?: number;
  medium?: number;
  small?: number;
  mini?: number;
  step: number;
  setMedia: (
    bigParam: string | number,
    mediumParam?: string | number | undefined,
    smallParam?: string | number | undefined,
    minParam?: string | number | undefined
  ) => string | number;
}) {
  return (
    <Container className={css({ position: "relative", zIndex: "2" })}>
      <DecoContainer
        width={+setMedia(big, medium, small, mini)}
        height={+setMedia(big, medium, small, mini)}
        color={palette.main_primary}
        style={{
          position: "absolute",
          ...infoLogoContainerAbsoluteSettings(isCondition, type),
          boxShadow: appShadows.button,
        }}
      />
      <DecoContainer
        width={+setMedia(big - step, medium - step, small - step, mini - step)}
        height={+setMedia(big - step, medium - step, small - step, mini - step)}
        color={palette.white}
        style={{
          position: "absolute",

          ...infoLogoContainerAbsoluteSettings(isCondition, type),
        }}
      />
      <DecoContainer
        width={
          +setMedia(
            big - step * 2,
            medium - step * 2,
            small - step * 2,
            mini - step * 2
          )
        }
        height={
          +setMedia(
            big - step * 2,
            medium - step * 2,
            small - step * 2,
            mini - step * 2
          )
        }
        color={palette.main_primary}
        style={{
          position: "absolute",
          ...infoLogoContainerAbsoluteSettings(isCondition, type),
        }}
      />
      <Container
        className={css({
          position: "absolute",
          ...infoLogoContainerAbsoluteSettings(isCondition, type),
          zIndex: "2",
        })}
      >
        {Logo}
      </Container>
    </Container>
  );
}

export function InfoDecoLine() {
  return (
    <FlexCenterContainer>
      <DecoContainer width={18} height={0.2} color={palette.main_primary} />
    </FlexCenterContainer>
  );
}

export function InfoImportantTitle({
  isMedia,
  setMedia,
  title,
}: {
  isMedia: IMedia;
  setMedia: (
    bigParam: string | number,
    mediumParam?: string | number | undefined,
    smallParam?: string | number | undefined,
    minParam?: string | number | undefined
  ) => string | number;
  title: string | React.ReactNode;
}): EmotionJSX.Element {
  return (
    <InformationImportantContainer
      className={css({
        minWidth: `${setMedia(32, 30, 28)}rem`,
        marginTop: `${isMedia.mini ? "4rem" : "2rem"}`,
        marginBottom: `${isMedia.mini ? "4rem" : "2rem"}`,
      })}
    >
      <DecoContainer
        width={4}
        height={30}
        color={palette.main_primary}
        style={{
          position: "absolute",
          left: "calc(50% - 4rem)",
          bottom: "-7rem",
          transform: "rotate(45deg)",
        }}
      />
      <DecoContainer
        width={4}
        height={30}
        color={palette.main_primary}
        style={{
          position: "absolute",
          left: "calc(50% + 8rem)",
          bottom: "-7rem",
          transform: "rotate(45deg)",
        }}
      />
      <InfoHeader>{title}</InfoHeader>
    </InformationImportantContainer>
  );
}

export function InfoBlock({
  infContentData,
  isLanguage,
  isMedia,
  setMedia,
  index,
}: {
  infContentData: IInfoBlock;
  isLanguage: string;
  isMedia: IMedia;
  setMedia: (
    bigParam: string | number,
    mediumParam?: string | number | undefined,
    smallParam?: string | number | undefined,
    minParam?: string | number | undefined
  ) => string | number;
  index: number;
}) {
  const { text, title, logo } = infContentData;

  return (
    <Container
      className={css({
        gridRow: "2",
        ...createGrid(index % 2 === 0 ? "1fr 3fr" : "3fr 1fr", 1),
      })}
    >
      {index % 2 === 0 && (
        <InfoLogoContainer
          Logo={logo}
          isCondition={isMedia.mini}
          setMedia={setMedia}
          type={"left"}
          step={+setMedia(2.4, 2, 1.6, 1)}
        />
      )}
      <InfoContainer
        className={css({
          display: "flex",
          flexDirection: "column",
        })}
      >
        <InfoHeader>
          {title === "Loading" ? loading(isLanguage) : title}
        </InfoHeader>
        <InfoDecoLine />
        <InfoSubHeader>{text.h1}</InfoSubHeader>
        <InfoParagraph>{text.p1}</InfoParagraph>
        <InfoSubHeader>{text.h2}</InfoSubHeader>
        <InfoParagraph>{text.p2}</InfoParagraph>
      </InfoContainer>
      {index % 2 === 1 && (
        <InfoLogoContainer
          Logo={logo}
          isCondition={isMedia.mini}
          setMedia={setMedia}
          type={"right"}
          step={+setMedia(2.4, 2, 1.6, 1)}
        />
      )}
    </Container>
  );
}
