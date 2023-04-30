import styled, { css } from 'styled-components';

export const Form = styled.form`
  position: relative;
`;

export const Input = styled.input`
  position: relative;
  width: 100%;
  height: 56px;

  padding: 0 0 0 8px;

  background: #ffffff;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  outline: none;

  @media screen and (min-width: 768px) {
    height: 57px;
  }

  & ~ label {
    pointer-events: none;
    transition-property: transform;
    transition-duration: 0.08s;
    transition-timing-function: linear;
  }

  &:focus,
  &:active {
    border-color: #28a745;

    & ~ label {
      transform: translateY(-38px);

      @media screen and (min-width: 1360px) {
        transform: translateY(-42px);
      }
    }
  }

  ${p => {
    if (p.empty === true) {
      return css`
        & ~ label {
          transform: translateY(-38px);

          @media screen and (min-width: 1360px) {
            transform: translateY(-42px);
          }
        }
      `;
    }
  }}
`;

export const Label = styled.label`
  position: absolute;
  z-index: 5;
  bottom: 16px;
  left: 0;

  font-size: 16px;
  line-height: calc(23 / 16);

  margin-left: 8px;

  color: #808080;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: calc(25 / 18);
  }
`;

export const Wrapper = styled.p`
  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }

  &:last-of-type {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1360px) {
    &:not(:last-of-type) {
      margin-bottom: 25px;
    }

    &:last-of-type {
      margin-bottom: 40px;
    }
  }
`;
