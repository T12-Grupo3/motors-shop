import styled from "styled-components";

export const StyledInputDiv = styled.div`
  display: flex;

  flex-direction: column;

  margin-bottom: 10px;

  label {
    margin: 8px 0;
  }

  input {
    border: 1.5px solid #e9ecef;
    border-radius: 4px;
    padding: 10px;
  }

  input:focus-visible {
    outline: 2px solid var(--color-brand-2);
    border-radius: 5px;
  }
`;
