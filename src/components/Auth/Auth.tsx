import { FC } from 'react';
import Image from 'next/image';

import { Row, Col, Form, Button, Divider, Typography } from 'antd';
import {
  Container,
  LargeText,
  SmallText,
  Link,
  FormItem,
  InputField,
  PasswordField,
  CheckboxField,
  RegisterButton,
  LoginButton,
  SocialButton,
  Rights
} from './Auth.style';

import userSVG from '@/assets/icons/form/user.svg';
import atSignSVG from '@/assets/icons/form/at-sign.svg';
import googleSVG from '@/assets/icons/socials/google.svg';
import facebookSVG from '@/assets/icons/socials/facebook.svg';

export interface AuthProps {
  span: number;
}

const Auth: FC<AuthProps> = ({ span }) => {
  const [form] = Form.useForm();
  const onSubmit = () => {};

  return (
    <Container span={span}>
      <Typography.Title level={5}>Boostroom</Typography.Title>
      <Typography.Title level={4}>Create Your Account</Typography.Title>
      <LargeText>
        Enter your information and become member of our ultimate gaming experience
      </LargeText>
      <Form layout="vertical" form={form}>
        <Row gutter={20}>
          <Col span={12}>
            <FormItem label="First Name">
              <InputField suffix={<Image src={userSVG} height={14} width={14} />} />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="Last Name">
              <InputField suffix={<Image src={userSVG} height={14} width={14} />} />
            </FormItem>
          </Col>
        </Row>
        <FormItem label="User Name">
          <InputField suffix={<Image src={userSVG} height={14} width={14} />} />
        </FormItem>
        <FormItem label="Email address">
          <InputField suffix={<Image src={atSignSVG} height={14} width={14} />} />
        </FormItem>
        <FormItem label="Password">
          <PasswordField />
        </FormItem>
        <FormItem label="Confirm Password">
          <PasswordField />
        </FormItem>
        <CheckboxField value="A">Send me the latest deals & offers</CheckboxField>
      </Form>
      <SmallText>
        By Signing up you agree you&apos;ve read and accept our
        <Link href="#">Terms & Conditions</Link> and <Link href="#">Privacy Policy</Link>
      </SmallText>
      <RegisterButton type="primary">Sign up</RegisterButton>
      <LoginButton>Already have an account?</LoginButton>
      <Divider plain>OR</Divider>
      <SocialButton icon={<Image src={googleSVG} width={20} height={20} />}>
        Continue with Google
      </SocialButton>
      <SocialButton icon={<Image src={facebookSVG} width={20} height={20} />}>
        Continue with Facebook
      </SocialButton>
      <Rights>&copy; 2020 Boostroom. All rights reserved.</Rights>
    </Container>
  );
};

export default Auth;
