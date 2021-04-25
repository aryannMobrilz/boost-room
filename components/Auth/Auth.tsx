import { FC } from 'react';
import { Form, FormInstance } from 'antd';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import { Container, AuthButton } from './Auth.style';

export interface AuthProps {
  type: string;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  layout?: 'horizontal' | 'inline' | 'vertical' | undefined;
  onFinish: ((values: unknown) => void) | undefined;
  form: FormInstance<unknown>;
}

const Auth: FC<AuthProps> = ({
  children,
  layout,
  type,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  form,
  onFinish
}) => {
  return (
    <Container xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
      <Header type={type} />
      <Form layout={layout} form={form} onFinish={onFinish}>
        {children}
        <Footer type={type}>
          <AuthButton type="primary" htmlType="submit">
            {type == 'register' ? 'Sign up' : type == 'login' ? 'Log in' : 'Reset password'}
          </AuthButton>
        </Footer>
      </Form>
    </Container>
  );
};

export default Auth;
