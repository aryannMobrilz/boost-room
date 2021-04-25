import { FC } from 'react';

import { Tabs } from '@/components/UI';
import Active from './Active/Active';
import SubmittedOffers from './SubmittedOffers/SubmittedOffers';

import { buyerRequestLobbyTabs } from './schemas';

const BoostingSettings: FC = () => {
  return (
    <Tabs
      tabs={buyerRequestLobbyTabs}
      content={[<Active key={Math.random()} />, <SubmittedOffers key={Math.random()} />]}
    />
  );
};

export default BoostingSettings;
