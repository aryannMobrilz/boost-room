import { FC } from 'react';

import { Form, FormInstance } from 'antd';
import Layout from '@/components/layout/Layout';
import { AuthContainer } from '@/components/containers';
import { CoverImage } from '@/components/UI';
import { Auth, ForgotPasswordForm } from '@/components/Auth';

const ForgotPasswordPage: FC = () => {
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
          type="forgot-password"
          xs={22}
          sm={20}
          md={16}
          lg={8}
          xl={10}
          onFinish={onFinish}
          form={form as FormInstance<unknown>}>
          <ForgotPasswordForm />
        </Auth>
      </AuthContainer>
    </Layout>
  );
};

export default ForgotPasswordPage;
