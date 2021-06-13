import { FC } from 'react';

import { Col } from 'antd';
import { SideMenu } from '@/components/UI';

import { boostingServiceCategories } from './schemas';

const BoostingService: FC = () => {
  return (
    <>
      <Col span={5}>
        <SideMenu title="Choose your category" menu={Object.create(boostingServiceCategories)} />
      </Col>
      <Col push={1} span={18}>
        Menu
      </Col>
    </>
  );
};

export default BoostingService;
