import styled from "styled-components";
import { iButtonRegister } from "../../interfaces/input.interface";
import { StyledContainer } from "../../style/container";

export const StyledRegisterContainer = styled(StyledContainer)`
  margin: 120px 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledRegisterDiv = styled.div`
  width: 33%;
  background: var(--color-grey-10);
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-weight: var(--body-2-500);
  }
`;

export const StyledFormContainer = styled.div`
  width: 70%;
`;

export const StyledFormError = styled.div`
  height: 103px;

  span {
    color: var(--color-alert-1);
    font-size: 14px;
  }
`;

export const StyledRegisterSharedField = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledSharedError = styled(StyledFormError)`
  width: 47%;
`;

export const StyledRegisterButtons = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 10px 0;
`;

export const StyledRegisterButton = styled.input<iButtonRegister>`
  width: 48%;
  height: 40px;

  border: 1.5px solid
    ${({ isAdm }) => (isAdm ? "var(--color-grey-4)" : "var(--color-brand-1)")};
  border-radius: 5px;

  background-color: ${({ isAdm }) =>
    isAdm ? "var(--color-grey-10)" : "var(--color-brand-1)"};

  color: ${({ isAdm }) =>
    isAdm ? "var(--color-grey-0)" : "var(--color-grey-10)"};
  font-size: 16px;
  font-weight: 600;

  :hover {
    background-color: ${({ isAdm }) =>
      isAdm ? "var(--color-brand-1)" : "var(--color-brand-2)"};
    color: var(--color-grey-10);
    border: 1.5px solid
      ${({ isAdm }) =>
        isAdm ? "var(--color-brand-1)" : "var(--color-brand-2)"};
  }
`;

export const StyleRegisterAdm = styled(StyledRegisterButton)<iButtonRegister>`
  background-color: ${({ isAdm }) =>
    isAdm ? "var(--color-brand-1)" : "var(--color-grey-10)"};

  color: ${({ isAdm }) =>
    isAdm ? "var(--color-grey-10)" : "var(--color-grey-0)"};

  border: 1.5px solid
    ${({ isAdm }) => (isAdm ? "var(--color-brand-1)" : "var(--color-grey-4)")};

  :hover {
    background-color: ${({ isAdm }) =>
      isAdm ? "var(--color-brand-2)" : "var(--color-brand-1)"};

    color: var(--color-grey-10);

    border: 1.5px solid
      ${({ isAdm }) =>
        isAdm ? "var(--color-brand-2)" : "var(--color-brand-1)"};
  }
`;

export const StyledRegisterConfirm = styled.div`
  margin-bottom: 40px;

  button {
    width: 100%;
    height: 48px;

    font-size: var(--button-big-text);
    font-weight: 600;

    border-radius: 5px;
    border: 1.5px solid var(--color-brand-1);

    background-color: var(--color-brand-1);

    color: var(--color-grey-10);
  }

  button:hover {
    border: 1.5px solid var(--color-brand-2);

    background-color: var(--color-brand-2);
  }
`;
