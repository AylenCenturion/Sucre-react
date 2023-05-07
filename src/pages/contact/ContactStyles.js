import styled from "styled-components";

export const ContactSection = styled.section`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  @media screen and (max-width: 750px) {
    width: unset;
    /* max-width: 600px; */
  }
`;

export const ContactText = styled.p`
  color: black;
  font-size: clamp (15px, 4vw, 20px);
  text-align: center;
  padding: 5px;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  gap: 1rem;
`;

export const InputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  & div {
    width: 32%;
    min-width: 150px;

    @media screen and (max-width: 750px) {
      width: 100%;
    }
  }
`;

export const MessageBox = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  & small {
    color: var(--red);
    font-size: 12px;
  }
`;

export const ContactBtnContainer = styled.div`
  width: 30%;
  min-width: 200px;
`;
