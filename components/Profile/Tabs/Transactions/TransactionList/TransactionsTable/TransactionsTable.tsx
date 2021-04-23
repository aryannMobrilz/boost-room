import { FC } from 'react';
import moment from 'moment';

import { Space } from 'antd';
import { StatusTag } from '@/components/UI';
import {
  Container,
  Table,
  Date,
  Time,
  Order,
  OrderNum,
  ViewOrder,
  RefundInfo,
  Button,
  Amount
} from './TransactionsTables.style';

const columns = [
  {
    title: 'Date',
    dataIndex: 'datetime',
    render(datetime: string) {
      return (
        <>
          <Date>{moment(datetime).format('MMM M YYYY')}</Date>
          <Time>{moment(datetime).format('hh:mm A')}</Time>
        </>
      );
    }
  },
  {
    title: 'For',
    dataIndex: 'for',
    render({ id, status }: Record<string, any>) {
      return (
        <>
          <StatusTag status={status.type} title={status.name} />
          <Order>
            OrderID: <OrderNum>{id}</OrderNum> (<ViewOrder>View order</ViewOrder>)
          </Order>
          {status.type == 'refundCompleted' && (
            <Container>
              <RefundInfo>
                <Space size={10} wrap>
                  Please confirm your refund is successfully completed
                  <Button type="primary" size="small">
                    Confirm
                  </Button>
                  <Button size="small">Confirm</Button>
                </Space>
              </RefundInfo>
            </Container>
          )}
        </>
      );
    }
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    render(amount: string) {
      return <Amount>${amount}</Amount>;
    }
  }
];

const data = [
  {
    key: '1',
    datetime: '2015-12-26T10:58:51',
    for: { status: { type: 'purchased', name: 'Purchase successful' }, id: '89989889' },
    amount: '89'
  },
  {
    key: '2',
    datetime: '2015-03-20T04:58:51',
    for: { status: { type: 'refundPending', name: 'Purchase successful' }, id: '89989889' },
    amount: '89'
  },
  {
    key: '3',
    datetime: '2015-12-26T02:58:51',
    for: { status: { type: 'refundCompleted', name: 'Purchase successful' }, id: '89989889' },
    amount: '98'
  }
];

const TransactionsTable: FC = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        total: 200
      }}
    />
  );
};

export default TransactionsTable;
