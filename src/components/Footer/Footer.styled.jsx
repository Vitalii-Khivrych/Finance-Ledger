import styled from 'styled-components';

export const FooterStyled = styled.footer`
  padding: 20px 0;
  margin: 0 auto;

  color: #ffffff;
  background: #333333;
`;

export const FooterText = styled.p`
  font-size: 16px;
  line-height: calc(22 / 16);

  text-align: center;

  margin-top: 12px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: calc(25 / 18);
  }
`;
