import styled from "styled-components";

export const StyledProductCard = styled.div`
  width: 20%;
  height: 350px;

`;

export const StyledProductImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 290px;

  background-color: var(--color-grey-7);

  padding: 5px;

  img {
    width: 80%;
    height: 150px ;
  }
`;

export const StyledProductDescription = styled.div`
  height: 200px;
  
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

  .div-names{
    display: flex;
    align-items: center;
    width: 250px;
  }
  .imgProfile{
    height: 28px;
    width: 27px;
    margin-right: 15px;


    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background-color: var(--color-brand-1);

    p{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 53px;
      color: var(--color-grey-10);
    }
  }
`;

export const StyledProductCaracteristcs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 500px;

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

export const StyledProductCardButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
`;
