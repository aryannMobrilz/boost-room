import { useState, FC } from 'react';

import { Col } from 'antd';
import { TopNavigation } from '@/components/UI';
import { ManageProfile, PurchasedOrders, BoostingOrders, Transactions } from './Tabs';

import { buyerProfileMenu } from './schemas';

const Profile: FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('profile');

  const tab = (key: string) => {
    switch (key) {
      case 'profile':
        return <ManageProfile />;
      case 'purchased-orders':
        return <PurchasedOrders orders={4} />;
      case 'boosting-orders':
        return <BoostingOrders />;
      case 'transactions':
        return <Transactions />;
      default:
        return null;
    }
  };

  return (
    <>
      <Col span={24}>
        <TopNavigation items={buyerProfileMenu} current={currentTab} onChange={setCurrentTab} />
      </Col>
      {tab(currentTab)}
    </>
  );
};

export default Profile;
