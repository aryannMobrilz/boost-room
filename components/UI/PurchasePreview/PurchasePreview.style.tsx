import styled from '@emotion/styled';
import { Divider, Typography } from 'antd';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin-bottom: 20px;
  border: solid 1px var(--border-primary);
  background-color: var(--background-primary);
`;

export const Detail = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Name = styled(Typography.Text)`
  font-weight: 600;
  color: var(--text-tertiary);
`;

export const Value = styled(Typography.Text)`
  font-weight: 500;
  color: var(--text-tertiary);
`;

export const NewLine = styled(Divider)`
  margin: 15px 0;
`;
