import styled from "styled-components";

export const Container = styled.div`
  /* height: 530px; */
  overflow-y: scroll;
  padding: 15px;

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
    background-color: transparent;
  }

  .div-info-profile {
    display: flex;
    flex-direction: column;
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

export const StyledProfileInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  input {
    height: 40px;
    border: 1.5px solid var(--color-grey-3);
    border-radius: 5px;
    margin: 8px 0;
    padding: 5px;
  }
`;
