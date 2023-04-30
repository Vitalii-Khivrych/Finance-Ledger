import React, { useEffect, useState } from 'react';

import { Button, WarningMessage } from 'components';
import { Form, Input, Label, Wrapper } from './ContactForm.styled';
import { useLocalStorage } from 'hooks/useLocalStorage';

export const ContactForm = () => {
  const [notEmptyName, setNotEmptyName] = useState(false);
  const [notEmptyEmail, setNotEmptyEmail] = useState(false);
  const [isError, setIsError] = useState(false);

  const [name, setName] = useLocalStorage('name', '');
  const [email, setEmail] = useLocalStorage('email', '');

  useEffect(() => {
    name ? setNotEmptyName(true) : setNotEmptyName(false);
    email ? setNotEmptyEmail(true) : setNotEmptyEmail(false);
  }, [email, name]);

  const onSubmit = e => {
    if (email.trim() === '') {
      return setIsError(true);
    }
    setIsError(false);

    e.preventDefault();
  };

  return (
    <Form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={onSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <Wrapper>
        <Input
          type="text"
          id="name"
          name="name"
          empty={notEmptyName}
          value={name}
          onChange={evt => setName(evt.target.value)}
        />
        <Label htmlFor="name">Enter your name </Label>
      </Wrapper>
      <Wrapper>
        <Input
          type="email"
          id="email"
          name="email"
          empty={notEmptyEmail}
          value={email}
          onChange={evt => setEmail(evt.target.value)}
        />
        <Label htmlFor="email">Enter email*</Label>
      </Wrapper>
      {isError && <WarningMessage />}

      <Button width="155px" ml="0px" type="submit">
        Send
      </Button>
    </Form>
  );
};
