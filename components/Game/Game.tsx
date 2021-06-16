import { useState, useMemo, FC } from 'react';
import { useRouter } from 'next/router';

import { Col } from 'antd';
import { CommonContainer } from '@/components/layout/containers';
import { TopNavigation, Service } from '@/components/UI';

import { gameServicesMenu, boostingServiceCategories, coachingServiceCategories } from './schemas';

const Game: FC = () => {
  const router = useRouter();

  const [service, setService] = useState<string>('boosting');

  useMemo(() => {
    if (router.query?.service) {
      router.push(
        {
          pathname: router.pathname,
          query: {
            ...router.query,
            service
          }
        },
        undefined,
        { shallow: true }
      );
    }
  }, [service]);

  const tab = (key: string) => {
    switch (key) {
      case 'boosting':
        return <Service categories={boostingServiceCategories} products={products} />;
      case 'coaching':
        return <Service categories={coachingServiceCategories} products={products} />;
      case 'items':
        return <div>ITEMS</div>;
      case 'game-coins':
        return <div>GAME COINS</div>;
      case 'accounts':
        return <div>ACCOUNTS</div>;
      default:
        return null;
    }
  };

  return (
    <>
      <Col span={24}>
        <TopNavigation items={gameServicesMenu} current={service} onChange={setService} />
        <CommonContainer justify="start">{tab(service)}</CommonContainer>
      </Col>
    </>
  );
};

export default Game;

const products = [
  {
    title: 'Product 1',
    description:
      'Sed diam nonumy eirmodat vero eos et accusam et justo komodaver ed diam nonumy eirmodat',
    price: '45.20',
    discount: '30.20'
  },
  {
    title: 'Product 2',
    description:
      'Sed diam nonumy eirmodat vero eos et accusam et justo komodaver ed diam nonumy eirmodat',
    price: '45.20',
    discount: '30.20'
  },
  {
    title: 'Product 2',
    description:
      'Sed diam nonumy eirmodat vero eos et accusam et justo komodaver ed diam nonumy eirmodat',
    price: '45.20',
    discount: '30.20'
  }
];
