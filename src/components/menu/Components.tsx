import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import {
  FlexRowContainer,
  Container,
  RelativeContainer,
  FlexCenterContainer,
  DecoContainer,
} from "components/lib/StyledComponents";
import {
  RateFilledStarLogo,
  RateEmptyStarLogo,
  ArrowDownLogo,
} from "components/logos/Logos";
import { createGrid, palette, css } from "styles";

export function GetRateStars(
  rate: number,
  max: number,
  content: string,
  width: number = 10,
  size: number = 20
): EmotionJSX.Element {
  return (
    <FlexRowContainer>
      <p className={css({ width: `${width}rem` })}>{content}:</p>
      <Container
        className={css({ columnGap: "0.4rem", ...createGrid(max, 1) })}
      >
        {Array.from(Array(max).keys()).map((num) => {
          return (
            <div key={num} className={css({ alignSelf: "center" })}>
              {num + 1 <= rate ? (
                <RateFilledStarLogo
                  height={size}
                  width={size}
                  fill={palette.main_primary}
                />
              ) : (
                <RateEmptyStarLogo
                  height={size}
                  width={size}
                  fill={palette.main_primary}
                />
              )}
            </div>
          );
        })}
      </Container>
    </FlexRowContainer>
  );
}

export function UpDownArrow({
  circleRadius = 5.2,
  rotate,
}: {
  circleRadius?: number;
  rotate: number;
}) {
  return (
    <RelativeContainer
      className={css({
        cursor: "pointer",
        transition: "all 1s ease",
        transform: `rotate(${rotate}turn)`,
      })}
    >
      <FlexCenterContainer
        className={css({
          zIndex: 1,
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        })}
      >
        <ArrowDownLogo
          height={24}
          width={24}
          fill={palette.main_primary_dark}
        />
      </FlexCenterContainer>
      <DecoContainer
        width={circleRadius}
        height={circleRadius}
        color={palette.background_main}
        style={{
          borderRadius: "50%",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          border: `solid 0.2rem ${palette.main_primary_dark}`,
          zIndex: 0,
        }}
      />
    </RelativeContainer>
  );
}
