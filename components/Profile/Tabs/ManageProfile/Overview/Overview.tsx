import { FC } from 'react';

import { Col, Row } from 'antd';
import { MoreMenu } from '@/components/UI';
import {
  Container,
  CoverContainer,
  Cover,
  UserInfo,
  StatsRow,
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
  completed: number;
  spent: string;
  canceled: number;
}

const Overview: FC<OverviewProps> = ({
  fullName,
  email,
  accountId,
  completed,
  spent,
  canceled
}) => {
  return (
    <Container>
      <Col xs={{ span: 24 }} lg={{ span: 12 }}>
        <Row>
          <CoverContainer>
            <Cover src="/assets/images/auth-1.png" height={132} width={137} />
          </CoverContainer>
          <UserInfo md={{ span: 12, push: 1 }}>
            <Title level={2}>{fullName}</Title>
            <Subtitle level={5}>
              Email Address: <Info>{email}</Info>
            </Subtitle>
            <Subtitle level={5}>
              Account ID: <Info>{accountId}</Info>
            </Subtitle>
            <MoreMenu
              items={[
                { label: 'Change profile picture', onClick: () => null },
                { label: 'Delete your account', onClick: () => null }
              ]}
            />
          </UserInfo>
        </Row>
      </Col>
      <Col xs={{ span: 24 }} lg={{ span: 11, push: 1 }}>
        <Subtitle level={5}>Buying stats</Subtitle>
        <StatsRow>
          <Col xs={{ span: 24 }} sm={{ span: 6 }} md={{ span: 4 }} lg={{ span: 7 }}>
            <StatTitle>Total completed orders</StatTitle>
            <StatContent color="sky-blue">{completed}</StatContent>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 6, push: 2 }}
            md={{ span: 4, push: 3 }}
            lg={{ span: 8, push: 2 }}>
            <StatTitle>Money spent</StatTitle>
            <StatContent color="light-green">{spent}</StatContent>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 6, push: 5 }}
            md={{ span: 4, push: 6 }}
            lg={{ span: 6, push: 3 }}>
            <StatTitle>Total canceled orders</StatTitle>
            <StatContent color="red">{canceled}</StatContent>
          </Col>
        </StatsRow>
      </Col>
    </Container>
  );
};

export default Overview;
