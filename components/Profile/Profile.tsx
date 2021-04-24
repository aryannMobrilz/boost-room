import { useState, FC } from 'react';

import { Col } from 'antd';
import { TopNavigation } from '@/components/UI';
import { ManageProfile, PurchasedOrders, BoostingOrders, Transactions } from './Tabs';
import { Container } from './Profile.style';

import { buyerProfileMenu } from './schemas';

const Profile: FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('transactions');

  const tab = (key: string) => {
    switch (key) {
      case 'profile':
        return <ManageProfile />;
      case 'purchased-orders':
        return <PurchasedOrders />;
      case 'boosting-orders':
        return <BoostingOrders />;
      case 'transactions':
        return <Transactions />;
      default:
        return null;
    }
  };

  return (
    <Container justify="center" gutter={[0, 30]}>
      <Col span={15}>
        <TopNavigation items={buyerProfileMenu} current={currentTab} onChange={setCurrentTab} />
      </Col>
      {tab(currentTab)}
    </Container>
  );
};

export default Profile;
