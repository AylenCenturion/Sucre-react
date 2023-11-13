import styled from "styled-components";

export const StorySectionStyled = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 15px #ddd;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 10px;
`;
export const StoryText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 500px;
  gap: 40px;
  padding: 10px;
  text-align: justify;
  line-height: 25px;
  font-size: clamp(11px, 4vw, 16px);

  @media screen and (max-width: 900px) {
    line-height: clamp(13px, 4vw, 20px);
    gap: 20px;
  }
`;

export const StoryImg = styled.div`
  display: flex;
  max-width: 500px;
  padding: 10px;

  & img {
    background-position: center;
    background-size: cover;
    width: 100%;
    border-radius: 5px;
  }
`;
