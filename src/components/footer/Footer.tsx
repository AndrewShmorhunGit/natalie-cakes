import { MainLogo } from "components/imports";
import { MainLogoText } from "components/lib/StyledComponents";
import { IContentBox } from "interfaces/IContent";
import { colorSys } from "styles/colors";

export function Footer({ contentBox }: { contentBox: IContentBox }) {
  const content = contentBox.innerContent;
  return (
    <div>
      <div>
        <MainLogoText textColor={colorSys.text_dark} />
        <MainLogo width="6rem" height="6rem" fill={colorSys.text_dark} />
      </div>
      <div>
        <div>
          <h3>{content.footerOther.contacts}</h3>
          <p>{content.footerContacts.address}</p>
          <p>{content.footerContacts.phone}</p>
          <p>{content.footerContacts.email}</p>
        </div>
        <div>
          <h3>{content.footerOther.question}</h3>
        </div>
        <div>
          <h3>{content.footerOther.follow}</h3>
        </div>
      </div>
      <div>
        <h3>{content.footerOther.menu}</h3>
        {content.footerOther.cart.map((position) => {
          return <p>{position}</p>;
        })}
      </div>
      <p>&copy; {content.footerOther.rights}</p>
    </div>
  );
}
