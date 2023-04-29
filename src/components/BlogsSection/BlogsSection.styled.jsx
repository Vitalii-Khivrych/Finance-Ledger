import styled from 'styled-components';

export const BlogSectionStyled = styled.section`
  color: white;
  background: #0284d0;

  @media screen and (min-width: 1360px) {
    max-height: 460px;
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    height: 100%;
  }
`;

export const BlogImage = styled.picture`
  display: flex;
  min-height: 220px;

  & img {
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    min-width: 368px;
  }

  @media screen and (min-width: 1360px) {
    object-fit: cover;
    max-width: 50%;
    max-height: 460px;
  }
`;

export const BlogContainer = styled.div`
  max-width: 690px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }
  @media screen and (min-width: 1360px) {
    margin-left: 0;
    padding-left: 28px;
    padding-right: 20px;
  }
`;

export const TextWrapper = styled.div`
  padding-top: 48px;
  padding-bottom: 58px;

  @media screen and (min-width: 768px) {
    padding: 59px 0;
  }
  @media screen and (min-width: 1360px) {
    padding: 80px 0;
  }
`;
