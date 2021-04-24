import { FC } from 'react';

import { Col, Typography, Divider } from 'antd';
import MoneySpent from './MoneySpent/MoneySpent';
import TransactionList from './TransactionList/TransactionList';

const Transactions: FC = () => {
  return (
    <>
      <Col span={15}>
        <Typography.Title level={2}>Transactions</Typography.Title>
      </Col>
      <Col span={15}>
        <MoneySpent amount={0} />
      </Col>
      <Col span={15}>
        <Divider />
      </Col>
      <Col span={15}>
        <TransactionList />
      </Col>
    </>
  );
};

export default Transactions;
