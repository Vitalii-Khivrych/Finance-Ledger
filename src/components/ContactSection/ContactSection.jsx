import React from 'react';

import { ContactForm, ContactTitle } from 'components';
import {
  ContactSectionStyled,
  Wrapper,
  ContactImage,
  FormContainer,
  FormWrapper,
} from './ContactSection.styled';

import contactImage from 'images/home/contact.jpg';
import contactImageWebp from 'images/home/contact.webp';
import contactImageRetina from 'images/home/contact@2x.jpg';
import contactImageWebpRetina from 'images/home/contact@2x.webp';

export const ContactSection = () => {
  return (
    <ContactSectionStyled id="contact">
      <Wrapper>
        <ContactImage>
          <source
            srcSet={`${contactImageWebp} 1x,
              ${contactImageWebpRetina} 2x`}
            type="image/webp"
          />
          <source
            srcSet={`${contactImage} 1x,
              ${contactImageRetina} 2x`}
            type="image/jpeg"
          />
          <img src={contactImage} alt="man calling" loading="lazy" />
        </ContactImage>

        <FormContainer>
          <FormWrapper>
            <ContactTitle center>Request Callback</ContactTitle>
            <ContactForm />
          </FormWrapper>
        </FormContainer>
      </Wrapper>
    </ContactSectionStyled>
  );
};
