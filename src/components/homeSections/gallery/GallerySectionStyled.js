import styled from "styled-components";

export const GallerySectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GalleryTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px;
  max-width: 1400px;
  background-color: var(--brown);
  color: #fff;
`;
export const GalleryImgContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 0 auto;
  padding: 4rem 2rem;
  max-width: 1000px;

  @media screen and (max-width: 600px) {
    padding: 1rem 0.5rem;
  }
`;

export const GalleryColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 30%;

  &.down-column {
    margin-top: 12%;
  }

  @media screen and (max-width: 600px) {
    width: 45%;

    &.last-column {
      display: none;
    }
  }
`;
export const GalleryItem = styled.img`
  width: 100%;
  height: auto;
  min-width: 120px;

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-in;
  }
`;
