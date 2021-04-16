import { FC } from 'react';

import { Col } from 'antd';
import { TopNavigation } from '../UI';
import Overview from './Overview/Overview';
import Info from './Info/Info';
import { Container } from './Profile.style';

import { buyerProfileMenu } from './schemas';

const Profile: FC = () => {
  return (
    <Container justify="center" gutter={[0, 30]}>
      <Col span={15}>
        <TopNavigation
          items={buyerProfileMenu}
          onChange={(current) => console.log('current', current)}
        />
      </Col>
      <Col span={15}>
        <Overview fullName="John Smith" email="john.smith@gmail.com" accountId="#899889" />
      </Col>
      <Col span={15}>
        <Info />
      </Col>
    </Container>
  );
};

export default Profile;
