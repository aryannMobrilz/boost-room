import { FC, ReactNode } from 'react';

import { Tabs as AntTabs } from 'antd';

export interface TabsProps {
  tabs: Record<string, any>[];
  content: ReactNode[];
}

const Tabs: FC<TabsProps> = ({ tabs, content }) => {
  return (
    <AntTabs defaultActiveKey={tabs[0].key}>
      {tabs.map(({ tab, key }, i) => (
        <AntTabs.TabPane tab={tab} key={key}>
          {content[i]}
        </AntTabs.TabPane>
      ))}
    </AntTabs>
  );
};

export default Tabs;
