import { FC } from 'react';

import { Col, Typography } from 'antd';
import { Tabs } from '@/components/UI';
import RegularOrders from './RegularOrders/RegularOrders';
import CustomOrders from './CustomOrders/CustomOrders';

import { buyerPurchasedOrdersTabs } from './schemas';

const PurchasedOrders: FC = () => {
  return (
    <>
      <Col span={15}>
        <Typography.Title level={2}>Purchased Orders</Typography.Title>
      </Col>
      <Col span={15}>
        <Tabs
          tabs={buyerPurchasedOrdersTabs}
          content={[<RegularOrders key={Math.random()} />, <CustomOrders key={Math.random()} />]}
        />
      </Col>
    </>
  );
};

export default PurchasedOrders;
