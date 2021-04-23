import { FC } from 'react';

import { Col } from 'antd';
import Overview from './Overview/Overview';
import Info from './Info/Info';

const ManageProfile: FC = () => {
  return (
    <>
      <Col span={15}>
        <Overview fullName="John Smith" email="john.smith@gmail.com" accountId="#899889" />
      </Col>
      <Col span={15}>
        <Info />
      </Col>
    </>
  );
};

export default ManageProfile;
