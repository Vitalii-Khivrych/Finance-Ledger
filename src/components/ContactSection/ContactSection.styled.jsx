import styled from 'styled-components';

export const ContactSectionStyled = styled.section`
  color: #333333;
  background: #f4f4f4;

  @media screen and (min-width: 768px) {
    padding-bottom: 40px;
  }

  @media screen and (min-width: 1360px) {
    padding-bottom: 0;
    max-height: 460px;
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    height: 100%;
  }
`;

export const ContactImage = styled.picture`
  display: flex;
  min-height: 220px;

  & img {
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    min-width: 368px;
  }

  @media screen and (min-width: 1360px) {
    object-fit: cover;

    max-height: 454px;
  }
`;

export const FormContainer = styled.div`
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
    max-width: 690px;
  }
  @media screen and (min-width: 1360px) {
    margin-left: 0;
    padding-left: 20px;
    padding-right: 28px;
  }
`;

export const FormWrapper = styled.div`
  padding-top: 51px;
  padding-bottom: 25px;

  @media screen and (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 33px;

    min-width: 336px;
  }
  @media screen and (min-width: 1360px) {
    padding-top: 56px;
    padding-bottom: 77px;
  }
`;
