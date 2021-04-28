import { FC } from 'react';

import { Form, FormInstance } from 'antd';
import Layout from '@/components/layout/Layout';
import { CommonContainer } from '@/components/layout/containers';
import { CoverImage } from '@/components/UI';
import { Auth, RegisterForm } from '@/components/Auth';

const RegisterPage: FC = () => {
  const [form] = Form.useForm();

  const onFinish = (data: unknown) => {
    console.log('data', data);
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
          onFinish={onFinish}
          form={form as FormInstance<unknown>}>
          <RegisterForm />
        </Auth>
      </CommonContainer>
    </Layout>
  );
};

export default RegisterPage;
