import {
  RelativeContainer,
  DecoContainer,
  Container,
  Button,
} from "components";
import { LanguageDropdownContainer } from "./Styled";
import { IInnerContent, ILanguages } from "interfaces";
import { palette, css } from "styles";

export function NavButtonsContainer({
  content,
  setFlag,
  languages,
  isLanguage,
  setLanguage,
  variant,
}: // isLangTransition,
{
  content: IInnerContent;
  setFlag(language: string): string | JSX.Element;
  languages: ILanguages;
  isLanguage: string;
  setLanguage(value: React.SetStateAction<string>): void;
  variant: string;
  // isLangTransition: boolean;
}) {
  return (
    <Container>
      <Container
        className={css({
          display: "flex",
          flexDirection: variant === "navigation" ? "row" : "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
        })}
      >
        <Button variant="primary">{content.makeSweet}</Button>
        <Button variant="secondary">{content.about}</Button>
        <Button variant="secondary">{content.contacts}</Button>
        <RelativeContainer>
          <LanguageDropdownContainer
            className={css({
              left: isLanguage === "hb" ? "-4rem" : 0,
              top: "-2rem",
              transform:
                variant !== "navigation"
                  ? `translate(${isLanguage !== "hb" ? 150 : -160}%, -11.2rem)`
                  : "",
            })}
          >
            <Button variant="language">{setFlag(isLanguage)}</Button>
            <Button
              variant="language"
              onClick={() => setLanguage("en")}
              className={css({
                display: `${isLanguage === "en" ? "none" : "flex"}`,
              })}
            >
              {setFlag(languages.en)}
            </Button>
            <Button
              variant="language"
              onClick={() => setLanguage("ru")}
              className={css({
                display: `${isLanguage === "ru" ? "none" : "flex"}`,
              })}
            >
              {setFlag(languages.ru)}
            </Button>
            <Button
              variant="language"
              onClick={() => setLanguage("hb")}
              className={css({
                display: `${isLanguage === "hb" ? "none" : "flex"}`,
              })}
            >
              {setFlag(languages.hb)}
            </Button>
          </LanguageDropdownContainer>
        </RelativeContainer>
      </Container>
    </Container>
  );
}

export function NavBurger({
  gap = 0.8,
  lineHight = 0.4,
  lineWidth = 2.8,
  circleRadius = 5.2,
  clickHandler,
}: {
  gap?: number;
  lineHight?: number;
  lineWidth?: number;
  circleRadius?: number;
  clickHandler?: () => void;
}) {
  return (
    <Container
      className={css({
        display: "grid",
      })}
      onClick={() => {
        typeof clickHandler !== "undefined" && clickHandler();
      }}
    >
      <RelativeContainer
        className={css({
          width: "12rem",
          alignSelf: "center",
          transition: "all 1s ease",
          "&:hover": {
            transform: "rotate(0.5turn)",
          },
        })}
      >
        <DecoContainer
          width={circleRadius}
          height={circleRadius}
          color={palette.background_main}
          style={{
            borderRadius: "50%",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            border: `solid 0.2rem ${palette.main_primary_dark}`,
            // boxShadow: appShadows.buttonActive,
          }}
        />
        <DecoContainer
          width={lineWidth}
          height={lineHight}
          color={palette.main_primary_dark}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: `translate(-50%, calc(-50% + ${gap}rem))`,
          }}
        />
        <DecoContainer
          width={lineWidth}
          height={lineHight}
          color={palette.main_primary_dark}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50% , -50%)",
          }}
        />
        <DecoContainer
          width={lineWidth}
          height={lineHight}
          color={palette.main_primary_dark}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: `translate(-50%, calc(-50% - ${gap}rem))`,
          }}
        />
      </RelativeContainer>
    </Container>
  );
}
