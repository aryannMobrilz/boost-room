import { FC } from 'react';
import { Menu } from 'antd';

import { Title, Divider } from './SideMenu.style';

type MainMenu = {
  key: string;
  title: string;
  submenu: SubMenu[];
};

type SubMenu = {
  key: string;
  name: string;
};

export interface SideMenuProps {
  title: string;
  menu: MainMenu[];
  defaultSelectedKeys?: string[];
  defaultOpenKeys?: string[];
  onClick?: () => any;
}

const SideMenu: FC<SideMenuProps> = ({
  title,
  menu,
  defaultSelectedKeys,
  defaultOpenKeys,
  onClick
}) => {
  return (
    <>
      <Title>{title}</Title>
      <Divider />
      <Menu
        onClick={onClick}
        defaultSelectedKeys={defaultSelectedKeys}
        defaultOpenKeys={defaultOpenKeys}
        mode="inline">
        {menu.map(({ key, title, submenu }) =>
          submenu?.length > 0 ? (
            <Menu.SubMenu key={key} title={title}>
              {submenu.map(({ key, name }) => (
                <Menu.Item key={key}>{name}</Menu.Item>
              ))}
            </Menu.SubMenu>
          ) : (
            <Menu.Item key={key}>{title}</Menu.Item>
          )
        )}
      </Menu>
    </>
  );
};

export default SideMenu;
