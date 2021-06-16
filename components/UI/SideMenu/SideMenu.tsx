import { useState, useMemo, FC } from 'react';
import { Menu } from 'antd';

import { Title, Divider } from './SideMenu.style';

export type MainMenu = {
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
  openKeys?: string[];
  selectedKeys?: string[];
  onOpenChange?: (openKey: string) => void;
  onSelect?: (selectKeys: Record<string, any>) => any;
  onClick?: () => any;
  onChange?: (value: any) => any;
}

const SideMenu: FC<SideMenuProps> = ({
  title,
  menu,
  defaultSelectedKeys,
  defaultOpenKeys,
  onOpenChange,
  onSelect,
  onClick
}) => {
  const [openKeys, setOpenKeys] = useState<string[]>(['popular']);

  useMemo(() => {
    if (onOpenChange) {
      onOpenChange(openKeys[0]);
    }
  }, [openKeys]);

  const onOpenChangeHandler = (keys: Record<string, any>) => {
    if (keys.length > 1) {
      setOpenKeys(keys.slice(-1));
    } else {
      setOpenKeys(keys as string[]);
    }
  };

  return (
    <>
      <Title>{title}</Title>
      <Divider />
      <Menu
        onClick={onClick}
        defaultSelectedKeys={defaultSelectedKeys}
        defaultOpenKeys={defaultOpenKeys}
        openKeys={openKeys}
        onOpenChange={onOpenChangeHandler}
        onSelect={onSelect}
        mode="inline">
        {menu.map(({ key, title, submenu }) =>
          submenu?.length > 0 ? (
            <Menu.SubMenu key={key} title={title}>
              {submenu.map(({ key, name }) => (
                <Menu.Item key={key}>{name}</Menu.Item>
              ))}
            </Menu.SubMenu>
          ) : (
            <Menu.SubMenu key={key} title={title} />
          )
        )}
      </Menu>
    </>
  );
};

export default SideMenu;
