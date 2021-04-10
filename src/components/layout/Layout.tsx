import { FC } from 'react';

import { Layout as AntLayout } from 'antd';
import { Footer } from 'components/UI';

const Layout: FC = ({ children }) => {
  return (
    <AntLayout>
      <AntLayout.Header style={{ height: '8vh' }}>Header</AntLayout.Header>
      <AntLayout.Content>{children}</AntLayout.Content>
      <Footer />
    </AntLayout>
  );
};

export default Layout;
