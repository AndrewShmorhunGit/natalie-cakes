// import { css } from "@emotion/css";
import { MainHeader } from "components/lib/Components";
import { IContentBox } from "interfaces/IContent";

export function Hero({ contentBox }: { contentBox: IContentBox }) {
  const data = contentBox.innerContent;
  return (
    <div>
      <MainHeader>{data.mainHeader}</MainHeader>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
        consectetur dolorum nemo. Deserunt praesentium veniam expedita fugiat
        eos possimus obcaecati, autem esse nihil itaque et, impedit omnis fuga
        perspiciatis. Modi impedit delectus nostrum vitae. Officia inventore
        voluptatem eveniet nostrum ex, sed tempora sunt accusamus reiciendis
        nulla nesciunt laudantium, perferendis fugit.
      </p>
      <h2>{data.menu}</h2>
      <div>underline</div>
      <div>Menu objects</div>
    </div>
  );
}
