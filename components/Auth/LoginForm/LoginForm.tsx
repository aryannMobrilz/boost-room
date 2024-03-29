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
      <FormItem name="username" label="Email address" rules={email}>
        <InputText
          placeholder="Email address"
          suffix={<Image src="/assets/icons/form/at-sign.svg" height={14} width={14} />}
        />
      </FormItem>
      <FormItem last={1} name="password" label="Password" rules={password}>
        <InputPassword placeholder="Password" />
      </FormItem>
      <AdditionalInfo>
        <InputCheckbox name="remember" defaultChecked>
          Remember me
        </InputCheckbox>
        <Link href="/forgot-password">
          <ForgotPassword>Forgot your password?</ForgotPassword>
        </Link>
      </AdditionalInfo>
    </>
  );
};

export default LoginForm;
