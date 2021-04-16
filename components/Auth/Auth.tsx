import { FC } from 'react';
import { Form, FormInstance } from 'antd';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import { Container, RegisterButton } from './Auth.style';

export interface AuthProps {
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

const Auth: FC<AuthProps> = ({ children, layout, xs, sm, md, lg, xl, xxl, form, onFinish }) => {
  return (
    <Container xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
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
