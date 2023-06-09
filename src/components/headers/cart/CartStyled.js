import styled from "styled-components";

export const CartTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  & h4 {
    font-size: 22px;
    color: #fff;
  }
`;

export const ShoppingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  width: 100%;

  & p {
    color: #fff;
  }
`;

export const CartCount = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const DeliveryInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & p {
    font-size: ${({ user }) => (user ? "15px" : "13px")};
    color: ${({ user }) => (user ? "black" : "#fff")};
  }

  & h3 {
    font-size: 16px;
    font-weight: 600;
    color: ${({ user }) => (user ? "black" : "#fff")};
    text-decoration: none;
  }

  & span {
    font-size: 700;
    font-size: 16px;
    color: ${({ user }) => (user ? "black" : "#fff")};
  }
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ user }) => (user ? "black" : "#fff")};
`;

export const CartBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 80%;

  & p {
    font-size: 14px;
    color: #fff;
  }

  & span {
    color: #fff;
    font-weight: 700;
    font-size: 15px;
    cursor: pointer;
  }
`;
