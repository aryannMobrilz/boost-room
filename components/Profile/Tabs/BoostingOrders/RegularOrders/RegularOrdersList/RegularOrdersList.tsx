import { FC } from 'react';

import Filter from './Filter/Filter';
import RegularOrdersTable from './RegularOrdersTable/RegularOrdersTable';

const RegularOrdersList: FC = () => {
  return (
    <>
      <Filter />
      <RegularOrdersTable />
    </>
  );
};

export default RegularOrdersList;
