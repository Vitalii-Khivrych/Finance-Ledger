import styled from 'styled-components';

export const TeamList = styled.ul`
  @media screen and (min-width: 768px) {
    display: grid;
    max-width: calc(100vw - 64px);
    grid-template-columns: repeat(3, 1fr);
    gap: 17px;
  }

  @media screen and (min-width: 1360px) {
    max-width: calc(100vw - 56px);
    gap: 21px;
  }
`;
