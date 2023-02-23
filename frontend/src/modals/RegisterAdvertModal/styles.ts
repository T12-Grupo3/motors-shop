import styled from "styled-components";

export const Button = styled.button`
  width: 160px;
  height: 48px;
  border: 1.5px solid #4529e6;
  border-radius: 4px;
  font-family: "Inter";
  font-size: 16px;
  font-weight: var(--font-heading-2);
  color: var(--color-brand-1);
  cursor: pointer;
`;

export const Container = styled.div`
  height: 530px;
  overflow-y: scroll;

  .h3-anuncio {
    font-family: "inter";
    font-weight: var(--font-heading-3);
    font-size: 16px;
    line-height: 20px;
    color: var(--color-grey-1);
    padding-bottom: 30px;
  }

  .p-tipo-anuncio {
    font-family: "Inter";
    font-weight: var(--font-heading-3);
    font-size: 14px;
    line-height: 24px;
    color: #000000;
  }

  .div-btn-tipo-anuncio,
  .div-btn-tipo-veiculo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 2px;
    gap: 10px;
  }

  .btn-tipo-anuncio,
  .btn-tipo-veiculo {
    border: 1.5px solid #4529e6;
    border-radius: 4px;
    width: 228px;
    height: 48px;
    font-size: var(--font-button-medium-text);
    font-family: "Inter";
    color: var(--color-grey-0);
    cursor: pointer;
  }

  .p-info-veiculo {
    font-family: "Inter";
    font-weight: var(--font-heading-3);
    font-size: 14px;
    line-height: 24px;
    padding-bottom: 20px;
    color: #000000;
  }

  .p-titulo-anuncio {
    font-family: "Inter";
    font-weight: var(--font-heading-3);
    font-size: 14px;
    line-height: 17px;
    color: var(--color-grey-1);
  }

  .input-titulo {
    width: 200px;
  }

  Input::placeholder {
    font-size: 16px;
    font-weight: 400;
  }

  .div-info-input-aqp {
    display: flex;
    flex-direction: row;
    padding: 12px 2px;
    gap: 10px;
  }

  .div-info-p-aqp {
    display: flex;
    padding-top: 14px;
    margin-bottom: -12px;
    font-family: "Inter";
    font-weight: var(--font-heading-3);
    font-size: 14px;
    line-height: 17px;
    color: var(--color-grey-1);
  }

  .p-quilometragem {
    padding-left: 119px;
  }

  .p-preço {
    padding-left: 57px;
  }

  .p-descricao-anuncio {
    font-family: "Inter";
    font-weight: var(--font-heading-3);
    font-size: 14px;
    line-height: 17px;
    padding-top: 8px;
    color: var(--color-grey-1);
  }

  .input-descricao {
    width: 200px;
  }

  .p-tipo-veiculo {
    font-family: "Inter";
    font-weight: var(--font-heading-3);
    font-size: 14px;
    line-height: 24px;
    padding-top: 40px;
    color: #000000;
  }

  .p-img-capa,
  .p-img-galeria {
    font-family: "Inter";
    font-weight: var(--font-heading-3);
    font-size: 14px;
    line-height: 17px;
    color: var(--color-grey-1);
    padding-top: 8px;
  }

  .p-img-galeria {
    padding-top: 20px;
  }

  .add-campo-img {
    font-family: "Inter";
    font-weight: var(--font-heading-2);
    color: var(--color-brand-1);
    font-size: 14px;
    cursor: pointer;
    padding-top: 25px;
    padding-bottom: 25px;
  }

  .div-btn-cancela-submit {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 28px;
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
  }
`;
