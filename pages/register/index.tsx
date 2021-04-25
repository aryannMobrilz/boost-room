import { FC } from 'react';
import { Row, Col, Form, FormInstance } from 'antd';
import styled from '@emotion/styled';

import Layout from '@/components/layout/Layout';
import { Auth, RegisterForm } from '@/components/Auth';

const RegisterPage: FC = () => {
  const [form] = Form.useForm();

  const onFinish = (data: unknown) => {
    console.log('data', data);
  };

  return (
    <Layout>
      <Container justify="center">
        <CoverImage xs={0} lg={9} xl={13} />
        <Auth
          layout="vertical"
          type="register"
          xs={22}
          sm={20}
          md={16}
          lg={8}
          xl={11}
          onFinish={onFinish}
          form={form as FormInstance<unknown>}>
          <RegisterForm />
        </Auth>
      </Container>
    </Layout>
  );
};

const Container = styled(Row)`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 0;
`;

const CoverImage = styled(Col)`
  background-image: url('/assets/images/auth-1.png');
  background-size: cover;
`;

export default RegisterPage;
