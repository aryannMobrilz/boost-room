import { FC } from 'react';
import { Form, FormInstance } from 'antd';

import Layout from '@/components/layout/Layout';
import { Auth, RegisterForm } from '@/components/Auth';

import { Container, CoverImage } from './index.style';

const Register: FC = () => {
  const [form] = Form.useForm();

  const onFinish = (data: unknown) => {
    console.log('data', data);
  };

  return (
    <Layout>
      <Container justify="center">
        <CoverImage span={10} />
        <Auth span={8} layout="vertical" onFinish={onFinish} form={form as FormInstance<unknown>}>
          <RegisterForm />
        </Auth>
      </Container>
    </Layout>
  );
};

export default Register;
