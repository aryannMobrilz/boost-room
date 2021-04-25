import { FC } from 'react';

import Filter from './Filter/Filter';
import ActiveRequestsTable from './ActiveRequestsTable/ActiveRequestsTable';

const ActiveRequestList: FC = () => {
  return (
    <>
      <Filter />
      <ActiveRequestsTable />
    </>
  );
};

export default ActiveRequestList;
