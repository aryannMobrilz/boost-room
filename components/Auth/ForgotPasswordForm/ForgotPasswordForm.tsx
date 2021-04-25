import { FC } from 'react';

import Image from 'next/image';

import { rules, IRules } from './rules';

import { FormItem, InputText, InputPassword } from '../Auth.style';

const ForgotPasswordForm: FC = () => {
  const { email, password, confirmPassword }: IRules = rules;

  return (
    <>
      <FormItem name="email" label="Email address" rules={email}>
        <InputText
          placeholder="Email address"
          suffix={<Image src="/assets/icons/form/at-sign.svg" height={14} width={14} />}
        />
      </FormItem>
      <FormItem name="password" label="Password" rules={password}>
        <InputPassword placeholder="Password" />
      </FormItem>
      <FormItem
        name="confirmPassword"
        label="Confirm Password"
        rules={[
          ...confirmPassword,
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') == value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            }
          })
        ]}>
        <InputPassword placeholder="Forgot Password" />
      </FormItem>
    </>
  );
};

export default ForgotPasswordForm;
