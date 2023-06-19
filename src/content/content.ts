import { IInnerContent } from "interfaces/IContent";

const contentEn: IInnerContent = {
  // Navigation
  about: "about",
  contacts: "contacts",
  makeSweet: "make sweet",
  // Hero
  mainHeader: "make your life sweet!",
  text: "Tagline,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati consectetur dolorum nemo. Deserunt praesentium veniam expedita fugiat eos possimus obcaecati, autem esse nihil itaque et, impedit omnis fuga perspiciatis. Modi impedit delectus nostrum vitae. Officia inventore voluptatem eveniet nostrum ex, sed tempora sunt accusamus reiciendis nulla nesciunt laudantium, perferendis fugit.",
  menu: "choose the way",
  birthdayCake: "birthday cake",
  cakesAndPies: "cakes and pies",
  cupCakes: "cup cakes",
  gingerBread: "gingerbread",
  /// Info
  ingredients: "ingredients",
  igrText: {
    p1: "In our menu you will find cakes, both from famous chefs, as well as our recipes developed over the years and classic combinations. We use only high-quality ingredients - 82% butter, animal origin, high-quality Spanish and Belgian chocolate, German cream cheese and puree of natural berries and fruits.",
    p2: "We do not use preservatives, stabilizers, aromatizers, flavor enhancers or emulsifiers.",
  },
  design: "design",
};
const contentRu: IInnerContent = {
  // Navigation
  about: "про нас",
  contacts: "контакты",
  makeSweet: "подсластить!",
  // Hero
  mainHeader: "сделай свой день действительно сладким!",
  text: "слоган",
  menu: "сделай себе праздник",
  birthdayCake: "торт на дню рождения",
  cakesAndPies: "торты и пироги",
  cupCakes: "капкейки",
  gingerBread: "пряники",
  /// Info
  ingredients: "ингредиенты",
  igrText: {
    p1: "В нашем меню вы найдете торты, как от известных шеф-поваров, так и отработанные годами рецепты и классические сочетания. Мы используем только качественные ингредиенты - 82% сливочного масла животного происхождения, качественный испанский и бельгийский шоколад, немецкий сливочный сыр и пюре из натуральных ягод и фруктов.",
    p2: "Мы не используем консерванты, стабилизаторы, ароматизаторы, усилители вкуса и эмульгаторы.",
  },
  design: "design",
};

export const contents = { contentEn, contentRu };
