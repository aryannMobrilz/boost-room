import { FC } from 'react';

import { Col } from 'antd';
import { SideMenu } from '@/components/UI';

import { coachingServiceCategories } from './schemas';

const CoachingService: FC = () => {
  return (
    <>
      <Col span={5}>
        <SideMenu title="Choose your category" menu={Object.create(coachingServiceCategories)} />
      </Col>
      <Col push={1} span={18}>
        Menu
      </Col>
    </>
  );
};

export default CoachingService;
