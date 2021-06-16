import { FC } from 'react';
import authAPI from '@/api/auth';
import type { RegisterRequest } from '@/api/auth/types';

import { Form } from 'antd';
import Layout from '@/components/layout/Layout';
import { CommonContainer } from '@/components/layout/containers';
import { CoverImage } from '@/components/UI';
import { Auth, RegisterForm } from '@/components/Auth';

const RegisterPage: FC = () => {
  const [form] = Form.useForm<unknown>();

  const onFinish = (data: RegisterRequest) => {
    authAPI().register(data);
  };

  return (
    <Layout>
      <CommonContainer justify="center">
        <CoverImage src="/assets/images/auth-1.png" xs={0} lg={9} xl={13} />
        <Auth
          layout="vertical"
          type="register"
          xs={22}
          sm={20}
          md={16}
          lg={8}
          xl={11}
          form={form}
          onFinish={onFinish}>
          <RegisterForm />
        </Auth>
      </CommonContainer>
    </Layout>
  );
};

export default RegisterPage;
