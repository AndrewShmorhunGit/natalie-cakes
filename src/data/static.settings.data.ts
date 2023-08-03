// content/text/text.content.ts static data

export const decoHeaderPropsData = {
  width: 620,
  height: 60,
};

export const decoBlockPropsData = {
  width: 60,
  height: 30,
};

// data/menu.data.ts static data

interface IVariant {
  xs: string | number;
  s: string | number;
  m: string | number;
  l: string | number;
}

interface ISizeVariant {
  size: string;
  radius: number;
  persons: number;
  weight: number;
  price: number;
}

interface ICategoryParams {
  sizes: string[];
  persons: number[];
  weight: number[];
  radius: number[];
  prices: number[];
}

// Price editor function alow us to change all unit size prices
function editAllPrices(price: number): number {
  const multiplyPrice = 1;
  const multiplyTotalPrice = 1;
  const addAll = 0;
  return (price * multiplyPrice + addAll) * multiplyTotalPrice;
}

const priceList = {
  musses: [110, 140, 175, 280],
  biscuits: [160, 220, 290, 340],
  classic: [120, 0, 230, 0],
  cheesecakes: [110, 0, 210, 0],
};

// Musses params as a default
const defaultParams = {
  sizes: ["xs", "s", "m", "l"],
  persons: [8, 10, 12, 22],
  weight: [1.2, 1.6, 2.0, 3.3],
  radius: [180, 200, 220, 260],
  prices: priceList.musses,
};

export function getCategoryParams() {
  const biscuitParams = {
    sizes: defaultParams.sizes,
    persons: [12, 17, 23, 27],
    weight: [1.7, 2.5, 3.4, 3.9],
    radius: [180, 200, 220, 240],
    prices: priceList.biscuits,
  };

  const classicParams = {
    sizes: defaultParams.sizes,
    persons: [8, 0, 15, 0],
    weight: [1.2, 0, 2.4, 0],
    radius: defaultParams.radius,
    prices: priceList.classic,
  };

  const cheesecakesParams = {
    sizes: defaultParams.sizes,
    persons: classicParams.persons,
    weight: classicParams.weight,
    radius: defaultParams.radius,
    prices: priceList.cheesecakes,
  };

  return { biscuitParams, classicParams, cheesecakesParams };
}

export function createCategoryVariantsArrayData(
  // This array allow us to add or subtract from the categoryParams.price array for each menu unit size
  [xs, s, m, l]: (number | null)[] = [0, 0, 0, 0],
  categoryParams: ICategoryParams = defaultParams
): ISizeVariant[] {
  function createVariant(arr: string[] | number[]): IVariant {
    return { xs: arr[0], s: arr[1], m: arr[2], l: arr[3] };
  }

  const sizes = createVariant(categoryParams.sizes);
  const persons = createVariant(categoryParams.persons);
  const weights = createVariant(categoryParams.weight);
  const radius = createVariant(categoryParams.radius);
  const prices = createVariant(categoryParams.prices);

  function createSizeVariant(
    size: "xs" | "s" | "m" | "l",
    price: number
  ): ISizeVariant {
    return {
      size: sizes[size].toString().toUpperCase(),
      radius: +radius[size],
      persons: +persons[size],
      weight: +weights[size],
      price: editAllPrices(+prices[size] + price),
    };
  }

  let categoryVariants = [];
  if (xs !== null) {
    categoryVariants.push(createSizeVariant("xs", +xs));
  }
  if (s !== null) {
    categoryVariants.push(createSizeVariant("s", +s));
  }
  if (m !== null) {
    categoryVariants.push(createSizeVariant("m", +m));
  }
  if (l !== null) {
    categoryVariants.push(createSizeVariant("l", +l));
  }
  return categoryVariants;
}
