import styled from '@emotion/styled';
import { Menu as AntMenu } from 'antd';

export const Menu = styled(AntMenu)`
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px var(--border-primary);
  background-color: var(--white);

  .ant-menu-item-selected {
    color: var(--light-blue) !important;
    border-color: var(--light-blue) !important;
  }

  .ant-menu-item-active {
    color: var(--light-blue) !important;
    border-color: var(--light-blue) !important;
  }
`;

export const Item = styled(AntMenu.Item)`
  padding: 30px 0 !important;
  margin: 0 25px !important;
  font-size: 14px;
  color: var(--background-tertiary);
  font-weight: 600;
  line-height: 1;
`;
