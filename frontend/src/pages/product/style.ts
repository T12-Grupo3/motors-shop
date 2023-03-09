import styled from "styled-components";

export const ContainerBlue = styled.div`
  background-color: var(--color-brand-2);
  color: var(--color-grey-10);

  height: 600px;

  display: flex;
`;
export const ContainerProduct = styled.div`
  color: var(--color-grey-9);
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -490px;

  .dashMain {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .dashLeft {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 100%;
  }

  .dashRigth {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 100%;
  }

  .imgCar {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 28px 44px;
    gap: 8px;
    width: 75%;
    height: 255px;
    left: 181px;
    top: 120px;

    background: var(--color-grey-10);
    border-radius: 4px;
    margin-bottom: 40px;
  }

  img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 335px;
    height: 200.96px;
  }

  .descriptionAdverts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    width: 75%;
    height: 239px;
    padding: 8px 44px;
    gap: 8px;
    margin-bottom: 40px;

    border-radius: 4px;
    background: var(--color-grey-10);
  }

  .caracteristc {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    width: 75%;
    height: auto;

    left: 182px;
    top: 491px;
  }

  .descriptionCar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    width: 75%;
    height: 213px;
    padding: 6px 44px;
    left: 182px;
    top: 770px;
    gap: 32px;
    margin-bottom: 40px;
    flex-wrap: wrap;

    background: var(--color-grey-10);
    border-radius: 4px;
  }

  .spanDescription {
    width: 100px;
    height: 25px;

    font-family: "Lexend";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: var(--color-grey-1);

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  .pDescription {
    width: 100%;
    height: 84px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;

    color: var(--color-grey-2);

    flex: none;
    order: 1;
    flex-grow: 0;
  }

  .caracteristcCar {
    width: 90%;
    height: 20%;

    font-family: "Lexend";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;

    color: var(--color-grey-1);

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  .ano {
    width: 34px;
    height: 24px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    color: var(--color-brand-1);
    margin-right: 20px;
  }

  .km {
    width: 35px;
    height: 24px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    color: var(--color-brand-1);
  }

  .preco {
    width: 105px;
    height: 25.91px;
    left: 553px;
    top: 94.58px;

    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

    color: var(--color-grey-1);
  }

  .button-buy-post {
    margin: 0px 25px 25px 0px;
  }

  .button-buy {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100px;
    height: 38px;

    background-color: var(--color-brand-1);
    color: var(--color-grey-9);

    border: 1.5px solid var(--color-brand-1);
    border-radius: 4px;

    &:hover {
      background-color: var(--color-brand-3);
      border: 1.5px solid var(--color-brand-3);
    }
  }

  .comments {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 26px 44px;
    gap: 24px;

    width: 75%;
    height: auto;

    margin-bottom: 40px;

    background: var(--color-grey-10);
    border-radius: 4px;
  }

  .ulComments {
    list-style-type: none;
    width: 100%;
    height: auto;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    width: 100%;
    height: auto;

    list-style-type: none;
    background: var(--color-grey-10);
    border-radius: 4px;
    color: var(--color-grey-0);
  }

  .liComents {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: 45px;

    color: var(--color-grey-0);

    span {
      margin-right: 10px;
    }
  }

  .divComents {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    align-items: center;
    gap: 14px;
    color: var(--color-grey-0);
  }

  .nikeClient {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;

    width: 32px;
    height: 32px;

    background: var(--color-random-9);
    border-radius: 150px;
    color: #fdfdfd;

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  .liName {
    width: auto;
    height: 24px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    color: var(--color-grey-1);
  }

  .liOld {
    width: auto;
    height: 24px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    color: var(--color-grey-4);
  }

  .formComments {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 36px 44px;

    width: 75%;
    height: auto;
    margin-bottom: 50px;

    background: var(--color-grey-10);
    border-radius: 4px;
  }

  .inputForm {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    width: 100%;
    height: 128px;
    left: 44px;
    top: 83px;

    border: 1.5px solid var(--color-grey-7);
    border-radius: 4px;
  }

  .inputRegister {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 90%;
    border: none;
    background-color: var(--color-grey-10);

    &:focus-visible {
      outline: none;
      border-radius: 5px;
    }
  }

  .cardGalery {
    display: flex;
    flex-direction: column;

    width: 70%;
    height: 365px;

    border-radius: 4px;
    background-color: var(--color-grey-10);
    color: var(--color-grey-1);
  }

  .paragraphFoto {
    width: 55px;
    height: 25px;
    margin: 25px 0px 0px 40px;

    font-family: "Lexend";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;

    color: var(--color-grey-1);
  }

  .galeryImg {
    grid-template-columns: 100px 50px 100px;
    grid-template-rows: 80px auto 80px;
    column-gap: 10px;
    row-gap: 15px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    overflow: overlay;
  }

  .imgGalery {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 135px;
    height: 108px;

    background: var(--color-grey-7);
    border-radius: 4px;
  }

  .imgGlr {
    width: 94.22px;
    height: 54.05px;
  }

  .cardProfile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 477px;
    left: 979px;
    top: 120px;
    margin-top: 55px;

    background: var(--color-grey-10);
    border-radius: 4px;
  }

  .cardNikeProfile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 104px;
    height: 104px;

    background: var(--color-grey-10);
  }

  .nikePerfilClient {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 104px;
    height: 104px;

    background: var(--color-brand-1);
    border-radius: 50%;
    color: var(--color-grey-10);
    font-size: 36px;
  }

  .pProfile {
    width: auto;
    height: 25px;
    left: 155px;
    top: 169px;

    font-family: "Lexend";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;

    color: var(--color-grey-1);
  }
  .textProfile {
    width: 352px;
    height: auto;
    left: 44px;
    top: 226px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;

    text-align: center;
    margin-bottom: 30px;

    color: var(--color-grey-2);
  }

  .buttonProfile {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 28px;
    gap: 10px;

    width: 206px;
    height: 48px;
    left: 118px;
    top: 342px;

    color: var(--color-grey-10);
    background-color: var(--color-grey-0);

    border: 1.5px solid var(--color-grey-0);
    border-radius: 4px;

    &:hover {
      background-color: var(--color-grey-3);
      border: 1.5px solid var(--color-grey-3);
    }
  }
`;
export const StyledOfflineButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 38px;

  background-color: var(--color-grey-5);
  color: var(--color-grey-whiteFixed);

  border: 1.5px solid var(--color-grey-5);
  border-radius: 4px;
`;
