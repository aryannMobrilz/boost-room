import { FC } from 'react';

import Filter from './Filter/Filter';
import SubmittedOffersTable from './SubmittedOffersTable/SubmittedOffersTable';

const SubmittedOffersList: FC = () => {
  return (
    <>
      <Filter />
      <SubmittedOffersTable />
    </>
  );
};

export default SubmittedOffersList;
