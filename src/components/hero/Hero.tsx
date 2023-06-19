// import { css } from "@emotion/css";
import { MainHeader } from "components/lib/Components";
import { IContentBox } from "interfaces/IContent";

export function Hero({ contentBox }: { contentBox: IContentBox }) {
  const data = contentBox.innerContent;
  return (
    <div>
      <MainHeader>{data.mainHeader}</MainHeader>
      <p>{data.heroTagline}</p>
      <h2>{data.slogan}</h2>
      <div>Deco</div>
      <div></div>
    </div>
  );
}
