import { ILogos } from "interfaces/ILogos";
import { css, palette } from "styles";

const decoStyle = { padding: "0.4rem 1.2rem", opacity: 0.5 };

function HeaderDecoLoader({
  width = "24",
  height = "24",
  fill = palette.white,
  color1 = palette.main_primary,
  color2 = palette.main_primary_dark,
}: ILogos): JSX.Element {
  return (
    <svg
      className={css(
        { display: "flex", alginItems: "center", justifyContent: "center" },
        decoStyle
      )}
      viewBox={"0 0 630 60"}
      version="1.1"
      preserveAspectRatio="none"
      speed="2"
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
              dur="2s"
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
  );
}

function BlockDecoLoader({
  width = "24",
  height = "24",
  fill = palette.white,
  color1 = palette.main_primary,
  color2 = palette.main_primary_dark,
}: ILogos): JSX.Element {
  return (
    <svg
      className={css(
        { display: "flex", alginItems: "center", justifyContent: "center" },
        decoStyle
      )}
      viewBox="0 0 60 30"
      version="1.1"
      preserveAspectRatio="xMidYMid meet"
      speed="2"
    >
      <rect
        clipPath="url(#04newtx18l89)"
        x="0"
        y="0"
        width={width}
        height={height}
        style={{ fill: "url(#45hreojiq42)" }}
      ></rect>
      <defs>
        <clipPath id="04newtx18l89">
          <rect
            x="0"
            y="0"
            rx="5"
            ry="5"
            width={60}
            height={30}
            fill={fill}
          ></rect>
        </clipPath>
        <linearGradient id="45hreojiq42">
          <stop offset="0%" stopColor={color1} stopOpacity="1">
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
              dur="2s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset="100%" stopColor={color1} stopOpacity="1">
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
  );
}

export { HeaderDecoLoader, BlockDecoLoader };
