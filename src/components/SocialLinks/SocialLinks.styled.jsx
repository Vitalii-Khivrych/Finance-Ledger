import styled from 'styled-components';

export const SocialLinksList = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialLinksItem = styled.li`
  &:not(:last-of-type) {
    margin-right: 25px;
  }

  & svg {
    width: 35px;
    height: 35px;
  }

  &:hover,
  &:focus {
    opacity: 0.8;
  }
`;

export const SocialLink = styled.a`
  display: block;
`;
