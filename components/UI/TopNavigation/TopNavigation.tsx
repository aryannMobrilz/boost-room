import { FC, SetStateAction, Dispatch } from 'react';

import { Menu } from 'antd';

export interface TopNavigationProps {
  items: Record<string, string>[];
  current: string;
  onChange: Dispatch<SetStateAction<string>>;
}

const TopNavigation: FC<TopNavigationProps> = ({ items, current, onChange }) => {
  return (
    <Menu
      onClick={(e) => onChange(e.key as string)}
      selectedKeys={[current as string]}
      mode="horizontal">
      {items.map(({ key, label }) => (
        <Menu.Item key={key}>{label}</Menu.Item>
      ))}
    </Menu>
  );
};

export default TopNavigation;
