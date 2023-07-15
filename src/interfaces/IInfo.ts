import { EmotionJSX } from "@emotion/react/types/jsx-namespace";

export interface IInfoBlock {
  title: string;
  text: {
    h1: string;
    p1: string;
    h2: string;
    p2: string;
  };
  logo: EmotionJSX.Element;
}
