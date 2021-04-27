import styled from '@emotion/styled';
import { Row, Typography } from 'antd';

export const Container = styled(Row)`
  padding: 35px 50px;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px var(--border-primary);
  background-color: var(--white);
`;

export const Title = styled(Typography.Text)`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-secondary);
`;

export const Subtitle = styled(Typography.Text)`
  display: block;
  padding-top: 14px;
  font-size: 30px;
  font-weight: 600;
  color: var(--text-tertiary);
`;
