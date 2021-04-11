import { FC } from 'react';
import { Row, Col, Form, FormInstance } from 'antd';
import styled from '@emotion/styled';

import Layout from '@/components/layout/Layout';
import { Auth, LoginForm } from '@/components/Auth';

import cover from '@/assets/images/login-cover.png';

const Login: FC = () => {
  const [form] = Form.useForm();

  const onFinish = (data: unknown) => {
    console.log('data', data);
  };

  return (
    <Layout>
      <Container justify="center">
        <CoverImage span={10} />
        <Auth span={8} layout="vertical" onFinish={onFinish} form={form as FormInstance<unknown>}>
          <LoginForm />
        </Auth>
      </Container>
    </Layout>
  );
};

export const Container = styled(Row)`
  height: 100%;
  padding: 60px 0;
`;

export const CoverImage = styled(Col)`
  background-image: url('${cover}');
  background-size: cover;
`;

export default Login;
