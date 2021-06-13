import { useState, FC } from 'react';
import { useRouter } from 'next/router';

import { Col } from 'antd';
import { CommonContainer } from '@/components/layout/containers';
import { TopNavigation } from '@/components/UI';
import { BoostingService, CoachingService } from './Tabs';

import { gameServicesMenu } from './schemas';

const Game: FC = () => {
  const router = useRouter();

  const { category } = router.query;

  console.log(router.query, category);

  const [currentTab, setCurrentTab] = useState<string>('profile');

  const tab = (key: string) => {
    switch (key) {
      case 'boosting':
        return <BoostingService />;
      case 'coaching':
        return <CoachingService />;
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
        <TopNavigation items={gameServicesMenu} current={currentTab} onChange={setCurrentTab} />
        <CommonContainer justify="start">{tab(currentTab)}</CommonContainer>
      </Col>
    </>
  );
};

export default Game;
