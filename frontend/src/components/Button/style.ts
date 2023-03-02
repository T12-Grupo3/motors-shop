import styled from "styled-components";
import { iStyledButton } from "../../interfaces/button.interface";

export const StyledButton = styled.button<iStyledButton>`
  height: 40px;
  width: 48%;

  border: 1.5px solid var(--color-grey-4);
  border-radius: 5px;

  background-color: var(--color-grey-10);

  color: var(--color-grey-0);
  font-size: 16px;
  font-weight: 600;

  :hover {
    background-color: var(--color-grey-1);
    color: var(--color-grey-10);
    border: 1.5px solid var(--color-grey-1);
  }
`;
