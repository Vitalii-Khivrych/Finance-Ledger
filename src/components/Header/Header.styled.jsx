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

  @media screen and (min-width: 768px) {
    height: 70px;

    padding-top: 16px;
    padding-bottom: 6px;
  }
`;
