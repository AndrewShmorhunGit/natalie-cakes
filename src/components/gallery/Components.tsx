import React from "react";
import {
  FlexCenterContainer,
  GridContainer,
  Container,
  FlexColumnContainer,
  FlexRowContainer,
} from "components";
import { ArrowDownLogo, RateFilledStarLogo } from "components/logos/Logos";
import { ICarouselParams, ISetMedia } from "interfaces";
import { palette, appShadows, css } from "styles";
import { getGalleryModalState } from "utils/functions";

export function Carousel({
  carouselParams,
  appParams,
}: {
  carouselParams: ICarouselParams;
  appParams: {
    setMedia: ISetMedia;
    isLanguage: string;
    setModal: React.Dispatch<React.SetStateAction<string>>;
  };
}) {
  const { slides, slideWidth, sliderColumnGap, length, rotate } =
    carouselParams;

  const [isCarousel, setCarousel] = React.useState(0);

  const slidesOnScreen = +appParams.setMedia(3, 2, 1);
  const opacityCondition = (index: number) =>
    index < slidesOnScreen + isCarousel && index >= isCarousel;
  return (
    <FlexCenterContainer>
      <GridContainer
        className={css({
          position: "relative",
          width: `${
            (slideWidth + sliderColumnGap) * slidesOnScreen + sliderColumnGap
          }rem`,
        })}
      >
        <div
          className={css({
            padding: "4rem",
            display: "grid",
            gridTemplateColumns: `repeat(${length}, 1fr)`,
            gridTemplateRows: "1fr",
            columnGap: `${sliderColumnGap}rem`,
            alignItems: "center",
          })}
        >
          <button
            className={css({
              cursor: "pointer",
              width: "5.2rem",
              height: "5.2rem",
              border: `solid 0.2rem ${palette.main_primary_dark}`,
              borderRadius: "50%",
              zIndex: "2",
              position: "absolute",
              left: `-${sliderColumnGap}rem`,
              top: "50%",
            })}
            onClick={() =>
              rotate(
                "right",
                length,
                appParams.setMedia,
                isCarousel,
                setCarousel
              )
            }
          >
            <FlexCenterContainer
              className={css({ transform: "rotate(90deg)", cursor: "pointer" })}
            >
              <ArrowDownLogo
                height={24}
                width={24}
                fill={palette.main_primary_dark}
              />
            </FlexCenterContainer>
          </button>
          {slides.map((slide, index) => {
            return (
              <GridContainer
                key={index}
                className={css({
                  cursor: opacityCondition(index) ? "pointer" : "",
                  transition: "all 0.5s",
                  width: `${slideWidth}rem`,
                  height: "40rem",
                  borderRadius: "1.2rem",
                  boxShadow: appShadows.button,
                  overflow: "hidden",
                  zIndex: opacityCondition(index) ? 1 : -1,
                  opacity: opacityCondition(index) ? 1 : 0,
                  transform: `translateX(${
                    appParams.isLanguage === "hb" ? "" : "-"
                  }${(slideWidth + sliderColumnGap) * isCarousel}rem)`,
                })}
                onClick={() => appParams.setModal(getGalleryModalState(slide))}
              >
                <Container
                  className={css({
                    height: `${slideWidth}rem`,
                    overflow: "hidden",
                  })}
                >
                  <GridContainer
                    className={css({
                      background: palette.background_second,
                      position: "fixed",
                      width: "3.2rem",
                      height: "3.2rem",
                      top: "1rem",
                      left: "1rem",
                      zIndex: 2,
                      border: `solid 0.2rem ${palette.main_primary_dark}`,
                      borderRadius: "50%",
                    })}
                  >
                    <h4
                      className={css({
                        color: palette.main_primary_dark,
                        alignSelf: "center",
                        textAlign: "center",
                        fontSize: "2rem",
                      })}
                    >
                      {index + 1}
                    </h4>
                  </GridContainer>
                  <img
                    src={slide}
                    alt=""
                    className={css({
                      transition: "all 1s",
                      maxWidth: `${slideWidth}rem`,
                      ":hover": {
                        transform: "scale(1.1)",
                      },
                    })}
                  />
                </Container>
                <FlexColumnContainer>
                  <FlexCenterContainer>
                    <FlexRowContainer className={css({ gap: "2.4rem" })}>
                      <p>Deco units:</p>
                      <RateFilledStarLogo
                        height={40}
                        width={40}
                        fill={palette.main_primary_dark}
                      />
                      <p className={css({ fontSize: "4rem" })}>3</p>
                    </FlexRowContainer>
                  </FlexCenterContainer>
                </FlexColumnContainer>
              </GridContainer>
            );
          })}
          <button
            className={css({
              cursor: "pointer",
              width: "5.2rem",
              height: "5.2rem",
              border: `solid 0.2rem ${palette.main_primary_dark}`,
              borderRadius: "50%",
              zIndex: "2",
              position: "absolute",
              right: `-${sliderColumnGap}rem`,
              top: "50%",
            })}
            onClick={() =>
              rotate(
                "left",
                length,
                appParams.setMedia,
                isCarousel,
                setCarousel
              )
            }
          >
            <FlexCenterContainer
              className={css({
                transform: "rotate(-90deg)",
              })}
            >
              <ArrowDownLogo
                height={24}
                width={24}
                fill={palette.main_primary_dark}
              />
            </FlexCenterContainer>
          </button>
        </div>
      </GridContainer>
    </FlexCenterContainer>
  );
}
