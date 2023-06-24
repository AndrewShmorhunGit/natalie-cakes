export class MediaService {
  large: string = "@media (min-width: 75em)"; // 1200
  medium: string = "@media (min-width: 60em) and (max-width: 74.995em)";
  small: string = "@media (min-width: 41.25em) and (max-width: 59.995em) "; // 960
  mini: string = "@media (max-width: 41.24em)"; // 660

  setMQ(maxWidth: number, minWidth: number | null = null): string {
    if (minWidth === null) {
      return `@media (max-width: ${(maxWidth / 16).toFixed(2)}em)`;
    }
    return `@media (min-width: ${(minWidth / 16).toFixed(
      2
    )}em) and (max-width: ${(maxWidth / 16).toFixed(2)}em)`;
  }
}
