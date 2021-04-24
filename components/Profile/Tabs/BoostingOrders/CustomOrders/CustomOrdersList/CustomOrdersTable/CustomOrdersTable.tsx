import { useState, FC } from 'react';
import moment from 'moment';

import { Row, Col } from 'antd';
import { PurchasePreview } from '@/components/UI';
import { Table, OrderKey, Info, Button } from './CustomOrdersTable.style';

const columns = ({ purchasePreview }: Record<string, any>) => [
  {
    title: 'Order info',
    dataIndex: 'order',
    render({ id, game, date, seller, booster, price }: Record<string, any>) {
      return (
        <>
          <OrderKey>
            Order ID: <Info>{id}</Info>
          </OrderKey>
          <OrderKey>
            Game: <Info>{game}</Info>
          </OrderKey>
          <OrderKey>
            Order date: <Info>{moment(date).format('MMM M YYYY')}</Info>
          </OrderKey>
          <OrderKey>
            Seller: <Info color="sky-blue">{seller}</Info>
          </OrderKey>
          <OrderKey>
            Booster: <Info color="sky-blue">{booster}</Info>
          </OrderKey>
          <OrderKey>
            Price: <Info color="light-green">{price}</Info>
          </OrderKey>
        </>
      );
    }
  },
  {
    title: 'Offer',
    dataIndex: 'offer',
    render({ info }: Record<string, any>) {
      return (
        <>
          <Row>
            <Col span={16}>
              <Info>{info}</Info>
              <Button>Order Info</Button>
            </Col>
            <Col span={8} push={2}>
              <Button color="sky-blue">Accept</Button>
              <Button color="red">Decline</Button>
            </Col>
          </Row>

          <PurchasePreview
            details={[
              {
                title: 'Product',
                id: '#7213321',
                game: 'World of Warcraft',
                service: 'Boosting',
                product: 'Castel Narhria Heroic',
                offer: 'Castle Nathria 10/10 Heroic /PersonalLoot / Play Together With Boosters',
                seller: 'Boostroom'
              },
              {
                title: 'Offer Details',
                region: 'Europe',
                difficult: 'Self play',
                faction: 'Alliance',
                rid: '9/10 Bosses Boost Run'
              },
              { title: 'Billing Information' },
              { title: 'Payment method' }
            ]}
            onChange={purchasePreview.onChange}
          />
        </>
      );
    }
  }
];

const data = [
  {
    key: '1',
    order: {
      id: '320492',
      game: 'World of Warcraft',
      date: '2015-12-26T02:58:51',
      seller: 'BOOSTROOM',
      booster: '/',
      price: '$22.02'
    },
    offer: {
      status: 'finding',
      info:
        'Castle Nathria 10/10 Heroic /Personal Loot / Play Together With Castle Nathria 10/10 Heroic /Personal Loot'
    }
  },
  {
    key: '2',
    order: {
      id: '380492',
      game: 'PUBG',
      date: '2020-12-26T02:58:51',
      seller: 'BOOSTROOM',
      booster: '/',
      price: '$123.02'
    },
    offer: {
      status: 'preparing',
      info:
        'Castle Nathria 10/10 Heroic /Personal Loot / Play Together With Castle Nathria 10/10 Heroic /Personal Loot'
    }
  },
  {
    key: '3',
    order: {
      id: '920492',
      game: 'League of Legends',
      date: '2020-8-26T02:58:51',
      seller: 'BOOSTROOM',
      booster: '/',
      price: '$230.02'
    },
    offer: {
      status: 'started',
      info:
        'Castle Nathria 10/10 Heroic /Personal Loot / Play Together With Castle Nathria 10/10 Heroic /Personal Loot'
    }
  },
  {
    key: '4',
    order: {
      id: '920492',
      game: 'League of Legends',
      date: '2020-8-26T02:58:51',
      seller: 'BOOSTROOM',
      booster: '/',
      price: '$230.02'
    },
    offer: {
      status: 'finished',
      info:
        'Castle Nathria 10/10 Heroic /Personal Loot / Play Together With Castle Nathria 10/10 Heroic /Personal Loot'
    }
  },
  {
    key: '5',
    order: {
      id: '920492',
      game: 'League of Legends',
      date: '2020-8-26T02:58:51',
      seller: 'BOOSTROOM',
      booster: '/',
      price: '$230.02'
    },
    offer: {
      status: 'completed',
      info:
        'Castle Nathria 10/10 Heroic /Personal Loot / Play Together With Castle Nathria 10/10 Heroic /Personal Loot'
    }
  },
  {
    key: '6',
    order: {
      id: '920492',
      game: 'League of Legends',
      date: '2020-8-26T02:58:51',
      seller: 'BOOSTROOM',
      booster: '/',
      price: '$230.02'
    },
    offer: {
      status: 'canceled',
      info:
        'Castle Nathria 10/10 Heroic /Personal Loot / Play Together With Castle Nathria 10/10 Heroic /Personal Loot'
    }
  }
];

const CustomOrdersTable: FC = () => {
  const [isPurchasePreview, setIsPurchasePreview] = useState<boolean>(false);

  const settings = {
    purchasePreview: {
      isPurchasePreview,
      setIsPurchasePreview
    }
  };

  return (
    <Table
      columns={columns(settings)}
      dataSource={data}
      pagination={{
        total: 200
      }}
    />
  );
};

export default CustomOrdersTable;
