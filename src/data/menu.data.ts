import { IInnerContent } from "interfaces/IContent";

// Images import
import {
  moussesChocolatePassionFruit,
  moussesStrawberriesWithTops,
  moussesChocolateCherry,
  moussesBerryYogurt,
  biscuitsBerryVanilla,
  biscuitsChocolateCaramel,
  biscuitsChocolateRaspberry,
  biscuitsLemonBlueberry,
  napoleon,
  honeyCake,
  cheesecake,
  cheesecakeCaramel,
} from "content";

import {
  createCategoryVariantsArrayData,
  getCategoryParams,
} from "./static.settings.data";

const createCategoryVariantsArray = createCategoryVariantsArrayData;
const { biscuitParams, classicParams, cheesecakesParams } = getCategoryParams();

export function createMenuData(content: IInnerContent) {
  const menuContent = content.menuContent;
  const birthdayCakes = content.heroSelectors.birthdayCake;
  const cakesAndPies = content.heroSelectors.cakesAndPies;
  return {
    categories: [
      {
        group: birthdayCakes,
        name: menuContent.moussesCakes.name,
        positions: [
          {
            itemName: menuContent.moussesCakes.chocolatePassionFruit.itemName,
            imgSrc: moussesChocolatePassionFruit,
            description:
              menuContent.moussesCakes.chocolatePassionFruit.description,
            sourness: 3,
            sweetness: 4,
            tasteAccent:
              menuContent.moussesCakes.chocolatePassionFruit.tasteAccent,
            variants: createCategoryVariantsArray(),
          },
          {
            itemName: menuContent.moussesCakes.strawberriesWithTops.itemName,
            imgSrc: moussesStrawberriesWithTops,
            description:
              menuContent.moussesCakes.strawberriesWithTops.description,
            sourness: 2,
            sweetness: 4,
            tasteAccent:
              menuContent.moussesCakes.strawberriesWithTops.tasteAccent,
            variants: createCategoryVariantsArray(),
          },
          {
            itemName: menuContent.moussesCakes.chocolateCherry.itemName,
            imgSrc: moussesChocolateCherry,
            description: menuContent.moussesCakes.chocolateCherry.description,
            sourness: 4,
            sweetness: 2,
            tasteAccent: menuContent.moussesCakes.chocolateCherry.tasteAccent,
            variants: createCategoryVariantsArray(),
          },
          {
            itemName: menuContent.moussesCakes.berryYogurt.itemName,
            imgSrc: moussesBerryYogurt,
            description: menuContent.moussesCakes.berryYogurt.description,
            sourness: 4,
            sweetness: 2,
            tasteAccent: menuContent.moussesCakes.berryYogurt.tasteAccent,
            variants: createCategoryVariantsArray([10, 20, 15, 20]),
          },
        ],
      },
      {
        group: birthdayCakes,
        name: menuContent.biscuitCakes.name,
        positions: [
          {
            itemName: menuContent.biscuitCakes.berryVanilla.itemName,
            imgSrc: biscuitsBerryVanilla,
            description: menuContent.biscuitCakes.berryVanilla.description,
            sourness: 3,
            sweetness: 4,
            tasteAccent: menuContent.biscuitCakes.berryVanilla.tasteAccent,
            variants: createCategoryVariantsArray([0, 0, 0, 0], biscuitParams),
          },
          {
            itemName: menuContent.biscuitCakes.chocolateCaramel.itemName,
            imgSrc: biscuitsChocolateCaramel,
            description: menuContent.biscuitCakes.chocolateCaramel.description,
            sourness: 0,
            sweetness: 5,
            tasteAccent: menuContent.biscuitCakes.chocolateCaramel.tasteAccent,
            variants: createCategoryVariantsArray([0, 0, 0, 0], biscuitParams),
          },
          {
            itemName: menuContent.biscuitCakes.chocolateRaspberry.itemName,
            imgSrc: biscuitsChocolateRaspberry,
            description:
              menuContent.biscuitCakes.chocolateRaspberry.description,
            sourness: 2,
            sweetness: 2,
            tasteAccent:
              menuContent.biscuitCakes.chocolateRaspberry.tasteAccent,
            variants: createCategoryVariantsArray([0, 0, 0, 0], biscuitParams),
          },
          {
            itemName: menuContent.biscuitCakes.lemonBlueberry.itemName,
            imgSrc: biscuitsLemonBlueberry,
            description: menuContent.biscuitCakes.lemonBlueberry.description,
            sourness: 2,
            sweetness: 3,
            tasteAccent: menuContent.biscuitCakes.lemonBlueberry.tasteAccent,
            variants: createCategoryVariantsArray([0, 0, 0, 0], biscuitParams),
          },
        ],
      },
      {
        group: cakesAndPies,
        name: menuContent.classicCakes.name,
        positions: [
          {
            itemName: menuContent.classicCakes.napoleon.itemName,
            imgSrc: napoleon,
            description: menuContent.classicCakes.napoleon.description,
            sourness: 0,
            sweetness: 2,
            tasteAccent: menuContent.classicCakes.napoleon.tasteAccent,
            variants: createCategoryVariantsArray(
              [0, null, 0, null],
              classicParams
            ),
          },
          {
            itemName: menuContent.classicCakes.honeyCake.itemName,
            imgSrc: honeyCake,
            description: menuContent.classicCakes.honeyCake.description,
            sourness: 2,
            sweetness: 2,
            tasteAccent: menuContent.classicCakes.honeyCake.tasteAccent,
            variants: createCategoryVariantsArray(
              [0, null, 0, null],
              classicParams
            ),
          },
        ],
      },
      {
        group: cakesAndPies,
        name: menuContent.cheesecakes.name,
        positions: [
          {
            itemName: menuContent.cheesecakes.cheesecake.itemName,
            imgSrc: cheesecake,
            description: menuContent.cheesecakes.cheesecake.description,
            sourness: 1,
            sweetness: 3,
            tasteAccent: menuContent.cheesecakes.cheesecake.tasteAccent,
            variants: createCategoryVariantsArray(
              [0, null, 0, null],
              cheesecakesParams
            ),
          },
          {
            itemName: menuContent.cheesecakes.cheesecakeCaramel.itemName,
            imgSrc: cheesecakeCaramel,
            description: menuContent.cheesecakes.cheesecakeCaramel.description,
            sourness: 1,
            sweetness: 4,
            tasteAccent: menuContent.cheesecakes.cheesecakeCaramel.tasteAccent,
            variants: createCategoryVariantsArray(
              [20, null, 20, null],
              cheesecakesParams
            ),
          },
        ],
      },
    ],
  };
}
