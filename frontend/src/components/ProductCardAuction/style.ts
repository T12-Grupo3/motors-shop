import styled from "styled-components";

export const StyledAuctionContainer = styled.div`
  width: 95%;
  height: 100%;
`;

export const StyledDescription = styled.div<any>`
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.10) 0%, #000000 100%), url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: var(--color-grey-4);
  
  height: 60%;
  padding: 25px;
  border-radius: 5px 5px 0 0;
  color: var(--color-grey-10);
  border-radius: 5px 5px 0 0;
  
  span {
    background-color: var(--color-brand-4);
    color: var(--color-brand-1);
    font-size: 14px;

    border-radius: 5px;

    padding: 5px;
    margin-right: 10px;
  }

  h2 {
    font-size: 20px;
    font-weight: var(--heading-6-600);
  }
  
  p {
    font-weight: var(--body-1-400);
    font-size: 16px;
    color: var(--color-grey-5);

    height: 40px;
    max-height: 40px;
  }
`;
export const StyledAuctionPage = styled.div`
  background-color: var(--color-brand-1);
  border-radius: 0 0 5px 5px;
  display: flex;
  align-items: center;
  height: 62px;
  
  a {
    margin: 0 auto;
    width: 95%;
    display: flex;
    justify-content: space-between;
    color: var(--color-grey-whiteFixed);
  }
`
export const StyledAuctionPageAdm = styled.div`
  background-color: var(--color-brand-1);
  border-radius: 0 0 5px 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
  padding-left: 30px;
  height: 62px;

  button{
    background-color: transparent;
    color: var(--color-grey-whiteFixed);
    border: 2px solid var(--color-grey-whiteFixed);

    &:hover{
      background-color: var(--color-grey-whiteFixed);
      color: var(--color-brand-1);
    }
  }

  a {
    margin: 0 auto;
    width: 95%;
    display: flex;
    color: var(--color-grey-whiteFixed);
    border: 2px solid var(--color-grey-whiteFixed);
    border-radius: 5px;
    padding: 10px;
    width: 73px;
    height: 18px;

    &:hover{
      background-color: var(--color-grey-whiteFixed);
      color: var(--color-brand-1);
    }
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