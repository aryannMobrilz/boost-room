import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import { CommonContainer } from '@/components/layout/containers';
import TermsOfService from '@/components/TermsOfService/TermsOfService';

const TermsOfServicePage: FC = () => {
  return (
    <Layout>
      <CommonContainer justify="center">
        <TermsOfService />
      </CommonContainer>
    </Layout>
  );
};

export default TermsOfServicePage;
