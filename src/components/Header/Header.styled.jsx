import styled from 'styled-components';

export const HeaderStyled = styled.header`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%);

  background-color: transparent;
  color: white;

  width: 100%;
  height: 120px;

  padding-top: 22px;
  padding-bottom: 22px;

  &.fixed {
    position: fixed;
    background-color: #333333;
    opacity: 0.8;
  }

  @media screen and (min-width: 768px) {
    height: 70px;

    padding-top: 16px;
    padding-bottom: 6px;
  }
`;
