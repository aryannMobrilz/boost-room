import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import { Profile } from '@/components/Profile';

const ProfilePage: FC = () => {
  // const [form] = Form.useForm();
  //
  // const onFinish = (data: unknown) => {
  //   console.log('data', data);
  // };

  return (
    <Layout>
      <Profile />
    </Layout>
  );
};

export default ProfilePage;
