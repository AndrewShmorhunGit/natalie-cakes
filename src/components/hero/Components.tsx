import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import {
  RelativeContainer,
  AbsoluteCenterContainer,
  DecoContainer,
  Container,
} from "components/lib/StyledComponents";
import { IHeroSelectors, ISelectorParams } from "interfaces";
import React from "react";
import { mq, appShadows, styles, css } from "styles";

export function HeroSelectorDecoContainer({
  selector,
  selectorParams,
  clickHandler,
  useHover,
  style,
}: {
  selector: IHeroSelectors;
  selectorParams: ISelectorParams;
  clickHandler?: () => void;
  useHover: <T extends HTMLElement = HTMLElement>(
    elementRef: React.RefObject<T>
  ) => boolean;
  style?: React.CSSProperties | undefined;
}): EmotionJSX.Element {
  const hoverRef = React.useRef(null);
  const isHover = useHover(hoverRef);
  return (
    <RelativeContainer
      ref={hoverRef}
      className={css({
        cursor: "pointer",
        position: "absolute",
        borderRadius: "50%",
        top: "50%",
        left: "50%",
        transform: `translate(-50%, ${isHover ? "calc(-50% - 1px)" : "-50%"})`,
        transition: selectorParams.decoProps.transition,
        [mq.mini]: {
          top: "0%",
          left: "0%",
          transform: `rotate(-45deg) translateY(${isHover ? "-1px" : "0"})`,
        },
      })}
      onClick={(e) => {
        typeof clickHandler !== "undefined" && clickHandler();
      }}
    >
      <AbsoluteCenterContainer
        className={css({
          overflow: "hidden",
        })}
      >
        {selector.icon}
      </AbsoluteCenterContainer>
      <DecoContainer
        width={selectorParams.width}
        height={selectorParams.height}
        color={selectorParams.color}
        style={{
          ...selectorParams.decoProps,
          boxShadow: isHover ? appShadows.buttonActive : "none",
        }}
      />

      <DecoContainer
        width={selectorParams.width - selectorParams.step}
        height={selectorParams.height - selectorParams.step}
        color={selectorParams.ringColor}
        style={
          isHover
            ? {
                ...selectorParams.decoProps,
                transform: `translate(-50%, -50%) rotate(1turn)`,
              }
            : {
                ...selectorParams.decoProps,
              }
        }
      />
      <DecoContainer
        width={selectorParams.width - 2 * selectorParams.step}
        height={selectorParams.height - 2 * selectorParams.step}
        color={selectorParams.color}
        style={{
          ...selectorParams.decoProps,
        }}
      />
      <Container
        className={css({
          ...styles.flexCenter,
          transform: `translateY(${selectorParams.textPadding}rem)`,
        })}
      >
        <p
          className={css({
            width: `12rem`,
            textAlign: "center",
            textTransform: "capitalize",
            fontSize: `${selectorParams.font}`,
          })}
        >
          {selector.name}
        </p>
      </Container>
    </RelativeContainer>
  );
}
