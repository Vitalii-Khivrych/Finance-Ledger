import styled from 'styled-components';

export const GalleryList = styled.ul`
  @media screen and (min-width: 768px) {
    display: grid;
    max-width: calc(100vw - 64px);
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  @media screen and (min-width: 1360px) {
    max-width: calc(100vw - 56px);
    gap: 20px;
  }
`;

export const GalleryItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }

  &:hover,
  &:focus {
    opacity: 0.7;
  }

  @media screen and (min-width: 768px) {
    &:not(:last-of-type) {
      margin-bottom: 0px;
    }
  }

  & img {
    object-fit: cover;
    width: 100%;
  }
`;
