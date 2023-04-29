import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const NavItem = styled.li`
  font-size: 16px;
  line-height: calc(22px / 16px);

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
