import styled from 'styled-components';

export const LogoLink = styled.a`
  display: flex;
  align-items: center;

  font-weight: 400;
  font-size: 28px;
  line-height: 38px;

  color: #28a745;

  transition-property: transform, color;
  transition-duration: 0.25s;
  transition-timing-function: linear;

  &:hover,
  &:focus {
    color: red;
    transform: scale(1.01);
  }
`;

export const Span = styled.span`
  font-size: 28px;
  line-height: 38px;

  color: #ffffff;
`;
