// import { css } from "@emotion/css";
import { FlexCenterContainer } from "components/lib/StyledComponents";
import { ILogos } from "interfaces/ILogos";
import { css, palette } from "styles";
// import { mq } from "styles";

function DecoLoader({
  width = "24",
  height = "24",
  fill = palette.white,
  color1 = palette.main_primary,
  color2 = palette.main_primary_dark,
}: ILogos): JSX.Element {
  return (
    <FlexCenterContainer
      className={css({ padding: "0.4rem 1.2rem", opacity: 0.5 })}
    >
      <svg
        viewBox={"0 0 " + width + " " + height}
        version="1.1"
        preserveAspectRatio="none"
        speed="2"
        className="loader-placeholder--address"
      >
        <rect
          clipPath="url(#zpo4yqmgm9)"
          x="0"
          y="0"
          width={width}
          height={height}
          style={{ fill: `url(#fogtu6dz47o)` }}
        ></rect>
        <defs>
          <clipPath id="zpo4yqmgm9">
            <rect
              x="0"
              y="0"
              rx="30"
              ry="30"
              width={width}
              height={height}
              fill={fill}
            ></rect>
          </clipPath>
          <linearGradient id="fogtu6dz47o">
            <stop offset="0%" stopColor={color1} stopOpacity="0.5">
              <animate
                attributeName="offset"
                values="-2; 1"
                dur="2s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset="50%" stopColor={color2} stopOpacity="1">
              <animate
                attributeName="offset"
                values="-1.5; 1.5"
                dur="1s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset="100%" stopColor={color1} stopOpacity="0.5">
              <animate
                attributeName="offset"
                values="-1; 2"
                dur="2s"
                repeatCount="indefinite"
              ></animate>
            </stop>
          </linearGradient>
        </defs>
      </svg>
    </FlexCenterContainer>
  );
}

export { DecoLoader };
