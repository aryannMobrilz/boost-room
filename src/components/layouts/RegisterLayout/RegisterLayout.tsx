import { FC } from 'react';

import { Layout } from 'antd';
import { Footer } from 'components/UI';

const RegisterLayout: FC = ({ children }) => {
  return (
    <Layout>
      <Layout.Header>Header</Layout.Header>
      <Layout.Content>{children}</Layout.Content>
      <Footer />
    </Layout>
  );
};

export default RegisterLayout;
