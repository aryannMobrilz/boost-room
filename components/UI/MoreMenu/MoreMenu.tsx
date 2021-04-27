import { FC } from 'react';

import Image from 'next/image';
import { Dropdown, Menu as AntMenu } from 'antd';
import { Menu, Button } from './MoreMenu.style';

export interface MoreMenuProps {
  items: Record<string, any>[];
}

const MoreMenu: FC<MoreMenuProps> = ({ items }) => {
  const menu = (menuItems: Record<string, any>[]) => {
    return (
      <Menu>
        {menuItems.map(({ label, onClick }: Record<string, any>) => (
          <AntMenu.Item key={Math.random()} onClick={onClick}>
            {label}
          </AntMenu.Item>
        ))}
      </Menu>
    );
  };

  return (
    <Dropdown placement="bottomLeft" overlay={menu(items)}>
      <Button>
        <Image src="/assets/icons/more.svg" width={20} height={7} />
      </Button>
    </Dropdown>
  );
};

export default MoreMenu;
