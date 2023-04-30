import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const NavItem = styled.li`
  position: relative;
  font-size: 16px;
  line-height: calc(22 / 16);

  &:not(:last-of-type) {
    margin-right: 12px;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: calc(25 / 18);

    &:not(:last-of-type) {
      margin-right: 20px;
    }
  }
  @media screen and (min-width: 1360px) {
    &:not(:last-of-type) {
      margin-right: 40px;
    }
  }
`;

export const Link = styled.a`
  &:hover,
  &:focus {
    &::after {
      content: '';

      position: absolute;
      left: -6px;
      bottom: -10px;

      width: 125%;
      height: 2px;

      border-radius: 2px;
      background-color: #28a745;
    }
  }
`;
