import { ISetMedia } from "./IApp";

export interface ICarouselParams {
  slides: string[];
  slideWidth: number;
  sliderColumnGap: number;
  length: number;
  rotate: (
    direction: "left" | "right",
    limit: number,
    setMedia: ISetMedia,
    isCarousel: number,
    setCarousel: React.Dispatch<React.SetStateAction<number>>
  ) => void;
}
