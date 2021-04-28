import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import { CommonContainer } from '@/components/layout/containers';
import PrivacyPolicy from '@/components/PrivacyPolicy/PrivacyPolicy';

const PrivacyPolicyPage: FC = () => {
  return (
    <Layout>
      <CommonContainer justify="center">
        <PrivacyPolicy />
      </CommonContainer>
    </Layout>
  );
};

export default PrivacyPolicyPage;
