import styled from "styled-components";

export const ContactSection = styled.section`
  max-width: 850px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const ContactText = styled.p`
  color: var(--darkerGrey);
  font-size: clamp (15px, 4vw, 20px);
  text-align: center;
  padding: 5px;
`;

export const ContactForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  & input {
    width: 30%;
    min-width: 150px;

    @media screen and (max-width: 700px) {
      width: 100%;
    }
  }
`;

export const MessageBox = styled.div`
  width: 100%;
  height: 10vh;
`;

export const ContactBtnContainer = styled.div`
  width: 30%;
  min-width: 200px;
`;
