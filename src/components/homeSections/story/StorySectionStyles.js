import styled from "styled-components";

export const StorySectionStyled = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 15px #ddd;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`
export const StoryText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 500px;
  gap: 40px;
  padding: 20px;
  text-align: justify;
  line-height: 25px;
  
  @media screen and ( max-width: 900px){
    line-height: 20px;
}
`

export const StoryImg = styled.div`
  display: flex;
  max-width: 500px;
  padding: 5px;

  & img{
    background-position: center;
    background-size: cover;
    width: 100%;
    border-radius: 5px;
  }
`