import { Row, Card as AntCard, Typography } from 'antd';
import styled from '@emotion/styled';

export const Container = styled(Row)`
  width: 100%;
  min-height: 600px;
  margin-top: 160px;
`;

export const Card = styled(AntCard)`
  height: 100%;
  border: none;
  padding: 80px 50px;
`;

export const Paragraph = styled(Typography.Paragraph)`
  font-size: 18px;
  font-weight: 500;
`;
