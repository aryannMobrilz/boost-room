import { FC } from 'react';

import Filter from './Filter/Filter';
import AcceptedOrdersTable from './AcceptedOrdersTable/AcceptedOrdersTable';

const AcceptedOrdersList: FC = () => {
  return (
    <>
      <Filter />
      <AcceptedOrdersTable />
    </>
  );
};

export default AcceptedOrdersList;
