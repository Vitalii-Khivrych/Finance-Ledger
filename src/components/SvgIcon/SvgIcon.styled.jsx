import styled from 'styled-components';

export const Svg = styled.svg`
  &.icon-logo {
    width: 39.31px;
    height: 35px;

    margin-right: 8px;

    fill: currentColor;

    @media screen and (min-width: 768px) {
      margin-right: 9.69px;
    }
    @media screen and (min-width: 1360px) {
      margin-right: 4px;
    }
  }

  &.icon-arrow {
    width: 9px;
    height: 18px;

    margin-right: 8px;

    fill: currentColor;
  }
`;
