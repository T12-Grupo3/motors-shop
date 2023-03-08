import styled from "styled-components";

export const Button = styled.button`
  width: 176px;
  height: 48px;
  border: none;
  border-radius: 4px;
  font-family: "Inter";
  font-size: 16px;
  background-color: var(--color-grey-6);
  color: var(--color-grey-2);
  font-weight: var(--font-heading-2);
  cursor: pointer;
`;

export const ContainerImageModal = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: "inter";

    img{
        width: 100%;
        height: 100%;
    }
  .div-header-modal{
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: flex-end;

    button{
      background-color: transparent;
      border: none;
      color: var(--color-grey-4);
      font-weight: 500;
      /* height: 33px; */
      font-size: 25px;
      margin-bottom: 10px;
    }
  }

  .h3-anuncio {
    font-family: "inter";
    font-weight: var(--font-heading-3);
    line-height: 20px;
    color: var(--color-grey-1);
    padding-bottom: 30px;
  }

  .paragraph-question{
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }

  .paragraph-text {
    color: var(--color-grey-2);
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }

  .div-btn-cancela-submit {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 50px;
    gap: 20px;
  }

  .btn-cancelar {
    width: 126px;
    height: 48px;
    border: 1.5px solid #dee2e6;
    border-radius: 4px;
    background: var(--color-grey-6);
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 0px;
    color: var(--color-grey-2);
    cursor: pointer;

    &:hover{
        background-color: var(--color-grey-1);
        color: var(--color-grey-10);
    }
  }

  .btn-submit {
    width: 193px;
    height: 48px;
    border: none;
    border-radius: 4px;
    background: var(--color-alert-2);
    font-weight: var(--font-heading-2);
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 0px;
    color: var(--color-alert-1);
    cursor: pointer;

    &:hover{
        background-color: var(--color-alert-1);
        color: var(--color-grey-whiteFixed);
    }
  }


`;

