import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button, WarningMessage } from 'components';
import { Form, Input, Label, Wrapper } from './ContactForm.styled';
import { useLocalStorage } from 'hooks/useLocalStorage';

const schema = yup
  .object()
  .shape({
    name: yup.string(),
    email: yup.string().required(),
  })
  .required();

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [notEmptyName, setNotEmptyName] = useState(false);
  const [notEmptyEmail, setNotEmptyEmail] = useState(false);

  const [name, setName] = useLocalStorage('name', '');
  const [email, setEmail] = useLocalStorage('email', '');

  useEffect(() => {
    name ? setNotEmptyName(true) : setNotEmptyName(false);
    email ? setNotEmptyEmail(true) : setNotEmptyEmail(false);
  }, [email, name]);

  const onSubmit = d => {
    console.log(d);

    resetField('name');
    resetField('email');

    setName('');
    setEmail('');
  };

  // const handleSubmit = event => {
  //   event.preventDefault();

  //   const myForm = event.target;
  //   const formData = new FormData(myForm);

  //   console.log('formData', formData.get('code'));

  //   fetch('/', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     body: new URLSearchParams(formData).toString(),
  //   })
  //     .then(() => alert('/thank-you/'))
  //     .catch(error => alert(error));
  // };

  return (
    <Form
      name="contact"
      method="post"
      data-netlify="true"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input type="hidden" name="form-name" value="contact" />

      <Wrapper>
        <Input
          type="text"
          id="name"
          name="name"
          {...register('name')}
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
          {...register('email')}
          empty={notEmptyEmail}
          value={email}
          onChange={evt => setEmail(evt.target.value)}
        />
        <Label htmlFor="email">Enter email*</Label>
      </Wrapper>
      {errors.email && <WarningMessage />}

      <Button width="155px" ml="0px" type="submit">
        Send
      </Button>
    </Form>
  );
};
