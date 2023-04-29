import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  line-height: calc(25 / 18);

  height: 57px;
  width: ${p => p.width || '175px'};

  margin-right: auto;
  margin-left: ${p => p.ml || 'auto'};

  color: white;
  background-color: #28a745;

  border-radius: 5px;

  transition-property: background-color;
  transition-duration: 0.25s;
  transition-timing-function: linear;

  &:hover,
  &:focus {
    background-color: #2ebf4f;
  }
`;
