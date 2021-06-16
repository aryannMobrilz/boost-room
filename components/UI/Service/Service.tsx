import { FC, useState } from 'react';
import { mapToObject } from '@/utils/helper';

import { Col } from 'antd';
import { SideMenu } from '@/components/UI';

export interface ServiceProps {
  categories: Record<string, any>;
}

const Service: FC<ServiceProps> = ({ categories }) => {
  // always first category - 'popular'
  const [category, setCategory] = useState<string>('');

  const tab = (key: string) => {
    switch (key) {
      case 'popular':
        return <div>Popular services</div>;
      case 'power-leveling':
        return <div>Power leveling</div>;
      case 'pve-raid':
        return <div>PVE / Raid</div>;
      case 'pvp':
        return <div>PVP</div>;
      case 'mounts':
        return <div>MOunts</div>;
      case 'gear-boost':
        return <div>Gear boost</div>;
      default:
        return null;
    }
  };

  return (
    <>
      <Col span={5}>
        <SideMenu
          title="Choose your category"
          menu={mapToObject(categories)}
          onOpenChange={(category) => setCategory(category)}
          onSelect={(defaultOpenKeys) => console.log('defaultOpenKeys', defaultOpenKeys)}
        />
      </Col>
      <Col push={1} span={18}>
        {tab(category)}
      </Col>
    </>
  );
};

export default Service;
