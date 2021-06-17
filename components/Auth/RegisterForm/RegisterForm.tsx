import { FC } from 'react';

import Image from 'next/image';
import { Col, Row } from 'antd';

import { rules, IRules } from './rules';

import { FormItem, InputText, InputPassword, InputCheckbox, AdditionalInfo } from '../Auth.style';

const RegisterForm: FC = () => {
  const { firstName, lastName, username, email, password, confirmPassword }: IRules = rules;

  return (
    <>
      <Row gutter={20}>
        <Col span={12}>
          <FormItem name="first_name" label="First Name" rules={firstName}>
            <InputText
              placeholder="First Name"
              suffix={<Image src="/assets/icons/form/user.svg" height={14} width={14} />}
            />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem name="last_name" label="Last Name" rules={lastName}>
            <InputText
              placeholder="Last Name"
              suffix={<Image src="/assets/icons/form/user.svg" height={14} width={14} />}
            />
          </FormItem>
        </Col>
      </Row>
      <FormItem name="username" label="User Name" rules={username}>
        <InputText
          placeholder="User Name"
          suffix={<Image src="/assets/icons/form/user.svg" height={14} width={14} />}
        />
      </FormItem>
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
        last={1}
        name="confirm_password"
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
        <InputPassword placeholder="Confirm Password" />
      </FormItem>
      <AdditionalInfo name="send_latest" valuePropName="checked" initialValue>
        <InputCheckbox>Send me the latest deals & offers</InputCheckbox>
      </AdditionalInfo>
    </>
  );
};

export default RegisterForm;
