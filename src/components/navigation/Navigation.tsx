import { Button, MainLogoText } from "components/lib/Components";
import { MainLogo } from "components/logos/Logos";
import { css } from "@emotion/css";
import { container, colorSys } from "styles/imports";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";

export function Navigation(): EmotionJSX.Element {
  return (
    <div
      className={css({
        ...container,
        background: colorSys.main_primary,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      })}
    >
      {/* <h2>Navigation</h2> */}
      <div
        className={css({
          minWidth: "32rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          // justifyContent: "space-between",
          gap: "2rem",
        })}
      >
        <MainLogo width="80" height="80" fill={colorSys.white} />
        <MainLogoText textColor={colorSys.white} />
      </div>
      <div
        className={css({
          width: "60%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          // rowGap: "12rem",
        })}
      >
        <Button variant="secondary">About</Button>
        <Button variant="secondary">Contacts</Button>
        <Button variant="primary">Make Sweet</Button>
      </div>
    </div>
  );
}
