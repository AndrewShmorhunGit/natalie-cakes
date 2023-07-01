import { createMenuData } from "data/menu.data";
import { IAppBox } from "interfaces/IApp";

export function Menu({ appBox }: { appBox: IAppBox }) {
  const content = appBox.innerContent.menuContent;
  const menuData = createMenuData(content);

  return (
    <>
      {/* {Iteration from menuData object} */}
      {menuData.categories.map((category) => {
        return (
          <div key={category.name}>
            <div>
              <h3>{category.name}</h3>
            </div>
            {category.positions.map((item) => {
              return (
                <div key={item.itemName}>
                  <h4>{item.itemName}</h4>
                  <div>
                    <img src={item.imgSrc} alt={item.description} />
                  </div>
                  <div>
                    <div>
                      <p>sourness: {item.sourness}</p>
                      <p>sweetness: {item.sweetness}</p>
                    </div>
                    <div>
                      <h3>taste accent - {item.tasteAccent}</h3>
                    </div>
                  </div>
                  <div>
                    {item.variants.map((variant) => {
                      return (
                        <div key={variant.size}>
                          <h3>size: {variant.size}</h3>
                          <p>radius: {variant.radius}</p>
                          <p>persons: {variant.persons}</p>
                          <p>weight: {variant.weight}</p>
                          <p>price: {variant.price}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
