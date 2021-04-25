import styled from '@emotion/styled';
import { Menu as AntMenu } from 'antd';

export const Menu = styled(AntMenu)`
  border-radius: 5px;
  font-size: 16px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px var(--border-primary);
  background-color: var(--white);
`;

export const Item = styled(AntMenu.Item)`
  padding: 30px !important;
`;
