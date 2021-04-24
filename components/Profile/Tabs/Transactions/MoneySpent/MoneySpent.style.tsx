import styled from '@emotion/styled';
import { Row, Typography } from 'antd';

export const Container = styled(Row)`
  background-color: var(--white);
  padding: 30px;
`;

export const Title = styled(Typography.Text)`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-secondary);
`;

export const Subtitle = styled(Typography.Text)`
  display: block;
  font-size: 30px;
  font-weight: 600;
  color: var(--text-tertiary);
`;
