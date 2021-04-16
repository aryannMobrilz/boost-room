import { FC } from 'react';
import { Row, Col, Form, FormInstance } from 'antd';
import styled from '@emotion/styled';

import Layout from '@/components/layout/Layout';
import { Auth, ForgotPasswordForm } from '@/components/Auth';

const ForgotPasswordPage: FC = () => {
  const [form] = Form.useForm();

  const onFinish = (data: unknown) => {
    console.log('data', data);
  };

  return (
    <Layout>
      <Container justify="center">
        <CoverImage xs={0} lg={9} xl={9} />
        <Auth
          layout="vertical"
          xs={22}
          sm={20}
          md={16}
          lg={8}
          xl={7}
          xxl={6}
          onFinish={onFinish}
          form={form as FormInstance<unknown>}>
          <ForgotPasswordForm />
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
  background-image: url('/assets/images/auth-2.png');
  background-size: cover;
`;

export default ForgotPasswordPage;
