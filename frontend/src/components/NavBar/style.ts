import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;

  height: 80px;
  width: 95%;

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
  justify-content: space-between;

  width: 35%;
`;
