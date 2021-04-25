import { FC } from 'react';

import Filter from './Filter/Filter';
import NewOrdersTable from './NewOrdersTable/NewOrdersTable';

const CustomOrdersList: FC = () => {
  return (
    <>
      <Filter />
      <NewOrdersTable />
    </>
  );
};

export default CustomOrdersList;
