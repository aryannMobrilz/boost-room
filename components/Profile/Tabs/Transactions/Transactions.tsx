import { FC } from 'react';

import { Col } from 'antd';
import MoneySpent from './MoneySpent/MoneySpent';
import TransactionList from './TransactionList/TransactionList';
import { TabTitle, NewLine } from './Transactions.style';

const Transactions: FC = () => {
  return (
    <>
      <Col span={24}>
        <TabTitle>Transactions</TabTitle>
      </Col>
      <Col span={24}>
        <MoneySpent amount={0} />
      </Col>
      <Col span={24}>
        <NewLine />
      </Col>
      <Col span={24}>
        <TransactionList />
      </Col>
    </>
  );
};

export default Transactions;
