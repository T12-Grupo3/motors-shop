import styled from "styled-components";
import { StyledContainer } from "../../style/container";

export const StyledContent = styled.div`
  background-color: var(--color-brand-2);
  color: var(--color-grey-10);

  height: 600px;

  display: flex;

  h2 {
    font-weight: var(--heading-1-700);
    font-family: "Lexend", sans-serif;
    font-size: 44px;
  }

  p {
    font-weight: var(--body-1-400);
    font-size: 16px;

    color: var(--color-grey-9);
  }
`;

export const StyledContentContainer = styled(StyledContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  text-align: center;

  width: 60%;
`;

export const StyledProductsContainer = styled(StyledContainer)`
  h5 {
    font-weight: var(--heading-5-600);
    font-size: 24px;
  }

  .containers-vehicules{
    display: flex;
    flex-direction: row;
    max-width: 2020px;
    overflow-x: auto;
    gap: 40px;
  }
`;

export const StyledAuction = styled.div`
  /* overflow-y: auto; */
  /* display: flex; */
`;
