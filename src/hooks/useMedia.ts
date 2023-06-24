import { IMedia } from "interfaces/IApp";
import { useState, useEffect } from "react";

interface IMediaSettings {
  windowSize: number;
  media: IMedia;
  setMedia(
    bigParam: number | string,
    mediumParam?: number | string,
    smallParam?: number | string,
    minParam?: number | string
  ): string | number;
}

export const useMedia = (): IMediaSettings => {
  const [isWindowSize, setWindowSize] = useState<number>(window.innerWidth);
  // Set MQ state
  const [isMQ, setIsMQ] = useState<"big" | "medium" | "small" | "mini">("big");

  const handleWindowResize = () => {
    const size = window.innerWidth;
    setWindowSize(size);
    if (size >= 1200) return setIsMQ("big");
    if (size < 1200 && size >= 960) return setIsMQ("medium");
    if (size < 960 && size >= 660) return setIsMQ("small");
    if (size < 660) return setIsMQ("mini");
    return;
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  const media: IMedia = {
    big: isMQ === "big",
    medium: isMQ === "medium",
    small: isMQ === "small",
    mini: isMQ === "mini",
  };

  function setMedia(
    bigParam: number | string,
    mediumParam: number | string = bigParam,
    smallParam: number | string = mediumParam,
    minParam: number | string = smallParam
  ): string | number {
    if (typeof bigParam === "undefined") {
      return "";
    }

    const result = media.big
      ? bigParam
      : media.medium
      ? mediumParam
      : media.small
      ? smallParam
      : minParam;

    return result;
  }

  return { windowSize: isWindowSize, media, setMedia };
};
