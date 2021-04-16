import { FC } from 'react';

import { Row, Col } from 'antd';
import { Subtitle, Text, Link } from './Footer.style';

const ThirdColumn: FC = () => {
  return (
    <Row gutter={[12, 30]}>
      <Col span={24}>
        <Subtitle level={4}>Games</Subtitle>
      </Col>
      <Col span={24}>
        <Text>
          <Link href="#">See all games</Link>
        </Text>
      </Col>
      <Col span={24}>
        <Text>League of Legends</Text>
      </Col>
      <Col span={24}>
        <Text>World of Warcraft</Text>
      </Col>
      <Col span={24}>
        <Text>LoL: Wild Rift</Text>
      </Col>
      <Col span={24}>
        <Text>Path of Exile</Text>
      </Col>
      <Col span={24}>
        <Text>Rocket League</Text>
      </Col>
      <Col span={24}>
        <Text>Apex Legends</Text>
      </Col>
      <Col span={24}>
        <Text>Fortnite</Text>
      </Col>
      <Col span={24}>
        <Text>CS:GO</Text>
      </Col>
      <Col span={24}>
        <Text>PUBG</Text>
      </Col>
    </Row>
  );
};

export default ThirdColumn;
