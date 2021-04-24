import { FC } from 'react';

import Filter from './Filter/Filter';
import TransactionsTable from './TransactionsTable/TransactionsTable';

const TransactionList: FC = () => {
  return (
    <>
      <Filter />
      <TransactionsTable />
    </>
  );
};

export default TransactionList;
