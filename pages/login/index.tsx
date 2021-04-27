import { FC } from 'react';

import { Form, FormInstance } from 'antd';
import Layout from '@/components/layout/Layout';
import { AuthContainer } from '@/components/containers';
import { CoverImage } from '@/components/UI';
import { Auth, LoginForm } from '@/components/Auth';

const LoginPage: FC = () => {
  const [form] = Form.useForm();

  const onFinish = (data: unknown) => {
    console.log('data', data);
  };

  return (
    <Layout>
      <AuthContainer justify="center">
        <CoverImage src="/assets/images/auth-2.png" xs={0} lg={9} xl={14} />
        <Auth
          layout="vertical"
          type="login"
          xs={22}
          sm={20}
          md={16}
          lg={8}
          xl={10}
          onFinish={onFinish}
          form={form as FormInstance<unknown>}>
          <LoginForm />
        </Auth>
      </AuthContainer>
    </Layout>
  );
};

export default LoginPage;
