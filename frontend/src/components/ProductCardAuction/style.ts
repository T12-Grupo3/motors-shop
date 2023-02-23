import styled from "styled-components";

export const StyledAuctionContainer = styled.div`
  width: 47%;
`;

export const StyledDescription = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);

  color: var(--color-grey-10);

  padding: 10px;

  border-radius: 5px 5px 0 0;

  h2 {
    font-size: 20px;
    font-weight: var(--heading-6-600);
  }

  p {
    font-weight: var(--body-1-400);
    font-size: 16px;
    color: var(--color-grey-5);
  }
`;

export const StyledAuctionPage = styled.div`
  background-color: var(--color-brand-1);
  border-radius: 0 0 5px 5px;

  a {
    margin: 0 auto;
    width: 95%;

    display: flex;
    justify-content: space-between;
    color: var(--color-grey-whiteFixed);
  }
`;

export const StyledTags = styled.div`
  width: 95%;

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
    color: var(--color-grey-whiteFixed);
    font-weight: var(--heading-7-500);
  }
`;
