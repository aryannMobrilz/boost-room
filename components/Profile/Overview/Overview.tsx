import { FC } from 'react';

import { Col, Row, Button } from 'antd';
import {
  Container,
  Cover,
  UserInfo,
  Title,
  Subtitle,
  Info,
  StatTitle,
  StatContent
} from './Overview.style';

export interface OverviewProps {
  fullName: string;
  email: string;
  accountId: string;
}

const Overview: FC<OverviewProps> = ({ fullName, email, accountId }) => {
  return (
    <Container>
      <Col span={15}>
        <Row>
          <Col>
            <Cover src="/assets/images/auth-1.png" height={132} width={137} />
          </Col>
          <UserInfo>
            <Title level={2}>{fullName}</Title>
            <Subtitle level={5}>
              Email Address: <Info>{email}</Info>
            </Subtitle>
            <Subtitle level={5}>
              Account ID: <Info>{accountId}</Info>
            </Subtitle>
            <Button>...</Button>
          </UserInfo>
        </Row>
      </Col>
      <Col span={9}>
        <Subtitle level={5}>Buying stats</Subtitle>
        <Row>
          <Col flex={1}>
            <StatTitle>Total completed orders</StatTitle>
            <StatContent>25</StatContent>
          </Col>
          <Col flex={1}>
            <StatTitle>Money spent</StatTitle>
            <StatContent>$25</StatContent>
          </Col>
          <Col flex={1}>
            <StatTitle>Total canceled orders</StatTitle>
            <StatContent>2</StatContent>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default Overview;
