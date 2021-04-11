import { FC } from 'react';

import Layout from 'components/layout/Layout';
import { Auth } from 'components/UI';

import { Container, CoverImage } from './index.style';

const Register: FC = () => {
  return (
    <Layout>
      <Container justify="center">
        <CoverImage span={10} />
        <Auth span={8} />
      </Container>
    </Layout>
  );
};

export default Register;
