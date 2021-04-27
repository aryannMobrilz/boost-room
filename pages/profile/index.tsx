import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import { ProfileContainer } from '@/components/containers';
import { Profile } from '@/components/Profile';

const ProfilePage: FC = () => {
  return (
    <Layout>
      <ProfileContainer justify="center" gutter={[0, 30]}>
        <Profile />
      </ProfileContainer>
    </Layout>
  );
};

export default ProfilePage;
