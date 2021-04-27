import styled from '@emotion/styled';
import { Tabs } from 'antd';

export const AntTabs = styled(Tabs)`
  .ant-tabs-tab {
    background-color: var(--white);
    color: var(--background-tertiary);
    font-weight: 600;
    padding: 9px 20px;
    border-radius: 22px;
  }

  .ant-tabs-tab + .ant-tabs-tab {
    margin-left: 15px;
  }

  .ant-tabs-tab-active {
    background-color: var(--sky-blue);
  }

  .ant-tabs-tab-active div {
    color: var(--white) !important;
  }
`;
