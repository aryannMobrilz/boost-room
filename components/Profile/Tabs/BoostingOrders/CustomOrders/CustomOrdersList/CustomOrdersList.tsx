import { FC } from 'react';

import Filter from './Filter/Filter';
import CustomOrdersTable from './CustomOrdersTable/CustomOrdersTable';

const CustomOrdersList: FC = () => {
  return (
    <>
      <Filter />
      <CustomOrdersTable />
    </>
  );
};

export default CustomOrdersList;
