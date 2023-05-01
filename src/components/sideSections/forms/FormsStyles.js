import styled from "styled-components";

export const FormContainer = styled.form`
  width: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;

  & p {
    font-size: 12px;
  }

  & span {
    font-weight: 600;
    font-size: 12px;
    color: black;
    cursor: pointer;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 100%;

  & small {
    color: var(--red);
    font-size: 12px;
  }

  & label {
    color: ${(props) => props.err || "black"};
  }
`;
