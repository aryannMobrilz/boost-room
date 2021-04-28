import styled from '@emotion/styled';

import { Collapse as AntCollapse } from 'antd';

export const Collapse = styled(AntCollapse)`
  background-color: transparent;
  border: 0;
  //box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.15);
  .ant-collapse-item {
    border: 0;
  }

  .ant-collapse-content {
    background-color: var(--background-quaternary);
    padding: 0 50px 30px 50px;
    font-size: 16px;
    margin-top: -20px;
    font-weight: 500;
    border-radius: 0 0 5px 5px;
    margin-bottom: 15px;
    color: var(--background-primary);
    border: none;
  }

  .ant-collapse-content-box {
    padding: 0;
  }
`;

export const Panel = styled(AntCollapse.Panel)`
  .ant-collapse-header {
    display: flex;
    padding: 20px 50px !important;
    align-items: center;
    margin-bottom: 15px;
    justify-content: space-between;
    flex-direction: row-reverse;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    color: var(--sky-blue) !important;
    background-color: var(--background-quaternary);
    //box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.15);

    div {
      margin-left: auto !important;
    }
  }
`;
