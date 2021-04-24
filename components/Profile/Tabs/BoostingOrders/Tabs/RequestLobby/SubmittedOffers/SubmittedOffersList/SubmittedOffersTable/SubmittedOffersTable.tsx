import { FC } from 'react';
import moment from 'moment';

import { Row, Col } from 'antd';
import { PurchasePreview } from '@/components/UI';
import { Table, OrderKey, Info, Button } from './SubmittedOffersTable.style';

const columns = () => [
  {
    title: 'Order info',
    dataIndex: 'order',
    render({ game, date, seller, service }: Record<string, any>) {
      return (
        <>
          <OrderKey>
            Game: <Info>{game}</Info>
          </OrderKey>
          <OrderKey>
            Service: <Info>{service}</Info>
          </OrderKey>
          <OrderKey>
            Date: <Info>{moment(date).format('MMM M YYYY')}</Info>
          </OrderKey>
          <OrderKey>
            BY: <Info color="sky-blue">{seller}</Info>
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
            </Col>
            <Col span={8} push={2}>
              <Button color="red">Cancel offer</Button>
              <Button color="sky-blue">Edit offer</Button>
            </Col>
            <Col span={24}>
              <Button>Order Info</Button>
              <Button>Your offer</Button>
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
            // onChange={purchasePreview.onChange}
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
      game: 'World of Warcraft',
      date: '2015-12-26T02:58:51',
      seller: 'BOOSTROOM',
      service: 'Boosting'
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
      game: 'PUBG',
      date: '2020-12-26T02:58:51',
      seller: 'BOOSTROOM',
      service: 'Boosting'
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
      game: 'League of Legends',
      date: '2020-8-26T02:58:51',
      seller: 'BOOSTROOM',
      service: 'Boosting'
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
      game: 'League of Legends',
      date: '2020-8-26T02:58:51',
      seller: 'BOOSTROOM',
      service: 'Boosting'
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
      game: 'League of Legends',
      date: '2020-8-26T02:58:51',
      seller: 'BOOSTROOM',
      service: 'Boosting'
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
      game: 'League of Legends',
      date: '2020-8-26T02:58:51',
      seller: 'BOOSTROOM',
      service: 'Boosting'
    },
    offer: {
      status: 'canceled',
      info:
        'Castle Nathria 10/10 Heroic /Personal Loot / Play Together With Castle Nathria 10/10 Heroic /Personal Loot'
    }
  }
];

const SubmittedOffersTable: FC = () => {
  // const [isPurchasePreview, setIsPurchasePreview] = useState<boolean>(false);
  //
  // const settings = {
  //   purchasePreview: {
  //     isPurchasePreview,
  //     setIsPurchasePreview
  //   }
  // };

  return (
    <Table
      columns={columns()}
      dataSource={data}
      pagination={{
        total: 200
      }}
    />
  );
};

export default SubmittedOffersTable;
