import { FC } from 'react';

import { Col } from 'antd';
import { Container, Title, Subtitle } from './MoneySpent.style';

export interface MoneySpentProps {
  amount: number;
}

const MoneySpent: FC<MoneySpentProps> = ({ amount }) => {
  return (
    <Container>
      <Col>
        <Title>User for Purchased</Title>
        <Subtitle>${amount}</Subtitle>
      </Col>
    </Container>
  );
};

export default MoneySpent;
