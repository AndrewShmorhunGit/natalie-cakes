export function MenuItem({ props }: { props: any }) {
  // const menuItemTemplate = [
  //   {
  //     // category: 'someCategory',
  //     itemName: "MenuItemComponent",
  //     imgSrc: "imageSrc",
  //     description: "imgDescription",
  //     sourness: 3,
  //     sweetness: 4,
  //     tasteAccent: "taste accent",
  //     variants: [
  //       { size: "L", radius: 260, persons: 22, weight: 3.3, price: 280 },
  //       { size: "M", radius: 220, persons: 12, weight: 2, price: 175 },
  //       {
  //         size: "S",
  //         radius: 200,
  //         persons: 10,
  //         weight: 1.6,
  //         price: 140,
  //       },
  //       {
  //         size: "XS",
  //         radius: 180,
  //         persons: 8,
  //         weight: 1.2,
  //         price: 110,
  //       },
  //     ],
  //   },
  // ];
  return (
    <div>
      <h2>Menu Item Component</h2>
      <img src="item image" alt="menu item description" />
      <div>
        <h3>taste</h3>
        <div>
          <p>sourness: ****</p>
          <p>sweetness: *****</p>
        </div>
        <p>taste accent - Lorem ipsum dolor sit amet.</p>
      </div>
      <div>
        <h3>Variants</h3>
        <div>
          <p>L</p>
          <p>radius</p>
          <p>persons</p>
          <p>weight</p>
          <p>price</p>
        </div>
        <div>
          <p>M</p>
        </div>
        <div>
          <p>S</p>
        </div>
        <div>
          <p>XS</p>
        </div>
      </div>
    </div>
  );
}
