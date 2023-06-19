// import { css } from "@emotion/css";
import { MainHeader } from "components/lib/Components";
import { IContentBox } from "interfaces/IContent";

export function Hero({ contentBox }: { contentBox: IContentBox }) {
  const content = contentBox.innerContent;
  return (
    <div>
      <MainHeader>{content.mainHeader}</MainHeader>
      <p>{content.heroTagline}</p>
      <h2>{content.slogan}</h2>
      <div>Deco</div>
      <div>
        <div>first</div>
        <div>second</div>
        <div>third</div>
        <div>forth</div>
      </div>
    </div>
  );
}
