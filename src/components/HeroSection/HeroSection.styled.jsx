import styled from 'styled-components';

export const HeroSectionStyled = styled.section`
  position: relative;

  height: 533px;
  padding-top: 160px;
  padding-bottom: 104px;

  color: white;

  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.4)
  );

  @media screen and (min-width: 768px) {
    height: 1024px;
    padding-top: 378px;
    padding-bottom: 378px;
  }
  @media screen and (min-width: 1360px) {
    height: 768px;
    padding-top: 272px;
    padding-bottom: 270px;
  }
`;

export const BackgroundImage = styled.picture`
  position: absolute;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  z-index: -1;

  & img {
    object-fit: cover;

    height: 100%;
    width: 100%;
  }
`;

export const HiddenTitle = styled.h1`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;

export const HeroTitle = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: calc(54 / 40);
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 55px;
    line-height: calc(75 / 55);
  }
`;

export const HeroText = styled.p`
  font-size: 26px;
  line-height: calc(32 / 26);

  text-align: center;

  margin-top: 16px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: calc(48 / 40);
  }
  @media screen and (min-width: 1360px) {
    line-height: calc(54 / 40);
  }
`;
