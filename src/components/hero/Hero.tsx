import { css } from "@emotion/css";
import { MainHeader } from "components/lib/Styled Components";
import { IContentBox } from "interfaces/IContent";

import { container, flexCenter, paddingTopBottom } from "styles/general";

export function Hero({ contentBox }: { contentBox: IContentBox }) {
  const content = contentBox.innerContent;
  return (
    <main
      className={css({
        ...paddingTopBottom(6.2),
        position: "relative",
        height: "100%",
        backgroundColor: "red",
        backgroundImage: "../../content/images/hero/img.png",
        // // left: "0px",
        // // top: "100px",
        // // filter: "blur(3.5px)",
        // // zIndex: "-1",
        // backgroundColor: colorSys.background_second,
        // background: `url("../../content/images/hero/hero_background_img.jpg")`,
      })}
      style={
        {
          // backgroundImage: "url(content/images/hero/hero_background_img.jpg)",
        }
      }
    >
      {/*  Background Image */}
      {/* <img
        className={css({
          position: "absolute",
          width: "100%",
          height: "rem",
          top: 0,
          zIndex: -1,
        })}
        src="https://tse1.mm.bing.net/th?id=OIF.BqKJR3k5JkFTB411P66NAA&pid=Api&P=0&h=180"
        alt="boy enjoy the celebration"
      /> */}
      <div
        className={css({
          ...container,
          flexDirection: "column",
        })}
      >
        <MainHeader
          className={css({
            ...flexCenter,
          })}
        >
          {content.mainHeader}
        </MainHeader>
        <p>{content.heroTagline}</p>
        <h2>{content.slogan}</h2>
        <div>Deco</div>
        <div>
          <div>
            <p>{content.icons.birthdayCake}</p>
          </div>
          <div>
            <p>{content.icons.cakesAndPies}</p>
          </div>
          <div>
            <p>{content.icons.cupCakes}</p>
          </div>
          <div>
            <p>{content.icons.gingerBread}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
