import { FC } from 'react';

import { Col } from 'antd';
import Overview from './Overview/Overview';
import Info from './Info/Info';
import Security from './Security/Security';
import Newsletter from './Newsletter/Newsletter';

const ManageProfile: FC = () => {
  return (
    <>
      <Col span={24}>
        <Overview
          fullName="John Smith"
          email="john.smith@gmail.com"
          accountId="#899889"
          completed={2}
          spent="$33.09"
          canceled={4}
        />
      </Col>
      <Col span={24}>
        <Info />
      </Col>
      <Col span={24}>
        <Security />
      </Col>
      <Col span={24}>
        <Newsletter />
      </Col>
    </>
  );
};

export default ManageProfile;
