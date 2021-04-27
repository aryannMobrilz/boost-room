import { FC, ReactNode } from 'react';

import { Tabs as ATabs } from 'antd';
import { AntTabs } from './Tabs.style';

export interface TabsProps {
  tabs: Record<string, any>[];
  content: ReactNode[];
}

const Tabs: FC<TabsProps> = ({ tabs, content }) => {
  return (
    <AntTabs defaultActiveKey={tabs[0].key}>
      {tabs.map(({ tab, key }, i) => (
        <ATabs.TabPane tab={tab} key={key}>
          {content[i]}
        </ATabs.TabPane>
      ))}
    </AntTabs>
  );
};

export default Tabs;
