import { FC } from 'react';
import { getSession, signIn, SignInResponse } from 'next-auth/client';
import { parseErrors } from '@/utils/form';
import { useNotification } from '@/hooks';

import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
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
    try {
      const res: SignInResponse | undefined = await signIn('credentials', {
        redirect: false,
        ...formData
      });

      if (!res?.error) {
        notification('success', 'User logged in successfully!', 'User logged in successfully!');
      } else {
        notification('error', 'Unable to login', res.error);
      }
    } catch (err) {
      notification('error', 'Unable to login', parseErrors(err));
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

export const getServerSideProps: GetServerSideProps = async ({
  req
}: GetServerSidePropsContext) => {
  const session = await getSession({ req });

  if (session?.accessToken) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  return {
    props: {
      session
    }
  };
};

export default LoginPage;
