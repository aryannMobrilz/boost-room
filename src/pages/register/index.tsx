import { FC } from 'react';

import { Container, CoverImage } from './index.style';

import { Auth } from 'components/UI';

import Layout from 'components/layout/Layout';

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
