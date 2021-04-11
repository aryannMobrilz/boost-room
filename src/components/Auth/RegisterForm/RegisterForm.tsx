import { FC } from 'react';
import Image from 'next/image';

import { Col, Row } from 'antd';

import { rules, IRules } from './rules';

import { FormItem, InputText, InputPassword, InputCheckbox } from '../Auth.style';

import userSVG from '@/assets/icons/form/user.svg';
import atSignSVG from '@/assets/icons/form/at-sign.svg';

const RegisterForm: FC = () => {
  const { firstName, lastName, username, email, password, confirmPassword }: IRules = rules;

  return (
    <>
      <Row gutter={20}>
        <Col span={12}>
          <FormItem name="first_name" label="First Name" rules={firstName}>
            <InputText suffix={<Image src={userSVG} height={14} width={14} />} />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem name="last_name" label="Last Name" rules={lastName}>
            <InputText suffix={<Image src={userSVG} height={14} width={14} />} />
          </FormItem>
        </Col>
      </Row>
      <FormItem name="username" label="User Name" rules={username}>
        <InputText suffix={<Image src={userSVG} height={14} width={14} />} />
      </FormItem>
      <FormItem name="email" label="Email address" rules={email}>
        <InputText suffix={<Image src={atSignSVG} height={14} width={14} />} />
      </FormItem>
      <FormItem name="password" label="Password" rules={password}>
        <InputPassword />
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
        <InputPassword />
      </FormItem>
      <FormItem name="send_latest" valuePropName="checked">
        <InputCheckbox name="send_latest">Send me the latest deals & offers</InputCheckbox>
      </FormItem>
    </>
  );
};

export default RegisterForm;
