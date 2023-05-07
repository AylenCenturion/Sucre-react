import styled from "styled-components";

export const ProductsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  margin: 0 auto;
  padding: 3rem 2rem;
  position: relative;
  max-width: 1300px;
`;

export const RecomendedSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 40px;
  gap: 10px;
  width: 90%;
`;

export const CategoriesContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  gap: 20px;
  flex-wrap: wrap;
`;

export const ProductsDisplay = styled.div`
  display: flex;
  gap: 10px;
  width: 90%;
  align-items: center;
  flex-wrap: wrap;
`;

export const ProductsContainerStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

export const ProductCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  flex: 1 1 220px;
  align-items: center;
  padding: 10px 0px;

  & img {
    max-width: 190px;
    width: 80%;
  }
`;

export const ProductData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 50%;
  gap: 9px;
  max-width: 190px;
  width: 80%;

  & span {
    font-weight: 500;
    height: 25px;
  }
`;
