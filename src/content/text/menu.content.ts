import { IMenuContent } from "interfaces/IContent";

export class MenuItem {
  constructor(name: string, accent: string) {
    return {
      itemName: name,
      description: name,
      tasteAccent: accent,
    };
  }
}

export const menuContentEn: IMenuContent = {
  moussesCakes: {
    name: "mousse cakes",
    chocolatePassionFruit: new MenuItem(
      "chocolate - passion fruit",
      "chocolate with exotic sourness"
    ),
    strawberriesWithTops: new MenuItem(
      "strawberries with tops",
      "strawberry, top flavor, vanilla"
    ),
    chocolateCherry: new MenuItem(
      "chocolate - cherry",
      "chocolate, cherry, Tonka beans"
    ),
    berryYogurt: new MenuItem("berry - yogurt", "yogurt with berry sour"),
  },
  biscuitCakes: {
    name: "biscuit cakes",
    berryVanilla: new MenuItem(
      "berry - vanilla",
      "black currant, raspberry, top taste"
    ),
    chocolateCaramel: new MenuItem(
      "chocolate - caramel",
      "chocolate, caramel, salt"
    ),
    chocolateRaspberry: new MenuItem(
      "chocolate - raspberry",
      "chocolate, raspberry"
    ),
    lemonBlueberry: new MenuItem(
      "lemon - blueberry",
      "lemon , blueberry, top taste"
    ),
  },
  classicCakes: {
    name: "classic cakes",
    napoleon: new MenuItem(
      "napoleon",
      "top taste, the taste of childhood, vanilla"
    ),
    honeyCake: new MenuItem("honey cake", "sour cream taste, honey"),
  },
  cheesecakes: {
    name: "cheesecakes",
    cheesecake: new MenuItem("cheesecake", "top taste"),
    cheesecakeCaramel: new MenuItem(
      "cheesecake - caramel",
      "top taste, caramel"
    ),
  },
};

export const menuContentRu: IMenuContent = {
  moussesCakes: {
    name: "муссовые торты",
    chocolatePassionFruit: new MenuItem(
      "шоколад - маракуя",
      "шоколад с экзотической кислинкой"
    ),
    strawberriesWithTops: new MenuItem(
      "клубника с ботвой",
      "клубника, вкус ботвы, ваниль"
    ),
    chocolateCherry: new MenuItem(
      "шоколад - вишня",
      "шоколад, вишня, бобы тонка"
    ),
    berryYogurt: new MenuItem("ягоды - йогурт", "йогурт с ягодной кислинкой"),
  },
  biscuitCakes: {
    name: "бисквитные торты",
    berryVanilla: new MenuItem(
      "ягодный - ванильный",
      "черная смородина, малина, сливочный привкус"
    ),
    chocolateCaramel: new MenuItem(
      "шоколад - карамель",
      "шоколад, карамель, соль"
    ),
    chocolateRaspberry: new MenuItem("шоколад - малина", "шоколад, малина"),
    lemonBlueberry: new MenuItem(
      "лимон - черника",
      "лимон, черника, сливочный привкус"
    ),
  },
  classicCakes: {
    name: "классические торты",
    napoleon: new MenuItem(
      "наполеон",
      "сливочный привкус, вкус детства, ваниль"
    ),
    honeyCake: new MenuItem("медовик", "вкус сметаны, мед"),
  },
  cheesecakes: {
    name: "чизкейки",
    cheesecake: new MenuItem("чизкейк", "сливочный привкус"),
    cheesecakeCaramel: new MenuItem(
      "карамельный чизкейк",
      "сливочный привкус, карамель"
    ),
  },
};

export const menuContentHb: IMenuContent = {
  moussesCakes: {
    name: "עוגות מוס",
    chocolatePassionFruit: new MenuItem(
      "שוקולד - פסיפלורה",
      "שוקולד עם טעם חמצוצה אקזוטית"
    ),
    strawberriesWithTops: new MenuItem(
      "תותים עם גבעול",
      "תותים עם טעם הגבעול, וניל"
    ),
    chocolateCherry: new MenuItem(
      "שוקולד - דובדבן",
      "שוקולד, דובדבן, פולי טונקה"
    ),
    berryYogurt: new MenuItem(
      "חלבונה בפירות יער",
      "יוגורט עם טעם הפירות החמצוכים"
    ),
  },
  biscuitCakes: {
    name: "עוגות ביסקוויט",
    berryVanilla: new MenuItem("פירות יער ווניל", "שסקה שחורה, פטל, טעם חמאה"),
    chocolateCaramel: new MenuItem("שוקולד - קרמל", "שוקולד, קרמל, מלח"),
    chocolateRaspberry: new MenuItem("שוקולד - פטל", "שוקולד, פטל"),
    lemonBlueberry: new MenuItem("לימון - פטל", "לימון, פטל, טעם חמאה"),
  },
  classicCakes: {
    name: "עוגות קלאסיות",
    napoleon: new MenuItem("נפוליאון", "טעם חמאה, טעם ילדות, וניל"),
    honeyCake: new MenuItem("מדובן", "טעם חמאה, דבש"),
  },
  cheesecakes: {
    name: "גביניות",
    cheesecake: new MenuItem("גבינייה", "טעם חמאה"),
    cheesecakeCaramel: new MenuItem("גבינייה קרמל", "טעם חמאה, קרמל"),
  },
};
