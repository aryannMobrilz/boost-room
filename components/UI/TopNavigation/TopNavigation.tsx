import { useState, FC, ReactText, useMemo } from 'react';
import { Menu } from 'antd';

export interface TopNavigationProps {
  items: Record<string, string>[];
  onChange: (current: ReactText) => void;
}

const TopNavigation: FC<TopNavigationProps> = ({ items, onChange }) => {
  const [current, setCurrent] = useState<ReactText>('mail');

  useMemo(() => onChange(current), [current, onChange]);

  return (
    <Menu onClick={(e) => setCurrent(e.key)} selectedKeys={[current as string]} mode="horizontal">
      {items.map(({ key, label }) => (
        <Menu.Item key={key}>{label}</Menu.Item>
      ))}
    </Menu>
  );
};

export default TopNavigation;
