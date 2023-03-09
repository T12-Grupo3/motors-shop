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

  .div-buutons{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 350px;
  } 
  
`;


export const ButtonContent = styled.button`
  background-color: transparent;
  color: var(--color-grey-10);
  width: 150px;
  height: 50px;
  border: 2px solid var(--color-grey-10);
  border-radius: 5px;
  padding: 5px;
  justify-content: space-around;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 0px;
`

export const StyledProductsContainer = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 1565px;
  
  h5 {
    font-weight: var(--heading-5-600);
    font-size: 24px;
  }

  .containers-vehicules {
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

export const StyledHomeButtons = styled.div`
  width: 40%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
