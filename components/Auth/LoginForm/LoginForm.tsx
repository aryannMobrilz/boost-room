import { FC } from 'react';

import Image from 'next/image';

import { rules, IRules } from './rules';

import { FormItem, InputText, InputPassword, InputCheckbox } from '../Auth.style';

const LoginForm: FC = () => {
  const { email, password }: IRules = rules;

  return (
    <>
      <FormItem name="email" label="Email address" rules={email}>
        <InputText suffix={<Image src="/assets/icons/form/at-sign.svg" height={14} width={14} />} />
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
