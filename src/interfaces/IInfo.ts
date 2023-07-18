import { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { ReactNode } from "react";

export interface IInfoBlock {
  title: string | ReactNode;
  text: {
    h1: string | ReactNode;
    p1: string | ReactNode;
    h2: string | ReactNode;
    p2: string | ReactNode;
  };
  logo: EmotionJSX.Element;
}
