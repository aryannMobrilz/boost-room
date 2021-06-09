import styled from '@emotion/styled';
import { Typography } from 'antd';

export const Container = styled.div`
  padding-bottom: 200px;
`;

export const Letter = styled(Typography.Title)`
  margin: 20px auto 0 0 !important;
  font-size: 43px;
  font-weight: bold;
  color: var(--light-blue);
  text-transform: uppercase;
`;
