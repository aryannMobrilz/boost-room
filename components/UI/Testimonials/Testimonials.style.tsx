import styled from '@emotion/styled';
import { Typography } from 'antd';

export const Title = styled(Typography.Title)`
  font-size: 40px !important;
  margin: 0 !important;
  font-weight: bold !important;
  text-align: center;
  color: var(--text-tertiary) !important;
`;

export const Info = styled(Typography.Text)`
  display: block;
  margin: 11px auto 50px auto;
  max-width: 600px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: var(--text-tertiary);
`;
