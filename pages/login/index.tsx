import { FC } from 'react';
import { STATUS_CODES } from 'http';
import authAPI from '@/api/auth';
import { parseErrors } from '@/utils/form';
import { useNotification } from '@/hooks';

import type { LoginRequest } from '@/api/auth/types';

import { Form, FormInstance } from 'antd';
import Layout from '@/components/layout/Layout';
import { CommonContainer } from '@/components/layout/containers';
import { CoverImage } from '@/components/UI';
import { Auth, LoginForm } from '@/components/Auth';

const LoginPage: FC = () => {
  const [form] = Form.useForm();
  const notification = useNotification();

  const onFinish = async (formData: LoginRequest) => {
    console.log('data', formData);
    try {
      const { statusText } = await authAPI().login(formData);

      if (statusText == STATUS_CODES[200]) {
        notification('success', 'User logged in successfully!', 'User logged in successfully!');
      }
    } catch (err) {
      notification('error', 'Unable to register', parseErrors(err));
    }
  };

  return (
    <Layout>
      <CommonContainer justify="center">
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
      </CommonContainer>
    </Layout>
  );
};

export default LoginPage;
