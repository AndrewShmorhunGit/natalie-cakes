import { ReactElement, ReactNode } from "react";

export interface IHeroSelectors {
  name: string | ReactNode;
  icon: ReactElement<any, any>;
}

export interface ISelectorParams {
  width: number;
  height: number;
  step: number;
  font: string;
  color: string;
  ringColor: string;
  textPadding: number;
  decoProps: {
    transition: string;
    borderRadius: string;
    position: "absolute";
    left: string;
    top: string;
    transform: string;
    zIndex: string;
  };
}
