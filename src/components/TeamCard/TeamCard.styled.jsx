import styled from 'styled-components';

export const TeamItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 30px;
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

export const PersonName = styled.h3`
  font-weight: 400;
  font-size: 20px;
  line-height: calc(27 / 20);

  text-align: center;

  margin-top: 16px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1;
  }
`;

export const PersonPosition = styled.p`
  font-size: 16px;
  line-height: calc(22 / 16);

  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: calc(25 / 18);
  }
`;

export const Wrapper = styled.div`
  position: relative;
  background: #040404;

  & svg {
    fill: white;
  }
`;

export const Thumb = styled.div`
  &:hover,
  &:focus {
    & img {
      opacity: 0.6;
      transform: scale(1.02);
      filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
    }

    & ul {
      opacity: 1;
    }
  }
`;
