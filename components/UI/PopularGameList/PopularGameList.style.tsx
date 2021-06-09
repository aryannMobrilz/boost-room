import styled from '@emotion/styled';
import { Row, Divider as AntDivider, Typography } from 'antd';

export const Container = styled(Row)`
  padding: 45px 0 20px 0;
`;

export const Title = styled(Typography.Title)`
  font-size: 24px !important;
  font-weight: bold !important;
  margin-bottom: 10px !important;
  color: var(--text-tertiary) !important;
`;

export const Divider = styled(AntDivider)`
  background-color: var(--border-secondary);
  margin: 0;
  opacity: 0.3;
`;

export const Game = styled.span`
  display: block;
  text-align: center;
  padding: 11px 40px;
  color: var(--text-tertiary);
  background-color: var(--dark-white);
  border: solid 1px var(--outline-secondary);
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
`;
