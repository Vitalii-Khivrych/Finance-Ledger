import styled from 'styled-components';

export const ButtonInverseStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  line-height: calc(25 / 18);

  height: 54px;
  width: ${p => p.width || '175px'};

  color: white;
  background-color: inherit;

  border: 1px solid #ffffff;
  border-radius: 5px;

  transition-property: background-color;
  transition-duration: 0.25s;
  transition-timing-function: linear;

  &:hover,
  &:focus {
    background-color: white;
    border-color: transparent;
    color: ${p => (p.blue ? '#0284D0' : '#28A745')};
  }

  @media screen and (min-width: 768px) {
    height: 57px;
  }
`;
