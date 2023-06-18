import styled from "@emotion/styled/macro";

const buttonTypes: any = {
  primary: {},
  secondary: {},
};

const Button = styled.button(
  {
    padding: "1rem 2rem",
    border: "0.2rem white solid",
    lineHeight: "1",
    borderRadius: "0.4rem",
  },
  ({ type = "secondary" }) => buttonTypes[type]
);

export { Button };
