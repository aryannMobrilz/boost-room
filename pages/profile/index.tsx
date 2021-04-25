import { FC } from 'react';
import styled from '@emotion/styled';

import { Row } from 'antd';
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
      <Container justify="center" gutter={[0, 30]}>
        <Profile />
      </Container>
    </Layout>
  );
};

export const Container = styled(Row)`
  height: 100%;
  padding: 60px 0;
`;

export default ProfilePage;
