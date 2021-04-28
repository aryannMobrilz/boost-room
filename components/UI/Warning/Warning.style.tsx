import styled from '@emotion/styled';
import { Typography } from 'antd';

export const Container = styled.div`
  display: flex;
  align-items: baseline;
  padding: 15px;
  border-radius: 3px;
  margin-bottom: 30px;
  background-color: var(--background-quaternary);
`;

export const Text = styled(Typography.Paragraph)`
  margin: 0 0 0 12px !important;
  font-weight: 500;
  color: var(--white);
`;
