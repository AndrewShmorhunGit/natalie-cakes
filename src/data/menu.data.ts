import { IMenuContent } from "interfaces/IContent";

// Images import
import MoussesChocolatePassionFruit from "content/images/menu/mousses/chocolate-passion-fruit.png";

export function createMenuData(content: IMenuContent) {
  return {
    categories: [
      {
        group: "birthday cakes",
        name: content.moussesCakes.name,
        positions: [
          {
            itemName: content.moussesCakes.chocolatePassionFruit.itemName,
            imgSrc: MoussesChocolatePassionFruit,
            description: content.moussesCakes.chocolatePassionFruit.description,
            sourness: 3,
            sweetness: 4,
            tasteAccent: content.moussesCakes.chocolatePassionFruit.tasteAccent,
            variants: [
              { size: "L", radius: 260, persons: 22, weight: 3.3, price: 280 },
              { size: "M", radius: 220, persons: 12, weight: 2, price: 175 },
              {
                size: "S",
                radius: 200,
                persons: 10,
                weight: 1.6,
                price: 140,
              },
              {
                size: "XS",
                radius: 180,
                persons: 8,
                weight: 1.2,
                price: 110,
              },
            ],
          },
          {
            itemName: content.moussesCakes.chocolatePassionFruit.itemName + "1",
            imgSrc: MoussesChocolatePassionFruit,
            description: content.moussesCakes.chocolatePassionFruit.description,
            sourness: 3,
            sweetness: 4,
            tasteAccent: content.moussesCakes.chocolatePassionFruit.tasteAccent,
            variants: [
              { size: "L", radius: 260, persons: 22, weight: 3.3, price: 280 },
              { size: "M", radius: 220, persons: 12, weight: 2, price: 175 },
              {
                size: "S",
                radius: 200,
                persons: 10,
                weight: 1.6,
                price: 140,
              },
              {
                size: "XS",
                radius: 180,
                persons: 8,
                weight: 1.2,
                price: 110,
              },
            ],
          },
          {
            itemName: content.moussesCakes.chocolatePassionFruit.itemName + "2",
            imgSrc: MoussesChocolatePassionFruit,
            description: content.moussesCakes.chocolatePassionFruit.description,
            sourness: 3,
            sweetness: 4,
            tasteAccent: content.moussesCakes.chocolatePassionFruit.tasteAccent,
            variants: [
              { size: "L", radius: 260, persons: 22, weight: 3.3, price: 280 },
              { size: "M", radius: 220, persons: 12, weight: 2, price: 175 },
              {
                size: "S",
                radius: 200,
                persons: 10,
                weight: 1.6,
                price: 140,
              },
              {
                size: "XS",
                radius: 180,
                persons: 8,
                weight: 1.2,
                price: 110,
              },
            ],
          },
        ],
      },
      {
        name: content.moussesCakes.name + "_test",
        positions: [
          {
            itemName: content.moussesCakes.chocolatePassionFruit.itemName,
            imgSrc: MoussesChocolatePassionFruit,
            description: content.moussesCakes.chocolatePassionFruit.description,
            sourness: 3,
            sweetness: 4,
            tasteAccent: content.moussesCakes.chocolatePassionFruit.tasteAccent,
            variants: [
              { size: "L", radius: 260, persons: 22, weight: 3.3, price: 280 },
              { size: "M", radius: 220, persons: 12, weight: 2, price: 175 },
              {
                size: "S",
                radius: 200,
                persons: 10,
                weight: 1.6,
                price: 140,
              },
              {
                size: "XS",
                radius: 180,
                persons: 8,
                weight: 1.2,
                price: 110,
              },
            ],
          },
          {
            itemName: content.moussesCakes.chocolatePassionFruit.itemName + "1",
            imgSrc: MoussesChocolatePassionFruit,
            description: content.moussesCakes.chocolatePassionFruit.description,
            sourness: 3,
            sweetness: 4,
            tasteAccent: content.moussesCakes.chocolatePassionFruit.tasteAccent,
            variants: [
              { size: "L", radius: 260, persons: 22, weight: 3.3, price: 280 },
              { size: "M", radius: 220, persons: 12, weight: 2, price: 175 },
              {
                size: "S",
                radius: 200,
                persons: 10,
                weight: 1.6,
                price: 140,
              },
              {
                size: "XS",
                radius: 180,
                persons: 8,
                weight: 1.2,
                price: 110,
              },
            ],
          },
          {
            itemName: content.moussesCakes.chocolatePassionFruit.itemName + "2",
            imgSrc: MoussesChocolatePassionFruit,
            description: content.moussesCakes.chocolatePassionFruit.description,
            sourness: 3,
            sweetness: 4,
            tasteAccent: content.moussesCakes.chocolatePassionFruit.tasteAccent,
            variants: [
              { size: "L", radius: 260, persons: 22, weight: 3.3, price: 280 },
              { size: "M", radius: 220, persons: 12, weight: 2, price: 175 },
              {
                size: "S",
                radius: 200,
                persons: 10,
                weight: 1.6,
                price: 140,
              },
              {
                size: "XS",
                radius: 180,
                persons: 8,
                weight: 1.2,
                price: 110,
              },
            ],
          },
        ],
      },
    ],
  };
}
