import styled from '@emotion/styled';
import { Menu as AntMenu, Button as AntButton } from 'antd';

export const Menu = styled(AntMenu)`
  .ant-dropdown-menu {
    border-radius: 3px;
    background-color: red !important;
    border: solid 1px var(--border-primary) !important;
  }
`;

export const Button = styled(AntButton)`
  height: auto;
  max-width: 50px;
  border-radius: 3px;
  border: solid 1px var(--border-primary);
`;
