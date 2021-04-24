import styled from '@emotion/styled';
import { Button, Typography } from 'antd';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin-bottom: 20px;
  border: solid 1px var(--border-primary);
  background-color: var(--background-primary);
`;

export const Subtitle = styled(Typography.Text)`
  color: var(--text-secondary);
  padding-bottom: 20px;
  font-weight: 600;
`;

export const ComplaintButton = styled(Button)`
  width: 130px;
  margin-top: 20px;
  color: var(--white);
  font-weight: bold;
  background-color: var(--background-tertiary);
`;

export const CancelButton = styled(Button)`
  width: 130px;
  margin-top: 20px;
  color: var(--white);
  font-weight: bold;
  background-color: var(--red);
`;
