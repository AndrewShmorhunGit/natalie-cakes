import { css } from "@emotion/css";
import { ILogos } from "interfaces/ILogos";
import { mq } from "styles/imports";

function DecoCake1({
  width = "48",
  height = "48",
  fill = "white",
}: ILogos): JSX.Element {
  return (
    <svg
      className={css({
        transition: "all 0.5s ease",
        [mq.medium]: {
          maxWidth: "6.4rem",
          maxHeight: "6.4rem",
        },
        [mq.small]: {
          maxWidth: "5.8rem",
          maxHeight: "5.8rem",
        },
      })}
      width={width}
      height={height}
      viewBox="0 0 118 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M80.6738 114.345L12.0171 95.9488C11.5277 95.818 11.0898 95.5516 10.7743 95.1926C10.4589 94.8336 10.2843 94.403 10.2789 93.9705L9.79276 56.4196C9.78884 56.1292 9.86128 55.8473 10.0047 55.5952C10.1481 55.3431 10.3587 55.1272 10.6207 54.9639C10.8828 54.8006 11.1894 54.694 11.5176 54.6522C11.8458 54.6104 12.187 54.6344 12.5157 54.7225L100.86 78.3943C101.189 78.4824 101.496 78.6322 101.76 78.8325C102.023 79.0328 102.235 79.2784 102.38 79.5509C102.526 79.8233 102.6 80.1155 102.598 80.4056C102.596 80.6956 102.518 80.976 102.37 81.2255L83.1732 113.502C82.9516 113.875 82.5842 114.16 82.1306 114.313C81.6769 114.466 81.1637 114.478 80.6738 114.345Z"
        stroke={fill}
        stroke-width="6"
        stroke-linejoin="round"
      />
      <path
        d="M32.4088 60.053L26.039 99.7061"
        stroke={fill}
        stroke-width="6"
        stroke-linejoin="round"
      />
      <path
        d="M79.3038 72.6184L64.9937 110.144"
        stroke={fill}
        stroke-width="6"
        stroke-linejoin="round"
      />
      <path
        d="M56.1445 67.9927L46.6213 103.534"
        stroke={fill}
        stroke-width="6"
        stroke-linejoin="round"
      />
      <path
        d="M100.855 78.393C100.855 78.393 110.615 71.3841 100.361 61.2578C100.361 61.2578 93.4533 67.236 63.0541 68.2643"
        stroke={fill}
        stroke-width="6"
        stroke-linejoin="round"
      />
      <path
        d="M24.362 57.8967C44.0927 53.8731 62.6448 47.005 79.2751 37.5675C94.3202 28.645 100.361 61.2577 100.361 61.2577"
        stroke={fill}
        stroke-width="6"
        stroke-linejoin="round"
      />
      <path
        d="M15.1287 53.9707C15.1287 53.9707 6.91359 37.6213 28.5878 32.2251C39.4237 29.5267 48.35 28.2324 54.2321 25.8043"
        stroke={fill}
        stroke-width="6"
        stroke-linejoin="round"
      />
      <path
        d="M79.5284 34.9689C77.9431 40.8854 71.7594 41.1914 64.767 39.3178C57.7746 37.4442 52.5724 34.0874 54.1578 28.1708C55.7431 22.2543 64.9151 10.7363 71.9223 12.6139C78.9296 14.4915 81.1115 29.0607 79.5284 34.9689Z"
        stroke={fill}
        stroke-width="6"
        stroke-linejoin="round"
      />
      <path
        d="M71.1752 33.3423C72.6556 33.739 74.1274 33.0469 74.4625 31.7964C74.7975 30.546 73.869 29.2107 72.3885 28.814C70.9081 28.4173 69.4363 29.1094 69.1012 30.3599C68.7661 31.6104 69.6947 32.9456 71.1752 33.3423Z"
        fill="white"
        stroke={fill}
        stroke-width="3"
      />
      <path
        d="M68.6557 24.7955C70.1362 25.1921 71.6079 24.5 71.943 23.2496C72.2781 21.9991 71.3495 20.6638 69.8691 20.2671C68.3886 19.8704 66.9168 20.5625 66.5817 21.813C66.2467 23.0635 67.1752 24.3988 68.6557 24.7955Z"
        fill="white"
        stroke={fill}
        stroke-width="3"
      />
      <path
        opacity="0.9"
        d="M62.3239 30.9706C63.8044 31.3673 65.2762 30.6752 65.6112 29.4247C65.9463 28.1742 65.0177 26.839 63.5373 26.4423C62.0568 26.0456 60.585 26.7377 60.25 27.9882C59.9149 29.2386 60.8434 30.5739 62.3239 30.9706Z"
        fill="white"
        stroke={fill}
        stroke-width="3"
      />
    </svg>
  );
}

export { DecoCake1 };
