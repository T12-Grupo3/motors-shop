import styled from "styled-components";
import { StyledContainer } from "../../style/container";

export const StyledNavContainer = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 80px;

  `;

export const StyledDiv = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  
  width: 100%;
  
  background-color: var(--color-grey-10);
  border-bottom: 2px solid var(--color-grey-6);

  font-size: 16px;
  font-weight: var(--body-1-600);
  color: var(--color-grey-2);

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 100%;
    width: 40%;
  }
`;

export const StyledLoggout = styled.li`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 40%;
`;

export const StyledLogged = styled(StyledLoggout)`

  .imgProfile{
    height: 32px;
    width: 32px;
    left: 1146px;
    top: 568px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background-color: var(--color-brand-1);

    p{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 0px;
        color: var(--color-grey-10);
    }
    }
  button {
    color: var(--color-grey-2);
    font-size: 16px;

    background-color: var(--color-grey-10);
    border: none;
  }
`;
