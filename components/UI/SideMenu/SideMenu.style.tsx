import styled from '@emotion/styled';
import { Typography, Divider as AntDivider } from 'antd';

export const Title = styled(Typography.Title)`
  margin-bottom: 0 !important;
  font-size: 20px !important;
  font-weight: bold !important;
  color: var(--text-tertiary);
`;

export const Divider = styled(AntDivider)`
  margin: 10px 0;
  background-color: var(--outline-secondary);
`;
