import styled from "styled-components";
import img from "../../../assets/img";

export const MiddleSectionImg = styled.div`
  background-image: url(${img.chocolat});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  max-width: 1400px;
  height: 20rem;
  margin: 0 auto;
`
export const MiddleSectionText = styled.div`
  padding: 10px 2rem;
  max-width: 1400px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  background: #fff;

  & span{
    font-weight: 700;
    padding: 20px 1rem;
    font-size: clamp(16px, 4vw, 18px);
  }

  & p{
    font-size: clamp(10px, 4vw, 13px);
    padding: 20px;
  }
`