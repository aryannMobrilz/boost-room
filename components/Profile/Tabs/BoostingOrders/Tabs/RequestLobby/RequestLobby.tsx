import { FC } from 'react';

import { Tabs } from '@/components/UI';
import Services from './Services/Services';
import SubmittedRequests from './SubmittedRequests/SubmittedRequests';

import { buyerRequestLobbyTabs } from './schemas';

const RequestLobby: FC = () => {
  return (
    <Tabs
      tabs={buyerRequestLobbyTabs}
      content={[<Services key={Math.random()} />, <SubmittedRequests key={Math.random()} />]}
    />
  );
};

export default RequestLobby;
