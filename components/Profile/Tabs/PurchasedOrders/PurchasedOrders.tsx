import { FC } from 'react';

import { Col } from 'antd';
import { Tabs } from '@/components/UI';
import RegularOrders from './RegularOrders/RegularOrders';
import CustomOrders from './CustomOrders/CustomOrders';
import { TabTitle, OrdersCount } from './PurchasedOrders.style';

import { buyerPurchasedOrdersTabs } from './schemas';

export interface PurchasedOrdersProps {
  orders: number;
}

const PurchasedOrders: FC<PurchasedOrdersProps> = ({ orders }) => {
  return (
    <>
      <Col span={24}>
        <TabTitle>Purchased Orders</TabTitle>
        <OrdersCount>Orders: {orders}</OrdersCount>
      </Col>
      <Col span={24}>
        <Tabs
          tabs={buyerPurchasedOrdersTabs}
          content={[<RegularOrders key={Math.random()} />, <CustomOrders key={Math.random()} />]}
        />
      </Col>
    </>
  );
};

export default PurchasedOrders;
