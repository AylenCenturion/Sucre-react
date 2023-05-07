import styled from "styled-components";

export const CartCardStyled = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  border-radius: 7px;
  border: 1px solid var(--brown);
  padding: 8px;
  width: 100%;
`;

export const CartCardImg = styled.div`
  width: 120px;

  & img {
    width: 100%;
    height: 100%;
    border-radius: 7px;
  }
`;

export const CartProductData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: 100px;

  & p {
    font-size: 18px;
    font-weight: 600;
  }

  & span {
    font-size: 16px;
    font-weight: 500;
  }
`;

export const QuantityRegulator = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  & p {
    font-size: 700;
    font-size: 15px;
  }
`;

export const QuantityHandler = styled.button`
  width: 16px;
  height: 16px;
  font-size: 17px;
  font-weight: 500;
  border-radius: 5px;
  background-color: transparent;
  color: var(--brown);
  border: 1px solid var(--brown);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: var(--brown);
    color: #fff;
  }
`;
