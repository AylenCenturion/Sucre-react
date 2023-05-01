import styled from "styled-components";

export const CartCardStyled = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #fff;
  border-radius: 7px;
  padding: 8px;
  width: 100%;
`;

export const CartCardImg = styled.div`
  height: 50px;
  width: 50px;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export const CartProductData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 100px;

  & p {
    font-size: 15px;
    color: #fff;
    font-weight: 600;
  }

  & span {
    font-size: 15px;
    color: #fff;
    font-weight: 400;
  }
`;

export const QuantityRegulator = styled.div`
  display: flex;
  gap: 7px;

  & p {
    font-size: 700;
    font-size: 15px;
    color: #fff;
  }
`;

export const QuantityHandler = styled.button`
  width: 16px;
  height: 16px;
  font-size: 17px;
  font-weight: 500;
  color: ${(props) => props.c || "var(--brown)"};
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: transparent;
    color: #fff;
  }
`;
