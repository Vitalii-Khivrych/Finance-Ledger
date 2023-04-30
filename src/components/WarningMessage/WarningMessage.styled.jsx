import styled from 'styled-components';

export const TextWarning = styled.div`
  position: absolute;
  bottom: 60px;
  left: 0;

  display: flex;
  align-items: flex-end;

  font-size: 14px;
  line-height: calc(22 / 16);

  color: #eb5757;

  & svg {
    width: 16px;
    height: 16px;

    margin-right: 4px;
  }

  /* &.is-hidden {
    opacity: 0;
    visibility: hidden;
  } */
`;
