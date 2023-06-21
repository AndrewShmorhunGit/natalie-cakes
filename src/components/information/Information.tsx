import { css } from "@emotion/css";
import { IAppBox } from "interfaces/IContent";

export function Information({ contentBox }: { contentBox: IAppBox }) {
  const content = contentBox.innerContent;
  return (
    <main className={css({ backgroundColor: "red" })}>
      <div>
        <div>
          <h3>{content.ingredients}</h3>
          <p>{content.ingredientsText.p1}</p>
          <p>{content.ingredientsText.p2}</p>
        </div>
        <div>
          <h3>{content.design}</h3>
          <p>{content.designText.p1}</p>
          <p>{content.designText.p2}</p>
        </div>
        <div>
          <h3>{content.order}</h3>
          <h4>{content.orderText.h1}</h4>
          <p>{content.orderText.p1}</p>
          <h4>{content.orderText.h2}</h4>
          <p>{content.orderText.p2}</p>
        </div>
      </div>
      <div>
        <h3>{content.important}</h3>
        <h4>{content.importantText.h1}</h4>
        <div>
          <p>{content.importantText.p1}</p>
          <p>{content.importantText.p2}</p>
        </div>
      </div>
    </main>
  );
}
