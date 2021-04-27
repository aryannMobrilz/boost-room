import styled from '@emotion/styled';
import { Typography } from 'antd';

export const TabTitle = styled(Typography.Title)`
  margin: 0 !important;
  font-size: 32px !important;
  font-weight: bold !important;
  color: var(--text-tertiary) !important;
`;

export const OrdersCount = styled(Typography.Text)`
  display: block;
  font-size: 16px;
  margin-top: 6px;
  font-weight: 500;
  color: var(--text-tertiary);
`;
