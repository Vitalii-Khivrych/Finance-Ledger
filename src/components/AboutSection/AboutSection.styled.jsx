import styled from 'styled-components';

export const AboutSectionStyled = styled.section`
  color: white;
  background: #28a745;

  /* @media screen and (min-width: 768px) {
    position: relative;
  } */
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    height: 100%;
  }
`;

export const AboutImage = styled.picture`
  display: flex;
  min-height: 220px;

  & img {
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    min-width: 368px;
  }

  @media screen and (min-width: 1360px) {
    min-width: 670px;
  }
`;

export const TextWrapper = styled.div`
  padding: 79px 0;

  @media screen and (min-width: 768px) {
    padding: 62px 0;
  }
  @media screen and (min-width: 1360px) {
    padding-top: 80px;
    padding-bottom: 86px;
  }
`;
