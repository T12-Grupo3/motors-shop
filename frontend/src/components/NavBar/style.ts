import styled from "styled-components";

export const StyledContainer = styled.div`
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 80px;
  width: 95%;
`;

export const StyledDiv = styled.div`
  position: fixed;
  width: 100%;

  background-color: var(--color-grey-10);

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
  button {
    color: var(--color-grey-2);
    font-size: 16px;

    background-color: var(--color-grey-10);
    border: none;
  }
`;
