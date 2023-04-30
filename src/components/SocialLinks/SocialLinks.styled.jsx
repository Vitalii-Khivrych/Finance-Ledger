import styled, { css } from 'styled-components';

export const SocialLinksList = styled.ul`
  ${props => {
    switch (props.visible) {
      case true:
        return css`
          margin: 0 auto;

          & svg {
            transition-property: color;
            transition-duration: 0.25s;
            transition-timing-function: linear;

            &:hover,
            &:focus {
              color: #28a745;
            }
          }
        `;
      default:
        return css`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
        `;
    }
  }};

  display: flex;
  justify-content: center;
  align-items: center;

  height: 35px;
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
