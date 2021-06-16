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
        return <Service categories={boostingServiceCategories} />;
      case 'coaching':
        return <Service categories={coachingServiceCategories} />;
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
