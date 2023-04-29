import styled from 'styled-components';

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 400;
  font-size: 28px;
  line-height: calc(38 / 28);

  color: #28a745;

  padding-left: 4px;
  margin-bottom: 16px;

  transition-property: transform, color;
  transition-duration: 0.25s;
  transition-timing-function: linear;

  &:hover,
  &:focus {
    color: #2ebf4f;
    transform: scale(1.01);
  }

  @media (min-width: 768px) {
    font-size: 35px;
    line-height: calc(48 / 35);

    padding-left: 0px;
    margin-bottom: 0px;
  }

  & span {
    color: #ffffff;
    margin-left: 8px;
    letter-spacing: 0.02em;

    @media (min-width: 768px) {
      margin-left: 6px;
    }

    @media (min-width: 1360px) {
      margin-left: 4px;
    }
  }
`;
