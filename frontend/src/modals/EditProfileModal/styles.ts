import styled from "styled-components";

export const Container = styled.div`
  height: 530px;
  overflow-y: scroll;

  .div-header-modal {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .p-info-profile {
    font-family: "Inter";
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    padding-bottom: 16px;
  }

  .btn-x {
    border-style: none;
    color: var(--color-grey-4);
  }

  .div-info-profile {
    display: flex;
    flex-direction: column;
  }

  input {
    margin-top: 2px;
    margin-bottom: 17px;
    border: 1.5px solid #e9ecef;
    border-radius: 4px;
    height: 38px;
  }

  label {
    font-family: "Inter";
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: var(--color-grey-1);
  }

  .div-cancel-submit {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 28px;
    gap: 20px;
  }

  .btn-cancel {
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

export const Button = styled.button`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: var(--color-grey-2);
  border-style: none;
`;
