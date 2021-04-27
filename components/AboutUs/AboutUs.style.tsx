import styled from '@emotion/styled';
import { Typography } from 'antd';

export const Title = styled(Typography.Title)`
  font-size: 40px !important;
  font-weight: bold !important;
  color: var(--text-tertiary) !important;
  margin: 0 0 5px 0 !important;
`;

export const Signature = styled(Typography.Text)`
  display: block;
  font-size: 28px;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--text-tertiary);
`;
