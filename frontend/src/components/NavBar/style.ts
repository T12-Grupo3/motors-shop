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
  z-index: 1;

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
  .imgProfile {
    height: 32px;
    width: 32px;
    left: 1146px;
    top: 568px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background-color: var(--color-brand-1);

    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 0px;
      color: var(--color-grey-10);
    }
  }
`;

export const StyledDropDown = styled.div`
  width: 100%;
  padding: 30px 0%;

  button {
    color: var(--color-grey-2);
    font-size: 16px;
    text-align: start;

    background-color: var(--color-grey-10);
    border: none;
  }

  .dropdown-content {
    display: none;
    position: absolute;

    margin-top: 20px;

    width: 15%;
    min-width: 160px;

    background-color: var(--color-grey-10);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    z-index: 1;
  }

  :hover .dropdown-content {
    display: block;
  }

  .dropdown-content > div {
    display: flex;
    flex-direction: column;
  }

  .dropdown-content button {
      padding: 16px;
  }
`;

export const StyledUser = styled.div`
  display: flex;
  align-items: center;
`;
