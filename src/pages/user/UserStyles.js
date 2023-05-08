import styled from "styled-components";

export const UserSectionContainer = styled.div`
  width: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;

  & p {
    font-size: 19px;
    text-align: center;
    line-height: 30px;
  }

  & span {
    font-weight: 500;
    cursor: pointer;
  }

  & h4 {
    font-size: 20px;
  }
`;

export const LogOutBtn = styled.h4`
  font-weight: 500;
  cursor: pointer;
  font-size: 16px;
  margin-top: 40px;
`;

export const UserPurchaseData = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
