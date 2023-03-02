import styled from "styled-components";

export const Button = styled.button`
  width: 260px;
  height: 48px;
  border: none;
  border-radius: 4px;
  font-family: "Inter";
  font-size: 16px;
  font-weight: var(--font-heading-2);
  background-color: transparent;
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  font-family: "Inter";


  height: 100%;
  width: 350px;

  .div-input-row{
    display: flex;
    flex-direction: row;
    gap: 30px;
    width: 450px;
  }

  .div-input-column{
    display: flex;
    flex-direction: column;
  }

  .bigger-input{
    width: 340px;
  }

  .smaller-input{
    width: 150px;
  }
`

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: "inter";

  p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }

  label{
    font-size: 16px;
    font-weight: 500;
    font-family: "Inter";

  }

  input {
    margin-top: 2px;
    margin-bottom: 17px;
    border: 1.5px solid #e9ecef;
    border-radius: 4px;
    height: 38px;
    padding: 5px;
    width: 350px;

    &:focus-visible {
        outline: 2px solid var(--color-brand-2);
        border-radius: 5px;
    }
  }

  .h3-anuncio {
    font-family: "inter";
    font-weight: var(--font-heading-3);
    line-height: 20px;
    color: var(--color-grey-1);
    padding-bottom: 30px;
  }

   Input::placeholder {
    font-size: 16px;
    font-weight: 400;
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
    font-family: "Inter";
    font-size: 16px;
    font-weight: var(--font-heading-2);
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
    border: 1.5px solid #4529e6;
    border-radius: 4px;
    background: var(--color-brand-1);
    font-family: "Inter";
    font-size: 16px;
    font-weight: var(--font-heading-2);
    color: var(--color-grey-whiteFixed);
    cursor: pointer;

    &:hover{
        background-color: var(--color-brand-4);
        color: var(--color-brand-1);
    }
  }


`;

