import { useState, FC } from 'react';

import { Col, Typography } from 'antd';
import { TopNavigation } from '@/components/UI';
import { RequestLobby } from './Tabs';

import { buyerBoostingMenu } from './schemas';

const BoostingOrders: FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('transactions');

  const tab = (key: string) => {
    switch (key) {
      case 'new-orders':
        return null;
      case 'accepted-orders':
        return null;
      case 'request-lobby':
        return <RequestLobby />;
      case 'boosting-settings':
        return null;
      default:
        return null;
    }
  };

  return (
    <>
      <Col span={15}>
        <Typography.Title level={2}>Boosting Orders</Typography.Title>
      </Col>
      <Col span={15}>
        <TopNavigation items={buyerBoostingMenu} current={currentTab} onChange={setCurrentTab} />
      </Col>
      <Col span={15}>{tab(currentTab)}</Col>
    </>
  );
};

export default BoostingOrders;
