import styled from "styled-components";
import { iStyledButton } from "../../interfaces/button.interface";

export const StyledButton = styled.button<iStyledButton>`
  height: 40px;
  width: 48%;

  border: 1.5px solid
    ${({ border }) =>
      border ? `var(--color-${border})` : "var(--color-grey-4)"};
  border-radius: 5px;

  background-color: ${({ background_color }) =>
    background_color
      ? `var(--color-${background_color})`
      : "var(--color-grey-10)"};

  color: ${({ color }) =>
    color ? `var(--color-${color})` : "var(--color-grey-0)"};

  font-size: 16px;
  font-weight: 600;

  :hover {
    background-color: ${({ hover_background_color }) =>
      hover_background_color
        ? `var(--color-${hover_background_color})`
        : "var(--color-grey-1)"};

    color: ${({ hover_color }) =>
      hover_color ? `var(--color-${hover_color})` : "var(--color-grey-10)"};

    border: 1.5px solid
      ${({ hover_border }) =>
        hover_border ? `var(--color-${hover_border})` : "var(--color-grey-1)"};
    border-radius: 5px;
  }
`;
