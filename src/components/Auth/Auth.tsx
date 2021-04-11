import { FC } from 'react';
import { Form, FormInstance } from 'antd';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import { Container, RegisterButton } from './Auth.style';

export interface AuthProps {
  span: number;
  layout?: 'horizontal' | 'inline' | 'vertical' | undefined;
  onFinish: ((values: unknown) => void) | undefined;
  form: FormInstance<unknown>;
}

const Auth: FC<AuthProps> = ({ children, span, layout, form, onFinish }) => {
  return (
    <Container span={span}>
      <Header />
      <Form layout={layout} form={form} onFinish={onFinish}>
        {children}
        <Footer>
          <RegisterButton type="primary" htmlType="submit">
            Sign up
          </RegisterButton>
        </Footer>
      </Form>
    </Container>
  );
};

export default Auth;
