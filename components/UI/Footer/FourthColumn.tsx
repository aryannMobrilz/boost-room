import { FC } from 'react';

import { Row, Col } from 'antd';
import { Subtitle, Text } from './Footer.style';

const FourthColumn: FC = () => {
  return (
    <Row gutter={[12, 30]}>
      <Col span={24}>
        <Subtitle level={4}>Info & help</Subtitle>
      </Col>
      <Col span={24}>
        <Text>What is Boosting?</Text>
      </Col>
      <Col span={24}>
        <Text>Why Boostroom?</Text>
      </Col>
      <Col span={24}>
        <Text>Guids & News</Text>
      </Col>
      <Col span={24}>
        <Text>FAQ</Text>
      </Col>
      <Col span={24}>
        <Text>Contact us</Text>
      </Col>
      <Col span={24}>
        <Text>Apply for job</Text>
      </Col>
      <Col span={24}>
        <Text>How to buy</Text>
      </Col>
      <Col span={24}>
        <Text>Terms of Service</Text>
      </Col>
      <Col span={24}>
        <Text>Privacy Policy</Text>
      </Col>
    </Row>
  );
};

export default FourthColumn;
