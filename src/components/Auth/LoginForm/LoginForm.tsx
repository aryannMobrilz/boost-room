import { FC, useEffect } from 'react';
import Image from 'next/image';

import testAPI from '@/api/test/index';

import { rules, IRules } from './rules';

import { FormItem, InputText, InputPassword, InputCheckbox } from '../Auth.style';

import atSignSVG from '@/assets/icons/form/at-sign.svg';
import { response } from 'express';

const LoginForm: FC = () => {
  const { email, password }: IRules = rules;

  useEffect(() => {
    testAPI()
      .getPosts(1)
      .then((res) => console.log('Response', res));
  }, []);

  return (
    <>
      <FormItem name="email" label="Email address" rules={email}>
        <InputText suffix={<Image src={atSignSVG} height={14} width={14} />} />
      </FormItem>
      <FormItem name="password" label="Password" rules={password}>
        <InputPassword />
      </FormItem>
      <FormItem name="remember" valuePropName="checked" initialValue="true">
        <InputCheckbox>Remember me</InputCheckbox>
      </FormItem>
    </>
  );
};

export default LoginForm;
