import { FC } from 'react';
import Link from 'next/link';

import Image from 'next/image';

import { rules, IRules } from './rules';

import {
  FormItem,
  InputText,
  InputPassword,
  InputCheckbox,
  AdditionalInfo,
  ForgotPassword
} from '../Auth.style';

const LoginForm: FC = () => {
  const { email, password }: IRules = rules;

  return (
    <>
      <FormItem name="email" label="Email address" rules={email}>
        <InputText suffix={<Image src="/assets/icons/form/at-sign.svg" height={14} width={14} />} />
      </FormItem>
      <FormItem lastChild name="password" label="Password" rules={password}>
        <InputPassword />
      </FormItem>
      <AdditionalInfo name="remember" valuePropName="checked" initialValue="true">
        <InputCheckbox>Remember me</InputCheckbox>
        <Link href="/forgot-password">
          <ForgotPassword>Forgot your password?</ForgotPassword>
        </Link>
      </AdditionalInfo>
    </>
  );
};

export default LoginForm;
