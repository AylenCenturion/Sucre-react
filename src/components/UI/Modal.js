export const SuccessModal = styled.div`
  padding: 12px;
  background-color: var(--brown);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  transform: translateY(200%);
  transition: all 0.4s ease-in;
  width: 100%;

  &.activeModal {
    transform: translateY(0);
    transition: all 0.4s ease-in;
  }
`;
