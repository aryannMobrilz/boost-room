import { FC } from 'react';

import { Col } from 'antd';
import { Container, Title, Subtitle } from './MoneySpent.style';

export interface MoneySpentProps {
  amount: number;
}

const MoneySpent: FC<MoneySpentProps> = ({ amount }) => {
  return (
    <Container>
      <Col span={24}>
        <Title>User for Purchased</Title>
      </Col>
      <Col span={22} push={1}>
        <Subtitle>${amount}</Subtitle>
      </Col>
    </Container>
  );
};

export default MoneySpent;
