import styled from "styled-components";

export const StyledProductCard = styled.div`
  width: 25%;
`;

export const StyledProductImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-grey-7);

  padding: 5px;

  img {
    width: 80%;
  }
`;

export const StyledProductDescription = styled.div`
  h2 {
    font-size: 16px;
    font-weight: var(--heading-7-600);
  }

  p {
    color: var(--color-grey-2);
    font-weight: var(--body-2-400);
    font-size: 14px;
  }
`;

export const StyledProductUser = styled.div`
  width: 55%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: var(--color-grey-2);
    font-size: 14px;
    font-weight: var(--body-2-500);
  }
`;

export const StyledProductCaracteristcs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    background-color: var(--color-brand-4);
    color: var(--color-brand-1);
    font-size: 14px;

    border-radius: 5px;

    padding: 5px;
    margin-right: 10px;
  }

  p {
    color: var(--color-grey-1);
    font-size: 16px;
    font-weight: var(--heading-7-500);
  }
`;
