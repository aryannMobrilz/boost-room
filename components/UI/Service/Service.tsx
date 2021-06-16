import { FC, useState } from 'react';
import { mapToObject } from '@/utils/helper';

import { Col } from 'antd';
import { SideMenu, Products } from '@/components/UI';

export interface ServiceProps {
  categories: Record<string, any>;
  products: Record<string, any>[];
}

const Service: FC<ServiceProps> = ({ categories, products }) => {
  // always first category - 'popular'
  const [category, setCategory] = useState<string>('');

  const tab = (key: string) => {
    switch (key) {
      case 'popular':
        return (
          <Products
            isSearchable
            title="Popular On Marketplace"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
            products={products}
          />
        );
      case 'power-leveling':
        return (
          <Products
            title="Power leveling"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "
            products={products}
          />
        );
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
          onOpenChange={(category: string) => setCategory(category)}
          // onSelect={(defaultOpenKeys) => console.log('defaultOpenKeys', defaultOpenKeys)}
        />
      </Col>
      <Col push={1} span={18}>
        {tab(category)}
      </Col>
    </>
  );
};

export default Service;
