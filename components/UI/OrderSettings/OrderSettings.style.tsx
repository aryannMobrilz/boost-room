import styled from '@emotion/styled';
import { Button, Input, Typography } from 'antd';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin-bottom: 20px;
  border: solid 1px var(--border-primary);
  background-color: var(--background-primary);
  border-radius: 4px;
`;

export const Title = styled(Typography.Title)`
  font-size: 14px !important;
  font-weight: bold !important;
  color: var(--text-tertiary);
  margin-bottom: 5px !important;
`;

export const Subtitle = styled(Typography.Text)`
  color: var(--text-secondary);
  padding-bottom: 20px;
  font-weight: 600;
`;

export const TextArea = styled(Input.TextArea)`
  padding: 15px;
  border-radius: 3px;
  border-color: var(--border-primary);
  background-color: var(--white);

  &:hover {
    border-color: var(--sky-blue);
  }
`;

export const ComplaintButton = styled(Button)`
  width: 130px;
  border: none;
  margin-top: 20px;
  border-radius: 4px;
  color: var(--white);
  font-weight: bold;
  background-color: var(--background-tertiary);

  &:hover,
  &:focus {
    color: var(--white);
    background-color: var(--sky-blue);
    box-shadow: none;
    border-color: transparent !important;
  }
`;

export const CancelButton = styled(Button)`
  width: 130px;
  margin-top: 20px;
  border-radius: 4px;
  color: var(--white);
  font-weight: bold;
  background-color: var(--red);

  &:hover,
  &:focus {
    color: var(--red);
    background-color: transparent;
    box-shadow: none;
    border-color: var(--red);
  }
`;
