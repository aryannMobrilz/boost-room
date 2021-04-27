import { FC, SetStateAction, Dispatch } from 'react';

import { Menu, Item } from './TopNavigation.style';

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
        <Item key={key}>{label}</Item>
      ))}
    </Menu>
  );
};

export default TopNavigation;
