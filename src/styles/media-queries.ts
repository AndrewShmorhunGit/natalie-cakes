const large: string = "@media (min-width: 75em)"; // 1200
const medium: string = "@media (min-width: 60em) and (max-width: 74.995em)";
const small = "@media (min-width: 41.25em) and (max-width: 59.995em) "; // 960
const mini = "@media (max-width: 41.24em)"; // 660

function setMQ(maxWidth: number, minWidth: number | null = null): string {
  if (minWidth === null) {
    return `@media (max-width: ${(maxWidth / 16).toFixed(2)}em)`;
  }
  return `@media (min-width: ${(minWidth / 16).toFixed(
    2
  )}em) and (max-width: ${(maxWidth / 16).toFixed(2)}em)`;
}

const mq = {
  large,
  medium,
  small,
  mini,
  setMQ,
};

console.log(setMQ(1200));

export { mq };
