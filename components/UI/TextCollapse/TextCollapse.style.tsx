import styled from '@emotion/styled';
import { Collapse as AntCollapse } from 'antd';

import { mediaQuery } from '@/utils/style';

export const Collapse = styled(AntCollapse)`
  background-color: transparent;
  border: 0;
  //box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.15);
  .ant-collapse-item {
    border: 0;
  }

  .ant-collapse-content {
    background-color: var(--background-quaternary);
    padding: 0 14px 15px 14px;
    font-size: 12px;
    margin-top: -20px;
    font-weight: 500;
    border-radius: 0 0 5px 5px;
    margin-bottom: 15px;
    color: var(--background-primary);
    border: none;

    ${mediaQuery.sm`
    font-size: 13px;
    padding: 0 20px 15px 20px;
  `}

    ${mediaQuery.md`
    font-size: 14px;
    padding: 0 30px 16px 30px;
  `}

    ${mediaQuery.lg`
    font-size: 15px;
    padding: 0 40px 18px 40px;
  `}

    ${mediaQuery.xl`
    font-size: 16px;
    padding: 0 50px 20px 50px;
    margin-top: -20px;
  `}
  }

  .ant-collapse-content-box {
    padding: 5px 0 0;
    font-size: 12px;

    ${mediaQuery.sm`
    font-size: 13px;
  `}

    ${mediaQuery.md`
    font-size: 14px;
  `}

    ${mediaQuery.lg`
    font-size: 15px;
  `}

    ${mediaQuery.xl`
    font-size: 16px;
  `}
  }
`;

export const Panel = styled(AntCollapse.Panel)`
  .ant-collapse-header {
    display: flex;
    padding: 15px 14px !important;
    align-items: center;
    margin-bottom: 15px;
    justify-content: space-between;
    flex-direction: row-reverse;
    font-size: 14px;
    font-weight: 600;
    border-radius: 5px;
    color: var(--sky-blue) !important;
    background-color: var(--background-quaternary);
    //box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.15);

    ${mediaQuery.sm`
    font-size: 15px;
    padding: 15px 20px !important;
  `}

    ${mediaQuery.md`
    font-size: 16px;
    padding: 16px 30px !important;
  `}

    ${mediaQuery.lg`
    font-size: 17px;
    padding: 18px 40px !important;
  `}

    ${mediaQuery.xl`
    font-size: 18px;
    padding: 20px 50px !important;
  `}

    div {
      margin-left: auto !important;
    }
  }
`;
