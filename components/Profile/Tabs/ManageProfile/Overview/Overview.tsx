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
      <Col span={12}>
        <Row>
          <CoverContainer>
            <Cover src="/assets/images/auth-1.png" height={132} width={137} />
          </CoverContainer>
          <UserInfo>
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
      <Col push={1} span={11}>
        <Subtitle level={5}>Buying stats</Subtitle>
        <StatsRow>
          <Col span={6}>
            <StatTitle>Total completed orders</StatTitle>
            <StatContent color="sky-blue">{completed}</StatContent>
          </Col>
          <Col push={3} span={6}>
            <StatTitle>Money spent</StatTitle>
            <StatContent color="light-green">{spent}</StatContent>
          </Col>
          <Col push={6} span={6}>
            <StatTitle>Total canceled orders</StatTitle>
            <StatContent color="red">{canceled}</StatContent>
          </Col>
        </StatsRow>
      </Col>
    </Container>
  );
};

export default Overview;
