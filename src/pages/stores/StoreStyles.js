import styled from "styled-components";

export const BackStoresSection = styled.div`
  max-width: 1400px;
  padding: 6vh 4vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  background: #fff;
  gap: 2rem;
`;

export const StoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  gap: 1rem;
`;

export const StoresMap = styled.div`
  width: 40vh;

  @media screen and (max-width: 1024px) {
    width: 80vw;
    height: 25rem;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }

  & iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const StoreDescription = styled.div`
  display: flex;
  width: 100%;
  height: 25rem;
  justify-content: center;
  margin: 0 auto;
  gap: 1rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: unset;
    align-items: center;
  }
`;

export const StoreImgContainer = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 40vh;

  & img {
    height: 100%;
  }

  @media screen and (max-width: 1024px) {
    width: 80vw;
    height: 25vh;
  }
`;

export const StoreInfoContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  text-align: center;
  padding: 20px 0;

  @media screen and (max-width: 1024px) {
    width: 80vw;
    gap: 10px;
  }
`;
